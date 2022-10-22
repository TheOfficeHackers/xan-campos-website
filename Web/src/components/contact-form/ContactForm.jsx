import React from "react";
import { useForm } from "react-hook-form";
import { createMessage } from "../../services/website-service";
import "../contact-form/ContactForm.css"

function ContactForm() {

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleCreateMessageSubmit = (data, e) => {
    console.log(data);
    createMessage(data)
      .then((message) => {
        reset();
        alert("Email enviado");
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
    <form onSubmit={handleSubmit(handleCreateMessageSubmit)}>
      <div className="form-card container p-5">

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">
            Name
          </span>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            placeholder="Your name"
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 50, message: "Name is too long" },
            })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
        <span className="form-input-logo input-group-text">
            Email
          </span>
          <input

            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Your email"
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
            Phone
          </span>
          <input
            type="text"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            placeholder="Your phone number"
            {...register("phone")}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
        <span className="form-input-logo input-group-text">
            Comment
          </span>
          <textarea
            className="form-control"
            placeholder="Your comment"
            {...register("message", {
              required: "Message is required",
              maxLength: { value: 500, message: "Your message is too long" },
            })}
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>

        <div className="d-grid mt-3">
          <button className="form-button btn btn-dark" type="submit">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
