export default {
  template: `
    <div>
      <span class="count" v-text="count"></span>
      <button @click="count++">Increment</button>
    </div>
  `,

  data: () => ({
    count: 0
  })
}
