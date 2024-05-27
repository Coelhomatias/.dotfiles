export default (label: string, withText: boolean = true) =>
  Widget.Label({
    justification: "center",
    label: label,
    class_name: `icon ${withText ? "with-text" : ""}`,
  });
