<template>
  <div>
    <SiteLogo/>
    <div class="login-container">
      <div class="login-form">
        <input type="text" v-model="username" placeholder="Username" maxlength="10">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="verifyLogin">Login</button>
      </div>
    </div>
    <div class="image-container">
      <img src="../assets/images/truck.gif" alt="Truck Gif" class="trucking" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import config from '/config.js';
import SiteLogo from './SiteLogo.vue';
export default {
  components:{
    SiteLogo,
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async verifyLogin() {
      try {
        const data = {
          username: this.username,
          password: this.password
        };
        const apiUrl = config.API_URL;
        const response = await axios.post(`${apiUrl}/login/verify`, data);
        
        console.log(response.data)
        if (response.data.message === 'Login Successful') {
          // Redirect to the dashboard regardless of role
          this.$router.push({ 
            name: 'M11DashBoard',
            params: {
              employee: response.data.employee.role
            }        
          });
        } else {
          console.log('No employee data found');
        }
      } catch (error) {
        console.error('There was a problem with your axios request:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Style for the login form */
.login-form {
  position: relative; 
  z-index: 1; 
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/images/backgroundimage.png'); /* Apply background image */
  background-size: cover; /* Cover the entire container */
}
.login-form {
  padding: 30px;
  border-radius: 8px;
  top: 90px;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form button {
  width: 100%; /* Make button width full */
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.3s; /* Add transition effect */
}

.login-form button:hover {
  background-color: #0056b3;
}

/* Style for the SiteLogo */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img {
  width: 100px;
  height: auto;
}

.logo p {
  margin-left: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
}

.trucking {
  width: 100%; /* Adjust to your preference */
  max-width: 800px; /* Set maximum width */
  height: auto;
  position: relative;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 768px) {
  .trucking {
    width: 80%; /* Adjust to your preference */
    max-width: 500px; /* Set maximum width */
  }
}

@media screen and (max-width: 480px) {
  .trucking {
    width: 90%; /* Adjust to your preference */
    max-width: 300px; /* Set maximum width */
  }
}
</style>
