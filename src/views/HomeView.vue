<template>
  <div class="container-fluid p-0">
    <div class="image-container">
      <img
        src="https://thuthuzaposwayo.github.io/All-images/eShop/Beauty.png"
        class="img-fluid"
        alt="homepage"
      />

      <div class="overlay-content">
        <h2 class="header">Welcome to Ytee Beauty</h2>
      </div>
    </div>

    <div class="row mt-4">
      <h3 id="headingthree">N E W &nbsp;&nbsp;&nbsp; A R R I V A L S</h3>
    </div>
    <Spinner v-if="loading" />
    <div class="row gap-2 justify-content-center" v-else>
      <Card v-for="product in products" :key="product.prodID">
        <template #cardHeader>
          <img
            :src="product.prodURL"
            loading="lazy"
            class="img-fluid"
            :alt="product.prodName"
          />
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
          <p class="lead">{{ product.prodDescription }}</p>
          <p class="lead">
            <span class="text-success fw-bold">Amount</span>: R{{
              product.amount
            }}
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/CardComp3.vue";
import Spinner from "@/components/SpinnerComp.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    Card,
    Spinner,
  },
  data() {
    return {
      loading: true, // Correctly initializing the loading state
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
  methods: {
    fetchAllProducts() {
      this.$store.dispatch("fetchProducts").then(() => {
        this.loading = false; // Set loading to false once the products are fetched
      });
    },
  },
  mounted() {
    this.fetchAllProducts(); // Correctly call the method
  },
};
</script>

<style scoped>
/* Container for the entire page without padding */
.container-fluid {
  padding: 0;
}

/* Ensures the image fills the container and is relative to the overlay */
.image-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Makes the image container fill the entire viewport height */
  overflow: hidden; /* Ensures no overflow */
}

/* Makes sure the image fills the entire container, covers the area, and maintains aspect ratio */
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Styles the overlay content and positions it on the image */
.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff; /* White text for contrast */
}

/* Styles for the header */
.header {
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: white; /* Ensure the header stands out */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Adds shadow for better readability */
}

#headingthree {
  font-family: "Montserrat", sans-serif;
  color: rgb(255, 109, 133);
  text-align: left;
  font-style: normal;
  margin-bottom: 80px;
  font-size: 60px;
  margin-top: 50px;
}
</style>
