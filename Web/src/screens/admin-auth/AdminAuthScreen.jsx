import React from 'react'
import { CoverPicture, AdminAuthForm } from '../../components'

function AdminAuthScreen() {

  return (
    <>
    <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666426864/xan-campos-web/oy2RiG_py2pj8.webp"/>
      <div class="position-absolute top-50 start-50 translate-middle"><AdminAuthForm /></div>
    </>
  );
};

export default AdminAuthScreen;
