<template>
  <div>
    <div>
      <span>{{ remaining.days }} Days,</span>
      <span>{{ remaining.hours }} Hours,</span>
      <span>{{ remaining.minutes }} Minutes,</span>
      <span>{{ remaining.seconds }} Seconds</span>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['until'],

    computed: {
      remaining () {
        let remaining = moment.duration(Date.parse(this.until) - new Date())

        return {
          days: remaining.days(),
          hours: remaining.hours(),
          minutes: remaining.minutes(),
          seconds: remaining.seconds(),
        }
      }
    }
  }
</script>
