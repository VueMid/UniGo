<template>
  <div class="">
    <h4
      class="join__title text-[20px] text-darker-gray font-semibold leading-normal mb-[10px]"
    >
      Join us
    </h4>
    <form
      class="join__form flex flex-col justify-center items-start gap-3"
      @submit.prevent="sendInformation"
      action="https://echo.htmlacademy.ru"
      method="post"
    >
      <div
        class="join__form-control flex flex-col justify-center items-start"
        :class="error.nameError ? 'invalid' : ''"
      >
        <input
          class="join__input outline-none focus:text-darker-gray text-[16px] font-medium pb-2 focus:pb-2"
          type="text"
          v-model.trim="username"
          id="username"
          autocomplete="off"
          placeholder="First name"
        />
        <span class="join__rendering text-red-600 font-medium text-[16px]">
          {{ error.nameError }}
        </span>
      </div>
      <div
        class="join__form-control flex flex-col justify-center items-start"
        :class="error.nameError ? 'invalid' : ''"
      >
        <input
          class="join__input outline-none focus:text-darker-gray text-[16px] font-medium pb-2 focus:pb-2"
          type="email"
          v-model.trim="email"
          id="email"
          autocomplete="off"
          placeholder="E-mail"
        />
        <span class="join__rendering text-red-600 font-medium text-[16px]">
          {{ errorSecond.nameErrorSecond }}
        </span>
      </div>
      <button
        class="join__button px-[30px] py-[8px] mt-[20px] bg-darker-gray rounded-[41px] text-yellow border-yellow border-[2px] font-normal leading-normal active:opacity-70 duration-100"
        type="submit"
      >
        Send
      </button>
    </form>
  </div>
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
      if (this.validatedForm());
      if (this.validatedFormSecond()) {
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
<style scoped>
#username::placeholder {
  color: rgb(40, 48, 51) !important;
  transform: translateX(12px);
}
#email::placeholder {
  color: rgb(40, 48, 51) !important;
  transform: translateX(12px);
}
.join__form {
}
.join__input-main-box {
}
.join__form-control {
}
.join__input {
  border-bottom: 1px solid #283033;
  font-family: "Inter";
  transition: 0.5ms;
}
.join__button {
  font-family: "Inter";
}
</style>
