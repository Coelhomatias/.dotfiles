import Date from "./buttons/Date"

const Bar = (monitor: number) => Widget.Window({
    monitor,
    name: `bar-${monitor}`,
    exclusivity: "exclusive",
    anchor: ["top", "left", "right"],
    child: Widget.CenterBox({
        endWidget: Widget.Box({
            child: Date()
        })
    })

})


export default Bar