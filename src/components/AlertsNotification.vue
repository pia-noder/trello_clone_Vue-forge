<template>
  <div :class="$style.root">
    <NotificationGroup
      :style="{
        right: 0,
        bottom: 0,
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Fade v-for="alert in alerts.alerts" :key="alert.id" appear>
        <!--appear attribute is set to avoid the notif to be display when the component is mounted-->
        <Notification
          :type="{
            style: alert.style,
            icon: true,
          }"
          :closable="alert.closeable"
          @close="alerts.remove(alert.id)"
        >
          <div v-if="alert.html" v-html="alert.message"></div>
          <span v-else>{{ alert.message }}</span>
        </Notification>
      </Fade>
    </NotificationGroup>
  </div>
</template>

<script setup lang="ts">
import { useAlerts } from "@/stores/alerts";
import { Fade } from "@progress/kendo-vue-animation";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-vue-notification";

const alerts = useAlerts();

const onClose = (state: string) => {
  console.log(state, "on close Notification");
};
</script>

<style module>
.root {
  margin: 16px;
}
</style>
