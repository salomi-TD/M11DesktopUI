<template>
  <div class="ruco-bg">
  <div class="row row-cols-1 row-cols-md-4 g-4" id="card-containers">
  <div class="col">
    <div class="card h-100" >
      <div class="card-body">
        <h5 class="card-title">Total FBOs(This month)</h5>
        <div class="data-icon">
        <h6 class="card-text">178</h6>
        <div class="icon-con"> 
          <div class="icon">
        <i class="fas fa-heart"></i> 
      </div>
    </div>
      </div>   
        </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Stock Products</h5>
        <div class="data-icon">
        <h6 class="card-text">20+</h6>
        <div class="icon-con"> 
          <div class="icon">
        <i class="fas fa-heart"></i> 
      </div>
    </div>
      </div>  
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Sales Products</h5>
        <div class="data-icon">
        <h6 class="card-text">190+</h6>
        <div class="icon-con"> 
          <div class="icon">
        <i class="fas fa-heart"></i> 
      </div>
    </div>
      </div> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Job Application</h5>
        <div class="data-icon">
        <h6 class="card-text">12+</h6>
        <div class="icon-con"> 
          <div class="icon">
        <i class="fas fa-heart"></i> 
      </div>
    </div>
      </div>   
      </div>
    </div>
  </div>
</div>

<!-- <div>
  <PaymentRequest/>
</div> -->
</div>
</template>

<script>
// import PaymentRequest from './PaymentRequest.vue';
import '@fortawesome/fontawesome-free/css/all.css'
export default {
components:{
  // PaymentRequest
}
}
</script>

<style>

.ruco-bg{
  background-color: #F8F7F1;
  margin-top: 1%;
}
.row.row-cols-1.row-cols-md-4.g-4 {
  padding: 3% 11%;
}
.data-icon{
  display: flex;
  justify-content: space-between;
}
.icon{
  display: flex;
    align-items: center;
}
.card-title{
  font-weight: 400;
}
.icon-con{
  /* background-color: #5B93FF; */
  background-color: aqua;
  width: 15%;
  justify-content: center;
  display: flex;
  border-radius: 50%;
}
.fas.fa-heart{
  color: #5B93FF;
  /* color: red; */
}
#card-containers .card {
  border: 0;
}
</style>
