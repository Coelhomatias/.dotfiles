import { BoxProps } from "types/widgets/box";

const ButtonGroup = ({ class_name, ...rest }: BoxProps) =>
  Widget.Box({
    class_name: `button-group ${class_name || ""}`.trim(),
    ...rest,
  });

export default ButtonGroup;
