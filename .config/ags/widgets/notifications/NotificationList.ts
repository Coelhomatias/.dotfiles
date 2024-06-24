import { type Hints, Action } from "types/service/notifications";

import NotificationItem from "./Notification";
import { Notification } from "resource:///com/github/Aylur/ags/service/notifications.js";

const notifications = await Service.import("notifications");

const hint: Hints = {};

const actions: string[] = ["Click", "Notification"];

const notExample = new Notification(
  "Teste App",
  2,
  "arch-symbolic",
  "This is the title!",
  "This is the body of a test notification",
  actions,
  hint,
  true
);

const NotificationList = (monitor: number) => {
  return Widget.Window({
    monitor,
    name: `notification-list-${monitor}`,
    class_name: "notification-list",
    margins: [0, 0],
    exclusivity: "exclusive",
    anchor: ["top", "right"],
    child: Widget.Box({
      vertical: true,
      spacing: 10,
      css: "padding: 1px;",
      setup: (self) =>
        self.hook(
          notifications,
          (self, id: number) => {
            if (
              id == undefined ||
              notifications.dnd ||
              notifications.notifications.length <= 0
            )
              return;
            console.log("heeeere");
            // console.log(notifications.popups.map(NotificationItem));
            const n = notifications.getNotification(id)!;
            console.log(n);
            self.children = [NotificationItem(n), ...self.children];
          },
          "notified"
        ),
    }),
  });
};

export default NotificationList;

// (self, id: number) =>
//     self.add(NotificationItem(notifications.getNotification(id)!)),
