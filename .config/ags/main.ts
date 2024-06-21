import Bar from "widgets/bar/Bar";
import Launcher from "widgets/launcher/Launcher";
import { forMonitors } from "lib/utils";
import NotificationPopups from "widgets/notifications/NotificationPopups";
import options from "options";

App.config({
  icons: "./assets",
  closeWindowDelay: {
    launcher: options.transition.duration.value,
  },
  windows: () => [
    ...forMonitors(Bar),
    ...forMonitors(NotificationPopups),
    Launcher(),
  ],
});
