app.component('review-list',{
    props: {
        reviews:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{review.name}} gave this rating: {{review.rating}}
                <br/>
                {{review.review}}
                <p v-if="review.recommed">This product is recommed</p>
                <p v-else>Ough! i don't recommed that!</p>
            </li>
        </ul>
    </div>`
})