<style scoped lang="less">
	.mask {
        width: 100%;
        height: 100%;
        position:fixed;
        top: 0;
        background:rgba(0,0,0,0.7);
        z-index: 999;
	}
	.content {
		overflow: hidden;
	    border-radius: 0.2rem;
	    width: 5.24rem;
	    position: fixed;
	    z-index: 9999;
	    top: 40%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    -webkit-transform: translate(-50%, -50%);
	    background: url(../images/bg.png) no-repeat;
	    background-size: cover;
	    padding: .7rem .2rem .2rem;
	    box-sizing: border-box;
	}
	.content .imgBox {
		margin: 0 auto;
		width: 2.7rem;
		height: 2.7rem;
	}
	.content .imgBox img {
		width: 100%;
		height: 100%;
	}
	.content .msgBox {
		height: 2.5rem;
	}
	.content .msgBox span {
		font-weight: bold;
	}
	.content .msgBox span:first-child{
		margin-top: 1.2rem;
		
	}
	.content .content_ft {
		border-radius: .1rem;
		background-color: rgb(244,211,58);
	}
	.content .content_ft a {
		font-weight: bold;
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		display: block;
	}
	.dialogBox {
		padding: .7rem .3rem;
	}
	.list_hd {
		background:url(../images/tips_03.png) no-repeat;
		background-position: top;
		background-size: 100%;
		width: 2.5rem;
		padding-top: .9rem;
		margin: 0 auto;
	}
	.list_hd .item {
		border-radius: .2rem;
	}
	.list_hd .item .item_hd {
		width: 2.5rem;
		height: 2.5rem;
		padding: .5rem;
		background-color: #fff;
		box-sizing: border-box;
		border-top-left-radius:.2rem ;
		border-top-right-radius:.2rem ;
	}
	.list_hd .item .item_hd img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.list_hd .item .item_bd {
		border-top: 1px solid #000;
		background-color: rgb(255,229,58);
		border-bottom-left-radius:.2rem ;
		border-bottom-right-radius:.2rem ;
		height: 1.1rem;
	}
	.list_bd {
		flex-wrap: wrap;
		margin-top: .5rem;
		
	}
	.list_bd .item {
		margin: .1rem;
	}
	.list_bd .item .item_bd {
		justify-content: space-around;
		width: 1.1rem;
	}
	.list_bd .item .item_hd {
		width: 1.1rem;
		height: 1.1rem;
		padding: .25rem;
		background-color: #fff;
		box-sizing: border-box;
		border-top-left-radius:.1rem ;
		border-top-right-radius:.1rem ;
	}
	.list_bd .item .item_hd img {
		width: .6rem;
		height: .6rem;
	}
	.list_bd .item .item_bd {
		border-top: 1px solid #000;
		background-color: rgb(255,229,58);
		border-bottom-left-radius:.1rem ;
		border-bottom-right-radius:.1rem ;
		height: .6rem;
	}
	.list_ft {
		margin-top: 1rem;
	}
	.list_ft a {
		border: 1px solid #fff;
		border-radius: .2rem;
		height: .8rem;
		display: block;
		width: 3rem;
		text-align: center;
		line-height: .8rem;
		color: #fff;
	}
</style>
<template>
	<div class="mask" transition="bounce">
		<template v-if="types==1">
			<div class="content flex-box flex-direction_column">
				<div class="content_bd">
					<div class="imgBox">
						<img v-bind:src="rewardMsg1.img">
					</div>
					<div class="msgBox flex-box flex-item flex-direction_column flex-align_center">
						<span class="fontSize_34 color1">恭喜抽中{{rewardMsg1.goods_name}}</span>
						<span class="fontSize_30 color8">价值{{rewardMsg1.market_value}}</span>
					</div>
				</div>
				<div class="content_ft fontSize_34 color9">
					<a class="button" @click="getReward">点击领取</a>
				</div>
			</div>
		</template>
		<template v-if="types==2">
			<div class="dialogBox">
				<div class="list_hd flex-box flex-justify_center">
					<div class="item">
						<div class="item_hd">
							<img :src="giveGoods.img">
						</div>
						<div class="item_bd flex-box flex-align_center flex-justify_center flex-direction_column">
							<span class="fontSize_24 color10">{{giveGoods.goods_name}}</span>
							<span class="fontSize_20 color3">{{giveGoods.market_value}}</span>
						</div>
					</div>
				</div>
				<div class="list_bd flex-box flex-justify_center">
					<div class="item" v-for="i in tenGoods">
						<div class="item_hd">
							<img :src="i.img">
						</div>
						<div class="item_bd flex-box flex-align_center flex-justify_center flex-direction_column">
							<span class="fontSize_16 color10">{{i.goods_name}}</span>
							<span class="fontSize_14 color3">{{i.market_value}}</span>
						</div>
					</div>
				</div>
				<div class="list_ft flex-box flex-justify_center flex-align_center">
					<a class="button fontSize_34" @click="getReward">点击领取</a>
				</div>
			</div>
		</template>
	</div>
</template>
<script>


    export default {
    	props: {
    		giveGoods: {
    			default:null
    		},
    		tenGoods: {
    			default:null
    		},
			rewardMsg1: {
				default:null
			},
			types: {
				type:Number,
				default:null
			}
		},
        filters: {

        },
        directives: {

        },
        data () {
            return {
				show:true,
				giveGoods:[],
				tenGoods:[],
            }
        },
        ready () {
        	
        },
        beforeDestroy () {

        },
        methods: {
           	getReward:function(){
           		this.show=false;
           		this.$dispatch('showing',this.show);
           	}
        }
    }
</script>
