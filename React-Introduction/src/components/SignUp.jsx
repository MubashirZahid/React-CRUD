import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import "./SignUp.css";
import axiosInstance from "../utils/axiosInstance";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handlerOnSubmit = async () => {
    try {
      const userData = {
        username: getValues("username"),
        email: getValues("email"),
        password: getValues("password"),
      };

      // Make a POST request to your server to store the user data
      await axiosInstance.post("/signUp", userData);

      console.log("User data submitted successfully");
    } catch (error) {
      console.error("Error submitting user data:", error);
    }
  };
  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  // useEffect(() => {
  //   console.log("Watch values: ", watch("confirmPassword"));
  // }, [watch("confirmPassword")]);

  return (
    <div className="container">
      <h1>MODULE: SignUp</h1>
      <form onSubmit={handleSubmit(handlerOnSubmit)}>
        <div className="input-field">
          <h4>Username</h4>
          <Controller
            name="username"
            control={control}
            rules={{
              required: "Username is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter username"
                {...field}
                style={{ border: errors.username ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.username && <h5>{errors.username.message}</h5>}
        </div>

        {/* <div className="input-field">
          <h4>FullName</h4>
          <Controller
            name="fullname"
            control={control}
            render={({ field }) => (
              <input
                placeholder="Full Name"
                {...field}
                style={{ border: errors.lastname ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.fullname && <h5>{errors.lastname.fullname}</h5>}
        </div> */}
        <div className="input-field">
          <h4>Email</h4>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input placeholder="Enter email" {...field} />
            )}
          />
        </div>

        <div className="input-field">
          <h4>Password</h4>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Max length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                type="password"
                {...field}
                style={{ border: errors.password ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.password && <h5>{errors.password.message}</h5>}
        </div>

        <div className="input-field">
          <h4>Confirm Password</h4>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Max length must be 20",
              },
              validate: (value) =>
                value === watch("password") ||
                "Confirm password should match given password",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                type="password"
                {...field}
                style={{
                  border: errors.confirmPassword ? "1px solid red" : "",
                }}
              />
            )}
          />
          {errors.confirmPassword && <h5>{errors.confirmPassword.message}</h5>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
