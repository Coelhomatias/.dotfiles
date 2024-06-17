import { type WindowProps } from "types/widgets/window";
import { type RevealerProps } from "types/widgets/revealer";
import { type EventBoxProps } from "types/widgets/eventbox";
import type Gtk from "gi://Gtk?version=3.0";
import options from "options";

type Transition = RevealerProps["transition"];
type Child = WindowProps["child"];

export const Padding = (
  name: string,
  { css = "", hexpand = true, vexpand = true }: EventBoxProps = {}
) =>
  Widget.EventBox({
    hexpand,
    vexpand,
    can_focus: false,
    child: Widget.Box({ css }),
    setup: (w) => w.on("button-press-event", () => App.toggleWindow(name)),
  });

const PopupRevealer = (
  name: string,
  child: Child,
  transition: Transition = "slide_down"
) =>
  Widget.Box(
    { css: "padding: 1px;" },
    Widget.Revealer({
      transition,
      child: Widget.Box({
        class_name: "window-content",
        child,
      }),
      transitionDuration: options.transition.bind(),
      setup: (self) =>
        self.hook(App, (_, wname, visible) => {
          if (wname === name) self.reveal_child = visible;
        }),
    })
  );

const PopupWindow = (name: string, child: Child) =>
  Widget.Window({
    name,
    class_name: "popup-window",
    exclusivity: "ignore",
    anchor: ["top", "bottom", "left", "right"],
    child: Widget.Box({
      class_name: "popup-window-container",
      children: [
        Widget.Box({
          hexpand: false,
          vertical: true,
          children: [Padding(name), PopupRevealer(name, child)],
        }),
      ],
    }),
  });

export default PopupWindow;
