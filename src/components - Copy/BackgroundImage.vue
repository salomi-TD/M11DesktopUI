<template>
    <div class="container">
      <img
        src="https://ik.imagekit.io/Vijay69/backgroundimage.png?updatedAt=1701075330634"
        class="background-image"
      />
      <!-- Your other components/content go here -->
  
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundImage',
  };
  </script>
  
  <style scoped>
  
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  </style>
  