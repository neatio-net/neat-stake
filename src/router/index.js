import Vue from 'vue'
import Router from 'vue-router'
const Layout = resolve => require(['@/components/layouts/Layout'], resolve);
const neatStaking = resolve => require(['@/components/pages/neatStaking'], resolve)

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',

        component: Layout,
        children: [{
            path: '',
            name: 'neatStaking',
            component: neatStaking,
            meta: []
        },
        ]
    }]
})

export default router
