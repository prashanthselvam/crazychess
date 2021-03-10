import { actions, store } from "src/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DrawerMenuOption = ({ text, icon }) => {
  const startNewGame = () => {
    store.dispatch(actions.initializeGame());
    setTimeout(
      () => store.dispatch(actions.newGame({ gameType: "REGULAR" })),
      700
    );
  };

  return (
    <div
      onClick={startNewGame}
      css={{
        backgroundColor: "rgba(255,255,255,0.85)",
        borderRadius: "1.5rem",
        padding: "1.5rem",
        fontSize: "2rem",
        height: "80%",
        width: "25%",
        border: "none",
        textDecoration: "none",
        "&:hover": {
          transform: "translateY(-.3rem)",
          boxShadow: "0 4rem 4rem rgba(0,0,0,.2)",
          cursor: "pointer",
          "&>.icon": {
            color: "rgb(33,33,33)",
          },
        },
      }}
    >
      <h3 css={{ fontWeight: 500 }}>{text}</h3>
      <FontAwesomeIcon
        className={"icon"}
        css={{
          marginTop: "3rem",
          fontSize: "5rem",
          color: "rgb(36,54,45)",
        }}
        icon={icon}
      />
    </div>
  );
};

export default DrawerMenuOption;
