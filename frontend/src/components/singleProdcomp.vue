<template>
    <div>
        <div v-if="prodID">
        <h1>{{ product.prodName }}</h1>
        <div>
            <img :src="product.prodURL" :alt="product.prodName">
            <p>Category: {{ product.Category }}</p>
            <p>Price: R {{ product.amount }}</p>
        </div>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>
<script>
import Spinner from '../components/spinner.vue'
export default{
    components: {
        Spinner
    },
    computed: {
        product() {
            return this.$store.state.selectedProduct;
        }
    }
}
</script>