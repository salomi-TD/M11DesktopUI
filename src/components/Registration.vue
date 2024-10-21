<template>
  <div cRelass="container-fluid">
    <SiteLogo />
    <div class="rg-heading">
      <p class="heading-text ">FBO Registration</p>
    </div>
    <form @submit.prevent="submitForm">
    <div style=" padding-left: 20%;padding-right: 20%">
      <div class="form-floating mb-3" style="display: flex; align-items: center;">
    <input type="fssai" class="form-control" id="floatingInput" v-model="formData.fssaiNo" placeholder="name@example.com"  @input="handleFssaiChange"/>
    <label for="floatingInput" style="margin-right: 10px;">FSSAI No</label>
    <button class="btn btn-lg btn-success" style="height: 55px;margin-left: 10px;" @click="handleAutoFill">Go</button>
  </div>

  <div class="row g-2" style="margin-bottom: 15px;">
    <div class="col-md">
      <div class="form-floating">
        <input type="hotelname" class="form-control" id="floatingInputGrid" v-model="formData.hotelName" placeholder="hotel/restaurantsname" value="postData.restaurantName ? postData.restaurantName : ' '" >
        <label for="floatingInputGrid">Hotel/Restaurants Name</label>
      </div>
    </div>
        <div class="col-md">
          <div class="form-floating">
            <input type="name" class="form-control" id="floatingInputGrid" v-model="formData.fboName" placeholder="name@example.com" >
            <label for="floatingInputGrid">FBO's Name</label>
          </div>
        </div>
      </div>
      <div class="row g-2" style="margin-bottom: 15px;">
        <div class="col-md">
          <div class="form-floating">
            <input type="phone" class="form-control" id="floatingInputGrid"  v-model="formData.phone" placeholder="name@example.com" >
            <label for="floatingInputGrid">Phone</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInputGrid" v-model="formData.email" placeholder="name@example.com" >
            <label for="floatingInputGrid">Email address</label>
          </div>
        </div>
      </div>
      <div style="margin-bottom: 15px;">
        <input class="form-control form-control-lg" id="formFileLg" type="file" @change="handleImageUpload" accept="image/*" style="height: 60px; padding: 15px;">
      </div>

      <div class="form-floating mb-3">
        <input type="Address" class="form-control" id="floatingInput" v-model="formData.address"  placeholder="name@example.com">
        <label for="floatingInput">Address</label>
      </div>

      <div class="row g-2" style="margin-bottom: 15px;">
        <div class="col-md">
          <div class="form-floating">
            <input type="txt" class="form-control" id="floatingInputGrid" v-model="formData.gstNo" placeholder="name@example.com">
            <label for="floatingInputGrid">GST No</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input type="kg" class="form-control" id="floatingInputGrid" v-model="formData.ratePerKg" placeholder="name@example.com">
            <label for="floatingInputGrid">Rate agreed per KG</label>
          </div>
        </div>
      </div>

      <div class="row g-2" style="margin-bottom: 15px;">
        <div class="col-md">
          <div class="form-floating">
            <input type="frequency" class="form-control" id="floatingInputGrid" v-model="formData.frequency" placeholder="frequency">
            <label for="floatingInputGrid">Frequency</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <select class="form-select" v-model="formData.region"  id="floatingSelectGrid" aria-label="Floating label select example">
              <option selected>Choose Region</option>
              <option>{{ regions.regionId }} </option>
            </select>
            <label for="floatingSelectGrid">Choose Region</label>
          </div>
        </div>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <select class="form-select" v-model="formData.uco" id="floatingSelectGrid" aria-label="Floating label select example" >
              <option selected>Open this select menu</option>
              <option v-for="uco in ucos" :key="uco.empId" :value="uco.empId">{{ uco.fullname }}</option>         
            </select>
            <label for="floatingSelectGrid">Choose UCO</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <select class="form-select" v-model="formData.ruco" id="floatingSelectGrid" aria-label="Floating label select example">
              <option selected>Open this select menu</option>
              <option v-for="ruco in rucos" :key="ruco.empId" :value="ruco.empId">{{ ruco.fullname }}</option>
              </select>
            <label for="floatingSelectGrid">Choose RUCO</label>
          </div>
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">
          <span>I Agree as per </span><b>Terms and Conditions</b>
        </label>
        <button class="btn btn-primary btn-register" @click="register">Register</button>

      </div>
    </div>
