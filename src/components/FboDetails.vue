<template>
  <header class="header">
       
    <SiteLogo/>
    
</header>
    <div v-if="selectedWorkflow" class="background-container">
        <div>
    <div class="container">
      
      <!-- <h2>FBO Profile Details</h2> -->
      <!-- Display FBO details using the enrollmentId parameter -->
      <!-- <p>Enrollment ID: {{ selectedWorkflow.enrollmentId }}</p> -->
      <!-- Add other FBO details here -->
  
      <!-- Background image can be applied using CSS -->
      <div class="header-container">
        <div class="circle" @click="goBack">
          <!-- <img src="arrow-left-icon.png" alt="Go Back" /> -->
        </div>
        <p class="header-text">FBO Profile Details</p>
      </div>
  <div class="container">
      <div class="content">
        <!-- Rectangle box for restaurant name and address -->
        <div class="box-container1">
          <div class="header-content">
            <div class="circle1">
              <img :src="selectedWorkflow?.photos ? `${apiUrl}/${selectedWorkflow.photos}` : ''" alt="Restaurant Photo" />
            </div>
            <div class="text-container">
              <div>
                <p class="title">{{ selectedWorkflow.restaurantName }}</p>
                <span class="value full-address">{{ selectedWorkflow.address }}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
        <!-- Rectangle box for contact information -->
        <div class="box-container1">
          <div class="contact-info-header1">
            <!-- <img src="home-icon.png" alt="Contact Information" /> -->
            <p class="subtitle1">CONTACT INFORMATION</p>
          </div>
          <div class="horizontal-line"></div>
          <!-- Add contact information details -->
          <div class="contact-info1">
            <div class="contact-info-item1">
              <p class="info-label1">FBO Name</p>
              <p class="info-value1">{{ selectedWorkflow.name }}</p>
            </div>
            <div class="contact-info-item1">
              <p class="info-label1">Restaurant Name</p>
              <p class="info-value1">{{ selectedWorkflow.restaurantName }}</p>
            </div>
            <div class="contact-info-item1">
              <p class="info-label1">E-mail</p>
              <p class="info-value1">{{ selectedWorkflow.email }}</p>
            </div>
            <div class="contact-info-item1">
              <p class="info-label1">Phone Number</p>
              <p class="info-value1">{{ selectedWorkflow.contactNo }}</p>
            </div>
          </div>
        </div>
  
        <!-- Rectangle box for additional details -->
        <div class="box-container1">
          <div class="contact-info-header1">
            <!-- <img src="home-icon.png" alt="Additional Details" /> -->
            <p class="subtitle1">ADDITIONAL DETAILS</p>
          </div>
          <div class="horizontal-line"></div>
          <div class="contact-info1">
            <div class="contact-info-item1">
                
              <p class="info-label1">GST Number</p>
              <p class="info-value1">{{ selectedWorkflow.gstno }}</p>
            </div>
            <div class="contact-info-item1">
              <p class="info-label1">FSSAI Number</p>
              <p class="info-value1">{{ selectedWorkflow.fssaino }}</p>
            </div>
            <div class="contact-info-item1">
              <p class="info-label1">Rate Agreed per KG</p>
              <p class="info-value1">₹{{ selectedWorkflow.rateAgreedPerKG }}</p>
            </div>
            <div class="contact-info-item1">
              <p class="info-label1">Frequency</p>
              <p class="info-value1">Every {{ selectedWorkflow.frequency }} day(s)</p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="button-container">
        <!-- Render buttons conditionally based on approvalStatus -->
        <template v-if="selectedWorkflow.approvalStatus === 'APPROVED'">
          <div class="button" style="background-color: #4582DE;" disabled>Approved</div>
        </template>
        <template v-else-if="selectedWorkflow.approvalStatus === 'REJECTED'">
          <div class="button" style="background-color: #4582DE;" disabled>REJECTED</div>
        </template>
        <template v-else-if="selectedWorkflow.approvalStatus === 'ONHOLD'">
          <div class="button" style="background-color: #4582DE;" disabled>ON HOLD</div>
        </template>
  
        <!-- Render buttons for PENDING status -->
        <!-- <div class="button-container">
          <template v-if="isButtonsVisible && selectedWorkflow.approvalStatus === 'PENDING'">
            <div class="button" style="background-color: #4582DE; margin-right: 5;" @click="handleButtonClick('APPROVED')" :disabled="!isApproveClickable">Approve</div>
            <div class="button" style="background-color: #C62424; margin-right: 5;" @click="handleButtonClick('REJECTED')" :disabled="!isApproveClickable">Reject</div>
            <div class="button" style="background-color: #EA730A;" @click="handleButtonClick('ONHOLD')" :disabled="!isApproveClickable">On Hold</div>
          </template>
        </div> -->
        <div class="button-container1">

       
          <!-- Buttons for all cases -->
          <div class="button1" style="background-color: #4582DE; margin-right: 5;" @click="handleButtonClick('APPROVED')" :disabled="!isApproveClickable">Approve</div>
          <div class="button1" style="background-color: #C62424; margin-right: 5;" @click="handleButtonClick('REJECTED')" :disabled="!isApproveClickable">Reject</div>
          <div class="button1" style="background-color: #EA730A;" @click="handleButtonClick('ONHOLD')" :disabled="!isApproveClickable">On Hold</div>
        </div>
    
      </div>
      
    </div>
