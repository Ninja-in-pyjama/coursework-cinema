<template>
  <div class="w-50">
    <form-model>
      <form-input
          v-for="input in moviesFormInputs"
          :key="input.id"
          :label="input.label"
          :placeholder="input.placeholder"
          v-model:text="modelForm[input.value]"
      />

      <div class="d-flex justify-content-center">
        <button
            class="btn btn-success"
            @click="btnHandler"
        >
          {{ isUpdate ? "Оновити" : "Створити" }}
        </button>
      </div>
    </form-model>
  </div>
</template>

<script>
import {moviesFormInputs} from "./setup"
import {defineAsyncComponent} from "vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MovieForm",
  components: {
    FormInput: defineAsyncComponent(() => import("@/components/form/FormInput")),
    FormModel: defineAsyncComponent(() => import("@/components/form/FormModel")),
  },
  data: () => ({
    moviesFormInputs,
    isUpdate: false,

    modelForm: {
      tittle: "Веном 2",
      country: "США",
      description: "Тест",
      producer: "Енді",
      allowedAge: "18+",
      actors: "Том харді",
      genre: "Екнш",
      duration: "98",
      year: "2021",
      img: "без імідж"
    }
  }),

  methods: {
    ...mapActions({
      createMovie: "movies/create",
      fetchMovie: "movies/fetchItem",
      updateMovie: "movies/update"
    }),
    btnHandler() {
      if (Object.values(this.modelForm).some(text => !text)) {
        return;
      }
      !this.isUpdate ?
          this.createMovie({ ...this.modelForm }) :
          this.updateMovie({ payload: this.modelForm, id: this.$route.params.id })
    },
  },

  computed: {
    ...mapGetters({
      movie: "movies/movie"
    })
  },

  async mounted() {
    const movieId = this.$route.params.id;
    if (movieId !== "add") {
        await this.fetchMovie(movieId);
        this.modelForm = { ...this.movie };
        this.isUpdate = true;
    }
  }
}
</script>