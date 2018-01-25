<template>
  <div>
    <input type="text" class="coupon-code" v-model="code" @input="validate">
    <p v-text="feedback"></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        code: '',
        coupons: [
          {
            code: '10OFF',
            message: '10% OFF',
            discount: 10
          },
          {
            code: '75OFF',
            message: '50% OFF',
            discount: 50
          },
          {
            code: 'FREE',
            message: 'Entirely Free',
            discount: 100
          }
        ],
        valid: false,
      }
    },

    computed: {
      selectedCoupon () {
        return this.coupons.find(coupon => coupon.code === this.code)
      },

      message () {
        return this.selectedCoupon ? this.selectedCoupon.message : 'Invalid Coupon Code'
      },

      feedback () {
        if (!!this.selectedCoupon) {
          return `Coupon Redeemed: ${this.message}`
        }

        return this.message
      }
    },

    methods: {
      validate () {
        this.valid = !!this.selectedCoupon
        // this.valid = this.coupons.map(coupon => coupon.code).includes(this.code)

        if (this.valid) {
          this.$emit('applied', this.selectedCoupon.discount)
        }
      }
    }

  }
</script>
