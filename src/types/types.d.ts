type XPos = number;
type YPos = number;

type Player = "B" | "W";

type GameStatus =
  | "NOT STARTED"
  | "INITIALIZING"
  | "READY"
  | "IN PROGRESS"
  | "GAME OVER";

type GameTypes = "REGULAR";

type PlayModes = "PLAY FRIEND" | "PLAY COMPUTER" | "PLAY OVER THE BOARD";

type WinModes = "CHECKMATE" | "TIMEOUT" | "RESIGNATION" | "PLAYER LEFT";

type MultiplayerGameStatus =
  | "VALIDATING"
  | "INVALID_URL"
  | "HOST_LEFT"
  | "SUCCESS"
  | "CONNECTING";
