<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ cars.CarName }}</h2>
        <br />
        <p>
          MPG: <br /><strong>{{ cars.MPG }}</strong>
        </p>
        <p>
          Seating: <br /><strong>{{ cars.Seating }}</strong>
        </p>
        <p>
          Color: <br /><strong>{{ cars.Color }}</strong>
        </p>
        <p>
          Horsepower: <br /><strong>{{ cars.HorsePower }}</strong>
        </p>
        <p>
          Summary: <br /> The <strong>{{ cars.CarName }}</strong> is a <strong>{{ cars.TypeName }}</strong> that only Costs <strong>${{ cars.Cost }}!</strong> It has a beautiful <strong>{{ cars.Color }}</strong> paintjob, seats <strong>{{ cars.Seating }}</strong>, gets <strong>{{ cars.MPG }}</strong> miles/gallon, and has <strong>{{ cars.HorsePower }}</strong> horsepower!!
        </p>
      </div>
    </div>
    <br />
    <router-link v-if="auth" :to="`/cars/${this.$route.params.pk}/review`">
      <button type="button" class="btn btn-success">Write a Review</button>
    </router-link>

    <router-link v-else :to="`/signin`">
      <button type="button" class="btn btn-outline-success">
        Sign In to write a review
      </button>
    </router-link>
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    cars() {
      var cars = this.$store.state.cars;
      var thisCar = cars.find(
        (aCar) => aCar.CarPK == this.$route.params.pk
      );
      //console.log("here is the car you want", thisCar)
      return thisCar;
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style scoped>
</style>