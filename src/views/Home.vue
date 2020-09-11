<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>{{ formatdate(value) }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { formatdate } from "@/filter/format-date";

export default {
  name: "Home",
  data: () => {
    return {
      value: "2020-09-04"
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    formatdate
  }
};
</script>
