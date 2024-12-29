"use client";
import React from "react";
import Providers from "@/libs/providers";
import GoogleCaptchaWrapper from "@/libs/GoogleCaptchaWrapper";
import ReduxProvider from "@/store/redux-provider";
import Login from "../components/login";
import Register from "../components/register";

const AuthTemplate = ({ page, token }: { page: string; token?: string }) => {
  return (
    <ReduxProvider>
      <Providers>
          <div
            style={{
              zIndex: 1, // Ensure it is above the background
            }}
          >
          {page === "identity" && <Login />}
          {page === "register" && <Register/>}
          {/* {page === "otp-verification" && <OTPVerification />}
          {page === "forgot-password" && <ForgotPasswords />}
          {page === "reset-password" && <ResetPasswords token={token} />} */}
          </div>
      </Providers>
    </ReduxProvider>
  );
};
export default AuthTemplate;
