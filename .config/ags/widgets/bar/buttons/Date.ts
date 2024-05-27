import { clock } from "lib/variables";
import Icon from "widgets/common/Icon";
import options from "options";

const { format } = options.bar.date;
const time = Utils.derive([clock, format], (c, f) => c.format(f) || "");

const DateLabel = () =>
  Widget.Label({
    label: time.bind(),
    justification: "center",
  });

const Date = () =>
  Widget.Box({
    class_name: "bar-item date",
    children: [Icon("󰃰"), DateLabel()],
  });

export default Date;
