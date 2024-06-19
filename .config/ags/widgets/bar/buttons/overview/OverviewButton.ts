import icons from "lib/icons";
import BarButton from "widgets/bar/BarButton";

const OverviewButton = () =>
  BarButton({
    child: Widget.Box({
      class_name: "overview",
      child: Widget.Icon({
        class_name: "icon",
        icon: icons.system.os,
      }),
    }),
  });

export default OverviewButton;
