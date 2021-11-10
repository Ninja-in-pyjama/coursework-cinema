import { createStore } from "vuex";
import movies from "./movies.store";

export default createStore({
  modules: {
    movies,
  },
});
