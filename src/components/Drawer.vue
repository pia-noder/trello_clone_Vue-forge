<template>
  <div :class="$style.root">
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      :mini="true"
      @select="onSelect"
    >
      <DrawerContent :class="$style.drawerContainer">
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";

const selectedId = ref(0);
const expanded = ref(false);
const position = ref("start");
const mode = ref("push");

const expandedIcon = computed(() =>
  expanded.value ? "k-i-arrow-chevron-left" : "k-i-arrow-chevron-right"
);

const items = computed(() => [
  {
    text: "Boards",
    icon: "k-i-set-column-position",
    selected: true,
    data: {
      path: "/",
    },
  },

  {
    text: "Templates",
    icon: "k-i-border-left",
    data: {
      path: "/",
    },
  },
  {
    text: "Settings",
    icon: "k-i-gear",
    data: {
      path: "/",
    },
  },
  {
    text: "Collapse",
    icon: expandedIcon.value,
    data: {
      action: () => (expanded.value = !expanded.value),
    },
  },
]);

const onSelect = (event) => {
  selectedId.value = event.itemIndex;
  expanded.value = !expanded.value;
};
</script>
<style module>
.root {
}
</style>
