import icons from "lib/icons";
import PopupWindow from "widgets/windows/PopupWindow";
import Gtk from "gi://Gtk?version=3.0";
import { newSearch } from "lib/search";
import AppList from "./AppList";
import { arrayToMap } from "lib/utils";

const apps = await Service.import("applications");
const { query } = apps;

const Launcher = () => {
  const fuse = newSearch(query(""), { keys: ["name", "description"] });
  const appListMap = Variable(
    arrayToMap(query(""), undefined, undefined, "value")
  );

  const SearchBox = () =>
    Widget.Entry({
      hexpand: true,
      primary_icon_name: icons.ui.search,
      placeholder_text: "Search",
      on_accept: () => {
        const [app] = appListMap.value.keys();
        App.closeWindow("launcher");
        app?.launch();
      },
      on_change: ({ text }) => {
        if (!text) {
          appListMap.value = arrayToMap(
            query(""),
            undefined,
            undefined,
            "value"
          );
          return;
        }
        const results = fuse.search(text).map((result) => result.item);
        appListMap.value = arrayToMap(results, undefined, undefined, "value");
      },
    });

  return Widget.Box({
    class_name: "launcher",
    hexpand: false,
    vertical: true,
    halign: Gtk.Align.CENTER,
    valign: Gtk.Align.CENTER,
    children: [SearchBox(), AppList(appListMap)],
  });
};

export default () => PopupWindow("launcher", Launcher());
