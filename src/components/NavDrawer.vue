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
import { useLocalStorage } from "@vueuse/core";
import router from "@/router";
const selectedId = ref(0);
//useLocalStorage("key", "value") update the value inside localStorage everytime it change inside the app
const expanded = useLocalStorage("app-drawer-expanded", false);

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
      path: "/boards",
    },
  },

  {
    text: "Templates",
    icon: "k-i-border-left",
    data: {
      path: "/templates",
    },
  },
  {
    text: "Settings",
    icon: "k-i-gear",
    data: {
      path: "/settings",
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

const onSelect = ({ itemIndex }: { itemIndex: number }) => {
  const item = items.value[itemIndex];
  selectedId.value = itemIndex;
  if (item.data.path) router.push(item.data.path);
  if (typeof item.data.action === "function") item.data.action();
};
</script>
<style module>
.root {
}
</style>
