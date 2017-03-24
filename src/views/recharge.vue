<style scoped lang="less">
	.container {
		background: #fff;
	}
	.list {
		padding:.4rem .35rem;
		justify-content: space-around;
	}
	.list span {
		width: 2.08rem;
		height: .8rem;
		text-align: center;
		line-height: .8rem;
		background-color: #eaeaea;
		font-size: .34rem;
		color: #747474;
		margin-top: .2rem;
		border-radius: .4rem;
	}
	.list span.on {
		background-color: #ef4140;
		color: #fff;
	}
	.money {
		height: .8rem;
		margin-top: .5rem;
	}
	.money input {
		text-align: center;
		line-height: .8rem;
	}
	.button {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: .85rem;
		background-color: #fff;
		padding: .3rem;
	}
	.button a {
		background-color: #ef4140;
		color: #fff;
		display: block;
		height: .85rem;
		border-radius: .4rem;
		text-align: center;
		line-height: .85rem;
	}
</style>
<template>
	<div class="container">
		<div class="list flex-box flex-wrap">
			<span v-for="item in items" @click="price($index)" :class="[$index==isChoose ? 'on' : '']">{{item}}</span>
		</div>
<!--		<div class="money flex-box flex-justify_center flex-align_center" v-if="isOthers">
			<input type="number" placeholder="请输入金额" v-model="sprice">
		</div>-->
		<div class="button">
			<a class="fontSize_34" @click="recharge">确定充值</a>
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
            	items:[15,30,60,90,150,300],
            	formData:{
            		price:null
            	},
            	isChoose:0
            }
        },
        created() {
            this.$dispatch('isLoading',true)
        },
        ready () {
            this.$dispatch('isLoading',false);
            this.formData.price=this.items[this.isChoose];
        },
        beforeDestroy () {

        },
        methods: {
            price:function(index){
            	this.isChoose=index;
            	this.formData.price=this.items[this.isChoose]
            },
            recharge:function(){
            	if(this.formData.price=='') {
            		Toast('金额不能为空！')
            		return false;
            	}
            	location.href = Config.apiDomain + '/order/pay?money=' + this.formData.price +'&token='+User.token;
            }
        }
    }
</script>
