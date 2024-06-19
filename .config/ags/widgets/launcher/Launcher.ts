import icons from "lib/icons";
import PopupWindow from "widgets/windows/PopupWindow";
import Gtk from "gi://Gtk?version=3.0";
import { newSearch } from "lib/search";
import AppList from "./AppList";

const apps = await Service.import("applications");
const { query } = apps;

const Launcher = () => {
  const initialList = Variable(query(""));
  const filtered = Variable(query(""));
  let fuse = newSearch(initialList.value, { keys: ["name", "description"] });
  apps.connect("notify::frequency", () => fuse.setCollection(query("")));

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
      on_change: ({ text }) => {
        if (!text) {
          filtered.value = query("");
        } else {
          filtered.value = fuse.search(text || "").map((result) => result.item);
        }
      },
    });

  return Widget.Box({
    class_name: "launcher",
    hexpand: false,
    vertical: true,
    halign: Gtk.Align.CENTER,
    valign: Gtk.Align.CENTER,
    children: [SearchBox(), AppList(initialList, filtered)],
  });
};

export default () => PopupWindow("launcher", Launcher());
