<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center">
      <div class="form-control w-50 mt-4 text-center">
        <h1>Регістрація</h1>

        <form @submit.prevent="registerHandler">
          <input
            v-model="formModel.email"
            type="text"
            placeholder="Введіть ваш mail"
          />
          <input
            v-model="formModel.password"
            type="text"
            placeholder="Ваш пароль"
          />
          <input
            v-model="formModel.name"
            type="text"
            placeholder="Ваше ім'я та прізвище"
          />
          <input
            v-model="formModel.birthday"
            type="date"
            placeholder="День народження"
          />

          <button class="btn btn-success">Зареєструватися</button>
        </form>

        <div class="container__info">
          Вже маєте аккаунт?
          <router-link to="/auth">Увійти</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import request from "@/api/axios";

export default {
  name: "Register",

  data() {
    return {
      formModel: {
        email: "",
        password: "",
        name: "",
        birthday: "",
      },
    };
  },

  methods: {
    ...mapMutations({
      setAuth: "auth/setAuth",
    }),
    async registerHandler() {
      if (Object.values(this.formModel).some((item) => !item)) {
        return;
      }
      await request.post("/users", { ...this.formModel });

      this.setAuth(true);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
form input {
  display: block;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

.container__info {
  margin-top: 10px;
  padding: 20px;
  background-color: #f1f1f1;
  text-align: center;
}
</style>
