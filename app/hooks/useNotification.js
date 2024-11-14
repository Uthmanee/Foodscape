import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useNotification(data, action) {
  const notification = useSelector((state) => state[data].notification);

  const [notificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    if (!notification.toLowerCase().includes(action)) {
      setNotificationVisible(false);
    } else {
      setNotificationVisible(true);
    }
  }, [notification]);

  return { notification, notificationVisible, setNotificationVisible };
}

export default useNotification;
