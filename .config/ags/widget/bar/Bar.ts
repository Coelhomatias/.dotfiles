import { clock } from "lib/variables"
import options from "options"
import type Gtk from "gi://Gtk?version=3.0"

const { format } = options.bar.date
const time = Utils.derive([clock, format], (c, f) => c.format(f) || "")

const Bar = (monitor: number) => Widget.Window<Gtk.Widget>({
    monitor,
    name: `bar-${monitor}`,
    anchor: ["top", "left", "right"],
    child: Widget.Label({label: time.bind(), justification: "center"})

})


export default Bar