<template>
  <div class="logo-container">
    <div class="logo-content">
      <p>{{ this.$route.params }}</p>
      <p class="logo-text">M11 Industries</p>
      <div v-for="item in vehiclesList" :key="item.vehicleId" class="card">
        <div>
          {{ item.vehicleId }}
          {{ item.vehicleNumber }}
          {{ item.vehicleType }}
          {{ item.fuelType }}
        </div>
      </div>
      <button @click="RedirectToAddvechicle">add vechicle</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
      enrollmentId: {
    type: String,
    required: true
  },
  props: {
  empId: {
    type:String, // Change the type according to your data type
  }
},
    route: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      apiUrl: 'http://localhost:8082',
      vehiclesList: [],
      empList: [],
      // logoSource: '/path/to/your/logo.png' // Add your logo source here
    };
  },
  async mounted() {
      await this.fetchEmpData(); // Wait for empList to be populated
      this.fetchData(); // Then fetch data using empList.region
},
  methods: {
    
    async fetchEmpData() {
      try {
        const empId = this.$route.params.empRegion;
        const response = await axios.get(`${this.apiUrl}/employee/${empId}`);
        this.empList = response.data;
        console.log('empList', this.empList);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    },
    async fetchData() {
      try {
        const empRegion = this.empList.region
        console.log('hiiii', empRegion)
        const response = await axios.get(`${this.apiUrl}/vehicle/list?regionId=${empRegion}`);
        this.vehiclesList = response.data;
        console.log('vehiclesList', this.vehiclesList);
        console.log(this.$route.params.empRegion)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    },
    RedirectToAddvechicle()
    {
      this.$router.push({ name: 'AddVechicle' });

    }
  }
};
</script>

<style scoped>
.logo-container {
  /* Add your styles for the logo container */
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

.card {
  /* Add your styles for the card */
}
</style>
