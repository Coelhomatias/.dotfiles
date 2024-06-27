import icons from "lib/icons";
import PopupWindow from "widgets/windows/PopupWindow";

type Action = { desc: string, action: string, icon: string }

const actions: Action[] = [
    { desc: "Sleep", action: "systemctl suspend", icon: icons.powermenu.sleep },
    { desc: "Reboot", action: "systemctl reboot", icon: icons.powermenu.reboot },
    { desc: "Logout", action: "pkill Hyprland", icon: icons.powermenu.logout },
    { desc: "Shutdown", action: "shutdown now", icon: icons.powermenu.shutdown }
]

const SysButton = (action: Action) => Widget.Button({
    class_name: "system-button",
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Icon({ class_name: "icon", icon: action.icon }),
            Widget.Label(action.desc),
        ],
    }),
    on_clicked: () => Utils.exec(action.action)
})

const Powermenu = () => Widget.Box({
    class_name: "powermenu",
    children: actions.map(SysButton)
})

export default () => PopupWindow({
    name: "powermenu",
    layout: "center-center",
    transition: "crossfade",
    child: Powermenu()
})