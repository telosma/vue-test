<template>
  <div>
    <div v-if="!editing">
      <h1 v-text="question.title"></h1>
      <div class="body">
        <h1 v-text="question.body"></h1>
      </div>
      <button id="edit" @click="editing=true">Edit</button>
    </div>

    <!-- Editing the question. -->
    <div v-if="editing">
      <input type="text" name="title" v-model="form.title">
      <textarea name="body" v-model="form.body"></textarea>

      <button id="update" @click="change">Update</button>
      <button id="cancel" @click="cancel">Cancel</button>
    </div>

    <p v-if="feedback">Your question has been updated.</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: [
      'dataQuestion'
    ],

    data () {
      return {
        editing: false,
        feedback: false,
        question: this.dataQuestion,
        form: {
          title: this.dataQuestion.title,
          body: this.dataQuestion.body
        }
      }
    },

    methods: {
      cancel () {
        this.editing = false
      },
      change () {
        this.question.title = this.form.title
        this.question.body = this.form.body

        axios.post('/questions/1', this.form)
          .then(({data}) => {
            if (data && data !== {}) {
              this.feedback = true
            }
          })

        this.editing = false
      }
    }
  }
</script>
