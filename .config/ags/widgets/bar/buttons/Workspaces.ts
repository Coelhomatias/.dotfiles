import options from "options";
import { sh, range } from "lib/utils";

const hyprland = await Service.import("hyprland");

const dispatch = (arg: string | number) => {
  sh(`hyprctl dispatch workspace ${arg}`);
};

const Workspaces = (ws: number) =>
  Widget.Box({
    class_name: "bar-item workspace",
    children: range(ws || 20).map((i) =>
      Widget.Label({
        attribute: i,
        vpack: "center",
        label: `${i}`,
        setup: (self) =>
          self.hook(hyprland, () => {
            self.toggleClassName("active", hyprland.active.workspace.id === i);
            self.toggleClassName(
              "occupied",
              (hyprland.getWorkspace(i)?.windows || 0) > 0
            );
          }),
      })
    ),
    setup: (box) => {
      if (ws === 0) {
        box.hook(hyprland.active.workspace, () =>
          box.children.map((btn) => {
            btn.visible = hyprland.workspaces.some(
              (ws) => ws.id === btn.attribute
            );
          })
        );
      }
    },
  });

export default Workspaces;
