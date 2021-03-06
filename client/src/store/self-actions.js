import { selfActions } from "./self-slice";
import axios from "axios";

export function fetchSelfData() {
  return async function (dispatch) {
    async function fetchMeData() {
      const response = await axios.get("/me");
      return response;
    }
    try {
      const selfData = await fetchMeData();
      dispatch(
        selfActions.getSelf({
          me: selfData.data,
        })
      );
    } catch (error) {
      // console.log(error)
    }
  };
}
