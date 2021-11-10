<template>
  <div
    class="movie__img"
    :style="{
      width: `${width}px`,
      heigth: `${heigth}px`,
    }"
  >
    <img :src="imgUrl" alt="image" :width="width" :height="heigth" />
    <div v-if="age" class="movie__age-container">
      <div class="movie__age">{{ age }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieImage",
  props: {
    imgUrl: {
      type: String,
      default: "",
      required: true,
    },
    age: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 0,
    },
    heigth: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie__img {
  position: relative;

  & .movie__age-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    bottom: 15px;
    right: 10px;
    color: white;
    border-radius: 50%;
    border: 3px solid #b2bec3;
  }
}
</style>
