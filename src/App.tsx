import Card from "./components/Card";
import { useGetSalesQuery } from "./generated/schema";

export const App = () => {
  const { data } = useGetSalesQuery();

  return (
    <div>
      {data?.sales?.map(({ price, id }) => (
        <Card key={id} price={24 / 24} />
      ))}
    </div>
  );
};

export default App;
