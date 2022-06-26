import Layout from "../Layout";
import List from "../List";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import classes from "./App.module.scss";
import Button from "../Button";

export const App = () => {
  return (
    <Layout>
      <Logo className={classes.logo} />
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Market</h1>
        <Button />
      </div>
      <List />
    </Layout>
  );
};

export default App;
