<template>
  <div class="product-card">
    <div class="product-image">
      <slot name="cardImage"></slot>
    </div>
    <div class="product-details">
      <h3 class="product-name">
        <slot name="cardHeader"></slot>
      </h3>
      <p class="product-price">
        <slot name="cardBody"></slot>
      </p>
      <div class="product-rating">
        <slot name="cardRating"></slot>
      </div>
    </div>
    <div class="favorite-icon">
      <slot name="cardFavorite"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComp',
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    toggleHover(state) {
      this.isHovered = state;
    }
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px;
  transition: transform 0.2s ease;
  width: 282.6px;
  height: 523.66px
}

.product-image {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  flex-grow: 1;
  margin-left: 15px;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.product-price {
  font-size: 18px;
  color: #333;
  margin: 5px 0;
}

.product-rating {
  color: #ffcc00;
}

.favorite-icon {
  font-size: 24px;
  color: #333;
}

.hovered {
  transform: scale(1.05); 
}
</style>
