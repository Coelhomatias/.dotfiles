import icon from "lib/icons";
import BarButton from "widgets/bar/BarButton";

const PowerButton = () =>
  BarButton({
    child: Widget.Box({
      class_name: "power",
      child: Widget.Icon({
        icon: icon.powermenu.shutdown,
        class_name: "icon",
      }),
    }),
  });

export default PowerButton;
