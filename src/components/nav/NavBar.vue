<template>
  <nav>
    <nav-item v-for="route in routes" :key="route.to" :to="route.to">
      {{ route.name }}
    </nav-item>
  </nav>
</template>

<script>
import NavItem from "@/components/nav/NavItem";

export default {
  name: "NavBar",
  components: { NavItem },

  props: {
    routes: {
      type: Object,
      required:true,
      default: () => {}
    }
  }
}
</script>


<style lang="scss" scoped>
nav {
  & a {
    padding: 10px;
    text-decoration: none;
    color: black;
  }
}

.router-link-active {
  color: #2ca2d9;
}
</style>