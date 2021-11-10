<template>
  <div class="movie__info-container">
    <div class="row">
      <div class="col-3">
        <movie-image
          img-url="https://ua-images.kinorium.com/movie/1080/1693584.jpg?1630783309"
          age="12+"
          width="300"
          heigth="410"
          class="mx-auto mt-4"
        />
      </div>
      <div class="col-6">
        <div class="movie__info m-2 p-2">
          <div class="movie__tittle">Вічні</div>

          <ul class="movie__info list-unstyled">
            <li>
              <div class="movie__type">Вік:</div>
              <div class="movie__text">12+</div>
            </li>
            <li>
              <div class="movie__type">Рік:</div>
              <div class="movie__text">2021</div>
            </li>
            <li>
              <div class="movie__type">Режисер:</div>
              <div class="movie__text">Хлоя Чжао</div>
            </li>
            <li>
              <div class="movie__type">Жанр:</div>
              <div class="movie__text">
                Бойовик, Фантастика, Драма, Пригоди, Екшн
              </div>
            </li>
            <li>
              <div class="movie__type">Країна:</div>
              <div class="movie__text">США</div>
            </li>
            <li>
              <div class="movie__type">Тривалість:</div>
              <div class="movie__text">90 хв.</div>
            </li>
            <li>
              <div class="movie__type">Актори:</div>
              <div class="movie__text">
                Анджеліна Джолі («Чаклунка: Повелителька темряви»), Річард
                Медден («1917»), Сальма Гаєк («Тілоохоронець дружини кілера»),
                Кумейл Нанджіані («Дулітл», «Махач вчителів»), Джемма Чан
                («Капітан Марвел»), Кіт Герінґтон (серіал «Гра престолів») та
                інші.
              </div>
            </li>
          </ul>

          <div class="movie__description">
            <div class="movie__desctiption__tittle">Про фільм:</div>
            <div class="movie__desctiption__text">
              Історія реального поета і хороброго воїна Сірано, який жив у XVII
              столітті, в XIX столітті стала театральним бестселером завдяки
              Едмону Ростань, а в XXI столітті в руках британців Мартіна крімп і
              Джеймі Ллойда перенеслася в наш час. А це означає - жодних
              бутафорських носів, плащів і шпаг. Зрештою, головною зброєю де
              Бержерака в усі часи були гострий розум і нещадно точне слово! Ну
              і, звичайно, романтичне велике серце - і саме це чарівне поєднання
              грає геніальний майстер перевтілень Джеймс МакКевой.
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="sessions__wrapper mt-4">
          <div class="sessions__header">Розклад сеансів</div>
          <div class="sessions__cards">тут будуть сеанси</div>
          <div class="sessions__footer">просто низ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MovieInfo",
  components: {
    MovieImage: () =>
      defineAsyncComponent(() => import("@/components/MovieImage")),
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

.sessions__wrapper {
  border-radius: 20px;
  overflow: hidden;
  color: white;

  & div {
    padding: 20px;
  }
}

.sessions__header,
.sessions__footer {
  background: #2d3436;
  height: 100px;
}

.sessions__cards {
  height: 400px;
  background: #617383;
}
</style>
