import React from "react";
import { Link } from "react-router-dom";
import { CoverPicture } from "../../components";

function ErrorsScreen() {
  return (
    <>
      <Link to="" className="text-decoration-none">
      <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666541339/xan-campos-web/10-error-404-page-examples-for-UX-design_dyvfsx.png" />
      </Link>
    </>
  );
}

export default ErrorsScreen;
