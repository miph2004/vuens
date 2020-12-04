<template>
  <Page>
    <FlexboxLayout class="container">
      <Image
        src="~/assets/images/logo.png"
        height="110"
        width="238"
        marginTop="108"
      ></Image>

      <FlexboxLayout flexDirection="column" class="form">
        <Label text="Log in" class="text" textWrap="true" />
        <ButtonIcon
          text="Log in with email"
          color="orange"
          @tap="$navigator.navigate('/auth/signin/signinwithemail')"
        />

        <ButtonIcon
          text="Create an account"
          @tap="$navigator.navigate('/auth/register/nameinput')"
        />

        <StackLayout orientation="horizontal" alignSelf="center">
          <Label class="span" text="" />
          <Label text="or" paddingLeft="4" paddingRight="4" />
          <Label class="span" text="" />
        </StackLayout>

        <ButtonIcon
          text="Countinue with Facebook"
          iconName="facebook"
          color="blue"
          @tap="loginFacebook"
        />

        <ButtonIcon
          text="Countinue with Google"
          iconName="google"
          color="grey"
          @tap="loginGoogle"
        />

        <StackLayout marginTop="24">
          <Label
            text="By countinuing, you understand and agree to"
            textAlignment="center"
          ></Label>
          <Label textAlignment="center">
            <FormattedString>
              <Span text="Tour Guide Plan " />
              <Span text="Terms of Use" style="font-weight: bold" />
            </FormattedString>
          </Label>
          <Label textAlignment="center">
            <FormattedString>
              <Span text="and " />
              <Span text="Privacy Policy" style="font-weight: bold" />
            </FormattedString>
          </Label>
        </StackLayout>
      </FlexboxLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
import userService from "~/services/UserService";
import ButtonIcon from "~/components/ButtonIcon";

export default {
  name: "Login",
  components: {
    ButtonIcon,
  },
  data() {
    return {
      user: {
        email: "phat.tran@bigin.vn",
        password: "123456",
        confirmPassword: "123456",
      },
    };
  },
  methods: {
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
.container {
  flex-direction: column;
  background-image: url("~/assets/images/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.form {
  margin: 64px 24px 0px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 1px 6px 24px 0px rgba(0, 0, 0, 0.16);
  padding: 24px;
  width: 366px;
}
.text {
  font-size: 20px;
  font-weight: 600;
}

.span {
  height: 0.1px;
  width: 140px;
  background-color: black;
}
</style>
