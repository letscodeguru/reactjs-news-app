import axios from 'axios';

class NewService {
	constructor() {
	    this.getNewsArticle = this.getNewsArticle.bind(this);
	}

	getNewsArticle(pageNumber, pageSize) {
		return axios.get("http://localhost:10000/api/news?page=" + pageNumber + "&size=" + pageSize);
	} 
}


export default NewService;