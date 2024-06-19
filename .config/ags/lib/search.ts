import Fuse from "fuse.js";
import type { FuseOptions } from "fuse.js";

export const searchResults = (list: Array<any>, fuseOptions: FuseOptions) => {
  const fuse = new Fuse(list, fuseOptions);
  return fuse.search;
};
