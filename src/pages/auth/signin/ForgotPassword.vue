<template>
  <Page>
    <StackLayout paddingLeft="12" paddingRight="12">
      <Label text="Forgot password" class="l-text" marginTop="24" />
      <LabelTextField
        label="Email"
        placeholder="Enter your email"
        type="email"
        v-model="email"
      />
      <ButtonIcon
        color="orange"
        text="Reset password"
        @tap="forgotPassword"
        marginTop="24"
      />
    </StackLayout>
  </Page>
</template>

<script>
import LabelTextField from "~/components/LabelTextField";
import ButtonIcon from "~/components/ButtonIcon";
import userService from "~/services/UserService";

export default {
  name: "ForgotPassword",
  components: {
    LabelTextField,
    ButtonIcon,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    forgotPassword() {
      userService
        .resetPassword(this.email.trim())
        .then(() => {
          this.$navigator.navigate("/auth/signin/resetpasswordlink", {
            props: {
              email: this.email.trim(),
            },
            clearHistory: true,
          });
        })
        .catch((err) => {
          console.error(err);
          alert("Unfortunately, an error occurred resetting your password.");
        });
    },
  },
};
</script>
<style>
.l-text {
  font-size: 36px;
  font-weight: 600;
  color: #333333;
}
</style>
