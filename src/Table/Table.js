export const Table = ({ columns, rows }) => {
  return (
    <div className="App">
      <input type="text" placeholder="Search by first or last name" />
      <table>
        <tr>
          {columns.map(({ label, accessor }, key) => {
            return <th>{label}</th>;
          })}
        </tr>
        {rows.map(({ first_name, last_name, age, email, web, id }, key) => {
          return (
            <tr key={id}>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{age}</td>
              <td>{email}</td>
              <td>{web}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
