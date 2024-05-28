import { zeroPad } from "lib/utils";
import icons from "lib/icons"
const battery = await Service.import("battery");

const battery_off = "󱉞";
const battery_discharge = [
  "󰁺",
  "󰁻",
  "󰁼",
  "󰁽",
  "󰁾",
  "󰁿",
  "󰂀",
  "󰂁",
  "󰂂",
  "󰁹",
  "󰁹",
];
const battery_charging = "󰂄";

const Battery = () => {
  const BatteryIcon = Widget.Label({
    class_name: "icon with-text",
  }).hook(
    battery,
    (self) => {
      self.label = battery.available
        ? battery.charging
          ? battery_charging
          : battery_discharge[Math.floor(battery.percent / 10)]
        : battery_off;
    },
    "changed"
  );

  const BatteryLabel = Widget.Label().hook(
    battery,
    (self) => {
      self.label = battery.available
        ? `${zeroPad(battery.percent, 2)}%`
        : "N/A";
    },
    "changed"
  );

  return Widget.Box({
    class_name: "bar-item battery",
    children: [BatteryIcon, BatteryLabel],
  });
};

export default Battery;
