import { Data } from "./Data";

const Table = (props) => {
  return (
    <>
      <table className="table table-xs">
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
            const searchTerm = props.search.toLowerCase();
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
      </table>
    </>
  );
};

export default Table;