</div>
</div>
<div v-else>
    <p>Loading...</p>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SiteLogo from './SiteLogo.vue';
 
  export default {
    components: {
    SiteLogo,
 
  },
    props: {
    enrollmentId: {
      type: String,
      required: true
    },
    route: {
      type: Object,
      required: true
    }
  },
    data() {
      return {
        isFullAddressVisible: false,
        apiUrl: 'http://localhost:8082',
        workflowListState: [],
        selectedWorkflow: null,
        isButtonsVisible: true,
        isApproveClickable: true
      };
    },
    created() {
      this.init();
    },
    methods: {
        async init() {
  try {
   
          const { enrollmentId } = this.$route.params;
          const response = await axios.get(`${this.apiUrl}/fbo/${enrollmentId}`);
          console.log('response.data',response.data);

          this.selectedWorkflow = response.data;
  
         // Log selectedWorkflow for debugging
         console.log('selectedWorkflow:', this.selectedWorkflow);
       
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    },
      async handleButtonClick(status) {
        try {
          const { workFlowId, approvalType, comments = '' } = this.selectedWorkflow || {};
          if (!workFlowId || !approvalType || !comments) {
            console.error('Invalid selectedWorkflow data');
            return;
          }
  
          this.selectedWorkflow.approvalStatus = status;
  
          console.log('Button Clicked with status:', status);
          const requestBody = {
            workFlowId,
            approvalType,
            approvalStatus: status,
            comments,
          };
  
          const response = await axios.post(`${this.apiUrl}/workflow/approval`, requestBody);
  
          alert(response.data);
          console.log('API Response:', response.data);
          if (response.data.includes("Email and SMS sent successfully to")) {
            this.setButtonsVisibility(false);
          }
        } catch (error) {
          console.error('Error handling button click:', error);
        }
      }
    }
  };
  
</script>
<style scoped>
.background-container {
    /* Background image */
 
    background-size: cover;
    background-color: #F8F7F1;
    background-position: center;
    /* Rest of your styling */
    /* ... */
  }
.container {
    max-width: 800px; /* Set maximum width */
    margin: 0 auto; /* Center container horizontally */
  }
/* Header styling */
.header-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.header-text {
  font-size: 24px;
  font-weight: bold;
  margin-left: 250px;
}

/* Box container styling */
.box-container1 {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
}

.header-content {
  display: flex;
  align-items: center;
  padding: 20px;
}

.circle1 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.circle1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  margin-left: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.value {
  font-size: 18px;
}

.full-address {
  white-space: initial; /* Allow line breaks for full address */
  overflow: initial; /* Allow overflow for full address */
  text-overflow: initial; /* Allow text overflow for full address */
}

/* Contact information styling */
.contact-info-header1 {
  padding: 10px 20px;
  background-color: #f2f2f2;
}

.subtitle1 {
  font-size: 15px;
  font-weight: bold;
}

.horizontal-line {
  border-bottom: 1px solid #ccc;
}

.contact-info1 {
  padding: 20px;

 
}

.info-label1 {
  font-weight: bold;
  flex: 1;
}

.info-value1 {

  flex: 1; /* Take up 50% of the container */
  margin-left: 10px;
}

/* Button styling */
.button-container1 {
  display: flex;
  justify-content: space-between; /* Distribute space between buttons */
  margin-top: 20px;
  left:8px;
  position: relative;
  bottom:10px
}
.button1 {
  flex: 1; /* Distribute available space evenly among buttons */
  width: 244px; /* Set maximum width for each button */
  margin-right: 10px; /* Add margin between buttons */
  padding: 10px; /* Adjust padding */
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center; /* Center text */
}

/* Approved button */
.button-approved {
  background-color: #4582DE;
}

/* Rejected button */
.button-rejected {
  background-color: #C62424;
}

/* On Hold button */
.button-on-hold {
  background-color: #EA730A;
}

/* Disabled button */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.contact-info-item1 {
flex-direction: row;
display: flex;
justify-content: space-between;
}
</style>
