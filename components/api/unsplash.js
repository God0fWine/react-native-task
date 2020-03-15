export default class Unsplash {

    constructor(startPage, countPhotoOnPage = 20, sort = 'latest') {
        this.currentPage = startPage;
        this.countPhotoOnPage = countPhotoOnPage;
        this.sort = sort;
        this._API_KEY = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
    }

    async getResourse() {
        const res = await fetch(`${this._API_KEY}&page=${this.currentPage}&sort=${this.sort}&per_page=${this.countPhotoOnPage}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._API_KEY} received ${res.status}`);
        }

        return await res.json();
    };

    async getPhotos() {
        const res = await this.getResourse();
        return res.map((item) => {
            return {
                image: item.urls.thumb,
                author: item.user.name,
                name: item.id,
                fullImage: item.urls.regular
            }
        });
    }

    nextPage(){
        this.currentPage++;
        return this;
    }

}