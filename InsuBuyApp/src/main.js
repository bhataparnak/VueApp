// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
const baseURL = "http://localhost:3001/quotes";
const apiUrl = "http://localhost:8001/listing";
Vue.config.productionTip = false

Vue.component("modal", {
  template: "#modal-template"
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
        errors: [],
        policyMax: "",
        age: null,
        fromdate: null,
        todate: null,
        citizenship: null,
        state: null,
        showModal: false
    }
    
  },
  methods:{
    submitForm: function (e) {
       // submit the form to our backend api If all valid data
      if(this.policyMax && this.age && this.fromdate && this.todate && this.citizenship && this.state){
       //Just an example need to build proper query with proper parameters
        let route = this.$router.push({path: '/listing', 
          params: {
                param1: 'value1', 
                param2: 'value2'
          }
        }); 
        window.open(route.href);
      }
      //Check for all the Quote form validations
      this.errors = [];
      //Validate Maximum Policy field
      if (!this.policyMax) {
        this.errors.push('Please Select Maximum Policy'); 
      }
       // Validate age field
      if (!this.age) {
        this.errors.push('Age required');
      }
      if (this.age && this.age > '100') {
        this.errors.push('Age cannot be greater than 100'); 
      }
      //From date
      if (!this.fromdate) {
        this.errors.push('From Travel Date is Required'); 
      }
      //To date
      if (!this.todate) {
        this.errors.push('To Travel Date is Required'); 
      }
      // Validate citizenship field
      if (!this.citizenship) {
        this.errors.push('Please Enter Citizenship Details'); 
      }
      if(this.citizenship){
        let validCharacterRegex = /^[a-zA-Z]*$/;
        if(validCharacterRegex.test(citizenship)){
          return true;
        } else {
          this.errors.push('Citizenship details cannot contain special characters or number');
        }
      }
      // Validate state field
      if (!this.state) {
        this.errors.push('Mailing State Name Cannot be Blank');
      }
      if(this.state){
        let validCharacterRegex = /^[a-zA-Z]*$/;
        if(validCharacterRegex.test(state)){
          return true;
        } else {
          this.errors.push('State details cannot contain special characters or number');
        }
      }
      e.preventDefault();
    },
    
    // listdetails(){
    //   window.open("http://localhost:8001/listdetails");
    // }
    // Reset the form on click of reset button
    resetForm: function () { 
      this.policyMax = ''; 
      this.age = ''; 
      this.fromdate = ''; 
      this.todate = '';
      this.citizenship = '';
      this.state = '';
    }
  }
});


