import { usersActions } from "./users-slice";
import axios from "axios";

export function fetchUsersData() {
  return async function (dispatch) {
    async function fetchAccountData() {
      const response = await axios.get("/users");
      return response;
    }

    const usersData = await fetchAccountData();
    dispatch(
      usersActions.getUsers({
        users: usersData.data,
      })
    );
  };
}
