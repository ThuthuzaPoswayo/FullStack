<template>
    <div class="container">
      <!-- Users Section -->
      <div>
        <h2 id="userHeading" class="display-4 mt-4 mb-4">Edit Users</h2>
        <AddUser :user="user" />
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Role</th>
                <th>Pass</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID">
                <td>{{ user.userID }}</td>
                <td><img :src="user.userProfile" alt="User Image" class="user-img"></td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.userPass }}</td>
                <td>{{ user.userProfile }}</td>
              

                <td class="d-flex gap-2">
                  <updateUser :user="user" />
                  <button class="btn btn-danger" @click="deleteUser(user.userID)">Delete User</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Products Section -->
      <div class="mt-5">
        <h2 id="productHeading" class="display-4 mb-4">Edit Products</h2>
        <button class="btnAdd" data-bs-toggle="modal" data-bs-target="#addItem">Add Product</button>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.prodID">
                <td>{{ product.prodID }}</td>
                <td><img :src="product.prodURL" alt="Product Image" class="prod-img"></td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
                <td>R {{ product.amount }}</td>
                <td>{{ product.prodDescription || 'N/A' }}</td>
                <td class="d-flex gap-2">
                  <updateProduct :product="product" />
                  <button class="btn btn-danger" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AddUser from "../store/index.js";
  import updateUser from "../store/index.js";
  import updateProduct from "../store/index.js";
  
  export default {
    components: {
      AddUser,
      updateUser,
      updateProduct,
    },
    computed: {
      users() {
        return this.$store.state.users;
      },
      products() {
        return this.$store.state.products;
      },
    },
    methods: {
      deleteUser(userID) {
        this.$store.dispatch("deleteUser", { id: userID });
      },
      deleteProduct(prodID) {
        this.$store.dispatch("deleteProduct", { id: prodID });
      },
    },
  };
  </script>
  
