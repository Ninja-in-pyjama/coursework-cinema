<template>
  <div class="form-group mb-3">
    <label :for="id">{{ label }}</label>
    <input
        type="text"
        class="form-control"
        :id="id"
        :placeholder="placeholder"

        :value="text"
        @input="$emit('update:text', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: "FormInput",

  props: {
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
}
</script>