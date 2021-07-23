import {
  GET_SLIDER_IMAGES_FAILED,
  GET_SLIDER_IMAGES_START,
  GET_SLIDER_IMAGES_SUCCESS,
  GET_FEATURED_PRODUCTS_FAILED,
  GET_FEATURED_PRODUCTS_START,
  GET_FEATURED_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_FAILED,
  GET_PRODUCT_BY_ID_START,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_START,
  GET_SEARCH_RESULTS_FAILED,
} from "./guestTypes";

export const guestReducers = (
  initialState = {
    sliderImages: [],
    products: [],
    isLoading: false,
    product: {
      product: {},
      isLoading: false,
    },
    searchResults: {
      products: [],
      pages: 0,
      page: 0,
      isLoading: false,
    },
  },
  action
) => {
  switch (action.type) {
    case GET_SLIDER_IMAGES_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_SLIDER_IMAGES_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        sliderImages: action.payload,
      };
    case GET_SLIDER_IMAGES_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    case GET_FEATURED_PRODUCTS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        products: action.payload,
      };
    case GET_FEATURED_PRODUCTS_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    case GET_PRODUCT_BY_ID_START:
      return {
        ...initialState,
        product: {
          isLoading: true,
        },
      };
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...initialState,
        product: {
          product: action.payload,
          isLoading: false,
        },
      };
    case GET_PRODUCT_BY_ID_FAILED:
      return {
        ...initialState,
        product: {
          isLoading: false,
          error: action.payload,
        },
      };

    case GET_SEARCH_RESULTS_START:
      return {
        ...initialState,
        searchResults: {
          isLoading: true,
          ...initialState.searchResults,
        },
      };
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...initialState,
        searchResults: {
          ...action.payload,
          isLoading: false,
        },
      };
    case GET_SEARCH_RESULTS_FAILED:
      return {
        ...initialState,
        searchResults: {
          isLoading: false,
          error: action.payload,
        },
      };

    default:
      return initialState;
  }
};
