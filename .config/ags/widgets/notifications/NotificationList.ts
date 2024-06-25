import options from "options";
import NotificationItem from "./Notification";

const notifications = await Service.import("notifications");
notifications.popupTimeout = options.notifications.popupTimeout.value;
notifications.forceTimeout = options.notifications.forceTimeout.value;

const NotificationList = (monitor: number) => {
  return Widget.Window({
    monitor,
    name: `notification-list-${monitor}`,
    class_name: "notification-window",
    margins: [0, 0],
    exclusivity: "exclusive",
    anchor: ["top", "right"],
    child: Widget.Box({
      vertical: true,
      spacing: 10,
      css: "padding: 1px;",
      class_name: "notification-list",
      setup: (self) =>
        self.hook(
          notifications,
          (self, id: number) => {
            if (
              id == undefined ||
              notifications.dnd ||
              notifications.popups.length <= 0
            )
              return;
            const n = notifications.getNotification(id)!;
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
