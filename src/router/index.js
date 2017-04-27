import Vue from 'vue'
import Router from 'vue-router'
import Train from '@/components/train/index'
import Game from '@/components/game/index'
import Effect from '@/components/effect/index'
import Setting from '@/components/setting/index'

import GameInfo from '@/components/game/info'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/train',
            name: 'train',
            component: Train
        },
        {
            path: '/game',
            name: 'game',
            component: Game,
            children: [
                { path: '/game/info', name: 'gameinfo', component: GameInfo }
            ]
        },
        {
            path: '/effect',
            name: 'effect',
            component: Effect
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        }
    ]
})