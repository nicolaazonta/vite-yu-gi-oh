import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
    searchText: "",
    loading: true,
    cards: null,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
    fetchCard(url) {
        axios
            .get(url)
            .then(response => {
                /* this.card_img = response.data.card_images.image_url;
                this.card_name = response.data.name; */
                this.cards = response.data.data;
                console.log(this.cards);
                this.loading = false;
            })
            .catch(err => {
                console.log(err);
                console.error(err.message)
            })

    }

})