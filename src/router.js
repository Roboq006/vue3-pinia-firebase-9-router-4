import { createRouter, createWebHistory } from "vue-router";
import {useUserStore} from './store/user'

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

const requiereAuth = async(to, from, next) =>{
    const userStore  = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
        if(user){
            next();
        } else{
            next('/login');
        }
    userStore.loadingSession = false;
};

//Configurando Rutas
const routes = [
    {path:'/', component:Home, beforeEnter:requiereAuth}, //ruta raiz, activa metodo beforeEnter, antes que entre a ese componente
    {path:'/login', component: Login},
    {path:'/register', component: Register}
    
];

//Incializar el create Router, evita poner el # en las rutas(history para que no aparezca el #)
//Esta configuración permite definir las rutas de tu aplicación Vue y 
// especificar el modo de historial que se utilizará para la navegación.
const router = createRouter({routes,history: createWebHistory()});

export default router;