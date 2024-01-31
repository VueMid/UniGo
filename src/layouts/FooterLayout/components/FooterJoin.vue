<template>
  <form
    class="join__form"
    @submit.prevent="sendInformation"
    action="https://echo.htmlacademy.ru"
    method="post"
  >
    <div
      class="join__input-main-box w-full flex flex-col justify-center items-center"
    >
      <div class="join__form-control" :class="error.nameError ? 'invalid' : ''">
        <input
          class="join__input"
          type="text"
          name="text"
          v-model.trim="username"
          id="username"
          autocomplete="off"
          placeholder="First name"
        />
        <span class="join__rendering text-red-600 font-black">
          {{ error.nameError }}</span
        >
      </div>
      <div
        class="join__form-control"
        :class="errorSecond.nameErrorSecond ? 'invalid' : ''"
      >
        <input
          class="join__input"
          type="email"
          name="email"
          v-model.trim="email"
          id="tel"
          autocomplete="off"
          placeholder="E-mail"
        />
        <span class="join__rendering text-red-600 font-black">
          {{ errorSecond.nameErrorSecond }}</span
        >
      </div>
    </div>
    <button class="join__button" type="submit">Send</button>
  </form>
</template>
<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
      username: "",
      email: "",
      error: {
        nameError: null,
      },
      errorSecond: {
        nameErrorSecond: null,
      },
    };
  },
  methods: {
    validatedForm() {
      let isValid = true;
      if (this.username.length === 0) {
        isValid = false;
        this.error.nameError = "*Enter your full-name";
      } else if (this.username !== Number) {
        isValid = false;
        this.error.nameError = "*Please enter a word";
      } else {
        isValid = true;
        this.error.nameError = null;
      }
      return isValid;
    },
    validatedFormSecond() {
      let isSecondValid = true;
      if (this.email.length === 0) {
        isSecondValid = false;
        this.errorSecond.nameErrorSecond = "*Enter your E-mail address";
      } else {
        isSecondValid = true;
        this.errorSecond.nameErrorSecond = null;
      }
      return isSecondValid;
    },
    sendInformation() {
      if (this.validatedForm() && this.validatedFormSecond()) {
        this.sendData(this.username, this.email);
      }
    },
    async sendData(name, email) {
      const token = `6829823099:AAHWcYDQflx27nbBUjfFnaKkENXZEs9WCAo`;
      const bot_id = `-1001837026407`;
      const info = `User: %0A<strong>Full-name 🤖:</strong> ${name} %0A<strong>Email Address 📧:</strong> ${email}`;
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${bot_id}&text=${info}&parse_mode=html`
      );
      const data = await response.json();
      console.log(data);
      this.toast.success("Your information has been sent");
      this.username = "";
      this.email = "";
    },
  },
};
</script>
<style scoped lang="scss">
.join {
  &__form {
  }

  &__input-main-box {
  }

  &__form-control {
  }

  &__input {
    font-family: "Inter";
  }

  &__rendering {
  }

  &__button {
    font-family: "Inter";
  }
}
</style>
