<template>
  <div class="session__card">
    <div class="session__time">16:45</div>
    <div class="session__type">3D</div>
  </div>
</template>

<script>
export default {
  name: "SessionCard",
};
</script>

<style lang="scss" scoped>
.session__card {
  display: inline-block;
  border: 1px #b2bec3 solid;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  margin: 5px;

  & .session__time {
    font-size: 25px;
    font-weight: bold;
  }

  &:hover {
    color: red;
  }
}
</style>
