<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: "NavItem",

  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  padding: 10px;
  text-decoration: none;
  color: black;
}
.router-link-active {
  color: #2ca2d9;
}
</style>
