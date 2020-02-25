import React from "react";
import "./App.scss";
import logo from "./logo.svg";
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent
} from "@rmwc/drawer";
import "@material/drawer/dist/mdc.drawer.css";
import { List, ListItem } from "@rmwc/list";
import "@material/list/dist/mdc.list.css";
import { SimpleTopAppBar, TopAppBarFixedAdjust } from "@rmwc/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";
import { LinearProgress } from "@rmwc/linear-progress";
import "@material/linear-progress/dist/mdc.linear-progress.css";
import { Grid, GridInner, GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButton,
  CardActionButtons,
  CardActionIcon,
  CardActionIcons
} from "@rmwc/card";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import { Icon } from "@rmwc/icon";
import "@rmwc/icon/icon.css";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="Monproweb">
      <Drawer
        style={{
          background: "#212121"
        }}
        modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <DrawerHeader>
          <DrawerTitle>Monproweb</DrawerTitle>
          <DrawerSubtitle>Work In Progress..</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListItem>Accueil</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Tarifs</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </DrawerContent>
      </Drawer>
      <SimpleTopAppBar
        title="Monproweb"
        navigationIcon
        onClick={() => setOpen(!open)}
        actionItems={[
          {
            icon: "file_download",
            onClick: () => console.log("Do Something")
          },
          { icon: "print", onClick: () => console.log("Do Something") },
          { icon: "bookmark", onClick: () => console.log("Do Something") }
        ]}
      />
      <TopAppBarFixedAdjust />

      <div
        style={{
          height: "auto",
          padding: "1rem",
          background: "#212121",
          color: "rgba(255, 255, 255, 1)"
        }}
      >
        <header className="Monproweb-header">
          <img src={logo} className="Monproweb-logo" alt="logo" />
        </header>
        <main className="Monproweb-main">
          <Typography className="h2" use="headline2">
            Nous construisons des applications Web et mobile.
          </Typography>
          <Grid>
            {/* If you need additional control over height of your grid, or need to add SubGrids, you can add your own GridInner components. */}
            <GridInner>
              <GridCell span={6}>
                <Typography use="body1">
                  Bonjour je m'appelle Thomas aka Agnizab, j'ai 29 ans et je
                  suis passionné depuis toujours par le développement et le
                  hacking. J'ai donc tout naturellement décidé d'en faire mon
                  métier parce que j'adore lire la Docs, trainer sur GitHub,
                  trainer sur le Web, regarder des conférences de toutes sortes
                  sur YouTube et parfois en vrai. Si jamais ça foire et qu'il y
                  a des bugs je pourrais toujours dire que c'est de la faute de
                  Dario.
                </Typography>
              </GridCell>
              <GridCell span={6}>
                <GridInner>
                  <GridCell span={6}>
                    <Card style={{ width: "21rem" }}>
                      <CardPrimaryAction>
                        <CardMedia
                          sixteenByNine
                          style={{
                            backgroundImage: "url(./images/pp-thomas.jpeg)"
                          }}
                        />
                        <div style={{ padding: "0 1rem 1rem 1rem" }}>
                          <Typography use="headline6" tag="h2">
                            Devenir un développeur
                          </Typography>
                          <Typography
                            use="subtitle2"
                            tag="h3"
                            theme="textSecondaryOnBackground"
                            style={{ marginTop: "-1rem" }}
                          >
                            par Thomas Erhel
                          </Typography>
                          <Typography
                            use="body1"
                            tag="div"
                            theme="textSecondaryOnBackground"
                          >
                            Prochainement élève chez O'clock pour devenir un
                            développeur certifié par l'état.
                          </Typography>
                        </div>
                      </CardPrimaryAction>
                      <CardActions>
                        <CardActionButtons>
                          <CardActionButton>Lire</CardActionButton>
                          <CardActionButton>Bookmark</CardActionButton>
                        </CardActionButtons>
                        <CardActionIcons>
                          <CardActionIcon
                            onIcon="favorite"
                            icon="favorite_border"
                          />
                          <CardActionIcon icon="important_devices" />
                          <CardActionIcon icon="developer_mode" />
                        </CardActionIcons>
                      </CardActions>
                    </Card>
                  </GridCell>
                  <GridCell span={6}>
                    <Card style={{ width: "21rem" }}>
                      <CardPrimaryAction>
                        <CardMedia
                          sixteenByNine
                          style={{
                            backgroundImage:
                              "url(https://images.wizbii.com/file/v1/iej8m8xte1eqipgnvm1kdf5qefcezp5f.jpeg)"
                          }}
                        />
                        <div style={{ padding: "0 1rem 1rem 1rem" }}>
                          <Typography use="headline6" tag="h2">
                            O'Clock
                          </Typography>
                          <Typography
                            use="subtitle2"
                            tag="h3"
                            theme="textSecondaryOnBackground"
                            style={{ marginTop: "-1rem" }}
                          >
                            par Dario Spagnolo
                          </Typography>
                          <Typography
                            use="body1"
                            tag="div"
                            theme="textSecondaryOnBackground"
                          >
                            Visit ten places on our planet that are undergoing
                            the biggest changes today.
                          </Typography>
                        </div>
                      </CardPrimaryAction>
                      <CardActions>
                        <CardActionButtons>
                          <CardActionButton>Lire</CardActionButton>
                          <CardActionButton>Bookmark</CardActionButton>
                        </CardActionButtons>
                        <CardActionIcons>
                          <CardActionIcon
                            onIcon="favorite"
                            icon="favorite_border"
                          />
                          <CardActionIcon icon="school" />
                          <CardActionIcon icon="emoji_objects" />
                        </CardActionIcons>
                      </CardActions>
                    </Card>
                  </GridCell>
                </GridInner>
              </GridCell>
            </GridInner>
          </Grid>
          <Typography use="body2">
            Le virtuel est le véritable domaine du hacker. C’est à partir du
            virtuel que le hacker produit de nouvelles interprétations de
            l’actuel. Pour le hacker, ce qui est représenté comme étant réel est
            toujours partiel, limité, et peut­ être même faux. Pour le hacker,
            il y a toujours dans l’actuel l’expression d’un excèdent de
            possible, l’excèdent du virtuel. C’est le domaine incompressible de
            ce qui est réel sans être actuel, ce qui n’est pas mais qui pourrait
            être. Hacker, c’est libérer le virtuel dans l’actuel, pour exprimer
            la différence du réel.
          </Typography>
          <Typography className="h3" use="headline3">
            Nous faisons également du dépannage informatique.
          </Typography>
          <Grid>
            <GridCell span={4}>
              <Typography use="body1">
                Fort de son expérience en tant que Technicien support
                informatique/Administrateur systèmes et réseaux, c'est Antoine
                qui est en contact avec vous et vous accompagne tout au long de
                votre projet.
              </Typography>
            </GridCell>
            <GridCell span={4}>
              <Typography use="body1">
                Il rédige le cahier des charges avec vous et vous tiens au
                courant de l'avancé. Intervention possible sur place en région
                Parisienne ou à Distance.
              </Typography>
            </GridCell>
            <GridCell span={4}>
              <Card style={{ width: "21rem" }}>
                <CardPrimaryAction>
                  <CardMedia
                    sixteenByNine
                    style={{
                      backgroundImage: "url(./images/pp-antoine.jpeg)"
                    }}
                  />
                  <div style={{ padding: "0 1rem 1rem 1rem" }}>
                    <Typography use="headline6" tag="h2">
                      Our Changing Planet
                    </Typography>
                    <Typography
                      use="subtitle2"
                      tag="h3"
                      theme="textSecondaryOnBackground"
                      style={{ marginTop: "-1rem" }}
                    >
                      par Antoine Lachaud
                    </Typography>
                    <Typography
                      use="body1"
                      tag="div"
                      theme="textSecondaryOnBackground"
                    >
                      Visit ten places on our planet that are undergoing the
                      biggest changes today.
                    </Typography>
                  </div>
                </CardPrimaryAction>
                <CardActions>
                  <CardActionButtons>
                    <CardActionButton>Lire</CardActionButton>
                    <CardActionButton>Bookmark</CardActionButton>
                  </CardActionButtons>
                  <CardActionIcons>
                    <CardActionIcon onIcon="favorite" icon="favorite_border" />
                    <CardActionIcon icon="headset_mic" />
                    <CardActionIcon icon="business" />
                  </CardActionIcons>
                </CardActions>
              </Card>
            </GridCell>
          </Grid>
          <Typography className="h4" use="headline4">
            Ils nous font confiance
          </Typography>
          <Grid>
            <GridCell span={6}>
              <Typography use="body1">
                Parce que c'est important de tenir ces engagements et ces
                promesses même si ça prend du temps.
              </Typography>
            </GridCell>
            <GridCell span={6}>
              <a
                className="Monproweb-link"
                href="https://eduquetouschiens.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="pets" /> Eduque tous chiens loisirs canins
              </a>
            </GridCell>
          </Grid>
          <Grid>
            <GridCell span={6}>
              <Card style={{ width: "21rem" }}>
                <CardPrimaryAction>
                  <CardMedia
                    sixteenByNine
                    style={{
                      backgroundImage:
                        "url(https://scontent.fcdg2-1.fna.fbcdn.net/v/t1.0-9/12308306_494863444029015_6504351862740158663_n.png?_nc_cat=104&_nc_ohc=NgQ1B6mhMtsAX_0kHUD&_nc_ht=scontent.fcdg2-1.fna&oh=68b2f593b741bb2e5f25570a18970fcd&oe=5EFB01B6)"
                    }}
                  />
                </CardPrimaryAction>
              </Card>
            </GridCell>
            <GridCell span={6}>
              <Card style={{ width: "21rem" }}>
                <CardPrimaryAction>
                  <CardMedia
                    sixteenByNine
                    style={{
                      backgroundImage: "url(./images/tests.jpeg)"
                    }}
                  />
                </CardPrimaryAction>
              </Card>
            </GridCell>
          </Grid>
          <LinearProgress />
        </main>
        <footer className="Monproweb-footer">Make World Great Again</footer>
      </div>
    </div>
  );
}

export default App;
