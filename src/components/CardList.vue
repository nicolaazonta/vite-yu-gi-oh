
<script>
import CardItem from './CardItem.vue'
import { store } from '../store'
export default {
    name: 'CardList',
    components: { CardItem },
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g3">
            <CardItem :card="card" v-for="card in store.card"/>
                
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>