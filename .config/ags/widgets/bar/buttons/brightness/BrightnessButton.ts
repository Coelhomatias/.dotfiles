import icons from "lib/icons";
import BarButton from "widgets/bar/BarButton";
import { zeroPad } from "lib/utils";

import brightness from "service/brightness";

const BrightnessIcon = () =>
  Widget.Icon({
    class_name: "icon with-text",
    icon: icons.brightness.indicator,
  });

const BrightnessButton = () =>
  BarButton({
    child: Widget.Box({
      class_name: "brightness",
      children: [
        BrightnessIcon(),
        Widget.Label().hook(brightness, (self) => {
          self.label = `${zeroPad(Math.round(brightness.screen * 100), 2)}%`;
        }),
      ],
    }),
  });

export default BrightnessButton;
