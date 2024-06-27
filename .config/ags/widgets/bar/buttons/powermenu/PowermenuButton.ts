import icons from "lib/icons";

const PowermenuButton = () => Widget.Button({
    class_name: "powermenu-button",
    child: Widget.Icon({
        class_name: "icon",
        icon: icons.powermenu.shutdown
    }),
    on_primary_click: () => App.toggleWindow("powermenu")
})

export default PowermenuButton;