import { acceptHMRUpdate, defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export type AlertStyle = "error" | "success" | "info" | "warning" | "none";

export interface AlertOptions {
  html?: boolean;
  closeable?: boolean;
  timeout?: number | false;
  style?: AlertStyle;
}

export interface Alert extends AlertOptions {
  id: string;
  message: string;
}

const defaultsOptions: Required<AlertOptions> = {
  closeable: true,
  html: false,
  timeout: 3000,
  style: "info",
};

export const useAlerts = defineStore("alerts", {
  state: () => ({
    alerts: [] as Alert[],
  }),

  actions: {
    notify(message: string, style: AlertStyle, options?: AlertOptions) {
      options = { ...defaultsOptions, style, ...options };
      const id = uuid();
      this.alerts.push({
        message,
        id,
        ...options,
      });

      if (options.timeout !== false) {
        setTimeout(() => {
          this.remove(id);
        }, options.timeout);
      }
    },

    success(message: string, options?: AlertOptions) {
      this.notify(message, "success", options);
    },

    remove(id: string) {
      console.log(id, "remove notif");
      const index = this.alerts.findIndex((alert) => alert.id === id);
      //findIndex return -1 if nothing in found
      if (index > -1) {
        this.alerts.splice(index, 1);
      }
    },
  },
});

//To reflect any store modification immediatly inside the instance without reload
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlerts, import.meta.hot));
}
