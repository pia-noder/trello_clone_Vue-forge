<template>
  <div :class="$style.root">
    <Card :class="$style.card">
      <CardImage
        :src="`${boardInfos?.image?.downloadUrl}` ?? defaultImage"
        :class="$style.imageCard"
        @click="() => boardLink"
      />

      <CardBody>{{ boardInfos!.title }} </CardBody></Card
    >
  </div>
</template>
<script setup lang="ts">
import { computed, PropType } from "vue";
import { useRouter } from "vue-router";
import { Card, CardBody, CardImage } from "@progress/kendo-vue-layout";
import type { Board } from "@/types";
const { push } = useRouter();

const props = defineProps({
  boardInfos: {
    type: Object as PropType<Board>,
    require: true,
  },
});

const boardLink = computed(() => {
  //return push(`/boards/${props.boardInfos?.id}`);
  return push({
    name: "boards-id",
    params: { id: props.boardInfos?.id },
  });
});

const defaultImage = "https://via.placeholder.com/150";
</script>
<style module>
.root {
  cursor: pointer;
}
.card {
  width: 260px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
}
.imageCard {
  height: 185px;
  max-width: 100%;
}
</style>
