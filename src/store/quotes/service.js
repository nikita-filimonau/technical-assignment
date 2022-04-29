import fetch from "@/utils/fetch";
import API from "@/constants/api";

class QuoteService {
    loadQuotes(data) {
        return fetch.fetch({
            urlPostfix: API.QUOTES,
            params: data,
        })
    }
}

export default new QuoteService();
