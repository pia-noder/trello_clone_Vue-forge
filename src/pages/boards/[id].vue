<template>
  <div :class="$style.root">
    <h1>Board Details</h1>
    {{ id }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const { params } = useRoute();
const id = params.id;
</script>

<style module>
.root {
  background-color: teal;
}
</style>
