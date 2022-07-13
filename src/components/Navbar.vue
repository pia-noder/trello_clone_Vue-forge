<template>
  <div :class="$style.root">
    <div :class="$style.left">
      <span :class="$style.logo">
        <img
          :class="$style.logo"
          src="https://vuejsforge.com/images/logo.svg"
          alt="Vue.js Forge"
      /></span>
    </div>
    <div :class="$style.right">
      <div :class="$style.teams">
        <Button
          @click="showTeams = !showTeams"
          ref="button"
          :fill-mode="'flat'"
          :themeColor="'primary'"
          ><span class="k-icon k-i-ungroup"></span>My Team</Button
        >
        <!-- :show="showTeams" Condition to display dropdoan -->
        <Popup
          :show="showTeams"
          :anchor="'button'"
          :popup-class="'popup-content'"
          class="mt-5"
        >
          <ul v-for="(team, index) in teams" :key="index">
            <li class="px-5 py-2" @click="showTeams = false">
              {{ team.name }}
            </li>
          </ul>
        </Popup>
      </div>

      <Button @click="logout" :themeColor="'secondary'"
        ><span>Logout</span></Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@progress/kendo-vue-buttons";
import { Popup } from "@progress/kendo-vue-popup";

import { ref } from "vue";

const showTeams = ref(false);
const teams = [
  {
    name: "Team 1",
    id: "1",
  },
  {
    name: "Team 2",
    id: "2",
  },
];

const logout = () => {
  console.log("Logout");
};
</script>

<style module>
.root {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 2px solid gainsboro;
}
.right {
  display: flex;
  gap: 8px;
  align-items: center;
}
.left {
}
.logo {
  width: 110px;
  height: 50px;
}
.buttonTeam {
  color: #ff6358;
}
</style>
