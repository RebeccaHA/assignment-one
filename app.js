import Vue from "vue";

const app = Vue.createApp({
  data() {
    return { name: "name", age: 18, image: "dog.jpeg" };
  },
  methods: {
    agePlus5() {
      this.age + 5;
    },
    pickNumber() {
      const random = Math.random();
    }
  }
});

app.mount("#assignment");
