<template>
  <div class="row">
    <div class="col-9">
      <div class="row">
        <div class="offset-6">
          <h1>{{ movie.tittle }} {{ session.type }}</h1>
        </div>
      </div>

      <div class="row mt-4">
        <div class="offset-4">
          <div class="hall">
            <div class="screen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 806 21"
                fill="#061420"
              >
                <path
                  d="M3.2,20l-2,0.2l-0.3-4l2-0.2C136.2,5.3,269.6,0,403,0s266.8,5.3,400.2,16l2,0.2l-0.3,4l-2-0.2 C669.5,9.3,536.3,4,403,4S136.4,9.3,3.2,20z"
                ></path>
              </svg>
              <p>ЕКРАН</p>
            </div>

            <div class="seats">
              <div
                v-for="(seatRow, index) in seats"
                :key="index"
                class="seats-row"
              >
                <Seat
                  v-for="(seat, idx) in seatRow"
                  :key="idx"
                  :seat-id="idx"
                  :seat-row="index"
                  :booked="seat"
                  @click="seatHandler(index, idx)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="cart">
        <div class="cart__main">
          <div class="cart__info">
            <h4>Квитки</h4>
            <h5>{{ cart.length }} квитків</h5>
          </div>

          <cart-info
            v-for="item in cart"
            :key="`seat-id${item.seatId}seat-row${item.seatRow}`"
            :seat-id="item.seatId"
            :seat-row="item.seatRow"
            :seat-price="item.price"
            @on-delete="deleteHandler"
          />
        </div>

        <div class="cart__footer">
          <div class="cart__info">
            <h4>Всього до сплати:</h4>
            <h5>{{ getTicketsPrice }} грн</h5>
          </div>
          <button class="btn btn-success w-100" @click="buyHandler">
            Продовжити
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Seat from "@/components/Seat";
import CartInfo from "@/components/CartInfo";

export default {
  name: "Cart",
  components: { CartInfo, Seat },
  computed: {
    ...mapGetters({
      movie: "movies/movie",
      session: "sessions/session",
    }),

    getTicketsPrice() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    },
  },

  data() {
    return {
      seats: [],
      cart: [],
    };
  },

  methods: {
    ...mapActions({
      fetchMovie: "movies/fetchItem",
      fetchSession: "sessions/fetchItem",
      updateSession: "sessions/update",
    }),
    seatHandler(seatRow, seatId) {
      if (this.seats[seatRow][seatId]) {
        this.deleteHandler(seatRow, seatId);
        return;
      }
      this.cart.push({
        seatRow,
        seatId,
        price: 110,
      });
      this.seats[seatRow][seatId] = true;
    },
    deleteHandler(seatRow, seatId) {
      console.log(seatRow, seatId);

      this.cart = this.cart.filter(
        (item) => !(item.seatId === seatId && item.seatRow === seatRow)
      );
      this.seats[seatRow][seatId] = false;
    },
    async buyHandler() {
      if (!this.cart.length) {
        return;
      }
      console.log(this.cart);
      await this.updateSession({
        payload: { seats: JSON.stringify(this.seats) },
        id: this.session.id,
      });
      await this.$router.push("/success");
    },
  },

  async created() {
    const sessionsId = this.$route.params.id;
    if (sessionsId) {
      await this.fetchSession(sessionsId);
      await this.fetchMovie(this.session.movieId);

      this.seats = JSON.parse(this.session.seats);
    }
  },
};
</script>

<style lang="scss" scoped>
.screen {
  width: 100%;
  text-align: center;
}
.hall {
  width: 40%;
}
.seats {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.seats-row {
  display: flex;
}
.cart {
  background: rgba(91, 154, 175, 0.73);
  height: calc(100vh - 50px);
  padding: 20px;
}
.cart__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart__main {
  height: 80%;
  overflow-y: auto;
}
</style>
