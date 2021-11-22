<template>
  <div class="w-50">
    <form-model>
      <select class="form-select mb-3" v-model="modelForm.type">
        <option selected disabled>Виберіть формат:</option>
        <option value="2D">2D</option>
        <option value="3D">3D</option>
        <option value="4DX">4DX</option>
      </select>

      <select class="form-select mb-3" v-model="modelForm.hall">
        <option selected disabled>Виберіть зал:</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <select class="form-select mb-3" v-model="modelForm.movieId">
        <option selected disabled>Виберіть фільм:</option>
        <option v-for="movie in movies" :key="movie.id" :value="movie.id">
          {{ movie.tittle }}
        </option>
      </select>

      <input
        class="form-control mb-3"
        type="datetime-local"
        v-model="modelForm.time"
      />

      <div class="d-flex justify-content-center">
        <button class="btn btn-success" @click="btnHandler">
          {{ isUpdate ? "Оновити" : "Створити" }}
        </button>
      </div>
    </form-model>
  </div>
</template>

<script>
import { sessionsFormInputs } from "./setup";
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SessionForm",
  components: {
    FormModel: defineAsyncComponent(() =>
      import("@/components/form/FormModel")
    ),
  },
  data: () => ({
    sessionsFormInputs,
    isUpdate: false,

    modelForm: {
      type: "",
      time: "",
      hall: "",
      movieId: "",
    },
  }),

  methods: {
    ...mapActions({
      createSession: "sessions/create",
      fetchSession: "sessions/fetchItem",
      updateSession: "sessions/update",
      fetchMovies: "movies/fetchItems",
    }),
    btnHandler() {
      if (Object.values(this.modelForm).some((text) => !text)) {
        return;
      }
      !this.isUpdate
        ? this.createSession({ ...this.modelForm })
        : this.updateSession({
            payload: this.modelForm,
            id: this.$route.params.id,
          });
    },
  },

  computed: {
    ...mapGetters({
      session: "sessions/session",
      movies: "movies/movies",
    }),
  },

  async created() {
    const sessionId = this.$route.params.id;
    if (sessionId !== "add") {
      await this.fetchSession(sessionId);
      this.modelForm = {
        ...this.session,
        time: this.session.time.slice(0, this.session.time.length - 5),
      };
      this.isUpdate = true;

      console.log(this.modelForm);
    }
    this.fetchMovies();
  },
};
</script>
