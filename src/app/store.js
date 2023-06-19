import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../Components/Api/apiSlice";
import { errorSlice } from "../Components/Api/errorSilce";
import { pageSlice } from "../Components/Api/pageSlice";
import { scrollSlice } from "../Components/Api/scrollSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [errorSlice.reducerPath]: errorSlice.reducer,
    [pageSlice.reducerPath]: pageSlice.reducer,
    [scrollSlice.reducerPath]: scrollSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      apiSlice.middleware,
      errorSlice.middleware,
      pageSlice.middleware,
      scrollSlice.middleware
    ]),
});
setupListeners(store.dispatch);
