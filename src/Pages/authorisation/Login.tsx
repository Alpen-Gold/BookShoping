import { useState } from "react";

import { Button, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import AuthPageFrame from "./AuthPageFrame";
import { useDispatch } from "react-redux";
import { handleLoading } from "../../stores/slices/allFuncSlices";
import axios from "axios";
import { setTokenAndUser } from "../../stores/slices/authSlice";
// import { setTokenAndUser } from "../../stores/slices/authSlice";

const Login = () => {
  const [emailOrName, setEmailOrName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onLogin = async () => {
    dispatch(handleLoading(true));

    try {
      const data = await axios.post(
        "https://my-books-n5re.onrender.com/api/auth/login",
        {
          email: String(emailOrName),
          password: String(password),
        }
      );

      console.log(data);

      dispatch(
        setTokenAndUser({
          token: data.data.accessToken,
          user: data.data.userDto,
        })
      );
      navigate("/");
    } catch (error: any) {
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
      console.log("Message:", error.response?.data?.message);
    } finally {
      dispatch(handleLoading(false));
    }
  };

  return (
    <AuthPageFrame
      title="Welcome back"
      subtitle="Sign in to continue browsing your shelf"
    >
      <Typography.Text
        type="secondary"
        style={{ display: "block", marginBottom: 14 }}
      >
        Use any credentials accepted by your backend.
      </Typography.Text>

      <Input
        size="large"
        placeholder="Email or username"
        value={emailOrName}
        onChange={(e) => setEmailOrName(e.target.value)}
        style={{ marginBottom: 12 }}
      />
      <Input.Password
        size="large"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Button type="primary" block size="large" onClick={onLogin}>
        Login
      </Button>
      <Typography.Text
        style={{ display: "block", marginTop: 12, textAlign: "center" }}
      >
        New here?{" "}
        <Typography.Link href="/register">Create account</Typography.Link>
      </Typography.Text>
    </AuthPageFrame>
  );
};

export default Login;
