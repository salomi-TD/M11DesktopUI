<template>
    <form @submit.prevent="submitForm">
        <label for="vehicleNumber">Vehicle Number:</label>
        <input type="text" id="vehicleNumber" v-model="vehicleNumber" required>
        <label for="vehicleType">Vehicle Type:</label>
        <select v-model="vehicleType">
            <option value="">Select Vehicle Type</option>
            <option value="Van">Van</option>
            <option value="Tempo">Tempo</option>
            <option value="Truck">Truck</option>
            <!-- Add more vehicle types as needed -->
        </select>
        <label for="vehicleFuel">Vehicle Fuel:</label>
        <select v-model="fuelType">
            <option value="">Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="CNG">CNG</option>
            <!-- Add more fuel types as needed -->
        </select>
        <label for="region">Region:</label>
        <input type="text" id="region" v-model="region" required>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            vehicleNumber: '',
            vehicleType: '',
            vehicleFuel: '',
            region: '',
        };
    },

    methods: {
        submitForm() {
            // Form data
            const formData = {
                vehicleNumber: this.vehicleNumber,
                vehicleType: this.vehicleType,
                fuelType: this.vehicleFuel,
                region: this.region
            };

            // Perform POST operation
            axios.post('http://localhost:8082/vehicle/add', formData)
                .then(response => {
                    // Handle success response
                    console.log('Form submitted successfully:', response.data);
                    // Optionally, you can reset the form fields after successful submission
                    //this.resetForm();
                })
                .catch(error => {
                    // Handle error response
                    console.error('Error submitting form:', error);
                });
        },
    }
};
</script>