import { store, tileMapInitialState } from "../store";

const PROMO_PIECES = {
  BQ_P_1: "BQ_P_1",
  BQ_P_2: "BQ_P_2",
  BQ_P_3: "BQ_P_3",
  BQ_P_4: "BQ_P_4",
  BB_P_1: "BB_P_1",
  BB_P_2: "BB_P_2",
  BB_P_3: "BB_P_3",
  BB_P_4: "BB_P_4",
  BN_P_1: "BN_P_1",
  BN_P_2: "BN_P_2",
  BN_P_3: "BN_P_3",
  BN_P_4: "BN_P_4",
  BR_P_1: "BR_P_1",
  BR_P_2: "BR_P_2",
  BR_P_3: "BR_P_3",
  BR_P_4: "BR_P_4",
  WQ_P_1: "WQ_P_1",
  WQ_P_2: "WQ_P_2",
  WQ_P_3: "WQ_P_3",
  WQ_P_4: "WQ_P_4",
  WB_P_1: "WB_P_1",
  WB_P_2: "WB_P_2",
  WB_P_3: "WB_P_3",
  WB_P_4: "WB_P_4",
  WN_P_1: "WN_P_1",
  WN_P_2: "WN_P_2",
  WN_P_3: "WN_P_3",
  WN_P_4: "WN_P_4",
  WR_P_1: "WR_P_1",
  WR_P_2: "WR_P_2",
  WR_P_3: "WR_P_3",
  WR_P_4: "WR_P_4",
};

export const PIECES = {
  BP1: "BP1",
  BP2: "BP2",
  BP3: "BP3",
  BP4: "BP4",
  BP5: "BP5",
  BP6: "BP6",
  BP7: "BP7",
  BP8: "BP8",
  BR1: "BR1",
  BR2: "BR2",
  BN1: "BN1",
  BN2: "BN2",
  BB1: "BB1",
  BB2: "BB2",
  BK: "BK",
  BQ: "BQ",
  WP1: "WP1",
  WP2: "WP2",
  WP3: "WP3",
  WP4: "WP4",
  WP5: "WP5",
  WP6: "WP6",
  WP7: "WP7",
  WP8: "WP8",
  WR1: "WR1",
  WR2: "WR2",
  WN1: "WN1",
  WN2: "WN2",
  WB1: "WB1",
  WB2: "WB2",
  WK: "WK",
  WQ: "WQ",
  ...PROMO_PIECES,
};

export const TILES = {
  A1: "A1",
  B1: "B1",
  C1: "C1",
  D1: "D1",
  E1: "E1",
  F1: "F1",
  G1: "G1",
  H1: "H1",
  A2: "A2",
  B2: "B2",
  C2: "C2",
  D2: "D2",
  E2: "E2",
  F2: "F2",
  G2: "G2",
  H2: "H2",
  A3: "A3",
  B3: "B3",
  C3: "C3",
  D3: "D3",
  E3: "E3",
  F3: "F3",
  G3: "G3",
  H3: "H3",
  A4: "A4",
  B4: "B4",
  C4: "C4",
  D4: "D4",
  E4: "E4",
  F4: "F4",
  G4: "G4",
  H4: "H4",
  A5: "A5",
  B5: "B5",
  C5: "C5",
  D5: "D5",
  E5: "E5",
  F5: "F5",
  G5: "G5",
  H5: "H5",
  A6: "A6",
  B6: "B6",
  C6: "C6",
  D6: "D6",
  E6: "E6",
  F6: "F6",
  G6: "G6",
  H6: "H6",
  A7: "A7",
  B7: "B7",
  C7: "C7",
  D7: "D7",
  E7: "E7",
  F7: "F7",
  G7: "G7",
  H7: "H7",
  A8: "A8",
  B8: "B8",
  C8: "C8",
  D8: "D8",
  E8: "E8",
  F8: "F8",
  G8: "G8",
  H8: "H8",
};

type PieceIdKeys = keyof typeof PIECES;
export type PieceId = typeof PIECES[PieceIdKeys];

