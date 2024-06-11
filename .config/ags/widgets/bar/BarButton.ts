import { ButtonProps } from "types/widgets/button"



const BarButton = ({setup, class_name, ...rest}: ButtonProps) => Widget.Button({
    setup: setup,
    class_name: "bar-button",
    ...rest
})

export default BarButton;