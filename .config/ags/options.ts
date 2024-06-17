import { opt, mkOptions } from "lib/option";
import { distro } from "lib/variables";
import { icon } from "lib/utils";
import icons from "lib/icons";

const options = mkOptions(Utils.CACHE_DIR + "/options.json", {
  transition: opt(200),
  bar: {
    date: {
      format: opt("%d %a %H:%M"),
    },
    workspaces: {
      count: opt(20),
    },
  },
  launcher: {
    sh: {
      max: opt(16),
    },
    apps: {
      iconSize: opt(62),
      max: opt(6),
      favorites: opt([
        ["firefox", "foot", "code", "thunar", "obsidean", "discord"],
      ]),
    },
  },
});

globalThis["options"] = options;
export default options;
