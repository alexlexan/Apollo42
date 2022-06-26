import { useGetSalesQuery } from "src/generated/schema";
import Card from "../Card";
import classes from "./List.module.scss";

const List = () => {
  const { data } = useGetSalesQuery();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {data?.sales?.map(({ price, id, approvalId, ownerId }) => (
          <Card
            key={id}
            price={24 / 24}
            ownerId={ownerId}
            approvalId={approvalId}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
