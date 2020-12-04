import HomePage from "~/pages/HomePage";
import Login from "~/pages/auth/Login";
import SignInWithEmail from "~/pages/auth/signin/SignInWithEmail";
import ForgotPassword from "~/pages/auth/signin/ForgotPassword";
import ResetPasswordLink from "~/pages/auth/signin/ResetPasswordLink";
import NameInput from "~/pages/auth/register/NameInput";
import EmailInput from "~/pages/auth/register/EmailInput";
import PasswordInput from "~/pages/auth/register/PasswordInput";
import EmailConfirm from "~/pages/auth/register/EmailConfirm";

export default {
  "/home": {
    component: HomePage,
  },
  "/auth/login": {
    component: Login,
  },
  "/auth/signin/signinwithemail": {
    component: SignInWithEmail,
  },
  "/auth/signin/forgotpassword": {
    component: ForgotPassword,
  },
  "/auth/signin/resetpasswordlink": {
    component: ResetPasswordLink,
  },
  "/auth/register/nameinput": {
    component: NameInput,
  },
  "/auth/register/emailinput": {
    component: EmailInput,
  },
  "/auth/register/passwordinput": {
    component: PasswordInput,
  },
  "/auth/register/emailconfirm": {
    component: EmailConfirm,
  },
};
