import "./RegisterPatient.css";
import CustomForm from "../../components/CustomForm/CustomForm";
import { useState } from "react";

const RegisterPatient = () => {
  //define state with different variables and assigned them with empty string
  const [idnumber, setIDNumber] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  //   const [medicalrecord, setMedicalRecord] = useState("");
  //   const [message, setMessage] = useState("");

  return (
    <div className="registerpatient-container">
      <h2>RegisterPatient</h2>
      <CustomForm>
        <CustomForm.IDNumber
          value={idnumber}
          onChange={(e) => setIDNumber(e.target.value)}
        />
        <CustomForm.UserName
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <CustomForm.Email
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomForm.Address
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <CustomForm.Phone
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </CustomForm>
    </div>
  );
};

export default RegisterPatient;
