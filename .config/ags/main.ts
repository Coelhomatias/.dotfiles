import Bar from "widgets/bar/Bar";
import Launcher from "widgets/launcher/Launcher";
import { forMonitors } from "lib/utils";
import NotificationList from "widgets/notifications/NotificationList";
import options from "options";
import Overview from "widgets/overview/Overview";

App.config({
  icons: "./assets",
  closeWindowDelay: {
    launcher: options.transition.duration.value,
  },
  windows: () => [
    ...forMonitors(Bar),
    ...forMonitors(NotificationList),
    Launcher(),
    Overview(),
  ],
});
