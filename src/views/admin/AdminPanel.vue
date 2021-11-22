<template>
  <div class="admin-panel row">
    <nav-bar class="sidebar col-2">
      <nav-item to="/dashboard/movies">Фільми</nav-item>
      <nav-item to="/dashboard/sessions">Сеанси</nav-item>
    </nav-bar>
    <div class="content col-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav/NavBar";
import { routes } from "@/views/admin/setup";
import NavItem from "@/components/nav/NavItem";

export default {
  name: "AdminPanel",
  components: { NavItem, NavBar },
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss" scoped>
.admin-panel {
  min-height: 93vh;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  box-shadow: -4px 0px 5px -1px rgba(34, 60, 80, 0.2);
}
</style>
