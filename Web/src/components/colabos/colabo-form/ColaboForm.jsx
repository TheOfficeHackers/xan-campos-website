import React from "react";
import { useForm } from "react-hook-form";
import { createColabo } from "../../../services/website-service";
import "../colabo-form/ColaboForm.css";

function ColaboForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleCreateColaboSubmit = (data, e) => {
    console.log(data);
    createColabo(data)
      .then((colabo) => {
        reset();
        alert("Colabo Created");
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
    <form onSubmit={handleSubmit(handleCreateColaboSubmit)}>
      <div className="colabo-card container p-5">

        <div className="input-group mb-1">
          <span className="colabo-input-name input-group-text">Title</span>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            placeholder="Collabo title"
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 50, message: "Title is too long" },
            })}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="colabo-input-name input-group-text">Main artist</span>
          <input
            type="text"
            className={`form-control ${errors.mainArtist ? "is-invalid" : ""}`}
            placeholder="Collabo main artist"
            {...register("mainArtist", {
              required: "Main artist is required",
            })}
          />
          {errors.mainArtist && (
            <div className="invalid-feedback">{errors.mainArtist.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="colabo-input-name input-group-text">Musicians</span>
          <input
            type="text"
            className={`form-control ${errors.musicians ? "is-invalid" : ""}`}
            placeholder="Collabo musicians"
            {...register("musicians", {
              required: "Musicians are required",
            })}
          />
          {errors.musicians && (
            <div className="invalid-feedback">{errors.musicians.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="colabo-input-name input-group-text">Release year</span>
          <input
            type="text"
            className={`form-control ${errors.releaseYear ? "is-invalid" : ""}`}
            placeholder="Collabo release year"
            {...register("releaseYear", {
              required: "Release year is required",
            })}
          />
          {errors.releaseYear && (
            <div className="invalid-feedback">{errors.releaseYear.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="colabo-input-name input-group-text">Cover</span>
          <input
            type="file"
            className={`form-control ${errors.cover ? "is-invalid" : ""}`}
            placeholder="Collabo cover"
            {...register("cover", {
              required: "Cover is required",
            })}
          />
          {errors.cover && (
            <div className="invalid-feedback">{errors.cover.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="colabo-input-name input-group-text">Project</span>
          <input
            type="text"
            className={`form-control ${errors.project ? "is-invalid" : ""}`}
            placeholder="Collabo project"
            {...register("project", {
              required: "Project is required",
            })}
          />
          {errors.project && (
            <div className="invalid-feedback">{errors.project.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="colabo-input-name input-group-text">Record label</span>
          <input
            type="text"
            className={`form-control ${errors.recordLabel ? "is-invalid" : ""}`}
            placeholder="Collabo record label"
            {...register("recordLabel", {
              required: "Record label is required",
            })}
          />
          {errors.recordLabel && (
            <div className="invalid-feedback">{errors.recordLabel.message}</div>
          )}
        </div>

        <div className="d-grid mt-3">
          <button
            className="form-button btn btn-dark"
            type="submit"
            disabled={!isValid}
          >
            CREATE COLLABO
          </button>
        </div>
      </div>
    </form>
  );
}

export default ColaboForm;
