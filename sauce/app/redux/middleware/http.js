export const API_REQUEST = Symbol('JITSI_REQUEST');


export const http = store => next => (action) => { // eslint-disable-line no-unused-vars
  if (!action[API_REQUEST]) return next(action);

  const { url, types, config, doNext } = action[API_REQUEST];
  // const { meta } = action;
  const [requestType, successType, errorType] = types;


  const request = {
    dataType: 'json',
  };

  const requestObj = {
    ...request,
    ...config,
    // url: `${.API}${url}`,
    url,
  };

  next({ type: requestType });

  // $.ajax(requestObj)
  //   .done((response) => {
  //     next({
  //       type: successType,
  //       payload: response,
  //     });

  //     if (doNext) {
  //       store.dispatch(doNext(store.getState()));
  //     }
  //   }).fail((response) => {
  //     next({
  //       type: errorType,
  //       payload: response,
  //     });
  //   });

  return true;
};
