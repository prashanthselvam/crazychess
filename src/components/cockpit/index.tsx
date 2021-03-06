import * as React from "react";
import { useSelector } from "react-redux";
import WrappedTimer from "./Timer";
import MoveHistory from "./MoveHistory";
import { _getOpponent } from "src/store/utils";
import { ChessGameState } from "src/store";
import useEntryAnimate from "src/hooks/useEntryAnimate";
import { mq } from "src/styles/constants";

const Cockpit = () => {
  const showCockpit = useEntryAnimate(500);
  const { player, status } = useSelector(
    (state: ChessGameState) => state.currentGameState
  );

  const isGameActive = [
    "IN PROGRESS",
    "INITIALIZING",
    "READY",
    "GAME OVER",
  ].includes(status);

  return isGameActive ? (
    <div
      css={{
        border: "1px solid rgba(56,56,56,0.5)",
        position: "relative",
        width: showCockpit ? "300px" : "0px",
        opacity: showCockpit ? 1 : 0,
        backgroundColor: "rgba(0,0,0,.1)",
        marginLeft: "1.5rem",
        transition: "all .4s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "80vh",
        [mq[0]]: {
          height: "70vw",
        },
        [mq[1]]: {
          display: "none",
        },
      }}
    >
      <WrappedTimer player={_getOpponent(player)} />
      <MoveHistory />
      <WrappedTimer player={player} />
    </div>
  ) : null;
};

export default Cockpit;
