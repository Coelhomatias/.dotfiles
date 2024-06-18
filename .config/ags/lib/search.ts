import Fuse from "fuse.js";
import type { FuseOptions } from "fuse.js";

export const searchResults = (
  query: string,
  list: Array<any>,
  fuseOptions: FuseOptions
) => {
  const fuse = new Fuse(list, fuseOptions);
  return fuse.search(query);
};
