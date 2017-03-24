## vue-vueRouter-webpack

**简述**：

本项目可以帮你快速搭建一个基于Vue的单页面富应用，目前已将开发环境和生产环境进行单独配置（webpack.dev.config.js和webpack.prod.config.js），当然也可根据需要自行添加灰度配置文件。目前的开发环境文件名使用默认命名（比如1.chunk.js），生产环境使用带hash值的命名（比如1.0891dcfed66cf89e6e98.chunk.js）,可根据自己需要修改,但不建议修改本地环境为带hash的。 入口的html文件由webpack生成，模板在src/template/index.html内,可自行修改。默认已将dist目录、生成的两个index文件加入忽略列表，使用者可根据自己项目来修改。

## 准备

使用前需要确保你安装了最新版的Node.js和npm。

全局安装webpack和webpack-dev-server

    npm install webpack -g
    npm install webpack-dev-server -g

安装成功后，再安装所有依赖
(补充)
/*			需局域安装webpack-dev-server 	
 * 			webpack-dev-server@1.16.2
 */


    npm install
    
## 运行


**开发环境：**

首次运行需要执行init命令生成html入口文件，以后不用再执行

    npm run init
    
然后执行dev，本地环境就可以跑起来了，默认端口是8080

    npm run dev
    
**生产环境：**

直接执行build方法即可编译打包：

    npm run build
    
生产环境默认使用hash模式的路由，开发环境是History模式。直接打开index_prod.html即可访问生产环境。


## Vue的路由和它的组件化

### 组件的构造

Vue的组件可以说是Vue中最神奇也是最难懂的部分了，这部分懂了，vue也就懂了。vue组件的特点是可插拔、独立作用域、观察者模式、完整的生命周期。我们来看一个组件的基本构成：

    Vue.component('child', {
        props: ['msg'],
        template: '<span>{{ msg }}</span>',
        data: function() {
            return {
                title: 'title'
            }
        },
        methods: {
            // ...
        },
        ready: function() {
    
        },
        beforeDestroy: function() {
    
        },
        events: {
            // ...
        }
    });
    
    
一个组件基本跟一个vue实例是类似的，也有自己的methods和data，只不过data是通过一个function来返回了一个对象，具体原因可以查看vue的文档。

props是从父级通过html特性传递来的数据，它可以是字符串、数字、布尔、数组、对象，默认是单向的，也可以设置为双向绑定的。props里的参数可以直接通过像this.msg这种方式调用，这与data的里的数据是一样的。

template是这个组件使用的html片段，可以直接是字符串，也可以像'#child'这样标识一个dom节点。

ready和beforeDestroy是两个常用的生命周期，ready是在组件准备好时的一个回调，一般在这里我们可以使用获取数据、实例化第三方组件、绑定事件等，beforeDestroy正好相反，是在组件即将被销毁时触发回调，在这里我们销毁自定义的实例、解绑自定义事件、定时器等。

    
### 如何使用组件

组件一般是由它的父级来显示调用的，比如上面的child组件，我们就可以在父级中使用：

    <child :msg="msg1"></child>
    <child :msg.sync="msg2"></child>

    new Vue({
        data: {
            msg1: 'Hello，world',
            msg2: '你好，world'
        }
    })
    
上例使用了两次child组件，使用props传递了一个参数msg，并且第二个组件的参数是双向绑定的，在双向绑定后，无论修改父级还是子元素的msg，双方的数据和view都会响应到，而单向绑定后，子组件修改是不会影响到父级的。

在渲染完，<child>的内容就会替换为组件template内的字符串了，虽然使用的是同一个child组件，但是两次使用的作用域是独立的，这也是为什么在组件内data要使用function来返回一个对象的原因。


### 父子组件间的通信

在Vue.js中，父子之间的通信主要通过事件来完成，这种就是我们熟悉的观察者模式（或叫订阅-发布模式），很多框架也都使用了这种设计模式，比如Angular。父组件通过Vue内置的$broadcast()向下广播事件和传递数据，子组件通过$dispatch()向上派发事件和传递数据，双方都可以在events对象内接收自定义事件，并且处理各自的业务逻辑。

