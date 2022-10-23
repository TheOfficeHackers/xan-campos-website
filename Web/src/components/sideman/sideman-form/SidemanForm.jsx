import React from "react";
import { useForm } from "react-hook-form";
import { createSideman } from "../../../services/website-service";
import "../sideman-form/SidemanForm.css";

function SidemanForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleCreateSidemanSubmit = (data, e) => {
    console.log(data);
    createSideman(data)
      .then((sideman) => {
        reset();
        alert("Sideman Created");
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
    <form onSubmit={handleSubmit(handleCreateSidemanSubmit)}>
      <div className="sideman-card container p-5">

        <div className="input-group mb-1">
          <span className="sideman-input-name input-group-text">Title</span>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            placeholder="Sideman title"
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
          <span className="sideman-input-name input-group-text">Main artist</span>
          <input
            type="text"
            className={`form-control ${errors.mainArtist ? "is-invalid" : ""}`}
            placeholder="Sideman main artist"
            {...register("mainArtist", {
              required: "Main artist is required",
            })}
          />
          {errors.mainArtist && (
            <div className="invalid-feedback">{errors.mainArtist.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="sideman-input-name input-group-text">Musicians</span>
          <input
            type="text"
            className={`form-control ${errors.musicians ? "is-invalid" : ""}`}
            placeholder="Sideman musicians"
            {...register("musicians", {
              required: "Musicians are required",
            })}
          />
          {errors.musicians && (
            <div className="invalid-feedback">{errors.musicians.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="sideman-input-name input-group-text">Release year</span>
          <input
            type="text"
            className={`form-control ${errors.releaseYear ? "is-invalid" : ""}`}
            placeholder="Sideman release year"
            {...register("releaseYear", {
              required: "Release year is required",
            })}
          />
          {errors.releaseYear && (
            <div className="invalid-feedback">{errors.releaseYear.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="sideman-input-name input-group-text">Cover</span>
          <input
            type="file"
            className={`form-control ${errors.cover ? "is-invalid" : ""}`}
            placeholder="Sideman cover"
            {...register("cover", {
              required: "Cover is required",
            })}
          />
          {errors.cover && (
            <div className="invalid-feedback">{errors.cover.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="sideman-input-name input-group-text">Project</span>
          <input
            type="text"
            className={`form-control ${errors.project ? "is-invalid" : ""}`}
            placeholder="Sideman project"
            {...register("project", {
              required: "Project is required",
            })}
          />
          {errors.project && (
            <div className="invalid-feedback">{errors.project.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="sideman-input-name input-group-text">Record label</span>
          <input
            type="text"
            className={`form-control ${errors.recordLabel ? "is-invalid" : ""}`}
            placeholder="Sideman record label"
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
            CREATE SIDEMAN
          </button>
        </div>
      </div>
    </form>
  );
}

export default SidemanForm;