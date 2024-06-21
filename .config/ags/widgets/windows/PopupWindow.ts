import { type WindowProps } from "types/widgets/window";
import { type RevealerProps } from "types/widgets/revealer";
import Gtk from "types/@girs/gtk-3.0/gtk-3.0";
import options from "options";

type Transition = RevealerProps["transition"];
type Layout =
  | "center-center"
  | "center-end"
  | "center-start"
  | "start-center"
  | "start-end"
  | "start-start"
  | "end-center"
  | "end-end"
  | "end-start";

type PopupWindowProps = Omit<WindowProps, "name" | "child"> & {
  name: string;
  layout?: Layout;
  transition?: Transition;
  child: Gtk.Widget;
};
type MyRevealerProps = {
  name: string;
  child: Gtk.Widget;
  transition: Transition;
  layout: Layout;
};

type CoordinatePair = ["center" | "start" | "end", "center" | "start" | "end"];

const Revealer = ({ name, child, transition, layout }: MyRevealerProps) => {
  const vertical = transition == "slide_down" || transition == "slide_up";

  const coordinates = layout.split("-") as CoordinatePair;

  const outterVPack = vertical ? "fill" : coordinates[0];
  const outterHPack = vertical ? coordinates[1] : "fill";

  const innerVPack = vertical ? coordinates[0] : "fill";
  const innerHPack = vertical ? "fill" : coordinates[1];

  const widgetLocation = coordinates[1] + "_widget";

  return Widget.CenterBox({
    vpack: outterVPack,
    hpack: outterHPack,
    hexpand: false,
    vertical: false,
    setup: (self) =>
      (self[widgetLocation] = Widget.Revealer({
        hpack: innerHPack,
        vpack: innerVPack,
        transition: transition,
        transition_duration: options.transition.duration.bind(),
        visible: false,
        child: child,
        setup: (self) =>
          self.hook(App, (_, wname, visible) => {
            if (wname === name) self.reveal_child = visible;
          }),
      })),
  });
};

const PopupWindow = ({
  name,
  child,
  layout = "center-center",
  transition,
  exclusivity = "ignore",
  ...props
}: PopupWindowProps) =>
  Widget.Window<Gtk.Widget>({
    name,
    exclusivity,
    visible: false,
    class_names: [name, "popup-window"],
    layer: "overlay",
    keymode: "on-demand",
    anchor: ["top", "bottom", "left", "right"],
    child: Revealer({ name, child, transition, layout }),
    ...props,
    setup: (w) => {
      w.keybind("Escape", () => App.closeWindow(name));
      w.on("button-press-event", () => App.closeWindow(name));
    },
  });

export default PopupWindow;