区分多个相同组件可以使用v-ref

    <child :msg="msg1" v-ref:child1></child>
    <child :msg.sync="msg2" v-ref:child2></child>
    
    new Vue({
        data: {
            msg1: 'Hello，world',
            msg2: '你好，world'
        },
        methods: {
            sendData: function() {
                this.$refs.child1.$emit('set-data', {});
                this.$refs.child2.$emit('set-data', {});
            }
        }
    })
    
    
通过$refs就可以给指定的组件触发事件了，事实上，通过$refs是可以获取到子组件的整个实例的。


### 内容分发slot

有时候我们编写一个可复用的组件时，比如一个confirm确认框,标题、关闭按钮是统一的，但是中间正文的内容（包括样式）是想自定义的，这时候就会用到Vue组件的slot来分发内容。比如子组件的template的内容为：

    <div>
        <h1>提示</h1>
        <slot name="content"></slot>
        <span>确定</span>
        <span>取消</span>
    </div>
    
父组件这样调用子组件：

    <confirm>
        <p slot="content">这里是提示</p>
    </confirm>
    
最终渲染完的内容为：

    <div>
        <h1>提示</h1>
        <p>这里是提示</p>
        <span>确定</span>
        <span>取消</span>
    </div>
    
    
## 路由、组件和组件化

我们先看一下src/main.js文件。

    import Vue from 'vue';
    import VueRouter from 'vue-router';
    import App from 'components/app.vue';
    import Env from './config/env';
    
    Vue.use(VueRouter);
    
    // 开启debug模式
    Vue.config.debug = true;
    
    // 路由配置
    var router = new VueRouter({
        history: Env != 'production'
    });
    
    router.map({
        '/index': {
            name: 'index',
            component: function (resolve) {
                require(['./routers/index.vue'], resolve);
            }
        }
    });
    
    router.beforeEach(function () {
        window.scrollTo(0, 0);
    });
    
    router.afterEach(function (transition) {
    
    });
    
    router.redirect({
        '*': "/index"
    });
    router.start(App, '#app');
    
    
这些vue-router的实例方法，我们可以通过调用这些实例方法使我们在跳转路由的时候可以做一些操作，具体见vue-router官方文档

我们可以设置路由跳转

    <a v-link="{path: '/index'}">首页</a>
    <!--或者其他标签页可以-->
    <p v-link="{path: '/index'}">首页</p>
    
如果是在js里跳转，可以这样：

    module.exports = {
        data: function() {
            return {
    
            }
        },
        methods: {
            go: function() {
                console.log(this.$route);
                console.log(this.$router);
                this.$router.go('/index');
            }
        }
    }

上面的$route打印的是一些路由携带过来的参数 比如params,query等等，$router则是路由的一个实例，这两个在子组件中使用会自动绑定到当前模板,使用this调用




## Vue的组件间通信方式该如何取舍

对于单个数据的传递，比如一个字符串或是一个num值，我们直接使用props传递就可以了，但有的时候我们需要传递不是单个的字段，而是一整个对象，这种情况我们就需要使用订阅发布的方式传递，也就是观察者模式，而对于中大型项目中的组件间通信我们还继续使用事件发布与订阅的话维护起来会非常的困难，这个时候我们需要引入vuex，这是一个类似中间件的东西，我们可以把需要交互的数据简单粗暴的放在一个公用的store里，从而免除组件间通过事件层层传输数据的麻烦。




## 关于前后端交互

vue是一个数据驱动型框架，我们可以不需要直接操作dom，理想状态下我们是不需要借助jQuery来开发项目的，关于ajax的问题我们可以有fetch,vue-source等等多种方案来代替jquery封装的ajax。

## 补充

vue中同级组件是无法通信的，必须先emit数据到父组件，然后再broadcast到子组件通过自定义事件接受数据
