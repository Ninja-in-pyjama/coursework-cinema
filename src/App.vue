<template>
  <div class="header">
    <nav-bar class="bg-secondary nav-bar">
      <nav-item to="/">Головна</nav-item>
      <nav-item to="/aurthor">Автор</nav-item>

      <template v-if="isAuth">
        <span class="logout" @click="logoutHandler">Вийти</span>
      </template>
      <template v-else>
        <nav-item to="/auth">Увійти</nav-item>
      </template>

      <template v-if="isAuth && isAdmin">
        <nav-item to="/dashboard/movies">Керування</nav-item>
      </template>
    </nav-bar>
  </div>
  <main class="container-fluid w-100 mx-auto">
    <router-view />
  </main>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    NavItem: defineAsyncComponent(() => import("@/components/nav/NavItem")),
    NavBar: defineAsyncComponent(() => import("@/components/nav/NavBar")),
  },

  computed: {
    ...mapGetters({
      isAuth: "auth/isAuth",
      isAdmin: "auth/isAdmin",
    }),
  },

  methods: {
    ...mapMutations({
      setAuth: "auth/setAuth",
      setAdmin: "auth/setAdmin",
    }),
    logoutHandler() {
      this.setAdmin(false);
      this.setAuth(false);
    },
  },
};
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
}

.header {
  width: 100vw;
}
.nav-bar {
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logout {
  cursor: pointer;
  color: black;
}
</style>
