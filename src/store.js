import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
    searchText: "",
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
    card_img: null,
    card_info: null,
    fetchCard(url) {
        axios
            .get(url)
            .then(response => {
                this.card_img = response.data.card_images.image_url;
                this.card_name = response.data.name;
                this.loading = false;
            })
            .catch(err => {
                console.log(err);
                console.error(err.message)
            })

    }

})