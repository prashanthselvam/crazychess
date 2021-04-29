import * as React from "react";
import { useSelector } from "react-redux";
import Timer from "./Timer";
import MoveHistory from "./MoveHistory";
import { _getOpponent } from "../store/utils";

const Cockpit = () => {
  const gameStatus = useSelector((state) => state.gameStatus);
  const player = useSelector((state) => state.player);
  const isGameActive = ["INITIALIZING", "IN PROGRESS", "READY"].includes(
    gameStatus
  );

  return (
    <div
      css={{
        maxHeight: "80vh",
        position: "relative",
        width: isGameActive ? "300px" : "0px",
        opacity: isGameActive ? 1 : 0,
        backgroundColor: "grey",
        marginLeft: "1.5rem",
        transition: "all .4s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isGameActive && (
        <>
          <div
            css={{
              width: "100%",
              textAlign: "center",
              padding: 20,
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <Timer maxTimeInSeconds={300} player={_getOpponent(player)} />
          </div>
          <MoveHistory />
          <div
            css={{
              width: "100%",
              textAlign: "center",
              padding: 20,
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <Timer maxTimeInSeconds={300} player={player} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cockpit;
