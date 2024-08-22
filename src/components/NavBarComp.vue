<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img id="logo"
            src="https://thuthuzaposwayo.github.io/All-images/eShop/mainlogo3.png"
            alt="logo"
            class="img-fluid"
            loading="lazy"
          />
        </a>
  
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact active-class="router-link-active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/reach-us">Reach Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
<style scoped>

.navbar {
  font-family: "Fahkwang", sans-serif;
  font-weight: 300;
  font-style: normal;
  padding: 0;
  background: linear-gradient(to left, #f473c0, #ffffff);
  color: #f0d0e3;
}

.navbar-brand {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

#logo {
  width: 7rem;
  height: 100%;
  max-height: 100px; /* Adjust based on the navbar height */
  object-fit: contain; /* Ensures the logo fits well without being distorted */
}

#navbarSupportedContent {
  font-family: "Montserrat", sans-serif;
 
}



</style>
  