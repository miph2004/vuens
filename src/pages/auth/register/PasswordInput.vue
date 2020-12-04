<template>
  <Page>
    <FlexboxLayout class="container">
      <Label marginTop="8">
        <FormattedString>
          <Span text="Create an account" class="l-text" />
        </FormattedString>
      </Label>
      <Label marginTop="24">
        <FormattedString>
          <Span text="Enter your password" class="m-text" />
        </FormattedString>
      </Label>
      <LabelTextField
        label="Password"
        placeholder="Enter your password"
        v-model="password"
        secure
      />
      <LabelTextField
        label="Re-type password"
        placeholder="Re-type your password"
        v-model="confirmPassword"
        secure
      />
      <FlexboxLayout flexDirection="column" marginTop="450">
        <Label text="3 of 3 steps" alignSelf="flex-end" class="xs-text" />
        <StackLayout orientation="horizontal">
          <Label class="oneProgress" text="" />
          <Label class="progress" text="" />
        </StackLayout>
        <ButtonIcon
          color="orange"
          text="Continue"
          @tap="updatePassword"
        ></ButtonIcon>
      </FlexboxLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import LabelTextField from "~/components/LabelTextField";
import ButtonIcon from "~/components/ButtonIcon";
import userService from "~/services/UserService";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "PasswordInput",
  components: {
    ButtonIcon,
    LabelTextField,
  },
  data() {
    return {
      password: "123456",
      confirmPassword: "123456",
    };
  },
  methods: {
    ...mapMutations(["updateRegisterUser"]),
    ...mapGetters(["registerUser"]),
    updatePassword() {
      if (this.password === "" || this.confirmPassword === "") {
        alert("Please enter both two fields");
      } else if (this.password !== this.confirmPassword) {
        alert("Your confirm password is mismatch");
      } else {
        this.updateRegisterUser({
          type: "PASSWORD",
          value: this.password,
        });

        this.register();
        this.$navigator.navigate("/auth/register/emailconfirm", {
          clearHistory: true,
        });
      }
    },
    register() {
      userService
        .register(this.registerUser())
        .then(() => {})
        .catch((error) => {
          console.log("Unfortunately we were unable to create your account.");
        });
    },
  },
};
</script>
<style scoped>
.container {
  flex-direction: column;
  padding: 12px;
}
.l-text {
  font-size: 36px;
  font-weight: 600;
}
.m-text {
  font-size: 28px;
  font-weight: 600;
}
.xs-text {
  font-size: 12px;
  font-weight: bold;
}
.progress {
  height: 4px;
  border-radius: 4px;
  background-color: #d4d4d4;
  width: 850px;
}
.oneProgress {
  height: 4px;
  border-radius: 4px;
  background-color: black;
  width: 850px;
}
</style>
