import { Chart } from "react-google-charts";

const data = [
  [
    "Month",
    "SB",
    "EPF",
    "PPF",
    "FD",
    "Shares(MF + EQ)",
    "SSY",
    "LIC-1",
    "LIC-2",
  ],
  ["Mar-2023", 777000, 801000, 500000, 680000, 100000, 100000, 250000, 180000],
  ["Jun-2023", 733000, 900000, 600000, 1000000, 741000, 100000, 250000, 180000],
];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
};

const Portfolio = () => {
  return (
    <>
      <Chart
        // Note the usage of Bar and not BarChart for the material version
        chartType="Bar"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};
export default Portfolio;
