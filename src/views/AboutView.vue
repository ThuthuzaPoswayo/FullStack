<template>
  <div class="row">
    <h2 class="display-2" id="heading">
      About
    </h2>

    <div class="container">
      <!-- Row with two columns -->
      <div class="row align-items-center">
        <!-- Column for the image -->
        <div class="col-md-6 text-center mb-4" id="image">
          <img src="https://thuthuzaposwayo.github.io/All-images/eShop/ytee.png" class="rounded-img img-fluid flip-animation">
        </div>

        <!-- Column for the text -->
        <div class="col-md-6" id="text">
          <p>
            Ytee Beauty was founded in the year 2020 by Thuthuza Poswayo and Yonela Mangele, a self-taught Nail Technician and trained Lash Technician.
            It is our love for beauty that encouraged us to become entrepreneurs in this rapidly growing industry. We strive to serve our customers
            with lots of dazzle and love. Our aim is to make beauty products accessible to all; the needs of our clients come first. We strive for growth and excellence!
            <br>"It takes drive and courage to be able to put yourself out there with a skill that you received no formal training for. I am so glad that
            I did because it opened a world that I never knew would bring me so much happiness and growth. Not a single day feels like I am at work." 
            - Thuthuza Poswayo
          </p>
        </div>
      </div>

      <!-- Row with two columns for the images -->
      <div class="row">
        <div class="col-md-6 text-center mb-4">
          <div class="image-container">
            <img id="woman" src="http://thuthuzaposwayo.github.io/All-images/images/womanowned.png" class="rounded-img img-fluid"> 
            <p>Thutzbeauty is proudly woman-owned</p>
          </div>
        </div>

        <div class="col-md-6 text-center mb-4">
          <div class="image-container">
            <img id="vegan" src="http://thuthuzaposwayo.github.io/All-images/images/veganfree.png" class="rounded-img img-fluid">
            <p>All of our products are vegan-friendly and free of animal cruelty</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container for the images with styling */
.image-container {
  text-align: center;
  margin: 1rem auto;
}

/* Styles for rounded images with a pink glowing neon effect */
.rounded-img {
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 109, 133, 0.8); /* Pink glowing neon effect */
  transition: box-shadow 0.3s ease-in-out, transform 0.6s;
}

/* Flip animation */
.flip-animation {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-animation:hover {
  transform: rotateY(360deg);
}

/* Ensuring the container text is well-aligned */
.container p {
  text-align: justify;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #333;
}

/* Styles for the main heading */
#heading {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align: center;
  color: rgb(255, 109, 133);
  margin-bottom: 1.5rem;
}
</style>

