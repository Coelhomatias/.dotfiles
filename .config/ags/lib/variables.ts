import GLib from "gi://GLib";
// import options from "options"
//
// const intval = options.system.fetchInterval.value
// const tempPath = options.system.temperature.value

const intval = 2000;

export const clock = Variable(GLib.DateTime.new_now_local(), {
  poll: [1000, () => GLib.DateTime.new_now_local()],
});

export const uptime = Variable(0, {
  poll: [
    60_000,
    "cat /proc/uptime",
    (line) => Number.parseInt(line.split(".")[0]) / 60,
  ],
});

export const distro = {
  id: GLib.get_os_info("ID"),
  logo: GLib.get_os_info("LOGO"),
};

const divide = ([total, free]: string[]) =>
  Number.parseInt(free) / Number.parseInt(total);

// export const downspeed = Variable(0, {
//   poll: [
//     intval,
//     "ifstat -t 2 -j",
//     (out) => {
//       const data = JSON.parse(out);
//       const interfaces = Object.keys(data.kernel);

//       return 0;
//     },
//   ],
// });

export const cpu = Variable(0, {
  poll: [
    intval,
    "top -bn1",
    (output) => {
      const lines = output.split("\n");
      const cpuLine = lines.find((line) => line.startsWith("%Cpu(s):"));
      if (!cpuLine) return 0;

      const cpu = cpuLine.split(",");
      const cpuUsage = cpu[3].split(" ")[1];
      return 100.0 - Number.parseFloat(cpuUsage);
    }
  ],
});

export const ram = Variable(0, {
  poll: [
    intval,
    "free",
    (out) => {
      const line = out.split("\n").find(line => line.includes('Mem:'));
      if (!line) return 0;

      const [total, used] = line.split(/\s+/).splice(1, 2);
      return divide([total, used]) * 100;
    },],
});

export const temperature = Variable(0, {
  poll: [
    intval,
    "sensors",
    (out) => {
      const line = out.split("\n").find(line => line.includes('Package id 0:'));
      if (!line) return 0;

      const temp = line.split(/\s+/)[3].slice(1, -2);
      return Number.parseInt(temp);
    },
  ],
});

export const freeSpace = Variable([0, 0], {
  poll: [
    intval,
    "df -h /",
    (out) => out.split("\n")[1].split(/\s+/).slice(3, 5).map((n) => Number.parseInt(n.slice(0, -1))),
  ],
});

// export const freeSpacePercent = Variable(0, {
//   poll: [
//     intval,
//     "df -h / | awk 'NR==2 {print 100-$5}' | tr -d '%'",
//     (n) => {
//       return Number.parseInt(n);
//     },
//   ],
// });
