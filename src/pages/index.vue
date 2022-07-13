<script setup lang="ts">
import { ref } from "vue";
import {
  ChipList as KChipList,
  ButtonGroup as KButtongroup,
  Button as KButton,
} from "@progress/kendo-vue-buttons";

interface Data {
  name: string;
}
interface MEAL {
  name: string;
  icon: string;
  data: Data[];
}
const meals = [
  {
    name: "pizza",
    icon: "🍕",
    data: [{ name: "Ketchup" }, { name: "Mustard" }, { name: "Mayonnaise" }],
  },
  {
    name: "sushi",
    icon: "🍣",
    data: [{ name: "Wasabi" }, { name: "Ginger" }, { name: "Soy sauce" }],
  },
  {
    name: "burger",
    icon: "🍔",
    data: [{ name: "Onions" }, { name: "Avocado" }, { name: "Eggs" }],
  },
];

const meal = ref<MEAL>(meals[0]);

const selectMeal = (name: string) => {
  meal.value = meals.find((m) => m.name === name);
};
</script>

<template>
  <div class="flex justify-center items-center h-[80vh]">
    <div class="text-center">
      <img
        class="block"
        src="https://vuejsforge.com/images/logo.svg"
        alt="Vue.js Forge"
      />
      <AppButton class="block">
        <a href="https://vi.to/hubs/vuejs-forge/" target="_blank">Get Started</a>
      </AppButton>
      <div class="customized">
        <KButtongroup class="meals" selection="'single'">
          <KButton
            v-for="m in meals"
            :key="m.name"
            :togglable="true"
            :selected="meal.name === m.name"
            @click="selectMeal(m.name)"
          >
            <p>{{ m.icon }}</p>
            {{ m.name }}
          </KButton>
        </KButtongroup>
        <div class="separator mt-3">
          <h4>Add more:</h4>
          <KChipList
            :rounded="'full'"
            :key="meal.name"
            :default-data-items="meal.data"
            :text-field="'name'"
            :value-field="'name'"
            :selection="'multiple'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
