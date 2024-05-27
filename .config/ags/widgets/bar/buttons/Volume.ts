import { zeroPad } from "lib/utils";
const audio = await Service.import("audio");

const icon = {
  muted: "",
  high: "",
  low: "",
};

const Volume = () =>
  Widget.Box({
    class_name: "bar-item volume",
    children: [
      Widget.Icon({
        icon: "audio-volume-medium-symbolic",
        class_name: "icon with-text",
      }),
      Widget.Label().hook(audio, (self) => {
        self.label = `${zeroPad(Math.round(audio.speaker.volume * 100), 2)}%`;
      }),
    ],
  });

export default Volume;
