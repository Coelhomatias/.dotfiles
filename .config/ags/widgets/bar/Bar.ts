import Date from "./buttons/Date";
import Battery from "./buttons/Battery";
import Volume from "./buttons/Volume";
import Brightness from "./buttons/Brightness";
import SysTray from "./buttons/SysTray";
import SystemIndicators from "./buttons/SystemIndicators";
import Power from "./buttons/Power";
import Overview from "./buttons/Overview";

/* 
direction is left -> right
Left: Overview | Workspaces | Info
Middle: Notifications | Clock | Media (details on hover)
Right: Systray + WiFi + BT | Controls | Power
*/

const OverviewMenu = () =>
  Widget.Box({
    class_name: "bar-group-item overviewmenu",
    child: Overview(),
  });

const PowerMenu = () =>
  Widget.Box({
    class_name: "bar-group-item powermenu",
    child: Power(),
  });

const Controls = () =>
  Widget.Box({
    class_name: "bar-group-item controls",
    hpack: "end",
    children: [Volume(), Brightness(), Battery()],
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
      startWidget: Widget.Box({
        class_name: "bar-group",
        child: OverviewMenu(),
      }),
      centerWidget: Widget.Box({
        class_name: "bar-group",
        child: Date(),
      }),
      endWidget: Widget.Box({
        class_name: "bar-group",
        hpack: "end",
        children: [SysTray(), Controls(), PowerMenu()],
      }),
    }),
  });

export default Bar;
