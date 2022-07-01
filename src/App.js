import "./Table/style.css";
import { Table } from "./Table/Table";
import data from "./Table/data";

function App() {
  const columns = [
    { accessor: "f_name", label: "First Name" },
    { accessor: "l_name", label: "Last Name" },
    { accessor: "age", label: "Age" },
    { accessor: "email", label: "Email" },
    { accessor: "web", label: "Website" },
  ];
  return (
    <div className="App">
      <div>
        <h1>Users</h1>
      </div>
      <Table columns={columns} rows={data} />
    </div>
  );
}

export default App;
