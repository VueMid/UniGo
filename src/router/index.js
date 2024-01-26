import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue';
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/сountries',
            name: 'Countries',
            component: () => import('../pages/CountriesPage/CountriesPage.vue'),
        },
        {
            path: '/services',
            name: 'Services',
            component: () => import('../pages/ServicesPage/ServicesPage.vue'),
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../pages/ContactPage/ContactPage.vue'),
        },
        {
            path: '/about',
            name: 'About us',
            component: () => import('../pages/AboutPage/AboutPage.vue'),
        },
    ]
})
export default router