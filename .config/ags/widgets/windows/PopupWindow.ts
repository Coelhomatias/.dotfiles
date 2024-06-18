import { type WindowProps } from "types/widgets/window";
import { type RevealerProps } from "types/widgets/revealer";
import { type EventBoxProps } from "types/widgets/eventbox";
import type Gtk from "gi://Gtk?version=3.0";
import options from "options";

type Transition = RevealerProps["transition"];
type Child = WindowProps["child"];

const Overlay = (name: string, child: Child) =>
  Widget.Overlay({
    child: Widget.EventBox({
      class_name: "overlay-container",
      hexpand: true,
      vexpand: true,
      css: "background-color: rgba(0, 0, 0, 0.5);",
      can_focus: false,
      setup: (box) => {
        box.on("button-press-event", () => App.toggleWindow(name));
      },
    }),
    overlay: child,
  });

const PopupWindow = (name: string, child: Child) =>
  Widget.Window({
    name,
    visible: false,
    class_name: "popup-window",
    layer: "top",
    keymode: "on-demand",
    anchor: ["top", "bottom", "left", "right"],
    child: Overlay(name, child),
  });

export default PopupWindow;
