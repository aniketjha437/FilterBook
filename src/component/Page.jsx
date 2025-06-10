import { useState } from "react";
import { Data } from "./Data";
import Form from "./Form";
import Table from "./Table";

const Page = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="pl-5 pr-5">
      <h1 className="text-center ">Filtering Using Props</h1>

      {/* <form action="" className="border-2 mb-22">
        <input
          type="text"
          placeholder="Search Contacts"
          className="input text-white w-100 "
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form> */}

      <Form search={search} setSearch={setSearch} />
      {/* Using Props */}

      <div className="overflow-x-auto ">
        {/* <table className="table table-xs">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-Mail</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {Data.filter((item) => {
              const searchTerm = search.toLowerCase();
              return (
                item.first_name.toLowerCase().includes(searchTerm) ||
                item.last_name.toLowerCase().includes(searchTerm) ||
                item.email.includes(searchTerm) ||
                item.phone.toLowerCase().includes(searchTerm)
              );
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <Table search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Page;
