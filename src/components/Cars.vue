<template>
    <div>
        <h1>Cars</h1>
        <hr/>

        <table class = "table">
            <thead>
                <tr>
                    <th>Car Name</th>
                    <th>Cost</th>
                    <th>Model</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisCar in cars" :key="thisCar.CarPK">
                    <th>{{thisCar.CarName}}</th>
                    <!-- <td>{{formattedPrice}}</td> -->
                    <td>{{thisCar.Cost}}</td>
                    <td>{{thisCar.TypeName}}</td>
                    <td>
                        <router-link :to="`/cars/${thisCar.CarPK}`">
                        <button type = "button" class = "btn btn-primary">Details</button>
                        </router-link>
                    </td>

                </tr>
            </tbody>
        </table>    
    </div>
</template>

<script>
export default {
    computed:{
        cars(){return this.$store.state.cars}
    }
    // formattedPrice(){
    //     return new Int1.NumberFormat("en-US",{
    //         style: 'currency',
    //         currency: 'USD'
    //     }).format(this.Car.Cost)
    // }
}
</script>

<style scoped>
</style>