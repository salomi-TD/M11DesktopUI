<!-- src/components/DashboardPage.vue -->

<!-- <template>
    <div>
      <h2>RUCO Page</h2>
      <p>Welcome to RUCO Page  </p>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script> -->
  <template>
    <div>
      <!-- RUCO component content -->
      <h1>Welcome {{ $route.params.fullname }}</h1>
      <p>Your Employee ID: {{ $route.params.empId }}</p>
      <!-- Display other employee details as needed -->
    </div>
  </template>
  
  <script>
  export default {
    // RUCO component logic
  };
  </script>
  
  <style scoped>
  /* RUCO component styles */
  </style>
  
  