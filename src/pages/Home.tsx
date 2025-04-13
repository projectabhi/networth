import { Card } from "flowbite-react";
import Portfolio from "./Portfolio";
import Menu from "../components/Menu";
import Portfolio_pie from "./Portfolio_pie";
import Portfolio_net from "./Portfolio_net";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="grid grid-cols-3 flex-wrap justify-items-center gap-1">
        <Card href="/portfolio" className="max-w-sm">
          <Portfolio />
        </Card>
        <Card href="/portfolio_pie" className="max-w-sm">
          <Portfolio_pie />
        </Card>
        <Card href="/portfolio_net" className="max-w-sm">
          <Portfolio_net />
        </Card>
      </div>
    </>
  );
};
export default Home;
