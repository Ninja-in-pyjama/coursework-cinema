<template>
  <table class="table">
    <thead>
    <tr>
      <th>#</th>
      <th v-for="({name, index}) in columns" :key="`thead-th-${index}`">
        {{ name }}
      </th>
      <th v-if="actions.length">Дії</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="`tbody-tr-${index}`">
      <td>{{ index + 1 }}</td>

      <td v-for="({key}, idx) in columns" :key="`tbody-td-${index + idx}`">
        {{ item[key] }}
      </td>

      <template v-if="actions.length">
<!--        <td v-for="({actionName, className, emit, keyItem}, idx) in actions" :key="`tbody-td-actions-${index + idx}`">-->
<!--          <button :class="className" @click="$emit(emit, { id: item[keyItem] })">-->
<!--            {{ actionName }}-->
<!--          </button>-->
<!--        </td>-->
        <td>
          <button
              v-for="({actionName, className, emit, keyItem}, idx) in actions" :key="`tbody-td-actions-${index + idx}`"
              :class="className"
              class="me-2"
              @click="$emit(emit, { id: item[keyItem] })">
            {{ actionName }}
          </button>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableModel",

  props: {
    columns: {
      type: Array,
      required: true,
      default: () => []
    },

    actions: {
      type: Array,
      required: true,
      default: () => []
    },

    data: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
}
</script>

<style scoped>

</style>