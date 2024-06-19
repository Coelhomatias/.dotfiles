import Fuse from "fuse.js";
import type { IFuseOptions, FuseResult } from "fuse.js";

export const newSearch = <T>(list: T[], options: IFuseOptions<T>) => {
  const fuse = new Fuse(list, options);
  return fuse;
};
