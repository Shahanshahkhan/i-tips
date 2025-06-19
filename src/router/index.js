import { createRouter, createWebHistory } from "vue-router";
import header from "@/components/header.vue";
import side from "@/components/side.vue";
import intro from "@/components/gettingStarted/intro.vue";
import quickstart from "@/components/gettingStarted/quickstart.vue";
import footer from "@/components/footer.vue";
import ConditionRend from "@/components/Essential/condition-rend.vue";
import ListRend from "@/components/Essential/list-rend.vue";
import Registration from "@/components/Component-In_depth/registration.vue";
import Props from "@/components/Component-In_depth/props.vue";
import CompVModel from "@/components/Component-In_depth/comp-v-model.vue";
import FallthroughAtt from "@/components/Component-In_depth/fallthrough-att.vue";
import Slots from "@/components/Component-In_depth/slots.vue";
import CreateAnApp from "@/components/Essential/create-an-app.vue";
import ReactivityFund from "@/components/Essential/reactivity-fund.vue";
import ComputedProp from "@/components/Essential/computed-prop.vue";
import ClassAndStyle from "@/components/Essential/class-and-style.vue";
import Events from "@/components/Component-In_depth/events.vue";
import Intro from "@/components/gettingStarted/intro.vue";
import Feedback from "@/components/select/feedback.vue";
import Contact from "@/components/select/contact.vue";



const routes = [
    {
        path: '/side',
        children: [

            {
                path: 'intro',
                component: Intro
            },
            {
                path: 'quickstart',
                component: quickstart
            },
            {
                path: 'create-an-app',
                component: CreateAnApp
            },
            {
                path: 'reactivity-fund',

                component: ReactivityFund
            },
            {
                path: 'computed-prop',
                component: ComputedProp
            },
            {
                path: 'class-and-style',
                component: ClassAndStyle
            },
            {
                path: 'condition-rend',
                component: ConditionRend
            },
            {
                path: 'list-rend',
                component: ListRend
            },
            {
                path: 'registration',

                component: Registration
            },
            {
                path: 'props',
                component: Props
            },
            {
                path: 'events',
                component: Events
            },
            {
                path: 'comp-v-model',
                component: CompVModel
            },
            {
                path: 'fallthrough-att',
                component: FallthroughAtt
            },
            {
                path: 'slots',
                component: Slots
            },
            {
                path: 'feedback',
                component: Feedback
            },
            {
                path: 'contact',
                component: Contact
            }
        ]
        
    },
    // {
    //     path:'/feedback/',
    //     name: 'feedback',
    //     component: Feedback
    // },
    {
        path: '/footer/',
        name: 'footer',
        component: footer
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router