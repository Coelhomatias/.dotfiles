import Date from "./buttons/Date";
import Battery from "./buttons/Battery";
import Volume from "./buttons/Volume";
import Brightness from "./buttons/Brightness";

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
        child: Date(),
      }),
      centerWidget: Widget.Box({
        child: Date(),
      }),
      endWidget: Widget.Box({
        hpack: "end",
        children: [Volume(), Brightness(), Battery()],
      }),
    }),
  });

export default Bar;
