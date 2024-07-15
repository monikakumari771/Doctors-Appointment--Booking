import { useEffect, useState } from "react";
import axios from "axios";

function ListPage() {
  const [items, SetItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/list", {}).then((response) => {
      console.log(response);
      SetItems(response.data);
    });
  }, []);
  console.log(items);
  return (
    <>
      <div className="users">
        <h1>Users List</h1>
        <button>Search...</button>
      </div>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Appointment Date</th>
              <th>Select Department</th>
              <th>Select Doctors</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {items.toReversed().map((items, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
                <td>{items.appointmentdate}</td>
                <td>{items.selectdepartment}</td>
                <td>{items.selectdoctor}</td>
                <td>{items.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListPage;
