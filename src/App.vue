<template>
  <div class="header">
    <nav-bar class="bg-secondary nav-bar" :routes="routes" />
  </div>
  <main class="container-fluid w-100 mx-auto">
    <router-view />
  </main>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { routes } from "@/views/main/setup";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("@/components/nav/NavBar")),
  },

  data() {
    return {
      routes,
    };
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
</style>
