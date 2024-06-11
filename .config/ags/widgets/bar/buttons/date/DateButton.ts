import BarButton from "widgets/bar/BarButton";
import { clock } from "lib/variables";
import icons from "lib/icons";
import options from "options";

const time = Utils.derive(
  [clock, options.bar.date.format],
  (c, f) => c.format(f) || ""
);

const DateIcon = () =>
  Widget.Icon({
    class_name: "icon with-text",
    icon: icons.calendar.time,
  });

const DateLabel = () =>
  Widget.Label({
    label: time.bind(),
    justification: "center",
  });

const DateButton = () =>
  BarButton({
    child: Widget.Box({
      class_name: "date",
      children: [DateIcon(), DateLabel()],
    }),
  });

export default DateButton;
