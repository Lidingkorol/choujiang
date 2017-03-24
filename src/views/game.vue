<style scoped lang="less">
	.container {
		background-color: rgb(255,229,58);
	}
	.headBox {
		background:url(../images/bg_01.png) no-repeat;
		background-size: 100%;
		height: 15rem;
	}
	.header .h_title {
		padding: 1rem 1rem  .5rem 1rem;
		height: 2rem;
	}
	.header .h_title img {
		width: 100%;
	}
	.header .h_button .center {
		background:url(../images/button.png) no-repeat;
		background-size: 100%;
		width: 2rem;
		height: .7rem;
		border: none;
		outline: none;
		font-weight: bold;
	}
	.header .h_button .recharge {
		background:url(../images/button.png) no-repeat;
		background-size: 100%;
		width: 2rem;
		height: .7rem;
		border: none;
		outline: none;
		margin-left: .5rem;
		font-weight: bold;
	}
	.turnTable .content {
		height: 100%;
	}
	.turnTable .content_hd {
		padding-top: 1.42rem;
		height: 2.4rem;
	}
	.turnTable .content_hd>span {
		height: .65rem;
		line-height: .65rem;
	}
	.turnTable .content_hd .msg {
		margin-top: .3rem;
	}
	.turnTable .content_hd .msg .item {
		height: .5rem;
		color:#fff;
	}
	.turnTable .content_hd .msg span {
		padding: 0 .2rem;
	}
	.turnTable .content_bd{
		background-color: rgb(15,118,209);
		padding: .1rem;
		width: 5.6rem;
		height: 5.6rem;
		margin: 0 auto;
		border-radius: .1rem;
		position: relative;
		
	}
	.goods {
		background-color: rgb(47,47,47);
		padding: .1rem;
		border-radius: .1rem;
	}
	.goods li {
		width: 1.25rem;
		height: 1.25rem;
		box-sizing: border-box;
		margin: .05rem;
	}
	.goods li img {
		width: 1.25rem;
		height: 1.25rem;
		box-sizing: border-box;
		border:2px solid #000;
		border-radius: .1rem;
	}
	.goods li img.active {
		border:2px solid rgb(239,55,55);
	}
	.turnTable .content_bd a img {
		width: 1rem;
		height: 1rem;
		position: absolute;
		top: 2.4rem;
    	left: 2.4rem;
	}
	.turnTable .content_bd a.rotate img {
		-moz-transform: rotateZ(360deg);
	    -ms-transform: rotateZ(360deg);
	    -o-transform: rotateZ(360deg);
	    transform: rotateZ(360deg);
	    -webkit-transform: rotateZ(360deg);
	    transition: all .5s;
	    -webkit-transition: all .5s;
	}
	.bounce-transition {
  		display: inline-block; /* 否则 scale 动画不起作用 */
	}
	.bounce-enter {
	  	animation: bounce-in .5s;
	}
	.bounce-leave {
  		animation: bounce-out .5s;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
	@keyframes bounce-out {
	  0% {
	    transform: scale(1);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(0);
	  }
	}
	.button {
		margin-top: .2rem;
		
	}
	.button .once {
		background:url(../images/button.png) no-repeat;
		background-size: 100%;
		width: 2rem;
		height: .7rem;
		border: none;
		outline: none;
		font-weight: bold;
	}
	.button .more {
		background:url(../images/button.png) no-repeat;
		background-size: 100%;
		width: 2rem;
		height: .7rem;
		border: none;
		outline: none;
		margin-left: .5rem;
		font-weight: bold;
	}
	.msgBox {
		padding: .35rem;
	}
	.msgBox .msgBox_hd {
		background: url(../images/title_03.png) no-repeat;
		background-size: 100%;
		height: 1.5rem;
	}
	.msgBox .msgBox_hd span {
		text-indent: 2.5em;
	}
	.msgBox .msgBox_bd p {
		margin-top: .3rem;
		font-size: .26rem;
		line-height: .4rem;
	}
</style>
<template>
	<div class="container">
		<div class="headBox">
			<div class="header">
				<div class="h_title">
					<img src="../images/title2_03.png">
				</div>
				<div class="h_button flex-box flex-justify_center">
					<button  class="fontSize_34 center" v-link="{path:'/recharge'}">充值中心</button>
					<button  class="fontSize_34 recharge" v-link="{path:'/center'}">个人中心</button>
				</div>
			</div>
			<div class="turnTable">
				<div class="content flex-box flex-direction_column">
					<div class="content_hd flex-box flex-align_center flex-direction_column">
						<span class="fontSize_30 color10">您还有{{num}}次抽奖</span>
						<div class="msg flex-box flex-direction_column flex-align_center">
							<div class="item flex-box flex-align_center fontSize_26">
								<span>xxxxxx</span>抽中了<span>xxxxxxxx</span>
							</div>
							<div class="item flex-box flex-align_center fontSize_26">
								<span>xxxxxx</span>抽中了<span>xxxxxxxx</span>
							</div>
							<div class="item flex-box flex-align_center fontSize_26">
								<span>xxxxxx</span>抽中了<span>xxxxxxxx</span>
							</div>
						</div>
					</div>
					<div class="content_bd">
						<ul class="flex-box flex-wrap goods">
							<li v-for="item in goods" track-by="$index"><img :src="item.img" :class="[lottery.isActive-1==$index? 'active' : '' ]"></li>
						</ul>
						<a class="refresh" @click="randomArr(goods)" :class="{rotate:isRotate}">
							<img src="../images/refresh_03.png">
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="button flex-box flex-justify_center">
			<button @click="playOnce($event)" class="once fontSize_34">抽一次</button>
			<button @click="playMore($event)" class="more fontSize_34">抽十次</button>
		</div>
		<div class="msgBox">
			<div class="msgBox_hd flex-box flex-align_center flex-justify_center">
				<span class="fontSize_34">抽奖规则</span>
			</div>
			<div class="msgBox_bd">
				<p>1、参与"嗨购"获得的商品均包邮，无需额外支付邮费</p>
				<p>2、<b>支付15元</b>可以参与一次"嗨购"，每次必定获得一份价值15元以上的商品，抽10次必定获得一份<b>市场价值128元</b>的商品</p>
				<p>3、成功参与过"嗨购"的用户，分享活动海报到朋友圈，累计有5名微信好友通过扫描海报二维码参与"嗨购"成功，可额外<b>获得一次免费</b>参与"嗨购"的机会</p>
				<p>4、邀请好友一旦发现为同一用户操作，本活动有权撤销奖励及相关订单（同一手机号、同一支付账户、同一收货地址、同一IP或其他合理显示为同一用户的情形，均视为同一用户）。</p>
				<p>5、通过不正当手段（包括但不限于侵犯第三人合法权益、作弊、扰乱系统、实施网络攻击、批量注册、用机器注册）来刷取奖励、稳赚俱乐部有权利撤销奖励及相关订单。</p>
				<p>6、本活动最终解释权归稳赚俱乐部所有。</p>
			</div>
		</div>
		<dia-reward v-show="isShow" transition="bounce" :reward-msg1="rewardMsg1"  :types="types" :give-goods="giveGoods" :ten-goods="tenGoods"></dia-reward>
	</div>
</template>
<script>
    import Config from '../config/config'
    import User from '../config/user'
    import Request from '../config/request'
    import diaReward from '../components/diaReward'
    export default {
        filters: {

        },
        components: {
        	diaReward
        },
        directives: {

        },
        data () {
            return {
	           	goods:[],
	           	rewardMsg1:{},
	           	rewardMsg2:[],
				lottery:{
					isActive:1,     //当前位置的商品
					allGoods:16,	//转盘商品总个数
					timer:null,  	//定时器
					speed:200,		//转动速度
					reward:15,		//中奖的商品位置              
					times:0,		//当前转动次数
					cycle:100,		//基本转动次数
					isPlaying:true	//是否在游戏中
				},
				isShow:false,
				isRotate:false,
				isChanging:false,
				num:null,
				types:null,
				giveGoods:{},
				tenGoods:[],
				list:[]
            }
        },
        created() {
        },
        ready () {
            this.$dispatch('isLoading',false);
            this.loadGoods();
            this.loadData();
            this.loadinfo();
        },
        beforeDestroy () {

        },
        methods: {
        	async loadGoods () {
        		let res = await Request.post(Config.apiDomain + '/index/getGoods',{data:{token:User.token}});
	            if(res.status == 200&& !!res.data) {
	            	this.goods.push(...res.data)		
	            };
        	},
        	async loadData () {
	            let res = await Request.post(Config.apiDomain + '/index/getLuckydraw',{data:{token:User.token}});
	            if(res.status == 200&& !!res.data) {
	            	this.num=res.data;
	            }
        	},
        	async loadinfo () {
	            let res = await Request.post(Config.apiDomain + '/index/getNewinfo',{data:{token:User.token}});
	            if(res.status == 200&& !!res.data) {
	            	this.list.push(...res.data);
	            	console.log(this.list)
	            }
        	},
        	async playOnce (event) {
        		if(!this.lottery.isPlaying) {
        			return false
        		}
        		let res = await Request.post(Config.apiDomain + '/index/luckyDraw',{data:{token:User.token,type:1}});
	            if(res.status == 200&& !!res.data) {
	            	this.rewardMsg1=Object.assign({},res.data);
	            	console.log(this.rewardMsg1)
	            	for(let i=0;i<this.goods.length;i++) {
	            		if(this.goods[i].id==this.rewardMsg1.id) {
	            			this.lottery.reward=i+1;
	            		}
	            	}
	            	this.types=1;
	            	this.num--;
	            	this.roll();
	            }	
        	},
        	async playMore(event) {
        		this.rewardMsg2=[];
        		this.tenGoods=[];
        		this.giveGoods={};
        		if(!this.lottery.isPlaying) {
        			return false
        		}
        		let res = await Request.post(Config.apiDomain + '/index/luckyDraw',{data:{token:User.token,type:2}});
	            if(res.status == 200&& !!res.data) {
	            	
	            	this.rewardMsg2.push(...res.data);
	            	this.types=2;
	            	this.num-=10;
	            	this.giveGoods=Object.assign({},this.rewardMsg2.pop());
	            	this.tenGoods.push(...this.rewardMsg2);
	            	this.roll();
	            }	
        	},
        	roll:function() {
        		this.lottery.isPlaying=false;
        		this.lottery.times++;
        		this.lottery.isActive++;
        		if(this.lottery.cycle<this.lottery.times&&this.lottery.isActive==this.lottery.reward) {
        			this.lottery.speed=200;
        			this.lottery.times=0;
        			clearTimeout(this.lottery.timer);
        			this.lottery.isPlaying=true;
        			this.isShow=true;
        			
        			return false;
        		}
        		if(this.lottery.isActive>this.lottery.allGoods) {
        			this.lottery.isActive=1;
        		}
				this.lottery.speed=0.01*(this.lottery.times-10)*(this.lottery.times-10)+30
				if(this.lottery.speed<0) {
					this.lottery.speed=10;
				}
        		this.lottery.timer=setTimeout(this.roll,this.lottery.speed)
        	},
        	randomArr:function(arr){
        		if(this.isChanging){
        			return false
        		}
        		this.isChanging=true;
        		this.isRotate=true;
        		var that=this;
			    var _arr = [];
			    var length = arr.length;
			    for(var i=0; i<length; i++){
			        var random = Math.random() * arr.length;
			        _arr.push(arr.splice(random, 1)[0]);
			    }
			    this.goods=_arr;
			    setTimeout(function(){
			    	that.isChanging=false;
			    	that.isRotate=false;
			    },1000)
			    console.log(this.goods)
        	}
        },
        events: {
        	'showing':function(value){
        		this.isShow=value;
        	}
        }
    }
</script>


Index/getpush