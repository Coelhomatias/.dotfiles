import Bar from "widgets/bar/Bar";
import Launcher from "widgets/launcher/Launcher";
import { forMonitors } from "lib/utils";
import NotificationWindow from "widgets/notifications/Notification";

App.config({
  icons: "./assets",
  windows: () => [
    ...forMonitors(Bar),
    Launcher(),
    ...forMonitors(NotificationWindow),
  ],
});
