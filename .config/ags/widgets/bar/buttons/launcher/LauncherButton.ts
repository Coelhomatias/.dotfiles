import icons from "lib/icons";

const LauncherButton = () =>

    Widget.Button({
        class_name: "launcher-button",
        child: Widget.Icon({
            class_name: "icon",
            icon: icons.system.os
        }),
        on_primary_click: () => App.toggleWindow("launcher")
    })

export default LauncherButton;