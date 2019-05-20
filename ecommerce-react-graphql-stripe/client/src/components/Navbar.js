import React from "react";
import { Box, Text, Heading } from "gestalt";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Signin link  */}
    <NavLink to="/signin">
      <Text size="xl" color="white">
        Signin
      </Text>
    </NavLink>

    {/* logo  */}
    <Navbar to="/">
      <Heading size="xs" color="orange">
        LeMart
      </Heading>
    </Navbar>

    {/* signout link */}
    <NavLink to="/signout">
      <Text size="xl" color="white">
        Signout
      </Text>
    </NavLink>
  </Box>
);

export default Navbar;
