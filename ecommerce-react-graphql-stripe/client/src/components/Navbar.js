import React from "react";
import { Box, Text, Heading, Image } from "gestalt";
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
    <NavLink to="/signin" activeClassName="active" exact>
      <Text size="xl" color="white">
        Signin
      </Text>
    </NavLink>

    {/* logo  */}
    <NavLink to="/" activeClassName="active" exact>
      <Box display="flex" alignItems="center">
        <Box height={50} width={50} margin={2}>
          <Image
            alt="Le mart logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="white">
          LeMart
        </Heading>
      </Box>
    </NavLink>

    {/* signout link */}
    <NavLink to="/signout" activeClassName="active" exact>
      <Text size="xl" color="white">
        Signout
      </Text>
    </NavLink>
  </Box>
);

export default Navbar;
