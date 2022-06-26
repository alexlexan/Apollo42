import { ReactComponent as Arrow } from "../../images/Arrow.svg";
import classes from "./Button.module.scss";

export const Button = () => {
  return (
    <div className={classes.buttonBorder} role="button" tabIndex={0}>
      <div className={classes.button}>
        <span className={classes.text}>1 Month</span>
        <Arrow />
      </div>
    </div>
  );
};

export default Button;
