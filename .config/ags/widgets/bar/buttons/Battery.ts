import { zeroPad } from "lib/utils";
import icons from "lib/icons";
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

const Battery = () => {
  return Widget.Box({
    class_name: "bar-item battery",
    children: [BatteryIcon(), BatteryLabel()],
  });
};

export default Battery;
