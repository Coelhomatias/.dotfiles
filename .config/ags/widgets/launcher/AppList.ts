import { type Application } from "types/service/applications";
import { icon, launchApp } from "lib/utils";
import options from "options";
import icons from "lib/icons";
import { Variable } from "types/variable";

const { iconSize } = options.launcher.apps;

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
    child: Widget.Box({
      children: [AppItemIcon, AppItemTextBox],
    }),
    on_clicked: () => {
      App.closeWindow("launcher");
      app.launch();
    },
  });
};

const AppList = (list: Variable<Application[]>) => {
  const SeparetedAppListItem = (app: Application) => {
    return Widget.Box({
      attribute: { app },
      vertical: true,
      children: [Widget.Separator(), AppItem(app)],
    });
  };

  return Widget.Scrollable({
    class_name: "app-list",
    hscroll: "never",
    vscroll: "always",
    css: "min-height: 300px; min-width: 300px;",
    child: Widget.Box({
      class_name: "app-list",
      vertical: true,
      children: list.bind().as((list) => list.map(SeparetedAppListItem)),
    }),
  });
};

export default AppList;
