<template>
  <h1 class="products-heading"> Our Products </h1>
  <!-- <div>
    {{ $store.state.products }}
  </div> -->
  
   <card-comp id="productsview">
      <template #productsSlot>
          <section>
              <div class="prod" v-for="product in $store.state.products" :key="product.prodID">
                  <div class="row row-cols-1 row-cols-md-2 g-4 card-proj">
                      <div class="col">
                          <div class="card">
                              <img :src="product.prodUrl" class="card-img-top" alt="">
                              <div class="card-body">
                                  <h2 class="card-title"> {{ product.prodName }} </h2>
                                  <p class="card-text"> R{{ product.amount }} </p>

                                   <button> 
                                    <router-link :to="{name:'single-products',params:{id:product.prodID}}" class="link-no-decoration"> 
                                      View {{ product.prodName }} 
                                    </router-link>
                                  </button>
                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </template>
  </card-comp> 

</template>


<script>
import CardComp from '../components/CardComp.vue';
export default {
  components: {
      CardComp
  },
  methods: {
      getProducts() {
          this.$store.dispatch('getProducts')
      }
  },
  computed:{

  },
  mounted() {
      this.getProducts()
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
.products-heading {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #ff69b4;
  text-align: center;
  margin-bottom: 20px;
}


.card {
  width: 200px;
  border-radius: 15px;
  background: linear-gradient(135deg, #ffe0f0, #f8bbd0); 
  padding: 20px;
  font-family: "Montserrat", sans-serif; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}


.card:hover {
  transform: translateY(-5px);
}


.price {
  font-weight: bold;
  font-family: "Montserrat", sans-serif; /* Ensuring the price also uses Montserrat font */
}

section {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  place-items: center;
  margin-top: 40px
}

.card {
  height: 500px;
  width: 250px;
  margin-top: 20px
}

button {
  background-color: #ff69b4;
}
</style>
















































<!-- <template>
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
          </template> -->
        <!-- </CardComp>
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
 -->

 
