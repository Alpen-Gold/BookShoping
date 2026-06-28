import { useState } from "react";
import axios from "axios";
import { registerApi } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { error, loading } = useSelector((store: any) => store.allFunctions);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const register = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return alert("Fill all fields");
    }

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    // API
    registerApi(dispatch, formData, navigate);

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  if (error)
    return (
      <div className=" d-flex mt-4 justify-center text-red-600">
        You have problem or your connection is not working!
      </div>
    );

  return (
    <div>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <br />

      <button onClick={register} disabled={loading}>
        {loading ? "Loading..." : "Register"}
      </button>
    </div>
  );
};

export default Register;
