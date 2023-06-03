<template>
    <div>
        <h1>Home</h1>
        <!-- <p>{{userStore.userData}}</p> -->
        <p>{{userStore.userData?.email}}</p>

    </div>
</template>

<script setup>
import {useUserStore} from '../store/user'
const userStore = useUserStore(); 





// import {useUserStore} from '../store/user';
// const userStore= useUserStore();

// import {onAuthStateChanged} from 'firebase/auth'
// import {auth} from "../firebase.Config"; 

// onAuthStateChanged(auth, (user)=>{ //No es una promesa, quiero pintar la informacion del usuario en el HOME
//     console.log(user)
// })

</script>

