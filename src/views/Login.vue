<template>
    <div>
        <h1>Login</h1>
        <!-- <button @click="userStore.registerUser('Motley Crue')">Ingresar</button> -->
        <form @submit.prevent=" handleSubmit"> 
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import {useUserStore} from '../store/user'
    //import {useRouter} from 'vue-router'

    const userStore = useUserStore(); //el userStore va a tener acceso a todos los actions

    //const router = useRouter();

    const email = ref(''); //para vincular, datos reactivos
    const password = ref('');//v-model en VUE es una directiva especial que permite enlazar datos bidireccionalmente entre un componente y un elemento de formulario, como un input, textarea o select.


    const handleSubmit = async() =>{ //handleSubmit, activa nuestro formulario
        if(!email.value || password.value.length < 6){
            return alert('llena los campos')
        }
        await userStore.loginUser(email.value,password.value)
        //router.push('/') //Empuja los registros al Home

        
        // console.log(email.value);
        // console.log(password.value);
        // console.log('procesando formulario')




    }

// import {computed} from 'vue'; //computed.-calculo de algo pero no modifica la raiz
</script>

// import {useUserStore} from '../store/user';
// const userStore = useUserStore();
// const textmayuscula = computed(() =>userStore.userData.toUpperCase());






