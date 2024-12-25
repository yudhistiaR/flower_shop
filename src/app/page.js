"use client";

import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthView from "@/components/AuthView";

export default function Home() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    default: "",
  });

  const path = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();

          setIsError(true);
          if (error?.name === "ZodError") {
            const zodIssue = error.issues[0];
            setErrorMessage((prev) => ({
              ...prev,
              email: zodIssue.message,
            }));
          } else {
            setErrorMessage({ default: error.message });
          }

          setTimeout(() => {
            setIsError(false);
            setErrorMessage({});
          }, 5000);
        } else {
          path.push("/home");
        }
      })
      .finally(() => {
        setLoading(false);
        clearTimeout();
      });
  };

  const onChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AuthView>
      <div className="space-y-5">
        <div>
          <Typography variant="h4" component="div">
            Welcome Back!
          </Typography>
          <Typography variant="h4" component="div">
            Login to your account
          </Typography>
        </div>
        <Typography variant="p" component="div">
          {"It's nice to see you again. Ready to shoping?"}
        </Typography>
      </div>
      <form onSubmit={onSubmit} className="space-y-5 my-5">
        <TextField
          onChange={onChange}
          name="email"
          fullWidth
          label="Email"
          type="text"
          size="small"
          disabled={loading}
          defaultValue={data.email}
          helperText={errorMessage.email}
          error={isError}
          required
          autoComplete="off"
        />
        <TextField
          onChange={onChange}
          name="password"
          fullWidth
          label="Password"
          type="password"
          size="small"
          disabled={loading}
          defaultValue={data.password}
          helperText={errorMessage.default}
          error={isError}
          required
          autoComplete="off"
        />
        <Button
          disabled={loading}
          type="submit"
          fullWidth
          color="error"
          variant="contained"
        >
          Login
        </Button>
      </form>
      <Typography fullWidth variant="p" component="div">
        {"Don't have an account?"} <Link href="/register">Sign up</Link>
      </Typography>
    </AuthView>
  );
}
