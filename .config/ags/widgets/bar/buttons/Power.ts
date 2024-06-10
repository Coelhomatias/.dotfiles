import icon from "lib/icons";

const Power = () =>
  Widget.Box({
    class_name: "bar-item power",
    child: Widget.Icon(icon.powermenu.shutdown),
  });

export default Power;
