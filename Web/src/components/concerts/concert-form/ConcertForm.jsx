import React from "react";
import { useForm } from "react-hook-form";
import { createConcert } from "../../../services/website-service";
import "../concert-form/ConcertForm.css";

function ConcertForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleCreateConcertSubmit = (data, e) => {
    console.log(data);
    createConcert(data)
      .then((concert) => {
        reset();
        alert("Concert Created");
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
    <form onSubmit={handleSubmit(handleCreateConcertSubmit)}>
      <div className="concert-card container p-5">
        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">Date</span>
          <input
            type="date"
            className={`form-control ${errors.date ? "is-invalid" : ""}`}
            placeholder="Concert date (YYYY-MM-dd)"
            {...register("date", {
              required: "Date is required",
              maxLength: { value: 50, message: "Date is too long" },
            })}
          />
          {errors.date && (
            <div className="invalid-feedback">{errors.date.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">Hour</span>
          <input
            type="text"
            className={`form-control ${errors.hour ? "is-invalid" : ""}`}
            placeholder="Concert hour"
            {...register("hour", {
              required: "Hour is required",
            })}
          />
          {errors.hour && (
            <div className="invalid-feedback">{errors.hour.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">Band</span>
          <input
            type="text"
            className={`form-control ${errors.band ? "is-invalid" : ""}`}
            placeholder="Concert band"
            {...register("band", {
              required: "Band is required",
            })}
          />
          {errors.band && (
            <div className="invalid-feedback">{errors.band.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">Venue</span>
          <input
            type="text"
            className={`form-control ${errors.venue ? "is-invalid" : ""}`}
            placeholder="Concert venue"
            {...register("venue", {
              required: "Venue is required",
            })}
          />
          {errors.venue && (
            <div className="invalid-feedback">{errors.venue.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">City</span>
          <input
            type="text"
            className={`form-control ${errors.city ? "is-invalid" : ""}`}
            placeholder="Concert city"
            {...register("city", {
              required: "City is required",
            })}
          />
          {errors.city && (
            <div className="invalid-feedback">{errors.city.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">Country</span>
          <input
            type="text"
            className={`form-control ${errors.country ? "is-invalid" : ""}`}
            placeholder="Concert country"
            {...register("country")}
          />
          {errors.country && (
            <div className="invalid-feedback">{errors.country.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="form-input-logo input-group-text">Event</span>
          <input
            type="text"
            className={`form-control ${errors.event ? "is-invalid" : ""}`}
            placeholder="Concert event"
            {...register("e")}
          />
          {errors.event && (
            <div className="invalid-feedback">{errors.event.message}</div>
          )}
        </div>

        <div className="d-grid mt-3">
          <button className="form-button btn btn-dark" type="submit" disabled={!isValid}>
            CREATE CONCERT
          </button>
        </div>
      </div>
    </form>
  );
}

export default ConcertForm;
