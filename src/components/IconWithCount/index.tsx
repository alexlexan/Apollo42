import { useState, FC, SVGProps } from "react";
import classes from "./Icon.module.scss";

type Props = {
  Component: FC<SVGProps<SVGSVGElement>>;
  color: "red" | "blue";
};

export const IconWithCount: FC<Props> = ({ Component, color }) => {
  const [count, setCount] = useState(Math.floor(Math.random() * 100));
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
    setCount((prev) => (isActive ? prev - 1 : prev + 1));
  };

  return (
    <div
      className={`${classes.container} ${isActive ? classes.active : ""} ${
        color === "red" ? classes.red : classes.blue
      }`}
      onClick={handleClick}
    >
      <Component className={classes.icon} />
      <span className={classes.text}>{count}</span>
    </div>
  );
};

export default IconWithCount;
