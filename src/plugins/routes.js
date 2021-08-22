import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../components/home.vue'
import productos from '../components/productos.vue'
import contacto from '../components/contacto.vue'
import testimonios from '../components/testimonios.vue'

Vue.use(VueRouter);

const rutas = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: home, name: 'inicio'},
    {path: '/productos', component: productos, name: 'productos'},
    {path: '/contacto', component: contacto, name: 'contacto'},
    {path: '/testimonio', component: testimonios, name: 'testimonio'}
];

export default new VueRouter({
    routes: rutas,
    props:true,
    mode: 'history'
})