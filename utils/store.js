import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: { cartItems: [] },
  favorites: { favoritesItems: [] },
  search: { searchItem: '' },
  sort: { sortGeneral: '', sortPrice: '', sortInserts: '' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.articule === newItem.articule
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.articule === existItem.articule ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.articule !== action.payload.articule
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_RESET': {
      return {
        ...state,
        cart: { cartItems: [] },
      };
    }
    case 'FAVORITES_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.favorites.favoritesItems.find(
        (item) => item.articule === newItem.articule
      );
      const favoritesItems = existItem
        ? state.favorites.favoritesItems.map((item) =>
            item.articule === existItem.articule ? newItem : item
          )
        : [...state.favorites.favoritesItems, newItem];
      return {
        ...state,
        favorites: { ...state.favorites, favoritesItems },
      };
    }
    case 'FAVORITES_DEL_ITEM': {
      const favoritesItems = state.favorites.favoritesItems.filter(
        (item) => item.articule !== action.payload.articule
      );
      return {
        ...state,
        favorites: { ...state.favorites, favoritesItems },
      };
    }
    case 'FAVORITES_RESET': {
      return {
        ...state,
        favorites: { favoritesItems: [] },
      };
    }
    case 'SEARCH_RING': {
      const searchItem = action.payload;
      return {
        ...state,
        search: { searchItem },
      };
    }
    case 'SORT_GENERAL': {
      const data = action.payload;
      return {
        ...state,
        sort: { ...state.sort, sortGeneral: data },
      };
    }
    case 'SORT_PRICE': {
      const data = action.payload;
      return {
        ...state,
        sort: { ...state.sort, sortPrice: data },
      };
    }
    case 'SORT_INSERTS_RINGS': {
      const data = action.payload;
      return {
        ...state,
        sort: { ...state.sort, sortInserts: data },
      };
    }
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
