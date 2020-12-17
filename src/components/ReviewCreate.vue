<template>
     <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Write a Review</h4> 
                     <form id="order-form" @submit.prevent="submitReview">
                        <div class="form-group">
                             <label for="quantityinput">Rating</label> 
                             <input type="number" id="ratinginput" name="rating" min="1" max="10" required="required" class="form-control" v-model="rating">
                        </div> 
                        <div class="form-group">
                            <label for="summaryinput">Review</label> <textarea row="3" id="summaryinput" name="summary" required="required" class="form-control" v-model="summary"></textarea>
                        </div> 
                        
                        <button type="submit" class="btn btn-primary">Post</button> 
                        
                        <button v-on:click="cancelReview" type="clear" class="btn btn-outline-danger">
                        Cancel
                        </button>

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
           rating: null,
           summary: "",
           errorMessage: null
        }
    },
    methods:{
    submitReview(){
        const myReview={
            Rating: this.rating,
            Summary: this.summary,
            CarFK: this.$route.params.pk
        };
        console.log("here is the review", myReview)
        const token = this.$store.state.token;
        console.log(token)
        axios.post("/review", myReview,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(()=>{this.$router.replace('/account')})
        .catch(()=>{
            this.errorMessage = "Unable to write a review, please try again later."
        })
    },
    cancelReview(){
        this.$router.go(-1)
    }
    }
}
</script>

<style scoped>
</style>
