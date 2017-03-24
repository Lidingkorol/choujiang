<style scoped>

    .page-container {
        padding-bottom: 1.18rem;
        background: #f2f2f2;
        min-height: 100vh;
        box-sizing: border-box;
    }
    .item {
        background-color: #fff;
        position: relative;
        line-height: normal;
        color: #666;
        padding-top: .08rem;
    }
    .item .name {
        padding-left: .3rem;
    }
    .item .mobile, .item .name {
        display: inline-block;
        padding-top: .3rem;
    }
    .item .name:after {
        content: ",";
    }
    .item .mobile {
        padding-left: .04rem;
        color: #666;
    }
    .item .detail {
        padding: .16rem .4rem .2rem .3rem;
        line-height: 1.66;
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
    }
    .item .editBar {
        /*background: hsla(0,0%,94%,.4);*/
        border-top: 1px solid hsla(0,0%,94%,.8);
        border-bottom: 1px solid hsla(0,0%,94%,.8);
        height: .8rem;
        position: relative;
        z-index: 9;
    }
    .m-user-link {
        position: absolute;
        display: inline-block;
        line-height: .8rem;
        left: .3rem;
        z-index: 999;
    }
    .setDefaultStyle::before {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKAQMAAABPSUAnAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAMNJREFUSMft07EJwzAURVGHFC41gkfxZolG0ygawaUKoZ/uPtBLkS6Q6JUXgw/feFtb+5U9rOyR55SizOnwdEad09NTWLp5uiuJZW9Mb1M2abh0uLS7tLn0+kD6VdZejZWasY5urHPAEgiWUoaFMcPiqQKLVGGRLlhcpcHidh0WFx6w9B1g6SwZFscrsOBXWILBEgyWYLAEgyUYLMFgCQZLMFiCwRIMlmCwBIMlGCxgsDRj2V/NB59hsIDBEmxsa2v/sxfI+MvZrscvGQAAAABJRU5ErkJggg==') center center /cover #ee2e3a;
        border: 0.02rem solid transparent;

    }

    .setDefault:before {
        content: "";
        display: inline-block;
        height: .2rem;
        width: .2rem;
        border-radius: 50%;
        border: 1px solid #666;
        margin-right: .16rem;
    }
    .setDefaultStyle:before {
        border: 1px solid transparent;
    }
    .item .editBar .edit {
        position: absolute;
        display: inline-block;
        line-height: .8rem;
        right: 1.6rem;
        z-index: 10;
    }
    .edit span {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzJYIvAAAAFHRSTlMAYKAQMM/AQIDv4PBQkLBvII/QX27bwtEAAAOXSURBVHja7dzRcrIwEIbhhUASYhTU7/6v9UecqZMqQfszJruz71FnygFPp9smTYE0TdM0TdM0TdM0TdM0TdO0ejJu9KMzxLyrxT17JcZ1PR7ZjrjWIK0hnp0BCRLTAhIkpgckSLoASJC4AZAgaQBIkJwBEZIWECFpABmSABmSBpAhOUKIxEKI5AIhEgshEg8hEgcpEstcYq7ejxMRObCWNANunW8fcpb83Lw1rCUOP/WsJScIkQBCJJAigRTJRYrk6aZDx1TS4lfDh5JhonIZF91uEkulMi3mBr+XxFGZTI977U6SI5Xo4QCO+0gCfb3UAUz7SKhAiQMjrUqaWVLxkKQOeFqV4CapFrI4Esgukom+UM6BhrYkVc7Ik+NgaA/Jib5c/+JG95CM9N3ajON/JAdD2b7lyEvOs6Su5W/GkZW0s6SmNWPG8X+Si6FchRyfSw4d5SrhyEv4OdYk/BxrkvKOZtOxLbGGGiaOybkuI+lnCQdHZzEXYl5SvyMOj8/mJLU7GvwU35SEyh0IlJXEgKXWUK7yDmBj4in65cQxWw0OOMpLCtR96kghi6SGP492w18cmCgr2Z7xMg6f/5I/SzxtVMbRbq462s8gtTgQc9dsQ6pxNJtXRcpUtSO9LlCmyh1EbaEFltnBkXY8YOnyXUf/xg0au+VIc7cmylXG0aPWU+a9HWa0c6Ohd6vU0QyPg6t3qtbx4bccA8dbx1EsHCVO0d9xdGHbUXoL0r3jGLYdxfdS7T6O8pvCYRdH8RNCcrs4ip8QEvldHBVs0k87OIqfdP56Zu1AzzVcHCb/g6YBE0cy656xI5n1yNiRzHrH2EEBjzg7klln7CC3uvAeWTnIr62OIi9HMusumR1ejtVZ75g5DB5dktnh5SC39r+SjpeD/NoCZeLlWJ91sqwcyaybdBty4OQwSDYjryUHV72DXHYzEv2tSPU7VmY9jYMjmfXI2JHMevATW4dBWn/l6SCH3wXH0UEezzUMHXTCKwk/BwW8KrJzGLwsGGaOdNbzvxqneK7XQR6vG9I11/VshwqeyMl02njQ0bix7Wt5sihXwEojTdGfQk1PSOUyWCsMbF508GrWOb6wYckLcdBJiIOCEIcR4iAnxPHHWQ/VOf4y64e2xjfBB3yUPTY1KuYkGJYkGJYkGJasAMPSUYBhqRNguNcKMNyLrbWWuUHTNE3TNE3TNE3TNE3TNE3TNE3TNE3TNFH9A5FT1rkGZfUuAAAAAElFTkSuQmCC') center center / cover;
    }
    .edit span, .remove span {
        left: -.44rem;
        top: .2rem;
        position: absolute;
        content: "";
        display: inline-block;
        height: .4rem;
        width: .4rem;
        opacity: .8;
    }

    .item .editBar .remove {
        position: absolute;
        display: inline-block;
        line-height: .8rem;
        right: .3rem;
        z-index: 10;
    }
    .remove span {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAQlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACO4fbyAAAAFXRSTlMAgEB/EMAwoCDw7+BwYM/QsK9Qj5DUhmxLAAACi0lEQVR42u3d2Y7qMBRE0UqwnXlgqP//1Rs1am5aamJCcDi0ar0SYbb8QgadQERERERERERERP6Q/Ox7RvT+nMM0d6j5oPrgYFZbc4W6hU3OcyVvclNCz9X6AHNcwyc09vak51N6GJPxSRlMKfm0EpYUfFoBQ0ryb2xJyw062DFybrhkywbOjbCDczmics7BDs5c8IDCZkjOmRMe0HHGzl/6fPXPyhUypxCFKGSZQhRiI6Q78s2OHbZzb8/4SnHYqqAJBTYKNCJgmwuNyLCNpxFeIVcjjSiwTUcjOmzjKppQOWyU04Qcm4WGb9cEvELI3qs1eDtIRERERO4rzw3ZnEvc51pPHu8ecejJpsijaxwcEjrV/FKfcE9XX48Iy5fJji66RkAyoSYjqxS3I9zymXPvYms0SGbkzRi9DNZGvsFH1whIxEVvjpexJ7Ga2DMoLnJ6u9Pdgy6Wypk2tkZARLqQbE1IFlsD3xSiEIUoRCEKUchEIQpRiEIUohCFTBSiEIUoRCEKUchEIQpRiEIUohCFTBSiEIUoRCEKUchEIQpRiEIUohCFTBSiEIUoRCEK+cMhneGQU2wiy8D/SsMhqHjTRsbQZrAc0vHb4JbHrBQwHYLsuyPgV+FaUp1gPAR5UZG+dbijHK8fmw95kEIUohCF7BzSIYl2jxC3w5sECt4MSIZzDgm4mjceyXjOHJHAcZ8XemScO+DlDjtNzw38wZd4qdxzpkJCDX/qi8PLnPs1EyY/aPxkiZQqLjA18tPKllQlIj5k2myLmM+YbeqRXEhYsnjl4hNLHur4gCmt3mEfbmRCVYv95ANTKUrsKh+ZQDVl7M6dLr7h6ww+s/PaCxEREREREREREVnlH8bXa9xU1Uv2AAAAAElFTkSuQmCC') center center / cover;
    }

    .edit span, .remove span {
        left: -.44rem;
        top: .2rem;
        position: absolute;
        content: "";
        display: inline-block;
        height: .4rem;
        width: .4rem;
        opacity: .8;
    }
    .addAddress {
        margin: 0.5rem auto 0 auto;
        display: block;
        text-align: center;
        line-height: .8rem;
        height: .8rem;
        width: 7rem;
        border-radius: .12rem;
        border: 1px solid currentColor;
    }
