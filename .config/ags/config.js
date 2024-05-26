const entry = App.configDir + "/main.ts";
const scss = App.configDir + "/style/main.scss";
const outdir = "/tmp/ags/js";
const cssdir = "/tmp/ags/style.css";

try {
  await Utils.execAsync([
    "bun",
    "build",
    entry,
    "--outdir",
    outdir,
    "--external",
    "resource://*",
    "--external",
    "gi://*",
    "--external",
    "file://*",
  ]);
  await import(`file://${outdir}/main.js`);
  await Utils.execAsync(["sass", scss, cssdir]);
  App.applyCss(cssdir);
  Utils.monitorFile(
    // directory that contains the scss files
    `${App.configDir}/style`,

    // reload function
    function () {
      Utils.exec(`sass ${scss} ${cssdir}`);
      App.resetCss();
      App.applyCss(cssdir);
    }
  );
} catch (error) {
  console.error(error);
  App.quit();
}
