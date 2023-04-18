
<script>
    export default {
        name: 'CardItem',
        props: {
            card : Object
        }        
    }
</script>

<template>
    <div>
        <div class="col">
            <div class="card">
                <img :src="card.card_images[0].image_url" alt="">
                <p>{{ card.name }}</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

</style>