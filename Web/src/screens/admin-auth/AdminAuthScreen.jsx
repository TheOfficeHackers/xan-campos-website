import React from 'react';
import { CoverPicture, AdminAuthForm, Header } from '../../components'

function AdminAuthScreen() {

  return (
    <>
    <Header />
    <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666542592/xan-campos-web/login-cover_vc4m9d.png"/>
      <div class="position-absolute top-50 start-50 translate-middle"><AdminAuthForm /></div>
    </>
  );
};

export default AdminAuthScreen;
