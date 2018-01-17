<template>
  <div>
    <span class="count" v-text="count"></span>
    <button @click="count++" class="increment">Increment</button>
    <button @click="count>0 && count--" class="decrement" v-show="count > 0">Decrement</button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      count: 0
    }),

    // methods: {
    //   decrementByOne () {
    //     this.count = (this.count > 0) ? this.count-- : 0
    //   }
    // }
  }
</script>
