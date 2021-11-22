<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center">
      <div class="form-control w-50 mt-4 text-center">
        <h1>Авторизація</h1>

        <form @submit.prevent="loginHandler">
          <input v-model="email" type="text" placeholder="Введіть ваш mail" />
          <input v-model="password" type="text" placeholder="Ваш пароль" />

          <button class="btn btn-success">Увійти</button>
        </form>

        <div class="container__info">
          Немаєте аккаунта?
          <router-link to="/register">Регістрація</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/api/axios";
import { mapMutations } from "vuex";

export default {
  name: "Auth",

  methods: {
    ...mapMutations({
      setAuth: "auth/setAuth",
      setAdmin: "auth/setAdmin",
    }),
    async loginHandler() {
      const { data } = await request.post("/users/login", {
        email: this.email,
        password: this.password,
      });

      if (!data) {
        return;
      }

      if (data.admin) {
        this.setAdmin(true);
      }

      this.setAuth(true);
      this.$router.push("/");
    },
  },

  data() {
    return {
      email: "",
      password: "",
    };
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
