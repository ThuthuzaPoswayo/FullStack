<template>
  <div>
      <slot name="productsSlot"></slot>
      <slot name="productSlot"></slot>
      <slot></slot>
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
                                   <button>Purchase</button>
                              
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  </div>
</template>

<script>
export default {
  props:['product']
}
</script>

<style scoped>

</style>