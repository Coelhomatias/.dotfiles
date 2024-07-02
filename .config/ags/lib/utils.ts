/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Application } from "types/service/applications";
import icons, { substitutes } from "./icons";
import Gtk from "gi://Gtk?version=3.0";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib?version=2.0";

export type Binding<T> = import("types/service").Binding<any, any, T>;

/**
 * @returns substitute icon || name || fallback icon
 */
export function icon(name: string | null, fallback = icons.missing) {
  if (!name) return fallback || "";

  if (GLib.file_test(name, GLib.FileTest.EXISTS)) return name;

  const icon = substitutes[name] || name;
  if (Utils.lookUpIcon(icon)) return icon;

  console.log(`no icon substitute "${icon}" for "${name}", fallback: "${fallback}"`);
  return fallback;
}

/**
 * @returns execAsync(["bash", "-c", cmd])
 */
export async function bash(
  strings: TemplateStringsArray | string,
  ...values: unknown[]
) {
  const cmd =
    typeof strings === "string"
      ? strings
      : strings.flatMap((str, i) => str + `${values[i] ?? ""}`).join("");

  return Utils.execAsync(["bash", "-c", cmd]).catch((err) => {
    console.error(cmd, err);
    return "";
  });
}

/**
 * @returns execAsync(cmd)
 */
export async function sh(cmd: string | string[]) {
  return Utils.execAsync(cmd).catch((err) => {
    console.error(typeof cmd === "string" ? cmd : cmd.join(" "), err);
    return "";
  });
}

export const zeroPad = (num: number | string, places: number) =>
  String(num).padStart(places, "0");

export function forMonitors(widget: (monitor: number) => Gtk.Window) {
  const n = Gdk.Display.get_default()?.get_n_monitors() || 1;
  return range(n, 0).flatMap(widget);
}

/**
 * @returns [start...length]
 */
export function range(length: number, start = 1) {
  return Array.from({ length }, (_, i) => i + start);
}

/**
 * @returns true if all of the `bins` are found
 */
export function dependencies(...bins: string[]) {
  const missing = bins.filter((bin) =>
    Utils.exec({
      cmd: `which ${bin}`,
      out: () => false,
      err: () => true,
    })
  );

  if (missing.length > 0) {
    console.warn(Error(`missing dependencies: ${missing.join(", ")}`));
    Utils.notify(`missing dependencies: ${missing.join(", ")}`);
  }

  return missing.length === 0;
}

/**
 * run app detached
 */
export function launchApp(app: Application) {
  const exe = app.executable
    .split(/\s+/)
    .filter((str) => !str.startsWith("%") && !str.startsWith("@"))
    .join(" ");

  bash(`${exe} &`);
  app.frequency += 1;
}

/**
 * to use with drag and drop
 */
export function createSurfaceFromWidget(widget: Gtk.Widget) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cairo = imports.gi.cairo as any;
  const alloc = widget.get_allocation();
  const surface = new cairo.ImageSurface(
    cairo.Format.ARGB32,
    alloc.width,
    alloc.height
  );
  const cr = new cairo.Context(surface);
  cr.setSourceRGBA(255, 255, 255, 0);
  cr.rectangle(0, 0, alloc.width, alloc.height);
  cr.fill();
  widget.draw(cr);
  return surface;
}

export function arrayToMap<T, K extends keyof T, V extends keyof T>(
  array: T[],
  key: K,
  value: V
): Map<T[K], T[V]>;

export function arrayToMap<T, V extends keyof T>(
  array: T[],
  key: undefined,
  value: V,
  useIndex: "key"
): Map<number, T[V]>;

export function arrayToMap<T, K extends keyof T>(
  array: T[],
  key: K,
  value: undefined,
  useIndex: "value"
): Map<T[K], number>;

export function arrayToMap<T>(
  array: T[],
  key: undefined,
  value: undefined,
  useIndex: "value"
): Map<T, number>;

export function arrayToMap<T>(
  array: T[],
  key: undefined,
  value: undefined,
  useIndex: "key"
): Map<number, T>;

/**
 * @returns Map
 * @param array - array of objects
 * @param key - key to use as map key
 * @param value - key to use as map value
 * @param useIndex - use index as key or value
 */

export function arrayToMap<T, K extends keyof T, V extends keyof T>(
  array: T[],
  key?: K,
  value?: V,
  useIndex?: "key" | "value"
): Map<T[K] | number | T, T[V] | number | T> {
  if (!useIndex) {
    if (key === undefined || value === undefined) {
      throw new Error(
        "Key and value parameters must be provided if useIndex is not provided"
      );
    }
    return array.reduce((map, item) => {
      map.set(item[key], item[value]);
      return map;
    }, new Map<T[K], T[V]>());
  } else if (useIndex === "key") {
    if (value === undefined) {
      return array.reduce((map, item, index) => {
        map.set(index, item);
        return map;
      }, new Map<number, T>());
    }
    return array.reduce((map, item, index) => {
      map.set(index, item[value]);
      return map;
    }, new Map<number, T[V]>());
  } else if (useIndex === "value") {
    if (key === undefined) {
      return array.reduce((map, item, index) => {
        map.set(item, index);
        return map;
      }, new Map<T, number>());
    }
    return array.reduce((map, item, index) => {
      map.set(item[key], index);
      return map;
    }, new Map<T[K], number>());
  } else {
    throw new Error("Invalid useIndex value");
  }
}

const list = [
  { index: 0, value: "zero" },
  { index: 1, value: "one" },
];
const map = arrayToMap(list, "index", "value");
