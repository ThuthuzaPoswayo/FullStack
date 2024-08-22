<template>
  <div class="container">
    <h1 class="text-center my-5">Our Products</h1>
    <Spinner v-if="loading" />
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.prodID">
        <CardComp>
          <template #cardImage>
            <img :src="product.prodURL" alt="Product Image" class="img-fluid" />
          </template>
          <template #cardHeader>
            <h5>{{ product.prodName }}</h5>
          </template>
          <template #cardPrice>
            R{{ product.amount }}
          </template>
          <template #cardRating>
            <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= product.rating }">&#9733;</span>
          </template>
        </CardComp>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Spinner from "@/components/SpinnerComp.vue"
import CardComp from "@/components/CardComp.vue"

export default {
  components: {
    CardComp,
    Spinner
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState(['products']),
  },
  methods: {
    async fetchProducts() {
      await this.$store.dispatch('fetchProducts')
      this.loading = false
    }
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
}

.star {
  color: #ffcc00;
}

.star.filled {
  color: #ffcc00;
}

.text-center {
  text-align: center;
}
</style>

