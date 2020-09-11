<template>
  <div class="about">
    <h1 @click="sayHello">This is an about page</h1>
  </div>
</template>

<script>
import { eventBus } from "@/eventBus";

export default {
  methods: {
    sayHello() {
      eventBus.$emit("say-hello");
    }
  }
}
</script>