import { type Application } from "types/service/applications";
import { icon } from "lib/utils";
import options from "options";
import icons from "lib/icons";
import { Variable } from "types/variable";
import { type FlowBoxChild } from "types/@girs/gtk-3.0/gtk-3.0.cjs";

const { iconSize } = options.launcher.apps;
const apps = await Service.import("applications");
const { query } = apps;

const FavoriteItem = (app: Application) =>
  Widget.Button({
    hexpand: true,
    tooltip_text: app.name,
    on_clicked: () => {
      App.closeWindow("launcher");
      app.launch();
    },
    child: Widget.Icon({
      size: iconSize.bind(),
      icon: icon(app.icon_name, icons.fallback.executable),
    }),
  });

const Favorites = () => {};

const AppItem = (app: Application) => {
  const AppItemTitle = Widget.Label({
    class_name: "title",
    label: app.name,
    hexpand: true,
    xalign: 0,
    vpack: "center",
    truncate: "end",
  });

  const AppItemDescription = Widget.Label({
    class_name: "description",
    label: app.description || "",
    hexpand: true,
    wrap: true,
    max_width_chars: 30,
    xalign: 0,
    justification: "left",
    vpack: "center",
  });

  const AppItemIcon = Widget.Icon({
    icon: icon(app.icon_name, icons.fallback.executable),
    size: iconSize.bind(),
  });

  const AppItemTextBox = Widget.Box({
    vertical: true,
    vpack: "center",
    children: app.description
      ? [AppItemTitle, AppItemDescription]
      : [AppItemTitle],
  });

  return Widget.Button({
    class_name: "app-item",
    attribute: { app },
    hexpand: true,
    child: Widget.Box({
      children: [AppItemIcon, AppItemTextBox],
    }),
    on_clicked: () => {
      App.closeWindow("launcher");
      app.launch();
    },
  });
};

const AppList = (list: Variable<Map<string, number>>) => {
  const SeparetedAppListItem = (app: Application) => {
    return Widget.Box(
      {
        vertical: true,
        attribute: { app },
        can_focus: false,
        css: "padding: 10px;",
      },
      AppItem(app)
    );
  };

  const filterFunc = (item: FlowBoxChild) => {
    const appWidget = item.get_child() as ReturnType<
      typeof SeparetedAppListItem
    >;

    if (!appWidget) return false;

    return list.value.has(appWidget.attribute.app.name);
  };

  const sortFunc = (a: FlowBoxChild, b: FlowBoxChild) => {
    const appA = (a.get_child() as ReturnType<typeof SeparetedAppListItem>)
      .attribute.app;
    const appB = (b.get_child() as ReturnType<typeof SeparetedAppListItem>)
      .attribute.app;

    return list.value.get(appA.name)! - list.value.get(appB.name)!;
  };

  const appFlowBox = Widget.FlowBox({
    class_name: "app-list",
    vexpand: true,
    setup: (self) => {
      self.hook(
        apps,
        (self) => {
          self.get_children().forEach((child) => child.destroy());
          query("").map((app) => self.insert(SeparetedAppListItem(app), -1));
          self.get_children().forEach((child) => child.set_can_focus(false));
        },
        "notify::frequents"
      );
      self.set_sort_func(sortFunc);
      self.set_filter_func(filterFunc);

      self.hook(
        list,
        () => {
          self.invalidate_filter();
          self.invalidate_sort();
        },
        "changed"
      );
    },
  });

  return Widget.Scrollable({
    class_name: "app-list",
    hscroll: "never",
    vscroll: "always",
    css: "min-height: 300px; min-width: 600px;",
    child: appFlowBox,
  });
};

export default AppList;
