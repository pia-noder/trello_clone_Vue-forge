<template>
  <div :class="$style.root">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <div :class="$style.wrapper">
      <div v-for="(board, index) in boards" :key="index">
        <Board :board-infos="board" />
      </div>
      <div @click="() => addBoard" :class="$style.addBoard">New Board +</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Board } from "src/types";
const boards = ref<Partial<Board>[]>([
  {
    id: "1",
    title: "My first board",
    order: "[]",
    image: {
      downloadUrl: "http://placeimg.com/640/360/any",
    },
  },
  {
    id: "2",
    title: "My second board",
    order: "[]",
    image: {
      downloadUrl: "https://via.placeholder.com/150",
    },
  },
  {
    id: "3",
    title: "My third board",
    order: "[]",
    image: {
      downloadUrl: "https://loremflickr.com/640/360",
    },
  },
]);

const title = "Boards";

const addBoard = () => {
  console.log("add board");
};
</script>

<style module>
.root {
  margin: 12px;
}
.wrapper {
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 8px;
  padding: 24px 24px;
}
.addBoard {
  cursor: pointer;
}
</style>