</style>
<template>
    <div>
        <div class="page-container">
            <div class="m-user-addrList-manage">
                <div class="m-user-addrList">
                    <div class="item" v-for="(k,i) in addrList">
                        <div class="info fontSize_28 color_6"  @click="setDefault(i.id,$index)">
                            <div class="name">
                                {{i.consignee}}
                            </div>
                            <div class="mobile">
                                {{i.phone}}
                            </div>
                            <div class="detail">
                                {{i.province}}{{i.city}}{{i.area}} {{i.address}}
                            </div>
                        </div>

                        <div class="editBar fontSize_26">
                            <div  @click="setDefault(i.id,$index)" :class="['m-user-link', 'setDefault', issDefault==$index?'setDefaultStyle':'']" :style="{color:setDefault==$index?'#ee2e3a':'color:#666;'}">
                                <template v-if="issDefault==$index">
                                    已选择
                                </template>
                                <template v-else>
                                    选择地址
                                </template>
                            </div>
                            <div class="edit" data-show="#addressForm" @click.stop="showAddressPop($event,i)">
                                <span></span>编辑
                            </div>
                            <div class="remove removeAddress" @click.stop="deleteAddress(i.id,$index)">
                                <span></span>删除
                            </div>
                            <input class="delete" type="hidden" name="addressId" />
                        </div>
                        <div class="line"></div>
                    </div>

                    <!--没有收获地址-->
                    <template v-if="addrList.length==0">
                        <div class="nodata">
                            <img class="nodata-img" src="../images/收货地址.png">
                            <p class="fontSize_30 color_8">您还没有收获地址,赶快去添加吧~</p>
                        </div>
                    </template>

                    <!--<template v-else>-->
                        <!--<no-more v-el:get-more>-->
                            <!--<p>客官，到底啦</p>-->
                        <!--</no-more>-->
                    <!--</template>-->

                    <a href="javascript:;" class="addAddress color_1 fontSize_32" id="addAddress" @click="showAddressPop($event)">新增地址</a>
                </div>
            </div>

            <address-pop :status-address="statusAddress" :id="addrId" :province="province" :city="city" :district="district" :name="name" :phone="phone" :address="address"></address-pop>
        </div>
    </div>


