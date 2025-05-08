import { setUser } from "./userSlice";

export const fetchUserAction = () => (dispatch) => {
  // call api
  //recieve user
  //dispatch user to redux store
  dispatch(setUser());
};
