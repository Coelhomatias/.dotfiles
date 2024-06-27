import { opt, mkOptions } from "lib/option";
import { distro } from "lib/variables";
import { icon } from "lib/utils";
import icons from "lib/icons";

const options = mkOptions(Utils.CACHE_DIR + "/options.json", {
  transition: { duration: opt(250) },
  bar: {
    position: opt<"top" | "bottom">("top"),
    flatButtons: opt(true),
    date: {
      format: opt("%d %a %H:%M"),
    },
    workspaces: {
      count: opt(20),
    },
    powermenu: {
      icon: opt(icon("system-shutdown-symbolic"))
    },
    systray: {
      ignore: opt([
        "KDE Connect Indicator",
        "spotify-client",
      ]),
    },
    taskbar: {
      iconSize: opt(0),
      monochrome: opt(true),
      exclusive: opt(false),
    },
  },
  launcher: {
    sh: {
      max: opt(16),
    },
    apps: {
      iconSize: opt(32),
      max: opt(6),
      favorites: opt([
        ["firefox", "foot", "code", "thunar", "obsidian", "discord"],
      ]),
    },
  },
  notifications: {
    position: opt<Array<"top" | "bottom" | "left" | "right">>(["top", "right"]),
    blacklist: opt(["Spotify"]),
    width: opt(300),
    popupTimeout: opt(3000),
    forceTimeout: opt(false),
    popupTransition: opt<"slide_down" | "slide_up" | "slide_right" | "slide_left" | "crossfade" | "none">("slide_left")
  },
  overview: {
    scale: opt(9),
    workspaces: opt(7),
    monochromeIcon: opt(false),
  },
});

globalThis["options"] = options;
export default options;
