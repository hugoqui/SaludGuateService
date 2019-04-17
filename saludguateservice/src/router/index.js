import Vue from 'vue'
import Router from 'vue-router'

import Navbar from '@/components/Navbar'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes:[
        {path: '/', component: Home, name: 'Home'}
    ]
})