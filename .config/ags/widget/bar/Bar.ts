import { clock } from "lib/variables"
import options from "options"
import Date from "./buttons/Date"

const Bar = (monitor: number) => Widget.Window({
    monitor,
    name: `bar-${monitor}`,
    anchor: ["top", "left", "right"],
    child: Widget.CenterBox({
        endWidget: Widget.Box({
            child: Date()
        })
    })

})


export default Bar