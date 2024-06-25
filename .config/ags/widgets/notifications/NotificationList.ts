import NotificationItem from "./Notification";

const notifications = await Service.import("notifications");

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
