<template>
  <div class="cart__container">
    <h5>{{ seatRow + 1 }} ряд</h5>
    <h5>{{ seatId + 1 }} місце</h5>
    <div class="cart__actions">
      <h5>{{ seatPrice }} грн</h5>
      <button
        class="btn btn-success"
        @click="$emit('onDelete', seatRow, seatId)"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartInfo",

  props: {
    seatRow: {
      type: Number,
      required: true,
    },
    seatId: {
      type: Number,
      required: true,
    },
    seatPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cart__container {
  border: black 1px solid;
  margin-bottom: 5px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

.cart__actions {
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    border-radius: 50%;
  }
}
</style>
