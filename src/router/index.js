import Vue from 'vue'
import Router from 'vue-router'
const Layout = resolve => require(['@/components/layouts/Layout'], resolve);
const neatHome = resolve => require(['@/components/pages/neatHome'], resolve)
const neatStake = resolve => require(['@/components/pages/neatStake'], resolve)
const dashboard = resolve => require(['@/components/pages/dashboard'], resolve)
const terms = resolve => require(['@/components/pages/terms'], resolve)
const create = resolve => require(['@/components/pages/create'], resolve)
const createpk = resolve => require(['@/components/pages/createPK'], resolve)
// const neatSend = resolve => require(['@/components/pages/neatSend'], resolve)

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',

        component: Layout,
        children: [{
            path: '',
            name: 'neatHome',
            component: neatHome,
            meta: []
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
        },
        {
            path: '/create',
            name: 'create',
            component: create
        },
        {
            path: '/createpk',
            name: 'createpk',
            component: createpk
        },
        {
            path: '/neatStake',
            name: 'neatStake',
            component: neatStake,
        },
        {
            path: '/terms',
            name: 'terms',
            component: terms,
        },
        ]
    }]
})

export default router
