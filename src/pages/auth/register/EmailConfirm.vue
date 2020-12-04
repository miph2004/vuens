<template>
  <Page>
    <ActionBar>
      <ActionItem ios.position="right">
        <Label
          text="x"
          @tap="$navigator.navigate('/auth/login', { clearHistory: true })"
        />
      </ActionItem>
    </ActionBar>
    <StackLayout>
      <Image
        src="~/assets/images/mailbox.png"
        width="255"
        height="237"
        marginTop="80"
      />
      <Label
        text="Check your mailbox"
        class="s-text text-center"
        marginTop="16"
      />
      <Label class="text-center" marginTop="8">
        <FormattedString>
          <Span text="An email has been sent to " />
          <Span :text="registerUser().email" class="bold " />
        </FormattedString>
      </Label>
      <Label text="with a link to verify your account" class="text-center" />
      <StackLayout marginTop="155">
        <Label
          text="If you did not receive any email, please check your junk/spam folder"
          class="xs-text text-center"
        />
        <ButtonIcon
          color="skin"
          text="Resend email"
          width="390"
          @tap="sendEmailVerification"
        />
        <Label
          text="Entered wrong email?"
          class="xs-text text-center"
          marginTop="24"
        />
        <ButtonIcon text="Change email" width="390" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonIcon from "~/components/ButtonIcon";
import userService from "~/services/UserService";

export default {
  name: "EmailConfirm",
  components: {
    ButtonIcon,
  },
  methods: {
    ...mapGetters(["registerUser"]),
    sendEmailVerification() {
      userService
        .sendEmailVerification()
        .then(() => alert("An email verification has been sent"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.s-text {
  font-size: 20px;
  font-weight: 600;
}
.xs-text {
  font-size: 10px;
  font-weight: 600;
  color: #6f6f6f;
}
.bold {
  font-weight: bold;
}
.text-center {
  text-align: center;
}
</style>
