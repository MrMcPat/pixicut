import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ user, setUser }) {
  let navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
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
            {user ? (
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
