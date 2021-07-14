import React from "react";
import "../styles/Footer.scss";
import { Box, Grid, Link } from "@primer/components";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="social">
        <Grid gridTemplateColumns="repeat(5, auto)" gridGap={3}>
          <Box p={3}>
            <Link mb={1} href="https://twitter.com/monproweb">
              <FaTwitter size={28} aria-label="Twitter" className="social" />
            </Link>
          </Box>
          <Box p={3}>
            <Link mb={1} href="https://facebook.com/monproweb">
              <FaFacebook size={28} aria-label="Facebook" className="social" />
            </Link>
          </Box>
          <Box p={3}>
            <Link mb={1} href="https://instagram.com/monproweb">
              <FaInstagram
                size={28}
                aria-label="Instagram"
                className="social"
              />
            </Link>
          </Box>
          <Box p={3}>
            <Link mb={1} href="https://linkedin.com/company/monproweb">
              <FaLinkedinIn
                size={28}
                aria-label="Linkedin"
                className="social"
              />
            </Link>
          </Box>
          <Box p={3}>
            <Link mb={1} href="https://github.com/monproweb">
              <FaGithub size={28} aria-label="GitHub" className="social" />
            </Link>
          </Box>
        </Grid>
      </div>

      <Box p={3} className="legal">
        © 2021 Monproweb, Inc.
      </Box>
    </div>
  );
};

export default Footer;
