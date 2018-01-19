<template>
  <div>
    <input type="text" class="new-reminder" v-model="newReminder">
    <button class="button" @click="addReminder">Add Reminder</button>

    <ul v-if="reminders.length">
      <li v-for="reminder in reminders" v-text="reminder" :key="reminder">
        <button class="remove" @click="remove(reminder)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: () => ({
      reminders: [],
      newReminder: ''
    }),

    methods: {
      addReminder () {
        this.reminders.push(this.newReminder)

        this.newReminder = ''
      },

      remove (reminder) {
        this.reminders.splice(reminder, 1)
      }
    }
  }
</script>
