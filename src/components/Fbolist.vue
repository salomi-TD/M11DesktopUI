<template>
    <div class="fontcontainer">
      <div class="font1">
        <span class="font">FBO's</span>
        <span class="font3">List of pending FBO's</span>
      </div>
      <button @click="handleFBOListDisplay" class="buttonTitle">See all</button>
      <div v-if="filteredWorkflowList.length > 0" class="flatlist-container">
        <div v-for="item in filteredWorkflowList" :key="item.workFlowId" class="card">
          <!-- Render fetched data here -->
          <div class="bottomborder textContainer">
            <div class="test">
              <span class="label">Enrollment ID -</span>
              <span class="value">{{ item.fbo.enrollmentId }}</span>
            </div>
          </div>
          <!-- Other data rendering follows -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: 'FBORequests',
  data() {
    return {
      workflowList: [], // Initialize workflowList as an empty array
      apiUrl: 'http://localhost:8083/workflow/registerList/1'
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(this.apiUrl);
        this.workflowList = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    handleFBOListDisplay() {
      this.$router.push({ name: 'FBOListDisplay', params: { workflowList: this.workflowList } });
    }
    // Other methods for handling data or UI interactions
  },
  computed: {
    filteredWorkflowList() {
      // Check if workflowList is an array before filtering
      if (Array.isArray(this.workflowList)) {
        return this.workflowList.filter(item => item.approvalStatus !== 'APPROVED');
      } else {
        return []; // Return an empty array if workflowList is not an array
      }
    }
  }
};
</script>

  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  