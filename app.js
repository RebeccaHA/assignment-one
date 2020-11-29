const app = Vue.createApp({
  data() {
    return { name: "Becky", age: 18, image: "dog.jpeg" };
  },
  methods: {
    agePlus5() {
      return this.age + 5;
    },
    pickNumber() {
      const random = Math.random();
      return random;
    }
  }
});

app.mount("#assignment");
