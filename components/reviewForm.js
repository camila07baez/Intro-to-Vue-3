app.component('review-form',{
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating"  v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        </select>

        <label>Recommend this product?</label>
        <input type="checkbox" id="recommed" v-model="recommed">

        <input class="button" type="submit" value="Submit">
    </form>`,
    data(){
        return {
        name: '',
        review: '',
        rating: null,
        recommed: false
        }
    },
    methods: {
        onSubmit(){
            if(this.name === '' || this.review === '' || this.rating === null){
                alert("Review is incompleted. Please fill out the fields")
                return
            }
            console.log(this.recommed)

            let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            recommed: this.recommed
            }
            this.$emit('review-submitted', productReview)
            
            this.name= ''
            this.review= ''
            this.rating= null
            this.recommed = false
        }
    }
})