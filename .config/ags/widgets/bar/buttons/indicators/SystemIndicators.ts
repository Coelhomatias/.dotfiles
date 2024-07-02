import icons from "lib/icons";
import { zeroPad } from "lib/utils";
import { cpu, ram, temperature, freeSpace } from "lib/variables";

const CPUIndicator = () => Widget.Box({
    class_name: "indicator cpu",
    children: [
        Widget.Icon({
            class_name: "icon",
            icon: icons.system.cpu
        }),
        Widget.Label({
            class_name: "label",
            label: cpu.bind().as(value => `${value.toFixed(1)}%`)
        })
    ],

})

const RAMIndicator = () => Widget.Box({
    class_name: "indicator ram",
    children: [
        Widget.Icon({
            class_name: "icon",
            icon: icons.system.ram
        }),
        Widget.Label({
            class_name: "label",
            label: ram.bind().as(value => `${value.toFixed(1)}%`)
        })
    ],

})

const TemperatureIndicator = () => Widget.Box({
    class_name: "indicator temperature",
    children: [
        Widget.Icon({
            class_name: "icon",
            icon: icons.system.temp
        }),
        Widget.Label({
            class_name: "label",
            label: temperature.bind().as(value => `${value}°C`)
        })
    ],

})

const FreeSpaceIndicator = () => Widget.Box({
    class_name: "indicator freeSpace",
    children: [
        Widget.Icon({
            class_name: "icon",
            icon: icons.system.freeSpace
        }),
        Widget.Label({
            class_name: "label",
            label: freeSpace.bind().as(value => `${value[1]}% (${value[0]}GiB)`)
        })
    ],

})


const SystemIndicators = () => {
    return Widget.Box({
        class_name: "indicators",
        children: [
            CPUIndicator(),
            RAMIndicator(),
            TemperatureIndicator(),
            FreeSpaceIndicator()
        ]
    })
}

export default SystemIndicators;