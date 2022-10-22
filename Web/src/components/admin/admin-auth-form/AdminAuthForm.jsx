import React from 'react';
import { useForm } from "react-hook-form";
import { authenticate } from "../../../services/website-service";
import { useNavigate } from "react-router";
import "../admin-auth-form/AdminAuthForm.css"


function AdminAuthForm() {
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleLogin = (data) => {
    authenticate(data)
      .then((data) => {
        navigation("/admin/dashboard");
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors).forEach((error) => {
            setError(error, { message: errors[error].message });
          });
        }
      });
    };

  return (
    <div class="position-absolute top-50 start-50 translate-middle">
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="login-card container p-5">

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">
            Email
          </span>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email..."
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">
            Password
          </span>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Password..."
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <div className="d-grid mt-2">
          <button className="form-button btn btn-dark" type="submit" disabled={!isValid}>
            LOGIN
          </button>
        </div>

      </div>
    </form>
   </div>
  );
};

export default AdminAuthForm;