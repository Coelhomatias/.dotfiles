import icons from "lib/icons";
import { type Notification, Action } from "types/service/notifications";
import GLib from "gi://GLib";
import options from "options";

const timeFormat = (time: number, format = "%H:%M") =>
  GLib.DateTime.new_from_unix_local(time).format(format);

const NotificationIcon = ({ app_entry, app_icon, image }: Notification) => {
  if (image) {
    return Widget.Box({
      vpack: "start",
      hexpand: false,
      class_name: "icon img",
      css: `
              background-image: url("${image}");
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              min-width: 78px;
              min-height: 78px;
          `,
    });
  }

  let icon = icons.fallback.notification;

  if (Utils.lookUpIcon(app_icon)) icon = app_icon;
  else if (Utils.lookUpIcon(app_entry || "")) icon = app_entry || "";

  return Widget.Box({
    vpack: "start",
    hexpand: false,
    class_name: "icon",
    css: `
          min-width: 78px;
          min-height: 78px;
      `,
    child: Widget.Icon({
      icon,
      size: 58,
      hpack: "center",
      hexpand: true,
      vpack: "center",
      vexpand: true,
    }),
  });
};

const NotificationContent = ({ summary, body, time, close }: Notification) => {
  const title = Widget.Label({
    class_name: "title",
    hexpand: true,
    vpack: "start",
    justification: "left",
    max_width_chars: 24,
    truncate: "end",
    wrap: true,
    label: summary.trim(),
  });

  const notificationTime = Widget.Label({
    class_name: "time",
    vpack: "start",
    label: timeFormat(time),
  });

  const closeButton = Widget.Button({
    class_name: "close-button",
    vpack: "start",
    child: Widget.Icon("window-close-symbolic"),
    on_clicked: close,
  });

  const description = Widget.Label({
    class_name: "description",
    hexpand: true,
    justification: "left",
    label: body.trim(),
    max_width_chars: 24,
    wrap: true,
  });

  return Widget.Box({
    vertical: true,
    class_name: "content",
    children: [
      Widget.Box({}, title, notificationTime, closeButton),
      description,
    ],
  });
};

const NotificationItem = (notification: Notification) => {
  let startup = true;

  const notificationActions =
    notification.actions.length > 0
      ? Widget.Revealer({
        transition: "slide_down",
        child: Widget.Box({
          class_name: "actions",
          children: notification.actions.map((action) =>
            Widget.Button({
              class_name: "action-button",
              on_clicked: () => notification.invoke(action.id),
              hexpand: true,
              child: Widget.Label(action.label),
            })
          ),
        }),
      })
      : null;

  const eventBox = Widget.EventBox({
    child: Widget.Box({
      width_request: options.notifications.width.value,
      vertical: true,
      css: "background-color: rgba(255, 0, 0, 0.2)",
      class_name: "item",
      children: notificationActions
        ? [
          Widget.Box(
            {},
            NotificationIcon(notification),
            NotificationContent(notification)
          ),
          notificationActions,
        ]
        : [
          Widget.Box(
            {},
            NotificationIcon(notification),
            NotificationContent(notification)
          ),
        ],
    }),
    on_primary_click: notification.dismiss,
    on_hover: () =>
      notificationActions
        ? (notificationActions.reveal_child = true)
        : undefined,
    on_hover_lost: () =>
      notificationActions
        ? (notificationActions.reveal_child = false)
        : undefined,
  });

  const innerRevealer = Widget.Revealer({
    transition: options.notifications.popupTransition.value,
    transition_duration: options.transition.duration.value,
    child: eventBox,
  });

  const outerRevealer = Widget.Revealer({
    transition: "slide_down",
    transition_duration: options.transition.duration.value,
    child: innerRevealer,
  });

  Utils.idle(() => {
    outerRevealer.reveal_child = true
    Utils.timeout(options.transition.duration.value, () => {
      innerRevealer.reveal_child = true
    })
  });

  return Widget.Box({
    css: "padding: 1px",
    child: outerRevealer,
    hpack: "end",
    setup: (self) => self.hook(notification, () => {
      if (notification.popup) return;
      innerRevealer.reveal_child = false;
      Utils.timeout(options.transition.duration.value, () => {
        outerRevealer.reveal_child = true;
        Utils.timeout(options.transition.duration.value, () => {
          self.destroy();
        })
      })
    }, "dismissed").hook(notification, () => {
      if (startup) {
        startup = false;
        return;
      }
      innerRevealer.reveal_child = false;
      Utils.timeout(options.transition.duration.value, () => {
        outerRevealer.reveal_child = true;
        Utils.timeout(options.transition.duration.value, () => {
          self.destroy();
        })
      })
    }, "closed")
  });
};

export default NotificationItem;