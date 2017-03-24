/**
 * Created by lcfevr on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/game': {
        component (resolve) {
            require(['./views/game.vue'], resolve);
        }
    },
    '/UserAddress': {
        component (resolve) {
            require(['./views/UserAddress.vue'], resolve);
        }
    },
    '/recharge': {
        component (resolve) {
            require(['./views/recharge.vue'], resolve);
        }
    },
    '/center': {
        component (resolve) {
            require(['./views/center.vue'], resolve);
        }
    }
};
export default routers;