<template>
  <div class="h-100">
    <div class="position-relative h-100">
      <h2>Фільми</h2>
      <table-model
        :data="movies"
        :actions="moviesActionTable"
        :columns="moviesColumnsTable"
        @on-delete="deleteHandler"
        @on-edit="editHandler"
      />

      <div class="btn-add">
        <button @click="$router.push('/dashboard/movies/form/add')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { moviesActionTable, moviesColumnsTable } from "./setup";
import { defineAsyncComponent } from "vue";

export default {
  name: "Movies",
  components: {
    TableModel: defineAsyncComponent(() => import("@/components/TableModel")),
  },
  methods: {
    ...mapActions({
      fetchMovies: "movies/fetchItems",
      deleteMovie: "movies/delete",
    }),
    async deleteHandler({ id }) {
      await this.deleteMovie(id);
      await this.fetchMovies();
    },
    editHandler({ id }) {
      this.$router.push(`/dashboard/movies/form/${id}`);
    },
  },

  computed: {
    ...mapGetters({
      movies: "movies/movies",
    }),
  },

  data: () => ({
    moviesActionTable,
    moviesColumnsTable,
  }),

  mounted() {
    this.fetchMovies();
  },
};
</script>

<style lang="scss" scoped>
.btn-add {
  position: absolute;
  bottom: 15px;
  right: 15px;
  border-radius: 12px;
  z-index: 30;

  button {
    background: green;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}

.form-container {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  border: black 1px solid;

  width: 400px;
  background: #617383;
  z-index: 31;
  height: 100%;
  padding: 15px;
}
</style>
