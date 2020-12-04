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
    <StackLayout paddingLeft="12" paddingRight="12">
      <Image
        src="~/assets/images/link_expired.png"
        width="256"
        height="211"
        marginTop="80"
      />
      <Label
        text="Expired reset password request"
        class="text-center"
        marginTop="16"
      />
      <Label
        text="The reset password link goes with email that we"
        class="text-center"
        marginTop="8"
      />
      <Label class="text-center">
        <FormattedString>
          <Span text="sent to " />
          <Span :text="$props.email" class="bold" />
          <Span text=" is expired. Hit button" />
        </FormattedString>
      </Label>
      <Label
        text='"Resend email" to receive another one.'
        class="text-center"
      />
      <ButtonIcon text="Resend email" color="skin" marginTop="273" />
    </StackLayout>
  </Page>
</template>

<script>
import ButtonIcon from "~/components/ButtonIcon";

export default {
  name: "ResetPasswordLink",
  components: {
    ButtonIcon,
  },
  props: ["email"],
};
</script>

<style>
.s-text {
  font-size: 20;
  font-weight: 600;
  text-align: center;
  margin-top: 16px;
}
.bold {
  font-weight: bold;
}
</style>
