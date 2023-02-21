/*eslint-disable*/

// API data

const APIURL = 'http://127.0.0.1:3000/messages-api_v1/random';

const FULLFILED = 'hello-rails-react/message/FULLFILED';

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const fetchMessage = () => async (dispatch) => fetch(APIURL)
  .then((res) => res.json())
  .then((data) => {
    dispatch(fullfiled(data));
    console.log(data.msg)
  });

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return action.payload.obj;
    default:
      return state;
  }
};

export default messageReducer;
