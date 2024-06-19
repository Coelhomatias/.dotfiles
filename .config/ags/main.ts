import Bar from "widgets/bar/Bar";
import Launcher from "widgets/launcher/Launcher";
import { forMonitors } from "lib/utils";

App.config({
  icons: "./assets",
  windows: () => [...forMonitors(Bar), Launcher()],
});
