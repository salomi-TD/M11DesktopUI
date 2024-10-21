<template>

  <div class="content">
    <div class="container">
    <div class="row">
      <span class="heading">List of pending FBO's</span>
      <div class="button-container">
        <button @click="handleFBOListDisplay" class="buttonTitle">See all</button>
      </div>
      </div>
    </div>
    <div class="container">
      <div class="cards-container">
        <div v-for="item in filteredWorkflowList" :key="item.workFlowId" class="card">
          <div class="card-content">
            <div class="info">
              <span class="label">Restaurant Name:</span>
              <span class="value">{{ item.fbo.restaurantName }}</span>
            </div>
            
            <div class="info">
              <span class="label">Enrollment ID:</span>
              <span class="value">{{ item.fbo.enrollmentId }}</span>
            </div>

            

            <div class="info">
              <span class="label">Request On Date:</span>
              <span class="value"> {{ formatDate(item.creationTime) }}</span>
            </div>
            
            <div class="info">
              <span class="label">Rate per KG:</span>
              <span class="value"> ₹{{ item.fbo.rateAgreedPerKG }}</span>
            </div>
            <div class="info">
              <span class="label">Address:</span>
              <span class="value full-address">{{ item.fbo.address }}</span>
            </div>
            <!-- <button @click="handleButtonClick('APPROVED', item.fbo.enrollmentId)" :disabled="!isApproveClickable">
              Approve
            </button> -->
            <div class="button-container">
              <button @click="viewDetails(item.fbo.enrollmentId)" class="action-button">View Details</button>
              <button @click="handleButtonClick('APPROVED', item.fbo.enrollmentId)" :disabled="!isApproveClickable" class="action-button">Approve</button>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    empId: {
      type: Number, // Change the type according to your data type
      required: true
    }
  },
  data() {
    return {
      filteredWorkflowList: [],
      apiUrl: 'http://localhost:8082',
      isApproveClickable: true
    };
  },
  mounted() {
    if (this.$props.empId) {
      this.fetchData();
    } else {
      console.error('empId is not defined.');
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${this.apiUrl}/workflow/registerList/${this.$props.empId}`);
        this.filteredWorkflowList = response.data.workflowList.filter(item => item.approvalStatus !== 'APPROVED');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    handleFBOListDisplay() {
      // Implement navigation logic here
      this.$router.push({ path: `/fbolist` });
    },
    viewDetails(enrollmentId) {
      // Navigate to the FBO details route with the enrollmentId parameter
      this.$router.push({ path: `/fbo-details/${enrollmentId}` });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    },
    async handleButtonClick() {
      // Logic for handling button click
    }
    // Your other methods here
  }
};
</script>

<style scoped>


.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-container {
  margin-left: auto;
}
.header {
  background-color: #90CAF9;
  color: #fff;
  padding: 20px;
}
.info .value.full-address {
  white-space: initial; /* Allow line breaks for full address */
  overflow: initial; /* Allow overflow for full address */
  text-overflow: initial; /* Allow text overflow for full address */
}
.heading {
  font-size: 30px;
  position: relative;
  top:20px
}
/* Content Styles */
.content {
  
  background-color: #F8F7F1;
  height:560px;
}

/* Cards Container Styles */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Start cards from the beginning */
  gap: 20px; /* Add gap between cards */
}

/* Card Styles */
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
 
  box-sizing: border-box;
  flex-grow: 1; /* Allow cards to grow */
 
 
} 

@media (min-width: 992px) {
  .card {
   /* Each card takes up one-third of the container width minus half the gap */
    max-width: calc(33.33% - 10px); /* Set maximum width for responsiveness */
  }
}
/* Card Content Styles */
.card-content {
  display: flex;
  flex-direction: column;
}

/* Info Styles */
.info {
  display: flex;
}

/* Label Styles */
.label {
  font-weight: bold;
  color: gray;
  margin-right: 10px;
}

/* Value Styles */
.value {
  color: #333;
  cursor: pointer; /* Add pointer cursor for clickable elements */
  white-space: nowrap; /* Prevent line break */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; /* Show ellipsis for overflow text */
}
.button-container {
  display: flex;
  align-items: center; /* Align items vertically */
}

/* Button title styles */
.buttonTitle {
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  margin-left: auto; /* Push the button to the right */
  position: relative;
  bottom:20px
}

.buttonTitle:hover {
  background-color: #483d8b;
}
.action-button {
  background-color: #6a5acd; /* Button background color */
  color: white; /* Button text color */
  border: none; /* Remove button border */
  border-radius: 5px; /* Button border radius */
  padding: 8px 16px; /* Button padding */
  cursor: pointer; /* Add pointer cursor */
  margin-right: 10px; /* Margin between buttons */
  top:10px;
  position: relative;
}

.action-button:hover {
  background-color: #483d8b; /* Button background color on hover */
}
</style>
