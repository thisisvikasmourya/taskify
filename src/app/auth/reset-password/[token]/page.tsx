import AuthTemplate from "@/modules/auth/templates";
import React from "react";

const Login = ({ params }: { params: { token: string } }) => {
  return (
<>
      <AuthTemplate page='reset-password' token={params.token} />
</>

  );
};

export default Login;
