import icons from "lib/icons";
import PopupWindow from "widgets/windows/PopupWindow";
import Gtk from "gi://Gtk?version=3.0";
import { searchResults } from "lib/search";
import AppList from "./AppList";

const apps = await Service.import("applications");
const { query } = apps;

const list = Variable(query(""));
apps.connect("notify::frequents", () => (list.value = query("")));

const SearchBox = () =>
  Widget.Entry({
    hexpand: true,
    primary_icon_name: icons.ui.search,
    placeholder_text: "Search",
    on_accept: ({ text }) => {
      apps.reload();
      console.log("Hello from on_accept");
      console.log("Applications:", apps.list.length);
    },
  });

const Launcher = () =>
  Widget.Box({
    class_name: "launcher",
    hexpand: false,
    vertical: true,
    halign: Gtk.Align.CENTER,
    valign: Gtk.Align.CENTER,
    children: [SearchBox(), AppList(list)],
  });

export default () => PopupWindow("launcher", Launcher());
