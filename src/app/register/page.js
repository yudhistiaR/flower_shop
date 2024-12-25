"use client";

import AuthView from "@/components/AuthView";
import { Button, TextField, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RegisterPage = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const path = useRouter();
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            path.refresh();
          } else {
            toast.success("Account created successfully");
            setTimeout(() => {
              path.push("/");
            }, 2000);
          }
        })
        .catch((error) => {
          toast.error(error.message);
        })
        .finally(() => {
          setData({});
          setLoading(false);
          formRef.current.reset();
          clearTimeout();
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AuthView>
      <div className="space-y-5">
        <div>
          <Typography variant="h4" component="div">
            Join us
          </Typography>
          <Typography variant="h4" component="div">
            Create a your account
          </Typography>
        </div>
        <Typography variant="p" component="div">
          {"Be part of a 23 million-strong community of flower lovers"}
        </Typography>
      </div>
      <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
        <TextField
          onChange={onChange}
          name="username"
          fullWidth
          label="Full Name"
          size="small"
          disabled={loading}
          value={data.username}
          defaultValue={data.username}
          autoComplete="off"
        />
        <TextField
          onChange={onChange}
          name="email"
          fullWidth
          label="Email"
          size="small"
          disabled={loading}
          value={data.email}
          defaultValue={data.email}
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
          value={data.password}
          defaultValue={data.password}
          autoComplete="off"
        />
        <Button
          disabled={loading}
          type="submit"
          fullWidth
          color="error"
          variant="contained"
        >
          Sign up
        </Button>
      </form>
    </AuthView>
  );
};

export default RegisterPage;
