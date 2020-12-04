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
          <Span text="Your email please" class="m-text" />
        </FormattedString>
      </Label>
      <LabelTextField
        label="Email"
        placeholder="Enter your email"
        v-model="email"
        type="email"
        focus
      />
      <FlexboxLayout flexDirection="column" marginTop="500">
        <Label text="2 of 3 steps" alignSelf="flex-end" class="xs-text" />
        <StackLayout orientation="horizontal">
          <Label class="oneProgress" text="" />
          <Label class="progress" text="" />
        </StackLayout>
        <ButtonIcon
          color="orange"
          text="Continue"
          @tap="updateEmail"
        ></ButtonIcon>
      </FlexboxLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import LabelTextField from "~/components/LabelTextField";
import ButtonIcon from "~/components/ButtonIcon";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "EmailInput",
  components: {
    ButtonIcon,
    LabelTextField,
  },
  data() {
    return {
      email: "phat.tran@bigin.vn",
    };
  },
  methods: {
    ...mapMutations(["updateRegisterUser"]),
    updateEmail() {
      if (this.email) {
        this.updateRegisterUser({
          type: "EMAIL",
          value: this.email,
        });
        this.$navigator.navigate("/auth/register/passwordinput");
      } else {
        alert("Please enter your email");
      }
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
  width: 566.6px;
}
</style>
