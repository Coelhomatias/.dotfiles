import { opt, mkOptions } from "lib/option";
import { distro } from "lib/variables";
import { icon } from "lib/utils";
import icons from "lib/icons";

const options = mkOptions(Utils.CACHE_DIR + "/options.json", {
  transition: { duration: opt(2500) },
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
    monochromeIcon: opt(true),
  },
});

globalThis["options"] = options;
export default options;
