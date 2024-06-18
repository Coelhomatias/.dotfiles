import icons from "lib/icons";
import PopupWindow from "widgets/windows/PopupWindow";
import Gtk from "gi://Gtk?version=3.0";
import { searchResults } from "lib/search";

const apps = await Service.import("applications");
const { query } = apps;

const SearchBox = () =>
  Widget.Entry({
    hexpand: true,
    primary_icon_name: icons.ui.search,
    placeholder_text: "Search",
    on_accept: ({ text }) => {
      console.log(searchResults(text || "", query(""), { keys: ["name"] }));
    },
  });

const AppList = () =>
  Widget.Box({
    class_name: "app-list",
    vertical: true,
    children: [
      Widget.Label({ label: "AppList" }),
      Widget.Separator(),
      Widget.Label({ label: "AppList" }),
      Widget.Separator(),
      Widget.Label({ label: "AppList" }),
      Widget.Separator(),
      Widget.Label({ label: "AppList" }),
    ],
  });

const Launcher = () =>
  Widget.Box({
    class_name: "launcher",
    hexpand: false,
    vertical: true,
    halign: Gtk.Align.CENTER,
    valign: Gtk.Align.CENTER,
    children: [SearchBox(), AppList()],
  });

export default () => PopupWindow("launcher", Launcher());
