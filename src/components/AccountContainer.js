import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([]);
  return (
    <div>
      <Search Search={search} setSearch={setSearch} />
      <AddTransactionForm transactions={transactions} setTransactions={setTransactions} />
      <TransactionsList transactions={transactions} setTransactions={setTransactions} search={search} setSearch={setSearch} />
    </div>
  );
}


export default AccountContainer;
