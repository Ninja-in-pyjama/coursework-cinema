<template>
  <div
    class="seat"
    :style="{
      backgroundColor: booked ? '#2ca2d9aa' : '',
    }"
    :title="`Ряд: ${seatRow + 1}, Місце: ${seatId + 1}`"
  ></div>
</template>

<script>
export default {
  name: "Seat",

  props: {
    seatRow: {
      type: Number,
      required: true,
    },
    seatId: {
      type: Number,
      required: true,
    },
    booked: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.seat {
  border-radius: 15px;
  border: #2ca2d9 1px solid;
  padding: 15px;
  margin: 5px;

  &:hover {
    background: #2ca2d9aa;
  }
}
</style>
