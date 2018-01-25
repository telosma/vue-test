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
      <input type="text" name="title" v-model="question.title">
      <textarea name="body" v-text="question.body"></textarea>

      <button id="update" @click="editing = false">Update</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'question'
    ],

    data: () => ({
      editing: false,
    })
  }
</script>
