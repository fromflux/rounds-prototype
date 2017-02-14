import fetch from 'isomorphic-fetch';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export const SELECT_BAR = 'SELECT_BAR';
export const ADD_HISTORY = 'ADD_HISTORY';

export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const CLEAR_BARS = 'CLEAR_BARS';
export const RECEIVE_BARS = 'RECEIVE_BARS';

export function addProduct(product) {
  const { id, name, image_url, price } = product;
  return {
    type: ADD_PRODUCT,
    id,
    name,
    image_url,
    price
  };
}

export function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    id
  };
}

export function clearOrder() {
  return {
    type: CLEAR_ORDER
  };
}

export function addHistory(roundData) {
  return {
    type: ADD_HISTORY,
    round: roundData
  };
}

export function postRound(roundData) {
  return dispatch => {
    return fetch(`/api/bars/${roundData.bar_id}/history`, {
      method: 'POST',
      body: JSON.stringify(roundData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(json => dispatch(addHistory(json)));
  }
}

export function receiveHistory(historyItems) {
  return {
    type: RECEIVE_HISTORY,
    history: historyItems
  };
}

export function fetchHistory(barId) {
  return dispatch => {
    return fetch(`/api/bars/${barId}/history`)
      .then(response => response.json())
      .then(json => dispatch(receiveHistory(json.data)));
  }
}

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
}

export function fetchProducts(barId) {
  return dispatch => {
    return fetch(`/api/bars/${barId}/products`)
      .then(response => response.json())
      .then(json => dispatch(receiveProducts(json.data)));
  }
}

export function selectBar(bar) {
  const { id, name, lat, long, image_url } = bar;
  return {
    type: SELECT_BAR,
    id,
    name,
    lat,
    long,
    image_url
  };
}

export function clearBars() {
  return {
    type: CLEAR_BARS
  };
}

export function receiveBars(bars) {
  return {
    type: RECEIVE_BARS,
    bars
  };
}

export function fetchBarsByPattern(pattern) {
  return dispatch => {
    return fetch(`/api/bars?search=${pattern}`)
      .then(response => response.json())
      .then(json => dispatch(receiveBars(json.data)));
  }
}

export function fetchBarsByLocation(lat, long) {
  return dispatch => {
    return fetch(`/api/bars?location=${lat},${long}`)
      .then(response => response.json())
      .then(json => dispatch(receiveBars(json.data)));
  }
}