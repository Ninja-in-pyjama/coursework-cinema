<template>
  <div class="h-100">
    <div class="position-relative h-100">
      <h2>Сеанси</h2>

      <table-model
        :data="sessions"
        :actions="sessionsActionTable"
        :columns="sessionsColumnsTable"
        @on-delete="deleteHandler"
        @on-edit="editHandler"
      >
        <template #th>
          <th>Фільм</th>
        </template>

        <template #td="{ movieId }">
          <td>{{ getMovieName(movieId) }}</td>
        </template>
      </table-model>

      <div class="btn-add">
        <button @click="$router.push('/dashboard/sessions/form/add')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { sessionsActionTable, sessionsColumnsTable } from "./setup";
import { defineAsyncComponent } from "vue";

export default {
  name: "Sessions",
  components: {
    TableModel: defineAsyncComponent(() => import("@/components/TableModel")),
  },
  methods: {
    ...mapActions({
      fetchSessions: "sessions/fetchItems",
      deleteSession: "sessions/delete",
      fetchMovies: "movies/fetchItems",
    }),
    async deleteHandler({ id }) {
      await this.deleteSession(id);
      await this.fetchSessions();
    },
    editHandler({ id }) {
      this.$router.push(`/dashboard/sessions/form/${id}`);
    },
    getMovieName(id) {
      return Object.values(this.movies).filter((item) => item.id === id)[0]
        .tittle;
    },
  },

  computed: {
    ...mapGetters({
      sessions: "sessions/sessions",
      movies: "movies/movies",
    }),
  },

  data: () => ({
    sessionsActionTable,
    sessionsColumnsTable,
  }),

  created() {
    this.fetchSessions();
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