</template>
<script>

    import addressPop from '../components/addressPop.vue'
    import noMore from '../components/nomore'
    import { Toast,Indicator,MessageBox } from 'mint-ui';


    import User from '../config/user'
    import Config from '../config/config'
    import Request from '../config/request'

    export default {
        directives: {

        },

        created(){

            this.$dispatch('isLoading',true)

        },

        components:{
            addressPop,
            noMore
        },

        data () {
            return {

                addrId:'',
                province:'',
                city:'',
                district:'',
                address:'',
                phone:'',
                name:'',
                statusAddress:false,
                addrList:[],
                issDefault:-1
            }
        },

        async ready () {

            await this.getAddressList();

            this.$dispatch('isLoading',false)
        },

        beforeDestroy () {

        },

        methods: {

            async getAddressList(){

                let res = await User.getAddress();

                if (res.status == 200) {

                    this.addrList.splice(0,this.addrList.length);

                    if (!!res.data && !!res.data.item && res.data.item.length > 0) {

                        this.addrList.push(...res.data.item)

                    }

                }

            },

            showAddressPop(event,item={}){

                if (!!item.id) {

                    this.addrId = item.id;
                    this.province = item.province;
                    this.city = item.city;
                    this.district = item.area;
                    this.address = item.address;
                    this.name = item.consignee;
                    this.phone = item.phone

                } else {

                    this.addrId = ''
                    this.province = '';
                    this.city = '';
                    this.district = '';
                    this.address = '';
                    this.name = '';
                    this.phone = '';

                }

                this.statusAddress = true;

            },


            async deleteAddress(id,index){
                if (!!id) {

                    let res = await User.delAddress(id);

                    if (res.data.status) {
                        Toast('删除成功');
                        this.addrList.splice(index,1)

                    }

                }

            },

            async setDefault(id,index){
                let nowadd= this.addrList[index]
                let data = {
                    username:nowadd.consignee,
                    mobile: nowadd.phone,
                    address: nowadd.province+nowadd.city+nowadd.area+nowadd.address,
                    qq_num: '',
                    wx_num: '',
                    token:User.token
                }

                let res = await Request.post(Config.apiDomain + '/Ptdetail/addAddress',{data:data})

                if( res.status === 200 || res.status === 1001 ){
                    this.issDefault = index

                    setTimeout(()=>{
                        window.history.go(-1)
                    },200)
                }

                this.getAddressList()
            }

        },
        events:{

            updateAddressList(id){

                this.getAddressList()

            }

        }


    }
</script>
