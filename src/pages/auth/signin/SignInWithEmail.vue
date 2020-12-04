<template>
  <Page>
    <FlexboxLayout class="container">
      <Label marginTop="8">
        <FormattedString>
          <Span text="Log in with email" class="l-text" />
        </FormattedString>
      </Label>

      <Image
        src="~/assets/images/logo.png"
        height="110"
        width="238"
        marginTop="64"
      ></Image>

      <LabelTextField
        type="email"
        label="Email"
        v-model="user.email"
        placeholder="Enter registered email"
      />
      <LabelTextField
        label="Password"
        v-model="user.password"
        placeholder="Enter your password"
        secure
      />
      <ButtonIcon text="Login" color="orange" @tap="submit" />
      <ButtonIcon
        text="Forgot password"
        @tap="$navigator.navigate('/auth/signin/forgotpassword')"
      />
    </FlexboxLayout>
  </Page>
</template>

<script>
import LabelTextField from "~/components/LabelTextField";
import ButtonIcon from "~/components/ButtonIcon";
import userService from "~/services/UserService";

export default {
  name: "SignInWithEmail",
  components: {
    LabelTextField,
    ButtonIcon,
  },
  data() {
    return {
      user: {
        email: "phat.tran@bigin.vn",
        password: "123456",
      },
    };
  },
  methods: {
    submit() {
      if (!this.user.email || !this.user.password) {
        alert("Please provide both an email address and password.");
        return;
      }
      this.login();
    },
    login() {
      userService
        .login(this.user)
        .then((res) => {
          if (res.emailVerified) {
            this.$navigator.navigate("/home");
          } else {
            alert("Please verify your email to log in.");
          }
        })
        .catch(() => {
          alert("Unfortunately we could not find your account.");
        });
    },
  },
};
</script>

<style>
.container {
  flex-direction: column;
  padding: 12px;
}
.l-text {
  font-size: 36px;
  font-weight: 600;
}
</style>
