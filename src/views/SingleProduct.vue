<template>
     <card-comp :product="product" id="productsview"></card-comp> 
</template>

<script>
import CardComp from '../components/CardComp.vue';
export default {
  
  components: {
      CardComp
  },
  methods: {
      getProduct() {
          this.$store.dispatch('getProduct',this.$route.params.id)
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