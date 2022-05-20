import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selfActions } from "../store/self-slice";

function NavBar({ self }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        dispatch(selfActions.getSelf({ me: null }));
        navigate("/");
      }
    });
  }

  return (
    <div>
      <Navbar>
        <Container>
          <div>
            <NavLink to="/">Pixicut</NavLink>
          </div>
          <div>
            {self ? (
              <button onClick={handleLogoutClick}>Logout</button>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
