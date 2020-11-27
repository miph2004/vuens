<template>
  <Page>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Label class="header" text="BIGIN" />

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            class="input"
            hint="Email"
            keyboardType="email"
            autocorrect="false"
            autocapitalizationType="none"
            v-model="user.email"
            returnKeyType="next"
            @returnPress="focusPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="password"
            class="input"
            hint="Password"
            secure="true"
            v-model="user.password"
            :returnKeyType="isLoggingIn ? 'done' : 'next'"
            @returnPress="focusConfirmPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout v-show="!isLoggingIn" class="input-field">
          <TextField
            ref="confirmPassword"
            class="input"
            hint="Confirm password"
            secure="true"
            v-model="user.confirmPassword"
            returnKeyType="done"
            fontSize="18"
          />
          <StackLayout class="hr-light" />
        </StackLayout>

        <Button
          :text="isLoggingIn ? 'Log In' : 'Sign Up'"
          @tap="submit"
          class="btn btn-primary m-t-20"
        />

        <Label
          v-show="isLoggingIn"
          text="Forgot your password?"
          class="login-label"
          @tap="forgotPassword"
        />
      </StackLayout>
      <ButtonIcon
        v-show="isLoggingIn"
        text="Login with Facebook"
        iconName="facebook"
        @tap="loginFacebook"
      />
      <ButtonIcon
        v-show="isLoggingIn"
        text="Login with Google"
        iconName="google"
        @tap="loginGoogle"
      />
      <Label class="login-label sign-up-label" @tap="toggleForm">
        <FormattedString>
          <Span
            :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"
          />
          <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold" />
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>
<script>
import userService from "../services/UserService";
import ButtonIcon from "../components/ButtonIcon";

export default {
  name: "Loginpage",
  components: {
    ButtonIcon,
  },
  data() {
    return {
      isLoggingIn: true,
      user: {
        email: "phat.tran@bigin.vn",
        password: "123456",
        confirmPassword: "123456",
      },
    };
  },
  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },
    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }
      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },
    login() {
      userService
        .login(this.user)
        .then((res) => {
          if (res.emailVerified) {
            this.test();
            this.$navigator.navigate("/home");
          } else {
            this.alert("Please verify your email to log in.");
          }
        })
        .catch(() => {
          this.alert("Unfortunately we could not find your account.");
        });
    },
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.alert("Your passwords do not match.");
        return;
      }
      userService
        .register(this.user)
        .then(() => {
          this.alert("Email verification sent to user");
          this.isLoggingIn = true;
        })
        .catch((error) => {
          this.alert("Unfortunately we were unable to create your account.");
        });
    },
    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message:
          "Enter the email address you used to register to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
      }).then((data) => {
        if (data.result) {
          userService
            .resetPassword(data.text.trim())
            .then(() => {
              this.alert(
                "Your password was successfully reset. Please check your email for instructions on choosing a new password."
              );
            })
            .catch((err) => {
              console.error(err);
              this.alert(
                "Unfortunately, an error occurred resetting your password."
              );
            });
        }
      });
    },
    focusPassword() {
      this.$refs.password.nativeView.focus();
    },
    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },
    loginFacebook() {
      userService
        .loginFacebook()
        .then(() => {
          this.$navigator.navigate("/home");
        })
        .catch((err) => {
          this.alert(err);
        });
    },
    loginGoogle() {
      userService
        .loginGoogle()
        .then((result) => {
          this.$navigator.navigate("/home");
        })
        .catch((error) => {
          console.error(err);
          this.alert(error);
        });
    },
    alert(message) {
      return alert({
        title: "BIGIN",
        okButtonText: "OK",
        message: message,
      });
    },
  },
};
</script>

<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.logo {
  margin-bottom: 12;
  height: 90;
  font-weight: bold;
}

.header {
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #41b883;
}

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
}

.input-field .input {
  font-size: 54;
}

.btn-primary {
  height: 50;
  margin: 30 5 15 5;
  background-color: #41b883;
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}

.login-label {
  color: #a8a8a8;
  font-size: 16;
  margin-top: 20px;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
</style>
