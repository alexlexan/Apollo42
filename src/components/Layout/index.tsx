import { FC, PropsWithChildren } from "react";
import classes from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Layout;
