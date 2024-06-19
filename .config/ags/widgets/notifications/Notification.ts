const notifications = await Service.import("notifications");
notifications.popupTimeout = 3000;
notifications.forceTimeout = false;
notifications.cacheActions = false;
notifications.clearDelay = 100;

const Notification = () =>
  Widget.Box({
    child: Widget.Label({
      label: notifications
        .bind("notifications")
        .as((n) => `there are ${n.length} notifications`),
    }),
  });

const NotificationWindow = (monitor: number) =>
  Widget.Window({
    monitor,
    name: `notifications-${monitor}`,
    exclusivity: "exclusive",
    anchor: ["top", "right"],
    child: Notification(),
  });

export default NotificationWindow;