type TileIdKeys = keyof typeof TILES;
export type TileId = typeof TILES[TileIdKeys];

export const WHITE_BOARD: TileId[][] = [
  [
    TILES.A1,
    TILES.B1,
    TILES.C1,
    TILES.D1,
    TILES.E1,
    TILES.F1,
    TILES.G1,
    TILES.H1,
  ],
  [
    TILES.A2,
    TILES.B2,
    TILES.C2,
    TILES.D2,
    TILES.E2,
    TILES.F2,
    TILES.G2,
    TILES.H2,
  ],
  [
    TILES.A3,
    TILES.B3,
    TILES.C3,
    TILES.D3,
    TILES.E3,
    TILES.F3,
    TILES.G3,
    TILES.H3,
  ],
  [
    TILES.A4,
    TILES.B4,
    TILES.C4,
    TILES.D4,
    TILES.E4,
    TILES.F4,
    TILES.G4,
    TILES.H4,
  ],
  [
    TILES.A5,
    TILES.B5,
    TILES.C5,
    TILES.D5,
    TILES.E5,
    TILES.F5,
    TILES.G5,
    TILES.H5,
  ],
  [
    TILES.A6,
    TILES.B6,
    TILES.C6,
    TILES.D6,
    TILES.E6,
    TILES.F6,
    TILES.G6,
    TILES.H6,
  ],
  [
    TILES.A7,
    TILES.B7,
    TILES.C7,
    TILES.D7,
    TILES.E7,
    TILES.F7,
    TILES.G7,
    TILES.H7,
  ],
  [
    TILES.A8,
    TILES.B8,
    TILES.C8,
    TILES.D8,
    TILES.E8,
    TILES.F8,
    TILES.G8,
    TILES.H8,
  ],
];

export const BLACK_BOARD = WHITE_BOARD.map((row) => row.slice().reverse())
  .slice()
  .reverse();

// Game Type
export const GAME_TYPES = {
  REGULAR: {
    initialPositions: {
      [TILES.A1]: PIECES.WR1,
      [TILES.B1]: PIECES.WN1,
      [TILES.C1]: PIECES.WB1,
      [TILES.D1]: PIECES.WQ,
      [TILES.E1]: PIECES.WK,
      [TILES.F1]: PIECES.WB2,
      [TILES.G1]: PIECES.WN2,
      [TILES.H1]: PIECES.WR2,
      [TILES.A2]: PIECES.WP1,
      [TILES.B2]: PIECES.WP2,
      [TILES.C2]: PIECES.WP3,
      [TILES.D2]: PIECES.WP4,
      [TILES.E2]: PIECES.WP5,
      [TILES.F2]: PIECES.WP6,
      [TILES.G2]: PIECES.WP7,
      [TILES.H2]: PIECES.WP8,
      [TILES.A8]: PIECES.BR1,
      [TILES.B8]: PIECES.BN1,
      [TILES.C8]: PIECES.BB1,
      [TILES.D8]: PIECES.BQ,
      [TILES.E8]: PIECES.BK,
      [TILES.F8]: PIECES.BB2,
      [TILES.G8]: PIECES.BN2,
      [TILES.H8]: PIECES.BR2,
      [TILES.A7]: PIECES.BP1,
      [TILES.B7]: PIECES.BP2,
      [TILES.C7]: PIECES.BP3,
      [TILES.D7]: PIECES.BP4,
      [TILES.E7]: PIECES.BP5,
      [TILES.F7]: PIECES.BP6,
      [TILES.G7]: PIECES.BP7,
      [TILES.H7]: PIECES.BP8,
    },
  },
};

export const getInitialTileMap = (gameType) => {
  const initialMap = Object.assign({}, tileMapInitialState);
  Object.entries(GAME_TYPES[gameType].initialPositions).forEach(
    ([tileId, pieceId]) => {
      initialMap[tileId] = {
        pieceId: pieceId,
        highlight: false,
      };
    }
  );
  return initialMap;
};
