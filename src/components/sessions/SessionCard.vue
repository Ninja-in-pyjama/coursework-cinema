<template>
  <div class="session__card">
    <div class="session__time">
      {{ new Date(time).getHours() }}:{{ new Date(time).getMinutes() }}
    </div>
    <div class="session__type">{{ type }}</div>
  </div>
</template>

<script>
export default {
  name: "SessionCard",
  props: {
    time: {
      type: String,
      default: "12:00",
    },
    type: {
      type: String,
      default: "3D",
    },
  },
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
