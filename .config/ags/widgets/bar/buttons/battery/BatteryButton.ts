import { zeroPad } from "lib/utils";
import icons from "lib/icons";
import BarButton from "widgets/bar/BarButton";
const battery = await Service.import("battery");

const BatteryIcon = () =>
  Widget.Icon({
    class_name: "icon with-text",
    setup: (self) =>
      self.hook(battery, () => {
        self.icon =
          battery.charging || battery.charged
            ? icons.battery.charging
            : battery.icon_name;
      }),
  });

const BatteryLabel = () =>
  Widget.Label({
    label: battery
      .bind("percent")
      .as((p) =>
        battery.available ? `${zeroPad(battery.percent, 2)}%` : "N/A"
      ),
  });

const BatteryButton = () =>
  BarButton({
    child: Widget.Box({
      class_name: "battery",
      children: [BatteryIcon(), BatteryLabel()],
    }),
  });

export default BatteryButton;
