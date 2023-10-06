<script setup>
import { ref, onBeforeMount } from 'vue'
import Layout from '../components/Layout.vue';

const items = ref([])

onBeforeMount(() => {
	fetch('https://dummyjson.com/products?limit=0')
		.then(res => res.json())
		.then(data => {
			items.value = data.products
		});
})

const headers = [
	{ text: "Title", value: "title", sortable: true },
	{ text: "Category", value: "category", sortable: true },
	{ text: "Number of items", value: "stock", sortable: true },
	{ text: "Price", value: "price", sortable: true },
	{ text: "Action", value: "view_details" }
];

</script>

<template>
	<Layout>
		<EasyDataTable :headers="headers" :items="items" alternating >
			<template #item-price="{ price }">${{ price }}</template>
			<template #item-view_details="{ id }">
				<div class="operation-wrapper">
					<router-link :to="{ name: 'productdetails', params: { id: id } }">View Details</router-link>
				</div>
			</template>
		</EasyDataTable>
	</Layout>
</template>

<style scoped></style>
