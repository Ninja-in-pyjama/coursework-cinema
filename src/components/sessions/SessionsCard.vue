<template>
  <div class="sessions__wrapper mt-4">
    <div class="sessions__header">Розклад сеансів</div>
    <div class="sessions__cards">
      <session-card
        v-for="session in sessions"
        :key="session.id"
        :time="session.time"
        :type="session.type"
        @click="clickHandler(session.id)"
      />
    </div>
    <div class="sessions__footer">{{ error }}</div>
  </div>
</template>

<script>
import SessionCard from "@/components/sessions/SessionCard";
import { mapGetters } from "vuex";
export default {
  name: "SessionsCard",
  components: { SessionCard },
  props: {
    sessions: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      error: "",
    };
  },

  computed: {
    ...mapGetters({
      isAuth: "auth/isAuth",
    }),
  },
  methods: {
    clickHandler(sessionId) {
      if (!this.isAuth) {
        this.error = "* Потрібно авторизуватися для покупки квитків!";
        return;
      }
      this.$router.push(`/movie/cart/${sessionId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.sessions__footer {
  color: red;
}
</style>
