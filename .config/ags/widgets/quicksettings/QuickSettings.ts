import PopupWindow from "widgets/windows/PopupWindow";
import Brightness from "./widgets/Brightness";

const SliderGroup = () => Widget.Box({
    vertical: true,
    children: [Brightness()]
})


const QuickSettings = () => {
    return Widget.Box({
        vertical: true,
        css: "min-width: 200px;",
        children: [
            SliderGroup(),
        ],
    })
}

export default () =>
    PopupWindow({
        name: "quicksettings",
        child: QuickSettings(),
        layout: "start-end",
        transition: "slide_down",
    });