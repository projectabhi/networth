import { Chart } from "react-google-charts";

const data = [
  ["Month", "SB"],
  ["Mar-2023", 777000],
  ["Jun-2023", 733000],
];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
};

const Portfolio_pie = () => {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};
export default Portfolio_pie;
