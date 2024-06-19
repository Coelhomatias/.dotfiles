import Fuse from "fuse.js";
import type { FuseOptions } from "fuse.js";

export const newSearch = <T>(list: T[], options: FuseOptions) => {
  const fuse = new Fuse(list, options);
  return fuse;
};
