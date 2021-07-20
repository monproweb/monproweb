import React from "react";
import avatarthomaserhel from "../images/avatar-thomaserhel.svg";
import avatarmonproweb from "../images/avatar-monproweb.svg";
import { StarIcon, PlayIcon } from "@primer/octicons-react";
import {
  ThemeProvider,
  BaseStyles,
  Box,
  Heading,
  Text,
  Link,
  Avatar,
  Label,
  Tooltip,
  CounterLabel,
  ProgressBar,
  ButtonPrimary,
  CircleBadge,
} from "@primer/components";
import {OrganizationIcon} from '@primer/octicons-react'
import Footer from "../components/Footer";
import "../styles/Team.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Team() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <div className="Mpw-team">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MPW | L'équipe</title>
            <link rel="canonical" href="https://monproweb.io/équipe" />
          </Helmet>

          <BaseStyles>
            <Box m={4}>
              <Box p={3}>
              <CircleBadge>
                  <CircleBadge.Icon icon={OrganizationIcon} />
                </CircleBadge>
              </Box>

              <Heading as="h1" mb={2} className="anim-fade-in">
                Thomas Erhel
              </Heading>

              <Box p={3}>
                <Text as="p" mr={3} className="anim-fade-up">
                  #ZeroKnowledge #PracticeMakesPerfect #NeverGiveUp
                </Text>

                <Box p={3}>
                  <Tooltip aria-label="Mon Pro Web">
                    <StarIcon className="Mpw-star" size={16} />
                    <span> </span>
                    <Label color="#a371f7" className="Mpw-label">
                      mpw
                    </Label>
                  </Tooltip>
                </Box>

                <Box p={3}>
                  <ButtonPrimary
                    as="a"
                    variant="large"
                    href="https://anchor.fm/monproweb/embed/episodes/Informatique-Durable-e12v4uc"
                  >
                    <PlayIcon size={20} /> Informatique Durable
                  </ButtonPrimary>
                </Box>
              </Box>

              <Box m={4}>
                <Avatar src={avatarthomaserhel} />
                <span> </span>
                <Link mb={1} href="https://github.com/ThomasErhel/">
                  Thomas Erhel
                </Link>
              </Box>

              <Box m={4}>
                <Avatar square src={avatarmonproweb} />
                <span> </span>
                <Link mb={1} href="https://github.com/monproweb/">
                  Mon Pro Web
                </Link>
              </Box>

              <Box p={3}>
                <Text mr={3}>
                  EcoIndex <CounterLabel>A</CounterLabel>
                </Text>
                <ProgressBar progress={83} inline width="100px" />
              </Box>
            </Box>

            <Footer />
          </BaseStyles>
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Team;
