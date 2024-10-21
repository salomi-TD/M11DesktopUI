import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import UCO from './components/UCO.vue'
import RUCO from './components/RUCO.vue'
import BDE from './components/BDE.vue'
import Registration from './components/Registration.vue'
import M11DashBoard from './components/M11DashBoard.vue'
import 'bootstrap/dist/css/bootstrap.css';
import FboDetails from './components/FboDetails.vue'
import VehicleList from './components/VehicleList.vue'
import VehicleReading from './components/VehicleReading.vue'
import TripHistory from './components/TripHistory.vue'
import BDETargets from './components/BDETargets.vue'
import AttandanceList from './components/AttandanceList.vue'
import RUCOProfile from './components/RUCOProfile.vue'
import UCOProfile from './components/UCOProfile.vue'
import FBOListTarget from './components/FBOListTarget.vue'
import Seeallfbolist from './components/Seeallfbolist.vue'
import AddVehicle from './components/AddVehicle.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginPage,
  },
  {
    path: '/uco',
    name: 'UCO',
    component: UCO,
    meta: { requiresAuth: true }
  },
  {
    path: '/ruco/:empId/:role/:fullname/:email/:contact/:empRegion',
    name: 'RUCO',
    component: RUCO,
  },
  {
    path: '/bde/',
    name: 'BDE',
    component: BDE,
    props: true
  },
  {
    path: '/register/:empId',
    name: 'CreateFBO',
    component: Registration,
  },
  {
    path:  '/fbo-details/:enrollmentId',
    name: 'fbodetails',
    component: FboDetails,
    props: true
  },
  {
    path: '/dashboard/:employee/:empId',
    name: 'M11DashBoard',
    component: M11DashBoard,
  },
  {
    path: '/VehicleList/:empRegion',
    name: 'VehicleList',
    component: VehicleList,
  },
  {
    path: '/VehicleReading',
    name: 'VehicleReading',
    component: VehicleReading,
  },
  {
    path: '/triphistory',
    name: 'TripHisrory',
    component: TripHistory,
  },
  {
    path: '/bdetargets',
    name: 'BDETargets',
    component: BDETargets,
  },
  {
    path: '/attandance',
    name: 'AttandanceList',
    component: AttandanceList,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: RUCOProfile,
  },
  {
    path: '/ucoprofile',
    name: 'UCOProfile',
    component: UCOProfile,
  },
  {
    path: '/fbolisttarget',
    name: 'FBOListTarget',
    component: FBOListTarget,
  },
  {
    path: '/fbolist',
    name: 'Seeallfbolist',
    component: Seeallfbolist,
  },
  {
    path: '/addvehicle',
    name: 'AddVechicle',
    component: AddVehicle,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is authenticated (you need to implement yourown authentication logic)
    if (!isLoggedIn()) {
      // Redirect to login page if not authenticated
      next({
        path: '/',
        query: { redirect: to.fullPath } // Pass the intended redirectpath as query parameter
      });
    } else {
      // Continue with navigation if authenticated
      next();
    }
  } else {
    // Continue with navigation for routes that do not require authentication
    next();
  }
});

// Function to check if the user is logged in (you need to implementyour own logic)
function isLoggedIn() {
  // Implement your authentication logic here
  // For example, check if the user has a valid token or session
  return true; // Return true if the user is authenticated, otherwisereturn false
}
const app = createApp(App)
app.use(router)
app.mount('#app')