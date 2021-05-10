import * as React from "react";
import Marker from "src/components/chessboard/tile/TileMarker";
import Piece from "src/components/Piece";
import { TileId } from "src/types/constants";
import { useSelector } from "react-redux";
import { store, actions, ChessGameState } from "src/store";
import { _getPieceType, _getPlayer } from "src/store/utils";
import TileHighlight from "./TileHighlight";
import useMakeMove from "src/hooks/useMakeMove";

interface TileProps {
  id: TileId;
  xPos: XPos;
  yPos: YPos;
}

const Tile = ({ id, xPos, yPos }: TileProps) => {
  const { status, currentTurn, playMode, player } = useSelector(
    (state: ChessGameState) => state.currentGameState
  );
  const selectedTile = useSelector(
    (state: ChessGameState) => state.boardState.selectedTile
  );
  const selectedPiece = useSelector(
    (state: ChessGameState) => state.boardState.selectedPiece
  );
  const { pieceId, highlight } = useSelector(
    (state: ChessGameState) => state.boardState.tileMap[id]
  );
  const { pieceId: historyPieceId, highlight: historyHighlight } = useSelector(
    (state: ChessGameState) => state.movesState.historyTileMap[id]
  );
  const isShowingHistory = useSelector(
    (state: ChessGameState) => state.movesState.isShowingHistory
  );
  const isActiveCheck = useSelector(
    (state: ChessGameState) => state.checkState.isActiveCheck
  );
  const makeMove = useMakeMove();

  const isGameInProgress = ["IN PROGRESS", "READY"].includes(status);
  const isSelected = selectedTile === id;

  const canSelectBothSides = playMode === "PLAY OVER THE BOARD";
  const isPlayersTurn = currentTurn === player;
  const isCurrentTurnPieceOnTile =
    pieceId && _getPlayer(pieceId) === currentTurn;

  const isSelectable =
    isGameInProgress &&
    isCurrentTurnPieceOnTile &&
    (canSelectBothSides || isPlayersTurn);
  const isKingTile = pieceId && _getPieceType(pieceId) === "K";

  const checkHighlight = isActiveCheck && isSelectable && isKingTile;

  const onClick = () => {
    if (isShowingHistory) {
      return;
    }

    if (isSelectable && !isSelected) {
      store.dispatch(actions.selectTile({ tileId: id }));
    } else if (highlight) {
      if ((yPos === 0 || yPos === 7) && _getPieceType(selectedPiece!) === "P") {
        store.dispatch(
          actions.setModalState({
            modalState: {
              type: "PAWN_PROMOTE",
              modalProps: { targetTileId: id },
            },
          })
        );
      } else {
        makeMove({ targetTileId: id });
      }
    } else {
      store.dispatch(actions.deselect());
    }
  };

  return (
    <div
      css={{
        position: "relative",
        height: "100%",
        width: "12.5%",
        backgroundColor:
          (xPos + yPos) % 2 === 0
            ? "rgba(50,32,15,0.55)"
            : "rgba(255,255,255,0.55)",
      }}
      onClick={onClick}
    >
      {yPos === 0 && (
        <Marker xPos={xPos} yPos={yPos} variant="horizontal">
          {id[0].toLowerCase()}
        </Marker>
      )}
      {xPos === 7 && (
        <Marker xPos={xPos} yPos={yPos} variant="vertical">
          {id[1]}
        </Marker>
      )}
      {historyHighlight && <TileHighlight variant={"MOVE_HISTORY"} />}
      {!isShowingHistory && checkHighlight && (
        <TileHighlight variant={"CHECK"} />
      )}
      {!isShowingHistory && highlight && (
        <TileHighlight variant={!!pieceId ? "CAN_TAKE" : "CAN_MOVE"} />
      )}
      {!isShowingHistory && isSelected && (
        <TileHighlight variant={"SELECTED"} />
      )}
      {((!isShowingHistory && pieceId) ||
        (isShowingHistory && historyPieceId)) && (
        <Piece pieceId={isShowingHistory ? historyPieceId : pieceId} />
      )}
    </div>
  );
};

export default Tile;
