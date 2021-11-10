<template>
  <div
    class="movies mt-4 d-flex flex-wrap align-items-center align-items-stretch"
  >
    <movie-card
      v-for="movie in movies"
      :key="movie.id"
      :tittle="movie.tittle"
      :age="movie.allowedAge"
      :img-url="movie.img"
      @click="$router.push(`/movies/${movie.id}`)"
    />

    <movie-card
      v-for="movie in movies"
      :key="movie.id"
      :tittle="movie.tittle"
      :genre="movie.genre"
      :age="movie.allowedAge"
      :img-url="movie.img"
    />
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: { MovieCard },

  computed: {
    ...mapGetters({
      movies: "movies/movies",
    }),
  },

  methods: {
    ...mapActions({
      fetchMovies: "movies/fetchItems",
    }),
  },
  async mounted() {
    await this.fetchMovies();
  },
};
</script>

<style lang="scss" scoped></style>
