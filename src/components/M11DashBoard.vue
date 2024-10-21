<template>
  <div>
    <header class="header">
      <div class="container">
        <SiteLogo/>
      </div>
     <div class="hi">
        <button v-if="['RUCO'].includes(employee)" @click="vehiclelist" class="attendance-list-btn">Vehicles List</button>
        <button v-if="['RUCO'].includes(employee)" @click="vehiclereading" class="attendance-list-btn">Vehicle Readings List</button>
        <button v-if="['RUCO'].includes(employee)" @click="triphistory" class="attendance-list-btn">Trip History</button>
        <button v-if="['RUCO'].includes(employee)" @click="bdetargets" class="attendance-list-btn">BDE Targets</button>
        <button v-if="['RUCO'].includes(employee)" @click="attendanceList" class="attendance-list-btn">Attendance List</button>
        <button v-if="['RUCO'].includes(employee)" @click="editprofile" class="attendance-list-btn">Profile</button>
        <button v-if="['RUCO'].includes(employee)" @click="logout" class="logout-btn">Logout</button>
      </div>
      <button v-if="employee === 'BDE'" @click="navigateToFBOList" class="fbo-list-btn">FBOList</button>
           <button v-if="employee === 'BDE'" @click="logout" class="logout-btn">Logout</button>
         
           <!-- <button v-if="[ 'UCO'].includes(employee)" @click="navigateToAttendanceList" class="attendance-list-btn">Attendance List</button> -->
        <button v-if="['UCO'].includes(employee)" @click="ucoprofile" class="attendance-list-btn">Profile</button>
        <button v-if="employee === 'UCO'" @click="logout" class="logout-btn">Logout</button> 

   
      
    </header>

    <!-- Conditionally render components based on user's role -->
    <template v-if="employee">
      <template v-if="$route.params.employee === 'RUCO'">
        <RUCO :employee="employee" />
      </template>
      <template v-else-if="employee === 'BDE'">
        <BDE :empId="$route.params.empId"/>
      </template>
      <template v-else-if="employee=== 'UCO'">
        <UCO :empId="$route.params.empId" />
        
      </template>
    </template>
  </div>
</template>

<script>
import SiteLogo from './SiteLogo.vue';
import RUCO from './RUCO.vue';
import BDE from './BDE.vue';
import UCO from './UCO.vue';

export default {
  components: {
    SiteLogo,
    RUCO,
    BDE,
    UCO
  },
  data() {
    return {
      username: '',
      password: '',
      employee: null
    };
  },
  mounted() {
    // Fetch employee data and set it to this.employee
    console.log('Employee Data:', this.$route.params.employee);
    this.employee = this.$route.params.employee;
  },
  methods: {
    vehiclelist() {
      // Implement logout functionality
     // console.log('Logout clicked');
     //const empRegion = this.empList.region
      this.$router.push({ name: 'VehicleList', params: { empRegion: '1' } });
    },
    vehiclereading() {
      // Implement logout functionality
     // console.log('Logout clicked');
     //const empRegion = this.empList.region
      this.$router.push({ name: 'VehicleReading' });
    },
    triphistory() {
      // Implement logout functionality
     // console.log('Logout clicked');
     //const empRegion = this.empList.region
      this.$router.push({ name: 'TripHisrory' });
    },
    bdetargets() {
      // Implement logout functionality
     // console.log('Logout clicked');
     //const empRegion = this.empList.region
      this.$router.push({ name: 'BDETargets' });
    },
    attendanceList() {
      // Implement logout functionality
     // console.log('Logout clicked');
     //const empRegion = this.empList.region
      this.$router.push({ name: 'AttandanceList' });
    },
    editprofile() {
      // Implement logout functionality
     // console.log('Logout clicked');
     //const empRegion = this.empList.region
      this.$router.push({ name: 'Profile' });
    },
    logout() {
      // Implement logout functionality
      console.log('Logout clicked');
      this.$router.push({ name: 'Home' });
    },
    navigateToFBOList() {
     // console.log('Navigating to FBOList');
      
      this.$router.push({ name: 'FBOListTarget' });
    },
    ucoprofile() {
      // Implement logout functionality
     // console.log('Logout clicked');
      this.$router.push({ name: 'UCOProfile' });
    },
  },

    navigateToAttendanceList() {
      console.log('Navigating to Attendance List');
    }
};
</script>

<style>
.header {
  background-color: #90CAF9;
  color: #fff;
  padding: 20px;
  display: flex; /* Added */
  justify-content: space-between;
  align-items: center; /* Align items vertically */
}

.logout-btn {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  
}

.fbo-list-btn,
.attendance-list-btn {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
}
.hi {
  position: relative;
  width:150%;
  top:15px
}
</style>
