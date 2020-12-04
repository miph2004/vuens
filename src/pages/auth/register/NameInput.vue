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
          <Span text="What is your name?" class="m-text" />
        </FormattedString>
      </Label>
      <LabelTextField
        label="Full name"
        placeholder="Enter your full name"
        v-model="fullName"
      />
      <FlexboxLayout flexDirection="column" marginTop="500">
        <Label text="1 of 3 steps" alignSelf="flex-end" class="xs-text" />
        <StackLayout orientation="horizontal">
          <Label class="oneProgress" text="" />
          <Label class="progress" text="" />
        </StackLayout>
        <ButtonIcon
          color="orange"
          text="Continue"
          @tap="updateFullname"
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
  name: "NameInput",
  components: {
    ButtonIcon,
    LabelTextField,
  },
  data() {
    return {
      fullName: "Phat",
    };
  },
  methods: {
    ...mapMutations(["updateRegisterUser"]),
    updateFullname() {
      if (this.fullName !== "") {
        this.updateRegisterUser({
          type: "FULLNAME",
          value: this.fullName,
        });

        this.$navigator.navigate("/auth/register/emailinput");
      } else {
        alert("Please enter your fullname!");
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
  width: 283.3px;
}
</style>
