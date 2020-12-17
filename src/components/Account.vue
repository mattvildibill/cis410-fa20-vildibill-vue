<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{firstName}}'s Reviews </h3>

        <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later</p>
        
        <table v-if="reviewsByUser" class = "table">
            <thead>
                <th>Car</th>
                <th>Summary</th>
                <th>Rating</th>
    

            </thead>
            <tbody>
                <tr v-for="thisReview in reviewsByUser" :key="thisReview.ReviewPK"> 
                    <th><router-link :to="`/cars/${thisReview.CarFK}`">{{thisReview.CarFK}}</router-link></th>
                    <th>{{thisReview.Summary}}</th>
                    <th>{{thisReview.Rating}}</th> 
                   
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            reviewsByUser: null,
            accountError: false
        }
    },
    computed: {
        firstName(){
            console.log(this.$store.state)
            return this.$store.state.user.FirstName
        }
    },
    created(){
        axios.get("/review/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{
            console.log("here is the review/me response", response)
            this.reviewsByUser = response.data
        })
            .catch(()=>{
                this.accountError = true
            })
        
    }
}
</script>

<style scoped>
</style>