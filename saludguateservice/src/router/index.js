import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Inmunocal from '@/components/Inmunocal'
import Kyani from '@/components/Kyani'
import Nutritif from '@/components/Nutritif'

Vue.use(Router)

export default new Router({
    routes:[
        {path: '/', component: Home, name: 'Home'},
        {path: '/inmunocal', component: Inmunocal, name: 'Inmunocal'},
        {path: '/nutritif', component: Nutritif, name: 'Nutrifit'},
        {path: '/kyani', component: Kyani, name: 'Kyani'}
    ]
})