import options from "options";

const PowermenuButton = () => Widget.Button({
    class_name: "powermenu-button",
    child: Widget.Icon({
        class_name: "icon",
        icon: options.bar.powermenu.icon.value
    }),
    on_primary_click: () => App.toggleWindow("powermenu")
})

export default PowermenuButton;