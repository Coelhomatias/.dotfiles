import { clock } from "lib/variables";
import PanelButton from "widgets/bar/buttons/PanelButton";
import options from "options";

const { format, action } = options.bar.date;
const time = Utils.derive([clock, format], (c, f) => c.format(f) || "");

const NerdIcon = () =>
  Widget.Label({
    justification: "center",
    label: "",
    class_name: "icon",
  });

const DateLabel = () =>
  Widget.Label({
    label: time.bind(),
    justification: "center",
  });

const Date = () =>
  Widget.Box({
    class_name: "bar-item date",
    children: [NerdIcon(), DateLabel()],
  });

export default Date;
