import { Chart } from "react-google-charts";

const data = [
  ["Year", "Networth", "Nifty"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

const options = {
  chart: {
    title: "Networth vs Nifty",
    subtitle: "Networth vs Nifty over the Years",
  },
};
const Portfolio_net = () => {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
export default Portfolio_net;
