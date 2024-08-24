<template>
     <card-comp :product="product" id="productsview">
        <section>
              <div class="prod" >
                  <div class="row row-cols-1 row-cols-md-2 g-4 card-proj">
                      <div class="col">
                          <div class="card">
                              <img :src="product.prodUrl" class="card-img-top" alt="">
                              <div class="card-body">
                                  <h2 class="card-title"> {{ product.category }} </h2>
                                  <p class="card-text"> R{{ product.prodDescription }} </p>
                                  <!-- <a :href="" class="btn btn-primary" target="_blank"> View More </a> -->
                                   <button @click="getProducts">Purchase</button>
                              
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
     </card-comp> 
</template>

<script>
import CardComp from '../components/CardComp.vue';
import Footer from '../components/FooterComp.vue'

export default {
  
  components: {
      CardComp,
      Footer
  },
  
  methods: {
    getProducts() {
        this.$store.dispatch('getProducts')
    },
      getProduct() {
          this.$store.dispatch('getProduct', this.$route.params.id)
      }
  },
  computed:{
    product(){
        return this.$store.state.product
    }
  },
  mounted() {
      this.getProduct()
  }
}
</script>

<style>

</style>