import { clock } from "lib/variables";
import icons from "lib/icons";

const format = Variable("%d %a %H:%M");
const time = Utils.derive([clock, format], (c, f) => c.format(f) || "");

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

const Date = () =>
  Widget.Box({
    class_name: "bar-item date",
    children: [DateIcon(), DateLabel()],
  });

export default Date;
