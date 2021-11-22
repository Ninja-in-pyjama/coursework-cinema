import genericStore from "./generic.store";

export default {
  ...genericStore("sessions", "session", "Sessions"),
  namespaced: true,
};
