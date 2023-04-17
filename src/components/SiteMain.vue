<script>
import cardList from './CardList.vue'
export default {
        name: 'SiteMain',
        components: { cardList }
    }
</script>

<template>
    <main>
        
        <div class="searchbox"></div>

        <cardList/>
        
    </main>
</template>


<style lang="scss" scoped>
main{
    background-color: rgba(23, 23, 23, 0.719);
}

</style>