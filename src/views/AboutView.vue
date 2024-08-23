<template>
  <div class="about-page">
    <div class="row">
      <h2 class="display-2" id="heading">
        About
      </h2>

      <div class="container">
        <!-- Row with two columns -->
        <div class="row align-items-start equal-height-columns">
          <!-- Column for the image -->
          <div class="col-md-6 text-center mb-4" id="image">
            <img src="https://thuthuzaposwayo.github.io/All-images/eShop/ytee.png" class="rounded-img img-fluid slide-in">
          </div>

          <!-- Column for the text -->
          <div class="col-md-6 blog-style-column" id="text">
            <p>
              Ytee Beauty was founded in the year 2020 by Thuthuza Poswayo and Yonela Mangele, a self-taught Nail Technician and trained Lash Technician.
            </p>
            <p>
              It is our love for beauty that encouraged us to become entrepreneurs in this rapidly growing industry. We strive to serve our customers
              with lots of dazzle and love. Our aim is to make beauty products accessible to all; the needs of our clients come first. We strive for growth and excellence!
            </p>
            <p>
              "It takes drive and courage to be able to put yourself out there with a skill that you received no formal training for. I am so glad that
              I did because it opened a world that I never knew would bring me so much happiness and growth. Not a single day feels like I am at work." 
              - Thuthuza Poswayo
            </p>
          </div>
        </div>

        <!-- Row with two columns for the images -->
        <div class="row equal-height-columns">
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
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

/* Overall page styling */
.about-page {
  background: linear-gradient(to bottom, #fdecef, #fce4ec); /* Very light shades of pink gradient */
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
}

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
  max-width: 70%; /* Make the image smaller */
  margin: auto;
}

/* Slide-in animation for the left image */
.slide-in {
  animation: slideIn 1s ease-out forwards;
  opacity: 0; /* Start hidden */
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Flip animation */
.flip-animation {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-animation:hover {
  transform: rotateY(360deg);
}

/* Blog-style column styling */
.blog-style-column {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Montserrat', sans-serif;
  color: #333;
  text-align: justify;
}

/* Ensuring the container text is well-aligned */
.blog-style-column p {
  margin-bottom: 1rem; /* Add space between paragraphs */
}

/* Equal height columns */
.equal-height-columns {
  display: flex;
  flex-wrap: wrap;
}

/* Styles for the main heading */
#heading {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-align: center;
  color: rgb(255, 109, 133);
  margin-bottom: 2rem; /* Add more space below heading */
}

/* Make sure all columns are the same height */
.row {
  display: flex;
}

.col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
