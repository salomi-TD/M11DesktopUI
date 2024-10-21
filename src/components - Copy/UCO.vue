<template>
 
  <div>
    <div class="header">
      <!-- Header content goes here -->
      <div class="logo-container">
        <SiteLogo />
       
      </div>
    </div>
  </div>
    <BackgroundImage/>
 
    <div class="card-container">
      <div class="card">
        <div class="icon-text-container">
          <i class="fas fa-user"></i>
          <span>RUCO Managers</span>
        </div>
      </div>
      <div class="card">
        <div class="icon-text-container">
          <i class="fas fa-clipboard-list"></i>
          <span>Activities</span>
        </div>
      </div>
      <div class="card">
        <div class="icon-text-container">
          <i class="fas fa-chart-bar"></i>
          <span>Reports</span>
        </div>
      </div>
      <div class="card">
        <div class="icon-text-container">
          <i class="fas fa-exchange-alt"></i>
          <span>Transactions</span>
        </div>
      </div>
   
  </div>
  <Fbolist/>
</template>

<script>
import SiteLogo from './SiteLogo.vue';
import BackgroundImage from './BackgroundImage.vue';
import Fbolist from './Fbolist.vue';
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  name: 'AppHeader',
  components: {
    SiteLogo,
    BackgroundImage,
  Fbolist
  }
}
</script>

<style scoped>
/* Header component styles go here */
.header {
  background-color: #90CAF9;
  color: #448AFF;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  height: 60px; /* Adjust height as needed */

}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  left: 84px;
  top:10px
}

.logo-container img {
  width: 100px; /* Adjust width as needed */
  height: auto;
}

.logo-container h1 {
  margin-left: 10px;
}

.card-container {
  display: flex;
  justify-content: space-around; /* Adjust as needed */
  position: relative;
top:76px;
  width: 100%; /* Set the width to 100% */
  max-width: 1300px; /* Optionally, set a maximum width */
  margin: 20px; /* Center the container horizontally */
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 180px;
}

.icon-text-container {
  display: flex;

}

.icon-text-container i {
  margin-right: 11px; /* Adjust as needed */

  position: relative;
}
</style>
