import { FC } from "react";
import classes from "./Card.module.scss";
import Image from "../../images/Image1.png";
import { ReactComponent as Eye } from "../../images/Eye.svg";
import { ReactComponent as Like } from "../../images/LikeIcon.svg";
import { ReactComponent as Message } from "../../images/MessageIcon.svg";
import IconWithCount from "../IconWithCount";

type Props = {
  price?: string | null;
  ownerId: string;
  approvalId: string;
};

export const Card: FC<Props> = ({ ownerId, price, approvalId }) => {
  return (
    <>
      <div className={classes.container}>
        <span className={classes.shadow} />
        <div className={classes.imageContainer}>
          <img src={Image} className={classes.image} alt="sell" />
        </div>
        <div className={classes.content}>
          <div className={classes.maskBg} />
          <div className={classes.innerWrapperContent}>
            <div className={classes.userInfoContainer}>
              <div className={classes.userInfoContent}>
                <img
                  src={"https://source.unsplash.com/38x38/?portrait"}
                  width={38}
                  height={38}
                  alt="sell"
                  className={classes.portrait}
                />
                <div className={classes.nameContainer}>
                  <span className={classes.userName}>
                    {ownerId.split(".")[0]}
                  </span>
                  <span className={classes.date}>7 DAYS AGO</span>
                </div>
              </div>
              <div className={classes.infoWithIcon}>
                <Eye />
                <span className={classes.statsEye}>
                  {Math.floor(Math.random() * 100)}k
                </span>
              </div>
            </div>

            <div className={classes.priceInfoContainer}>
              <span className={classes.name}>
                #{approvalId}
                <br />
                Sunset
              </span>
              <span className={classes.price}>
                {Number(price || 0) / 10 ** 24} NEAR
              </span>
            </div>
          </div>
          <div className={classes.animContainer}>
            <IconWithCount Component={Like} color="red" />
            <IconWithCount Component={Message} color="blue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
