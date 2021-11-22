<template>
  <div class="movie__info-container">
    <div class="row">
      <div class="col-3">
        <movie-image
          :img-url="movie.img"
          :age="movie.allowedAge"
          :width="300"
          :heigth="410"
          class="mx-auto mt-4"
        />
      </div>
      <div class="col-6">
        <div class="movie__info m-2 p-2">
          <div class="movie__tittle">{{ movie.tittle }}</div>

          <ul class="movie__info list-unstyled">
            <li>
              <div class="movie__type">Вік:</div>
              <div class="movie__text">{{ movie.allowedAge }}</div>
            </li>
            <li>
              <div class="movie__type">Рік:</div>
              <div class="movie__text">{{ movie.year }}</div>
            </li>
            <li>
              <div class="movie__type">Режисер:</div>
              <div class="movie__text">{{ movie.producer }}</div>
            </li>
            <li>
              <div class="movie__type">Жанр:</div>
              <div class="movie__text">
                {{ movie.genre }}
              </div>
            </li>
            <li>
              <div class="movie__type">Країна:</div>
              <div class="movie__text">{{ movie.country }}</div>
            </li>
            <li>
              <div class="movie__type">Тривалість:</div>
              <div class="movie__text">{{ movie.duration }} хв.</div>
            </li>
            <li>
              <div class="movie__type">Актори:</div>
              <div class="movie__text">
                {{ movie.actors }}
              </div>
            </li>
          </ul>

          <div class="movie__description">
            <div class="movie__desctiption__tittle">Про фільм:</div>
            <div class="movie__desctiption__text">
              {{ movie.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <sessions-card :sessions="sessions" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MovieImage from "@/components/MovieImage";
import SessionsCard from "@/components/sessions/SessionsCard";
import request from "@/api/axios";

export default {
  name: "MovieInfo",
  components: {
    SessionsCard,
    MovieImage,
  },

  data() {
    return {
      sessions: [],
    };
  },

  computed: {
    ...mapGetters({
      movie: "movies/movie",
    }),
  },

  methods: {
    ...mapActions({
      fetchMovie: "movies/fetchItem",
    }),
  },

  async mounted() {
    const movieId = this.$route.params.id;
    if (movieId) {
      await this.fetchMovie(movieId);

      const { data } = await request.get(`/movies/session/${movieId}`);
      this.sessions = data;
    }
  },
};
</script>

<style lang="scss" scoped>
.movie__info {
  font-size: 20px;
  color: black;
}

.movie__tittle,
.movie__desctiption__tittle {
  font-size: 40px;
}

.movie__type {
  float: left;
  display: inline-block;
  width: 180px;
}
.movie__text {
  display: inline-block;
  width: calc(100% - 180px);
}
</style>
