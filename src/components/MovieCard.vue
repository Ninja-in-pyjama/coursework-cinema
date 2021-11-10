<template>
  <div class="movie__card">
    <div>
      <movie-image :img-url="imgUrl" :age="age" :width="240" :heigth="350" />
    </div>
    <div class="movie__info">
      <div class="movie__tittle">{{ tittle }}</div>
    </div>
    <div class="hover__effect"></div>
  </div>
</template>

<script>
import MovieImage from "@/components/MovieImage";
export default {
  name: "MovieCard",
  components: { MovieImage },
  props: {
    imgUrl: {
      type: String,
      default: "",
    },
    tittle: {
      type: String,
      default: "",
    },
    age: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.movie__card {
  width: 250px;
  padding: 5px;
  background: #dfe6e9;
  margin: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
.movie__tittle {
  font-size: 18px;
  color: #636e72;
  height: 50px;
  line-height: 1;
  text-align: center;
  padding: 5px;
}
</style>
