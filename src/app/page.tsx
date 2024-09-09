"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import BudgetPanel from "@/components/BudgetPanel";
import BudgetRequestDataTable from "../components/BudgetRequestDataTable";
import Header from "@/components/Header";
import { BudgetRequest } from "@/models/budget-request";

let nextId = 3;

function Home() {
  const [budgetRequests, setBudgetRequests] = useState<BudgetRequest[]>([
    {
      id: 1,
      title: "Monitor",
      amount: 100,
      quantity: 1,
      status: "PENDING",
    },
    {
      id: 2,
      title: "Ram",
      amount: 200,
      quantity: 1,
      status: "APPROVED",
    },
  ]);

  const addRequest = (newRequest: BudgetRequest) => {
    setBudgetRequests([...budgetRequests, newRequest]);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div className="mt-4">
          <BudgetPanel items={budgetRequests} />
        </div>
        <FormAddRequest addRequest={addRequest} />
        <div className="mt-4">
          <BudgetRequestDataTable items={budgetRequests} />
        </div>
      </main>
    </div>
  );
}

interface FormAddRequestProps {
  addRequest(request: BudgetRequest): void;
}

function FormAddRequest(props: FormAddRequestProps) {
  const [newRequest, setNewRequest] = useState<BudgetRequest>({
    id: 0,
    title: "",
    amount: 0,
    quantity: 1,
    status: "APPROVED",
  });

  const updateField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    // Check if the input is empty and allow empty string for amount
    const newValue =
      type === "number" && value === "" ? "" : type === "number" ? Number(value) : value;
    setNewRequest({
      ...newRequest,
      [event.target.name]: newValue,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addRequest({
      id: nextId++,
      title: newRequest.title,
      amount: newRequest.amount,
      quantity: 1,
      status: "APPROVED",
    });
    // Reset form fields after submission
    setNewRequest({
      id: 0,
      title: "",
      amount: 0,
      quantity: 1,
      status: "APPROVED",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Title:
        <input name="title" value={newRequest.title} onChange={updateField} />
      </div>
      <div>
        Amount:
        <input
          name="amount"
          type="number"
          value={newRequest.amount}
          onChange={updateField}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default Home;
