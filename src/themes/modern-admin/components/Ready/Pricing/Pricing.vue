<template lang="html">
  <div  class="col-12">
    <div class="pay_container" >   
      <div class="pay_row">
        <div class="pay_product" v-for="item in products" :key="item.price">        
          <div v-if="!paidFor" class="descript">
            <h3 class="pay_description">{{ item.description }}</h3>
            <h3 class="pay_price">${{ item.price }} / mo</h3>
          </div>
          <button v-if="item.price == 0" class="free">Sign up free</button>
          <button v-if="!item.price == 0" class="paypal_button"  @click="pay(item.price)">Buy Now</button>
        </div>
        <div>
          <simple-modal v-model="isShow">
            <template slot="body">
              <div id="paypal-1"></div>
            </template>
          </simple-modal>      
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js">

import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast);
// import image from "../assets/lamp.png"
import apidata from "../../../../../assets/assets/js/paypal"
import SimpleModal from 'simple-modal-vue'
export default {
     name: 'PricingComponent',
	components: {SimpleModal},
	data() {
    return {
      clientId:apidata.client_id,
      isShow: false,
      loaded: false,
      paidFor: false,
      currentprice: 0,
      products: [{
        price: 0,
        description: "Free",
        img: "./assets/lamp.jpg"
      },
      {
        price: 100,
        description: "Pro",
        img: "./assets/lamp.jpg"
      },
      {
        price: 200,
        description: "Pro",
        img: "./assets/lamp.jpg"
      },
      {
        price: 300,
        description: "Pro",
        img: "./assets/lamp.jpg"
      },
      
      ],
			PricingItems: null,
			data_component_type: this.prop_component_type,
               data_component_id: this.prop_component_id
          }
     },     
     props : {
		prop_component_type: {
			type   : String,
	 		default: 'PricingComponent' 
		},
		prop_component_id  : {
			type   : Number,
			default: 3 
		}
    },
     mounted() {
		const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id="+this.clientId+"";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
     },
    
     methods: {
        pay(val){
       this.currentprice = val
       this.isShow = !this.isShow
    },
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.products.description,
                  amount: {
                    currency_code: "USD",
                    value: this.currentprice
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            this.$toast("You bought Goods!", {
              timeout: 2000
            });
            console.log(order);
            setTimeout(function(){location.reload()}, 2000);
            ;
          },
          onError: err => {
            console.log(err);
          }
        })
        .render('#paypal-1');
    }
     },
     computed: {

     }
}
</script>
