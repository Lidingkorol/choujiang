<style scoped lang="less">
	.header {
		background:url(../images/bg_04_02.png) no-repeat;
		background-size: cover;
		height: 4rem;
	} 
	.header .imgBox {
		padding: .5rem .5rem .3rem;
	}
	.header .imgBox img {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
	}
	.header>span {
		text-align: center;
		color: #fff;
	}
	.tab {
		padding: .3rem 0;
		margin-top: .2rem;
	}
	.tab a {
		text-align: center;
		border-right: 1px solid #fff;
		color: #fff;
	}
	.tab a:last-child {
		border-right: none;
	}
</style>
<template>
	<div class="container">
		<div class="header flex-box flex-direction_column">
			<div class="imgBox flex-box flex-justify_center">
				<img :src="person.logo">
			</div>
			<span class="fontSize_40">{{person.nickname}}</span>
			<div class="tab flex-box flex-align_center">
				<a class="flex-item fontSize_34">中奖记录</a>
				<a class="flex-item fontSize_34">我的好友</a>
				<a class="flex-item fontSize_34">查看物流</a>
			</div>
		</div>
		<div class="tabList">
			<div class="list1">
				<div class="item" v-for="i in awardList">
					<img :src="i.logo">
					<p>{{i.name}}</p>
					<span>价值{{i.price}}元</span>
					<span v-if="isSend">(已发货)</span>
					<span v-if="isSend">(未发货)</span>
				</div>
				<template v-if="!!length">
		            <no-more v-el:get-more>
		                <p v-if="hasMore">加载更多...</p>
		                <p v-if="!hasMore">客官，到底啦</p>
		            </no-more>
		        </template>
			</div>
		</div>
	</div>
</template>
<script>
    import Config from '../config/config'
    import User from '../config/user'
    import Request from '../config/request'
    import { Toast,Indicator,MessageBox } from 'mint-ui';
    export default {
        filters: {

        },
        directives: {

        },
        data () {
            return {
            	person:{},
            	page:1,
                loading: false,
                hasMore:true,
                fun:'',
                awardList:[]
            }
        },
        created() {
            this.$dispatch('isLoading',true)
        },
        ready () {
            this.$dispatch('isLoading',false);
            this.getinfo();
            this.getUserAward();
            window.addEventListener('scroll', this.throttle(this.loadMore,250,500));
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.fun);
        },
        methods: {
           	async getinfo () {
        		let res = await Request.post(Config.apiDomain + '/index/getUserInfo',{data:{token:User.token}});
	            if(res.status == 200&& !!res.data) {
	            	this.person=Object.assign({},res.data);		
	            };
        	},
        	async getUserAward () {
        		let res = await Request.post(Config.apiDomain + '/index/getUserAward',{data:{token:User.token,p:this.page}});
	            if(res.status == 200&& !!res.data) {
	            	console.log(res.data)	
	            };
        	}, 
        	async loadMore(){
                var pos = this.$els.getMore.getBoundingClientRect();
                if (this.hasMore &&
                    ((pos.top> 0 && window.innerHeight - pos.top> 0) ||
                    (pos.top <= 0 && pos.bottom >= 0))) {
                    await this.getData();
                }
            },
            async getData(){
                if (this.loading) {
                    return false;
                }
                this.loading = true;
                let res = await Request.post(Config.apiDomain+'/Ptproduct/getUserAward',{data:{p:this.page,token:User.token}});
                if(res.status == 200 && !!res) {
                    this.page++;
                    this.listData.push(...res.data);

                    let len = 0;
                    if(res) len += res.data.length;
                    this.length+= len

                    if(res.data.length<6) this.hasMore=false;
                }else if(this.page==0){
                    this.hasMore=false;
                }
                this.loading=false;
            },
            throttle(func, wait, mustRun) {
                // 节流
                let timeout,
                    startTime = new Date();

                return this.fun = function() {
                    let context = this,
                        args = arguments,
                        curTime = new Date();

                    clearTimeout(timeout);
                    if(curTime - startTime >= mustRun){
                        func.apply(context,args);
                        startTime = curTime;
                    }else{
                        timeout = setTimeout(func, wait);
                    }
                };
            },
        }
    }
</script>
