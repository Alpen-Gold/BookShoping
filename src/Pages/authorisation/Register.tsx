import { useState } from "react";
import { Button, Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../api";
import AuthPageFrame from "./AuthPageFrame";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const register = async () => {
    const { fullName, email, password, confirmPassword } = formData;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      return alert("Please fill in all fields.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return alert("Please enter a valid email address.");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters long.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      await registerApi(
        dispatch,
        {
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          password,
          confirmPassword,
        },
        navigate
      );

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (error)
    return (
      <AuthPageFrame title="Register" subtitle="Create your account">
        <Typography.Text type="danger">
          You have problem or your connection is not working!
        </Typography.Text>
      </AuthPageFrame>
    );

  return (
    <AuthPageFrame title="Create account" subtitle="Join My BookShelf">
      <Typography.Text type="secondary" className="authSubtitle">
        It takes less than a minute.
      </Typography.Text>

      <Input
        name="fullName"
        size="large"
        placeholder="Full name"
        value={formData.fullName}
        onChange={handleChange}
        className="authInput"
        style={{ marginBottom: 12 }}
      />

      <Input
        name="email"
        type={"email"}
        size="large"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="authInput"
        style={{ marginBottom: 12 }}
      />

      <Input.Password
        name="password"
        size="large"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="authInput"
        style={{ marginBottom: 12 }}
      />

      <Input.Password
        name="confirmPassword"
        size="large"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="authInput authInputLast"
        style={{ marginBottom: 12 }}
      />

      <Button
        type="primary"
        block
        size="large"
        onClick={register}
        disabled={loading}
      >
        {loading ? "Loading..." : "Register"}
      </Button>

      <Typography.Text
        className="authFooterText"
        style={{ display: "block", marginTop: 12, textAlign: "center" }}
      >
        Already have an account?{" "}
        <Typography.Link href="/login">Login</Typography.Link>
      </Typography.Text>
    </AuthPageFrame>
  );
};

export default Register;
