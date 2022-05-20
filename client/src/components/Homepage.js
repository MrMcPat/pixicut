import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersData } from "../store/users-actions";

function Homepage({ self }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    if (self) {
      dispatch(fetchUsersData());
    }
  }, [dispatch]);

  console.log(users);

  return <div>Homepage</div>;
}

export default Homepage;
