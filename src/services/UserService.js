var firebase = require("@nativescript/firebase").firebase;

export default {
  async register(user) {
    const userData = await firebase.createUser({
      email: user.email,
      password: user.password,
    });
    if (userData.emailVerified === false) {
      await firebase.sendEmailVerification();
    }
  },
  login(user) {
    return firebase.login({
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: user.email,
        password: user.password,
      },
    });
  },
  async resetPassword(email) {
    return await firebase.sendPasswordResetEmail(email);
  },
  async loginFacebook() {
    await firebase.login({
      type: firebase.LoginType.FACEBOOK,
      facebookOptions: {
        scope: ["public_profile", "email"],
      },
    });
  },
  async loginGoogle() {
    await firebase.login({
      type: firebase.LoginType.GOOGLE,
    });
  },
  async sendEmailVerification() {
    return await firebase.sendEmailVerification();
  },
};
