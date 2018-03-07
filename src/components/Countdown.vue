<template>
  <div>
    <div>
      <span>{{ remaining.days }} Days,</span>
      <span>{{ remaining.days }} Hours,</span>
      <span>{{ remaining.days }} Minutes,</span>
      <span>{{ remaining.days }} Seconds</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['util']
  }
</script>
