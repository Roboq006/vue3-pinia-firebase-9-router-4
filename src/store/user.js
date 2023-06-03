//definiendo mi tienda
import {defineStore} from 'pinia';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
 } from "firebase/auth";
import {auth} from "../firebase.Config";
import router from '../router';


export const useUserStore = defineStore('userStore',{ //tenemos que llamar a este metodo que define la tienda
    state: () =>({
        userData:null,
        loadingUser:false,
        loadingSession:false,

        
    }),
    actions: {
        async registerUser(email, password) { //recibe parametros, 
            this.loadingUser = true
            try {
                const {user} = await createUserWithEmailAndPassword(
                    auth, 
                    email, 
                    password
                );
                this.userData = {email:user.email, uid: user.uid}
                router.push('/')
            //destructuracion de const= respuesta x const {user}
                console.log(user);
            }catch(error){
                console.log(error);
            }
            finally{
                this.loadingUser = false;

            }

        },
        async loginUser(email, password){
            this.loadingUser = true
            try{
                const {user} = await signInWithEmailAndPassword(auth, email, password);
                this.userData = {email:user.email, uid: user.uid};
                router.push('/');
            }
            catch(error){
                console.log(error)
            }
            finally{
                this.loadingUser = false;
            }
        },
        async logoutUser(){ //no recibe parametros porque solo estamos cerrando cesion
            try{
                await signOut(auth) //siempre pasar el auth (firebase 9)
                this.userData = null;
                router.push('/login');
                //No manda ninguna respuesta

            }
            catch(error){
                console.log(error);

            }
        },

        currentUser(){
            return new Promise((resolve, reject)=>{ //es una promesa, recibe la respuesta positiva y negativa
                const unsubcribe = onAuthStateChanged(auth, user=>{
                    if(user){
                        this.userData = {email:user.email, uid: user.uid}

                    }else{
                        this.userData = null
                    }
                    resolve(user)
                }, e=>reject(e));
                unsubcribe()
            })
        }
    },

});


    // getters: { //captadores-propiedades computadas
    //     textminuscula(state){
    //         return state.userData.toLowerCase()

    //     },
    // },
    //state:()=>({userData:'ricardoboado@gmail.com'}) o tambien lo puedo poner asi 
    // actions: { //metodo
    //     registerUser(name) {
    //         this.userData = name
    //     },
        
    // }
