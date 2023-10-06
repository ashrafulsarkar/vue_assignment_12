<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import Layout from '../components/Layout.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const id = route.params.id

const product = reactive({})

onBeforeMount(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data => { 
        product.thumbnail = data.thumbnail
        product.title = data.title
        product.price = data.price
        product.description = data.description
        product.brand = data.brand
        product.category = data.category
    });
})
</script>

<template>
    <Layout>
        <v-row>
            <v-col cols="5">
                <img :src="product.thumbnail" alt="">
            </v-col>
            <v-col cols="7">
                <div class="product-details">
                    <h2>{{ product.title }}</h2>
                    <p>Brand: {{ product.brand }}</p>
                    <p>Category: {{ product.category }}</p>
                    <p>Price: ${{ product.price }}</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Description</h3>
                <p>{{ product.description }}</p>
            </v-col>
        </v-row>
    </Layout>
</template>

<style scoped>
h3{
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
img{
    max-width: 100%;
}
</style>