</form>
  </div>
</template>

<script>
import axios from 'axios';
import SiteLogo from './SiteLogo.vue';
export default {
  name: 'RegistrationForm',
  components: {
    SiteLogo,
  },
  data() {
    return {
      formData: {
        restaurantName: '',
        name: '',
        contactNo: '',
        email: '',
        gstNo: '',
        fssaiNo: '',
        rateAgreedPerKG: '',
        frequency: '',
        region: '',
        address: '',
        assignedUCO: '',
        assignedRUCO: '',
        agreeToTerms: false,
        createdBy: '',
      },
      id:[],
      regions: {}, // Fetch regions from the server
      ucos: [], // Fetch UCOs from the server
      rucos: [] // Fetch RUCOs from the server
    };
  },

  methods: {
  
    async handleAutoFill() {
  try {
    const url = `http://localhost:3030/posts/${this.formData.fssaiNo}`;
    console.log(url);
    const response = await axios.get(url);
    console.log('Fetched Data:', response.data);
    // Assuming the response contains the necessary data fields
    this.formData.hotelName = response.data.restaurantName || '';
    this.formData.fboName = response.data.name || '';
    this.formData.phone = response.data.contactNo || '';
    this.formData.email = response.data.email || '';
    this.formData.gstNo = response.data.gstNo || '';
    // Assign other fields accordingly
  } catch (error) {
    console.error('Error Autofilling Data:', error);
  }
},

    
    async submitForm() {
      const empId = this.$route.params.empId;
      console.log(empId);
      try {
      // Encode image as base64
        const base64Image = await this.getBase64Image(this.imageData);

        // Include base64 image in form data
        const data = {

          fbo: {
        fssaiNo: this.formData.fssaiNo,
        restaurantName: this.formData.hotelName,
        name: this.formData.fboName,
        contactNo: this.formData.phone,
        email: this.formData.email,
        address: this.formData.address,
        gstNo: this.formData.gstNo,
        rateAgreedPerKG: this.formData.ratePerKg,
        frequency: this.formData.frequency,
        region: this.formData.region,
        assignedUCO: this.formData.uco,
        assignedRUCO: this.formData.ruco,
        agreeToTerms: this.formData.agreeToTerms,
        createdBy: empId
      },

          image: base64Image
        };
        console.log(data);
        const response = await axios.post('http://localhost:8082/fbo/create', data);
        console.log('Form submitted successfully:', response.data);
        // Optionally, show a success message or redirect the user
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, show error message, etc.
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
      }
    },

    handleImageUpload(event) {
  console.log("File uploaded:", event.target.files[0]);
  this.imageData = event.target.files[0];
},
    getBase64Image(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      });
    },


    async fetchRegions() {

      const empId = this.$route.params.empId;
      console.log("Hi", empId);
      try {
        const response = await axios.get(`http://localhost:8082/region/${empId}`);
        this.regions = response.data;
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching regions:', error);
        // Handle error, show error message, etc.
      }
    },

    async fetchUCOs() {

      try {
        const response = await axios.get('http://localhost:8082/region/data/Madhapur');
        this.ucos = response.data.ucoList;
        console.log(response.data.ucoList)
      } catch (error) {
        console.error('Error fetching UCOs:', error);
        // Handle error, show error message, etc.
      }
    },

    async fetchRUCOs() {

      try {
        const response = await axios.get('http://localhost:8082/region/data/Madhapur');
        this.rucos = response.data.rucoList;
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching RUCOs:', error);
        // Handle error, show error message, etc.
      }
    },
  },

  created() {
    this.fetchRegions();
    this.fetchUCOs();
    this.fetchRUCOs();
  }
};
</script>
<style>
.container-fluid {
  background-color: #F8F7F1;
}

.rg-heading {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

.input-group {
  margin-bottom: 16px;
}

.form-check-label {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.form-check-label b {
  margin-left: 5px;
}

.btn-register {
  height: 40px;
  margin-top: 15px;
  margin-bottom: 20px;
  width: 40%;
  position: relative;
  left: 30%
}

.form-check {
  margin-top: 15px;
}
</style>