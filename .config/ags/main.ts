import Bar from "widgets/bar/Bar";
import { forMonitors } from "lib/utils";


App.config({
  icons: "./assets",
  windows: () => [
    ...forMonitors(Bar),
  ],
});
