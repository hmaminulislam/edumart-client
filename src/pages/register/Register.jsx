import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import RegisterForm from '../../components/register/RegisterForm';

export default function Register() {
  return (
    <div>
          <CommonHero pageName={"Sign Up"} />
          <RegisterForm />
    </div>
  );
}
