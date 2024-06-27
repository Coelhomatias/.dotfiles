import icons from "lib/icons";

const OverviewButton = () =>

    Widget.Button({
        class_name: "overview-button",
        child: Widget.Icon({
            class_name: "icon",
            icon: icons.system.os
        }),
        on_primary_click: () => App.toggleWindow("overview")
    })

export default OverviewButton;