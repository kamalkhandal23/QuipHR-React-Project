import { appConfig } from "../config/permissions.config";

export const isRouteAllowed = (path) => {
  return appConfig.permissions.some(
    (menu) =>
      menu.enabled &&
      menu.children?.some(
        (child) => child.enabled && child.path === path
      )
  );
};

export const getEnabledRoutes = () => {
  return appConfig.permissions.flatMap((menu) =>
    menu.enabled
      ? menu.children.filter((child) => child.enabled)
      : []
  );
};
