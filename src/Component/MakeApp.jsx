import { useState } from "react";
import axios from "axios";

function MakeApp() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    appointmentdate: "",
    selectdepartment: "",
    selectdoctor: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  console.log(formValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/addappointment", {
        ...formValues,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section id="appointment" className="make-appointment">
      <div className="make-title">
        <h1>Make an Appointment</h1>
        <p>
          I hope this message finds you well. I would like to schedule an
          appointment with you at your earliest convenience. I have been
          experiencing briefly mention symptoms or reason for appointment and
          believe it would be beneficial to discuss this with you.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your Name"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                name: e.target.value,
              })
            }
            required
          />
        </div>
        <br />
        <div className="input-box">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Your Email"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                email: e.target.value,
              })
            }
            required
          />
        </div>
        <br />
        <div className="input-box">
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Your Phone"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                phone: e.target.value,
              })
            }
            required
          />
        </div>
        <br />
        <div className="input-box">
          <input
            type="date"
            className="form-control"
            name="appointmentdate"
            placeholder="Appointment Date"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                appointmentdate: e.target.value,
              })
            }
            required
          />
        </div>
        <br />
        <div className="input-box">
          <select
            id="dropdown"
            className="form-select"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                selectdepartment: e.target.value,
              })
            }
          >
            <option value="">Select Department</option>
            <option value="1">Department 1</option>
            <option value="2">Department 2</option>
            <option value="3">Department 3</option>
          </select>
        </div>
        <br />
        <div className="input-box">
          <select
            id="dropdown1"
            className="form-select"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                selectdoctor: e.target.value,
              })
            }
          >
            <option value="">Select Doctor</option>
            <option value="1">Doctor 1</option>
            <option value="2">Doctor 2</option>
            <option value="3">Doctor 3</option>
          </select>
        </div>
        <br />
        <textarea
          cols={20}
          rows={5}
          className="form-control"
          placeholder="Message (optional)"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              message: e.target.value,
            })
          }
        ></textarea>
        <br />
        <button type="submit" className="btn">
          Make an Appointment
        </button>
      </form>
    </section>
  );
}

export default MakeApp;
