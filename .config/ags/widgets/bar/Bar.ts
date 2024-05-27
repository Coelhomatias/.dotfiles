import Date from "./buttons/Date";
import Battery from "./buttons/Battery";

const Bar = (monitor: number) =>
  Widget.Window({
    monitor,
    name: `bar-${monitor}`,
    class_name: "bar",
    margins: [0, 0],
    exclusivity: "exclusive",
    anchor: ["top", "left", "right"],

    child: Widget.CenterBox({
      css: "min-width: 2px; min-height: 2px;",
      class_name: "bar-container",
      startWidget: Widget.Box({
        child: Date(),
      }),
      centerWidget: Widget.Box({
        child: Date(),
      }),
      endWidget: Widget.Box({
        hpack: "end",
        child: Battery(),
      }),
    }),
  });

export default Bar;
