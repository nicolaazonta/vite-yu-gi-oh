<script>

import { store } from '../store'
    export default {
        name: 'SiteHeader',   
        data(){
            return{
                store
            }
        }     
    }
</script>

<template>
    <header>
        <h1 class="text-center py-4">yu-gi-oh api</h1>
    </header>
</template>


<style lang="scss">
body{
    background-color: rgba(16, 16, 16, 0.723);
}
header{
    color: gold;
    background-color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-transform: uppercase;
}



</style>