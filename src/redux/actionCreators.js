import * as ActionTypes from './actionTypes';
import axios from '../axios'

export const fetchEconomicalArticle = () => (dispatch) => {
    console.log("fetchEconomicalArticle called");

    dispatch(economicalLoading());

    // const response = await axios.get('/economical');
    // if(response){
    //   dispatch(fetchedEconomicalArticle(response.data));
    // } else {
    //   dispatch(economicalLoadingFailed(response));
    // }

    console.log("stage 2");
    return axios.get("/economical")
      .then(response => {
        console.log(response.data);
         dispatch(fetchedEconomicalArticle(response.data));
      })
      .catch(err => {
         dispatch(economicalLoadingFailed(err.message))
      })

    // const articles = [{
    //   key : 1,
    //   author : "Vikas Thakur",
    //   article : "ajksdfakldfjasdf"
    // }]

    // dispatch(fetchedEconomicalArticle(articles))
    // setTimeout(() => {
    //   dispatch(fetchedEconomicalArticle(articles))  
    // }, 3000);


    // .then( response => {
    //     console.log("inside then");
    //     if (response.data !== null) {
    //         console.log("data found ");
    //       return response;
    //     } else {
    //       console.log("data is null error")
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //   error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //   })
    // // .then(response => response.json())
    // .then(articles => dispatch(fetchedEconomicalArticle(articles)))
    // .catch(error => dispatch(economicalLoadingFailed(error.message)));

}

export const economicalLoading = () => ({
    type: ActionTypes.ECONOMICAL_ARTICLE_LOADING
});

export const economicalLoadingFailed = (errmess) => ({
    type: ActionTypes.ECONOMICAL_ARTICLE_FAILED,
    payload: errmess
});

export const fetchedEconomicalArticle = (articles) => ({
    type: ActionTypes.FETCHED_ECONOMICAL_ARTICLE,
    payload: articles
});





export const fetchTechnicalArticle = () => (dispatch) => {

    dispatch(technicalLoading());

    return axios.get("/technical")
    .then( response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(articles => dispatch(fetchedTechnicalArticle(articles)))
    .catch(error => dispatch(technicalLoadingFailed(error.message)));
}

export const technicalLoading = () => ({
    type: ActionTypes.ECONOMICAL_ARTICLE_LOADING
});

export const technicalLoadingFailed = (errmess) => ({
    type: ActionTypes.TECHNICAL_ARTICLE_LOADING,
    payload: errmess
});

export const fetchedTechnicalArticle = (articles) => ({
    type: ActionTypes.FETCHED_TECHNICAL_ARTICLE,
    payload: articles
});






export const fetchSportArticle = () => (dispatch) => {

    dispatch(sportLoading());

    return axios.get("/sport")
    .then( response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(articles => dispatch(fetchedSportArticle(articles)))
    .catch(error => dispatch(sportLoadingFailed(error.message)));
}

export const sportLoading = () => ({
    type: ActionTypes.SPORT_ARTICLE_LOADING
});

export const sportLoadingFailed = (errmess) => ({
    type: ActionTypes.SPORT_ARTICLE_FAILED,
    payload: errmess
});

export const fetchedSportArticle = (articles) => ({
    type: ActionTypes.FETCHED_SPORT_ARTICLE,
    payload: articles
});

export const fetchScienceArticle = () => (dispatch) => {

    dispatch(scienceLoading());

    return axios.get("/science")
    .then( response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(articles => dispatch(fetchedScienceArticle(articles)))
    .catch(error => dispatch(scienceLoadingFailed(error.message)));
}

export const scienceLoading = () => ({
    type: ActionTypes.SCIENCE_ARTICLE_LOADING
});

export const scienceLoadingFailed = (errmess) => ({
    type: ActionTypes.SCIENCE_ARTICLE_FAILED,
    payload: errmess
});

export const fetchedScienceArticle = (articles) => ({
    type: ActionTypes.FETCHED_SCIENCE_ARTICLE,
    payload: articles
});
