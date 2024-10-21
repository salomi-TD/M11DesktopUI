<template>
  <div>
    <header class="header">
      <div class="container">
        <SiteLogo/>
      </div>
    </header>

    <BackgroundImage/>

    <div class="content">
      <div class="container">
        <h2 class="heading">List of FBO's</h2>
      </div>

      <div class="container">
        <div class="cards-container">
          <div v-for="item in workflowList" :key="item.workFlowId" class="card">
            <div class="card-content">
              <div class="info">
                <span class="label">Enrollment ID:</span>
                <span class="value">{{ item.enrollmentId }}</span>
              </div>
              <div class="info">
                <span class="label">Restaurant Name:</span>
                <span class="value" :class="{ 'expanded':
item.restaurantNameExpanded }" @click="toggleRestaurantName(item)">
                  {{ item.restaurantName }}
                </span>
              </div>
              <div class="info">
                <span class="label">Rate Agreed Per KG:</span>
                <span class="value">₹{{ item.rateAgreedPerKG }}</span>
              </div>
              <div class="info">
                <span class="label">Address:</span>
                <span class="value full-address">{{ item.address }}</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <button @click="redirectToCreateFBO"
class="create-fbo-button">Create FBO</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BackgroundImage from './BackgroundImage.vue';
import SiteLogo from './SiteLogo.vue';

export default {
  components: {
    BackgroundImage,
    SiteLogo
  },
  props: {
    empId: {
      type: Number, // Change the type according to your data type
      required: true
    }
  },
  data() {
    return {
      workflowList: [],
      error: null // Add an error property to hold error messages
    };
  },
  watch: {
    empId: 'fetchData'
  },
  mounted() {
    console.log('Employee ID in BDE component:', this.empId);
    this.fetchData();
  },
  methods: {
    redirectToCreateFBO() {
      this.$router.push({ name: 'CreateFBO' }); // Redirect to theCreate FBO page
    },
    toggleAddress(item) {
      item.addressExpanded = !item.addressExpanded;
    },
    toggleRestaurantName(item) {
      item.restaurantNameExpanded = !item.restaurantNameExpanded;
    },

    async fetchData() {
      try {
        const response = await
axios.get(`http://localhost:8083/fbo/list/${this.empId}`);
        this.workflowList = response.data.fboList.map(item => ({
          ...item,
          addressExpanded: false,
          restaurantNameExpanded: false
        }));
        this.error = null; // Reset error if request succeeds
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && error.response.status === 400) {
          this.error = 'Bad Request: The server could not understandthe request.';
        } else {
          this.error = 'Failed to fetch data. Please try again later.';
        }
      }
    }
  }
};
</script>

<style scoped>
/* Header Styles */
.header {
  background-color: #90CAF9;
  color: #fff;
  padding: 20px;
}
.heading {
  font-size: 30px;
}
/* Content Styles */
.content {
  margin-top: 20px;
}

/* Cards Container Styles */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Card Styles */
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  box-sizing: border-box;
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

/* Expanded Styles */
.expanded {
  white-space: initial; /* Allow line breaks for expanded text */
  overflow: initial; /* Allow overflow for expanded text */
  text-overflow: initial; /* Allow text overflow for expanded text */
}

/* Create FBO Button Styles */
.create-fbo-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

.create-fbo-button:hover {
  background-color: #0056b3;
}
.info .value.full-address {
  white-space: initial; /* Allow line breaks for full address */
  overflow: initial; /* Allow overflow for full address */
  text-overflow: initial; /* Allow text overflow for full address */
}
</style>