import { Card } from "flowbite-react";
import Portfolio from "./Portfolio";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="grid grid-cols-3 justify-items-center gap-2">
        <Card href="/portfolio" className="max-w-sm">
          <Portfolio />
        </Card>
        <Card href="/portfolio" className="max-w-sm">
          <Portfolio />
        </Card>
        <Card href="/portfolio" className="max-w-sm">
          <Portfolio />
        </Card>
      </div>
    </>
  );
};
export default Home;
