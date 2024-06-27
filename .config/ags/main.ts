import Bar from "widgets/bar/Bar";
import Launcher from "widgets/launcher/Launcher";
import Overview from "widgets/overview/Overview";
import { forMonitors } from "lib/utils";
import NotificationList from "widgets/notifications/NotificationList";
import options from "options";
import Powermenu from "widgets/powermenu/Powermenu";

App.config({
  icons: "./assets",
  closeWindowDelay: {
    launcher: options.transition.duration.value,
    overview: options.transition.duration.value,
    powermenu: options.transition.duration.value
  },
  windows: () => [
    ...forMonitors(Bar),
    ...forMonitors(NotificationList),
    Overview(),
    Launcher(),
    Powermenu()
  ],
});
