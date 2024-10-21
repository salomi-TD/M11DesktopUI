<template>
  <div class="logo-container">
    <div class="logo-content">
      <img
        :src="logoSource"
        class="logo-image"
        alt="Logo"
      />
      <p class="logo-text">M11 Industries</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoSource: 'https://ik.imagekit.io/Vijay69/m11.png?updatedAt=1700819805606'
    };
  }
};
</script>

<style scoped>
.logo-container {

}

.logo-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo-image {
  width: 104px;
  height: 66px;
}

.logo-text {
  font-size: 17px;
  color: #23316A;
  font-weight: 400;
  position: relative;
  top: 24px;

}
</style>