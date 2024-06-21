import { BoxProps } from "types/widgets/box";
import options from "options";
import OverviewButton from "./buttons/overview/OverviewButton";
import Workspaces from "./buttons/workspaces/Workspaces";
import DateButton from "./buttons/date/DateButton";
import SystemTray from "./buttons/tray/SystemTray";
import ButtonGroup from "./buttons/ButtonGroup";
import VolumeButton from "./buttons/volume/VolumeButton";
import BrightnessButton from "./buttons/brightness/BrightnessButton";
import BatteryButton from "./buttons/battery/BatteryButton";
import PowerButton from "./buttons/power/PowerButton";

/**
 *
 * Left: OverviewButton, Workspaces, SystemTray
 * Center: NotificationIndicator, DateButton, PlayerInfo
 * Right: (ScreenRecorder, ColorPicker) (Network, Bluetooth, BTBatteryDevice) (MicrophoneIndicator, VolumeIndicator, BrightnessIndicator, BatteryIndicator), PowerButton
 *
 */

const BarGroup = ({ class_name, ...rest }: BoxProps) =>
  Widget.Box({
    class_name: "bar-group",
    ...rest,
  });

const StartWidget = () =>
  BarGroup({
    children: [OverviewButton(), Workspaces(7)],
  });

const CenterWidget = () =>
  BarGroup({
    children: [DateButton()],
  });

const EndWidget = () =>
  BarGroup({
    hpack: "end",
    children: [
      SystemTray(),
      ButtonGroup({
        children: [VolumeButton(), BrightnessButton(), BatteryButton()],
      }),
      PowerButton(),
    ],
  });

const Bar = (monitor: number) =>
  Widget.Window({
    monitor,
    name: `bar-${monitor}`,
    class_name: "bar",
    margins: [0, 0],
    exclusivity: "exclusive",
    anchor: ["top", "left", "right"],

    child: Widget.CenterBox({
      class_name: "bar-container",
      startWidget: StartWidget(),
      centerWidget: CenterWidget(),
      endWidget: EndWidget(),
    }),
  });

export default Bar;
