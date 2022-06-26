import { useState, FC, SVGProps } from "react";
import classes from "./Icon.module.scss";

type Props = {
  Component: FC<SVGProps<SVGSVGElement>>;
};

export const IconWithCount: FC<Props> = ({ Component }) => {
  const [count, setCount] = useState(Math.floor(Math.random() * 100));
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
    setCount((prev) => prev + 1);
  };

  return (
    <div className={`${classes.container} ${isActive ? "active" : ""}`}>
      <Component onClick={handleClick} />
      <span className={classes.text}>{count}</span>
    </div>
  );
};

export default IconWithCount;
