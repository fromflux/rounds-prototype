import {
  ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_ORDER, SELECT_BAR, ADD_HISTORY, 
  RECEIVE_HISTORY, RECEIVE_PRODUCTS, CLEAR_BARS, RECEIVE_BARS
} from '../actions';

const defaultState = {
  currentBar: {},
  roundItems: [],
  products: [],
  history: [],
  bars: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case ADD_PRODUCT:
      let exists = false;
      const updated = state.roundItems.map((item) => { 
        if (item.id === action.id) {
          exists = true;
          return Object.assign({}, item, {
            quantity: item.quantity + 1
          });
        } else {
          return item;
        }
      });

      if (exists) {
        return Object.assign({}, state, {
          roundItems: updated
        });
      } else {
        return Object.assign({},state, {
          roundItems : [
            ...state.roundItems,
            {
              id: action.id,
              name: action.name,
              image_url: action.image_url,
              price: action.price,
              quantity: 1
            }
          ]
        });
      }

    case REMOVE_PRODUCT:
      let productIndex = state.roundItems.findIndex(item => item.id === action.id );

      if (productIndex > -1) {
        let updatedItems = state.roundItems.slice();
        let updatedIndex = updatedItems.findIndex( item => item.id === action.id);
        updatedItems[updatedIndex] = Object.assign(updatedItems[updatedIndex], {
          quantity: updatedItems[updatedIndex].quantity - 1
        });

        if (updatedItems[updatedIndex].quantity === 0) {
          updatedItems = [].concat(updatedItems.slice(0, updatedIndex), updatedItems.slice(updatedIndex + 1));
        }

        return Object.assign({}, state, {
          roundItems: updatedItems
        });

      } else {
        return state;
      }

    case CLEAR_ORDER:
      return Object.assign({}, state, {
        roundItems: []
      });

    case SELECT_BAR:
      return Object.assign({}, state, {
        currentBar: {
          id: action.id,
          name: action.name,
          lat: action.lat,
          long: action.long,
          image_url: action.image_url
        }
      });

    case ADD_HISTORY:
      return Object.assign({}, state, {
        history: [
          ...state.history,
          action.round
        ]
      });

    case RECEIVE_HISTORY:
      return Object.assign({}, state, {
        history: action.history
      });

    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        products: action.products
      });

    case CLEAR_BARS:
      return Object.assign({}, state, {
        bars: []
      });

    case RECEIVE_BARS:
      return Object.assign({}, state, {
        bars: action.bars
      });

    default:
      return state;
  }
}

export default reducer;