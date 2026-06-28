import { useState } from "react";

import { Button, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import AuthPageFrame from "./AuthPageFrame";

const Login = () => {
  const [emailOrName, setEmailOrName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      const res = await fetch("https://5d20df6821c8800e.mokky.dev/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: emailOrName,
          password,
        }),
      });

      // fallback: if backend returns token/user, handle it here
      // this project currently doesn’t set token in this page
      if (!res.ok) throw new Error("Login failed");
      navigate("/");
    } catch (e: any) {
      alert(e?.message || e);
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
