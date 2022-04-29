import QuoteService from './service';

const START_LOAD = 'setStartLoad';
const FINISH_LOAD = 'setFinishLoad';
const FETCH_TIMESTAMP = 'setFetchTimestamp';
const SET_QUOTES = 'setQuotes';
const SET_COUNT = 'setCount';

export default {
  loadQuotes(context, data) {
    context.commit(START_LOAD);
    QuoteService.loadQuotes(data)
      .then(response => {
        context.commit(SET_COUNT, response?.count);
        context.commit(SET_QUOTES, response?.results);
      })
      .catch(console.log)
      .finally(() => {
        context.commit(FETCH_TIMESTAMP)
        context.commit(FINISH_LOAD)
      });
  },
};
