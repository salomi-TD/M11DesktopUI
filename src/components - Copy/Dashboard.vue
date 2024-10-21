<template>
    <ScrollView>
      <View :style="container">
        <Image :source="backgroundImageSource" :style="[styles.backgroundImage, { height }]" />
        <View style="position: absolute; margin-top: 30px;">
          <Text :style="styles.text">Hi {{ fullname || fboName }} - {{ role }}</Text>
          <View v-if="role !== 'FBO'">
            <TouchableOpacity :style="styles.button" @press="handleAttendance(!attendance.message)">
              <Text :style="styles.buttonText">{{ attendance.message === 'Present' ? 'Apply Leave' : 'On Leave' }}</Text>
            </TouchableOpacity>
          </View>
          <View :style="styles.ellipse">
            <Icon.Bell :style="styles.icon" color="black" />
          </View>
          <View :style="styles.column">
            <View :style="styles.fieldFlex" v-if="role === 'RUCO'">
              <Icon.MapPin :style="styles.calendericon" />
              <Text :style="styles.fieldText">Tracking</Text>
              <TouchableOpacity @press="handleTracking">
                <Icon.ChevronRight :style="styles.chevronicon" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  </template>
  
  <script>
  import { ref, reactive, onMounted } from 'vue';
  import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
  import * as Icon from 'react-native-feather';
  import axios from 'axios';
  import showToast from './showToast';
  import Config from '../Config';
  
  export default {
    name: 'M11DashBoard',
    props: {
      route: Object,
    },
    setup(props) {
      const { route } = props;
      const { empId, role } = route.params;
      const apiUrl = Config.API_URL;
      const height = ref(160);
      const attendance = reactive({
        message: '',
      });
  
      const handlePunch = async () => {
        try {
          const apiUrl1 = `${apiUrl}/employee/attendance/${empId}`;
          const response = await axios.post(apiUrl1);
          console.log(apiUrl1);
          console.log(response.data);
          attendance.message = response.data;
        } catch (error) {
          console.error('Error while punching:', error);
        }
      };
  
      const handleAttendance = async (action) => {
        try {
          const apiUrl1 = `${apiUrl}/employee/attendance/${empId}?present=${action}`;
          const response = await axios.post(apiUrl1);
          console.log(apiUrl1);
          console.log(response.data);
          handlePunch();
          showToast(response.data.message);
        } catch (error) {
          console.error('Error while punching:', error);
        }
      };
  
      const handleTracking = () => {
        // Handle navigation to Tracking page
      };
  
      onMounted(() => {
        handlePunch();
      });
  
      return {
        empId,
        role,
        height,
        attendance,
        handleAttendance,
        handleTracking,
        backgroundImageSource: {
          uri: 'https://ik.imagekit.io/Vijay69/Group%2015%201.png?updatedAt=1701249966868',
        },
        styles: {
          backgroundImage: {
            width: 'auto',
            position: 'relative',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 50,
            },
            shadowOpacity: 20,
            shadowRadius: 4,
            elevation: 20,
          },
          text: {
            width: 342,
            height: 22,
            marginLeft: 17,
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600',
            lineHeight: 21.79,
          },
          ellipse: {
            width: 30,
            height: 30,
            backgroundColor: 'white',
            borderRadius: 50,
            position: 'absolute',
            right: '5%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          icon: {
            width: 18,
            height: 18,
          },
          column: {
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: 10,
            marginTop: '4%',
            width: 'auto',
            marginLeft: '5%',
          },
          fieldFlex: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'rgba(0,0,0,0.4)',
            borderRadius: 8,
            marginVertical: 10,
            height: 47,
            width: 'auto',
          },
          calendericon: {
            width: 19.5,
            height: 21.5,
            marginLeft: '3%',
            color: '#EEEEEE',
          },
          fieldText: {
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            width: 142,
            height: 19,
            marginLeft: '5%',
            right: 14,
          },
          button: {
            backgroundColor: 'rgba(0,0,0,0.4)',
            borderRadius: 7,
            margin: 5,
            width: '30%',
            height: '-10%',
            position: 'absolute',
            right: 50,
            top: -25,
          },
          buttonText: {
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          },
          addButton: {
            position: 'absolute',
            bottom: 0,
            right: 20,
          },
          chevronicon: {
            width: 16,
            height: 16,
            color: '#EEEEEE',
            marginLeft: '40%',
            left: 70,
          },
        },
      };
    },
  };
  </script>
  
  