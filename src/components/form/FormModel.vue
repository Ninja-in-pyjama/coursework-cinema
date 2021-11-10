<template>
  <form class="form-control mt-4" @submit.prevent>
    <slot />
  </form>
</template>

<script>
export default {
  name: "FormModel"
}
</script>