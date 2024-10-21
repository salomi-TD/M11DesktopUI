<template>
    <div>
      <header class="header">
        <SiteLogo />
        <div class="search-box">
          <input type="text" placeholder="Search with Id........" class="search-input">
          <button class="search-button">Search</button>
        </div>
      </header>
  
      <div class="container">
        <div class="header-container">
          <p class="header-text">List of all FBO's</p>
        </div>
  
        <div class="box-container">
          <div class="horizontal-line"></div>
          <div class="contact-info">
            <!-- Image container -->
            <div class="image-container">
              <!-- Placeholder image, replace with actual image URL -->
              <img src="https://img.freepik.com/free-vector/flat-hotel-building-background_23-2148146362.jpg?size=626&ext=jpg&ga=GA1.1.1677455897.1701179782&semt=sph
              " alt="FBO Image">
            </div>
            <!-- Contact information -->
            <div class="info-container">
              <div class="contact-info-item">
                <p class="info-label">Enrollement ID</p>
                <p class="info-value">M11-123456789</p>
              </div>
              <div class="contact-info-item">
                <p class="info-label">FBO Name</p>
                <p class="info-value">Radizon blue plaza</p>
              </div>
              <div class="contact-info-item">
                <p class="info-label">Rate Agreed</p>
                <p class="info-value">25</p>
              </div>
              <div class="contact-info-item">
                <p class="info-label">Adress</p>
                <p class="info-value1"> 8-2-269/A/2 1-6, Road No. 2, Park View Enclave, Banjara Hills, Hyderabad, Telangana 500033</p>
              </div>
              <div class="button-container">
                <!-- Buttons for all cases -->
                <div class="icon3">
                <img src= '../assets/images/check1.png'>
                 </div>
                <div class="button" style="color: #4582DE; margin-right: 5;" @click="handleButtonClick('APPROVED')" :disabled="!isApproveClickable">Approve</div>
                <div class="icon1">
                  <img src= '../assets/images/cancel1.png' >
                </div>
               
               <div class="button" style="color: #C62424; margin-right: 5;" @click="handleButtonClick('REJECTED')" :disabled="!isApproveClickable">Reject</div>
               <div class="icon2">
                <img src= '../assets/images/onhold.png'>
              </div>
               <div class="button" style="color: #EA730A;" @click="handleButtonClick('ONHOLD')" :disabled="!isApproveClickable">On Hold</div>
              </div>


              
            </div>
          </div>
        </div>


        <div class="box-container">
          <div class="horizontal-line"></div>
          <div class="contact-info">
            <!-- Image container -->
            <div class="image-container">
              <!-- Placeholder image, replace with actual image URL -->
              <img src="https://img.freepik.com/free-vector/flat-hotel-building-background_23-2148146362.jpg?size=626&ext=jpg&ga=GA1.1.1677455897.1701179782&semt=sph
              " alt="FBO Image">
            </div>
            <!-- Contact information -->
            <div class="info-container">
              <div class="contact-info-item">
                <p class="info-label">Enrollement ID</p>
                <p class="info-value">M11-123456789</p>
              </div>
              <div class="contact-info-item">
                <p class="info-label">FBO Name</p>
                <p class="info-value">Radizon blue plaza</p>
              </div>
              <div class="contact-info-item">
                <p class="info-label">Rate Agreed</p>
                <p class="info-value">25</p>
              </div>
              <div class="contact-info-item">
                <p class="info-label">Adress</p>
                <p class="info-value1"> 8-2-269/A/2 1-6, Road No. 2, Park View Enclave, Banjara Hills, Hyderabad, Telangana 500033</p>
              </div>
              <div class="button-container">
                <!-- Buttons for all cases -->
                <div class="icon3">
                <img src= '../assets/images/check1.png'>
                 </div>
                <div class="button" style="color: #4582DE; margin-right: 5;" @click="handleButtonClick('APPROVED')" :disabled="!isApproveClickable">Approve</div>
                <div class="icon1">
                  <img src= '../assets/images/cancel1.png' >
                </div>
               
               <div class="button" style="color: #C62424; margin-right: 5;" @click="handleButtonClick('REJECTED')" :disabled="!isApproveClickable">Reject</div>
               <div class="icon2">
                <img src= '../assets/images/onhold.png'>
              </div>
               <div class="button" style="color: #EA730A;" @click="handleButtonClick('ONHOLD')" :disabled="!isApproveClickable">On Hold</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </template>
  
  <script>
  import SiteLogo from './SiteLogo.vue';
  
  export default {
    components: {
      SiteLogo,
    },
  }
  </script>
  
  <style>
  .icon3 {
  display: flex;
  align-items: center;
  left: 217px;
  position: relative;
  top:10px
}
.icon1 {
position: relative;
left: 175px;
top:10px
}
.icon2 {
  position: relative;
  left: 145px;
  top:10px
  }
/* Adjust positioning as needed */
.icon3 img{
  position: absolute;
  top: -20px;
  left: 0;
  height: 20px; /* Decrease the height of the icons */
  width: 20px;
}

.icon1 img{
  position: absolute;
  top: -20px;
  left: 40px;
  height: 20px; /* Decrease the height of the icons */
  width: 20px;
}

.icon2 img{
  position: absolute;
  top: -20px;
  left: 80px;
  height: 20px; /* Decrease the height of the icons */
  width: 20px;
}
.button {
  position: relative; /* Change position to relative */
  /* Adjust the top position to create space between icon and button */
}
  /* Header styles */
  .header {
    background-color: #90CAF9;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Search box styles */
  .search-box {
    display: flex;
    align-items: center;
  }
  
  .search-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .search-button {
    padding: 8px 15px;
    background-color: #1565C0;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #0D47A1;
  }
  
  /* Container styles */
  
  
  /* Header container styles */
  .header-container {
   
    
  }
  
  .header-text {
    font-size: 20px;
    font-weight: bold;
  }
  
  /* Box container styles */
  .box-container {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: #FFFFFF;
    display: flex;
    height: 115px;
    width: 1222px;
    position: relative;
    right: 30px;

  }
  
  /* Horizontal line styles */
  .horizontal-line {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
  
  /* Image container styles */
  .image-container {
    margin-right: 20px;
  }
  
  .image-container img {
    max-width: 60px;
    
  }
  
  /* Contact information container styles */
 
  /* Info container styles */
  .info-container {
  
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  
  /* Contact info item styles */
  .contact-info-item {
   width:170px;
    align-items: center;
    /* Add margin between info items */
  }
  .contact-info {
    padding: 20px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
   
  }
  .info-label {
    font-weight: 500;
    margin-right: 5px;
  color: #430E82
  }
  
  .info-value {
    /* margin-top: -23px; */
    position: relative;
    /* margin-bottom: 45px; */
    bottom: 11px;
  }
  .info-value1 {
    width: 393px;
    position: relative;
    bottom: 11px;
  }
  .button-container {
    display: flex;
    justify-content: space-between; /* Distribute space between buttons */
    margin-top: 20px;
    left:8px;
    position: relative;
    bottom:10px
  }
  .button {
    flex: 1;
    width: 69px;
    margin-right: 10px;
    /* padding: 10px; */
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    position: relative;
    left: 197px;
    top: 17px;
  }
  
  </style>
  