import { opt, mkOptions } from "lib/option";
import { distro } from "lib/variables";
import { icon } from "lib/utils";
import icons from "lib/icons";

const options = mkOptions(Utils.CACHE_DIR + "/options.json", {
  bar: {
    date: {
      format: opt("%d %a %H:%M"),
    },
    workspaces: {
      count: opt(20),
    },
  },
});

globalThis["options"] = options;
export default options;
