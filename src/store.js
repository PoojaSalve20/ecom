import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slice/auth";
import messageReducer from "./slice/message";
const reducer = {
  auth: authReducer,
  message: messageReducer
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;