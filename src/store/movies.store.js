import genericStore from "./generic.store";

export default {
  ...genericStore("movies", "movie", "Movies"),
  namespaced: true,
};
