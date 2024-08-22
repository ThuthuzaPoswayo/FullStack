<template>
  <div class="card" :class="{ 'hovered': isHovered }" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
      <div id="cardTitle" class="card-header bg-success text-white mt-3">
          <slot name="cardHeader"></slot>
      </div>
      <div class="card-body">
          <slot name="cardBody"></slot>
      </div>
  </div>
</template>

<script>
  export default {
      name: 'CardView',
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
  .card {
      width: 15rem;
      margin: .5rem;
      transition: transform 0.2s ease;
  }

  .hovered {
      transform: scale(1.5); 
  }

  #cardTitle {
      border-radius: 8px;
  }
</style>