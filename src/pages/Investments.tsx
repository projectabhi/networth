import {
  Badge,
  Button,
  Datepicker,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import Menu from "../components/Menu";
import { useState } from "react";
import data from "./../assets/data.json";

const Investments = () => {
  const [investments, setInvestments] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    invType: "",
    amount: 0.0,
    dateSubmit: "",
    comments: "",
  });

  const handleAddFormChange = (event) => {
    //event.preventDefault();
    console.log(event);
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleAddFormChangeForDate = (date: Date) => {
    //event.preventDefault();
    console.log(date);
    const fieldName = "dateSubmit";
    const fieldValue = date.toDateString();
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newInv = {
      id: addFormData.id,
      invType: addFormData.invType,
      dateSubmit: addFormData.dateSubmit,
      amount: addFormData.amount,
      comments: addFormData.comments,
    };
    console.log("New data:", newInv);
    const newInvs = [...investments, newInv];
    setInvestments(newInvs);
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Investment Type
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Comments
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {investments.map((inv) => (
              <tr className="border-b border-gray-200 odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <th className="px-6 py-4" hidden>
                  {inv.id}
                </th>
                <td className="px-6 py-4">{inv.invType}</td>
                <td className="px-6 py-4">{inv.amount}</td>
                <td className="px-6 py-4">{inv.dateSubmit}</td>
                <td className="px-6 py-4">{inv.comments}</td>
                <td className="px-6 py-4">
                  <Button type="button" id="edit">
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* TODO: Replace with modal later */}
        <div className="flex flex-wrap gap-2">
          <Badge color="info" size="sm">
            Add a new investment
          </Badge>
        </div>
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            <tr className="border-b border-gray-200 odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
              <td className="px-6 py-4">
                <Select
                  id="invType"
                  name="invType"
                  required
                  onChange={handleAddFormChange}
                >
                  <option value={"PPF"}>Puplic Providend Fund</option>
                  <option value={"EPF"}>Employee Providend Fund</option>
                  <option value={"SB"}>Savings Account</option>
                  <option value={"FD"}>Fixed Deposits</option>
                  <option value={"EQMF"}>Stocks & Mutual Funds</option>
                  <option value={"SSY"}>Sukanya Samriddhi Account</option>
                </Select>
              </td>
              <td className="px-6 py-4">
                <TextInput
                  name="amount"
                  type="text"
                  required
                  shadow
                  onChange={handleAddFormChange}
                />
              </td>
              <td className="px-6 py-64">
                <Datepicker
                  name="dateSubmit"
                  onChange={handleAddFormChangeForDate}
                />
              </td>
              <td className="px-6 py-4">
                <TextInput
                  name="comments"
                  type="text"
                  placeholder="Any Comment"
                  required
                  shadow
                  onChange={handleAddFormChange}
                />
              </td>
              <td className="px-6 py-4">
                <Button type="button" id="add" onClick={handleAddFormSubmit}>
                  Add
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Investments;
