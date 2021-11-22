import { createStore } from "vuex";
import movies from "./movies.store";
import sessions from "./sessions.store";
import auth from "./auth.store";

export default createStore({
  modules: {
    movies,
    sessions,
    auth,
  },
});
