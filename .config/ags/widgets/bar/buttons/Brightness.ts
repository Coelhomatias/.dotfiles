import icons from "lib/icons";
import { zeroPad } from "lib/utils";
import brightness from "service/brightness";

const BrightnessIcon = () =>
  Widget.Icon({
    class_name: "icon with-text",
    icon: icons.brightness.indicator,
  });

const Brightness = () =>
  Widget.Box({
    class_name: "bar-item brightness",
    children: [
      BrightnessIcon(),
      Widget.Label().hook(brightness, (self) => {
        self.label = `${zeroPad(Math.round(brightness.screen * 100), 2)}%`;
      }),
    ],
  });

export default Brightness;
