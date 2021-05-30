import { actions, ChessGameState, store } from "src/store";
import { Provider } from "react-redux";
import * as React from "react";
import { Modal } from "./Modal";
import Cockpit from "./cockpit";
import Chessboard from "./chessboard";
import AiPlayer from "./AiPlayer";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import useOnlineMultiplayer from "../hooks/useOnlineMultiplayer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { mq } from "../styles/constants";

export const useMobileView = () => {
  const [mobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const mql = window.matchMedia("(max-width: 768px)");
      setIsMobileView(mql.matches);
    }
  });

  return mobileView;
};

const Game = ({ urlGameId }) => {
  const [showGame, setShowGame] = useState<boolean>(!urlGameId);
  const { multiplayerGameStatus } = useOnlineMultiplayer(urlGameId);
  const { playMode, player } = useSelector(
    (state: ChessGameState) => state.currentGameState
  );
  const mobileView = useMobileView();

  useEffect(() => {
    if (!!urlGameId) {
      if (multiplayerGameStatus === "SUCCESS") {
        setShowGame(true);
      }

      if (multiplayerGameStatus !== "VALIDATING") {
        store.dispatch(
          actions.setModalState({
            modalState: {
              type: "MULTIPLAYER_STATUS",
              modalProps: { multiplayerGameStatus },
            },
          })
        );
      }
    }
  }, [multiplayerGameStatus, urlGameId]);

  return (
    <>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.5rem",
          [mq[1]]: {
            marginTop: 0,
          },
        }}
      >
        {playMode === "PLAY COMPUTER" && <AiPlayer />}
        {showGame && <Chessboard />}
        {showGame && !mobileView && <Cockpit />}
      </div>
      <Modal />
    </>
  );
};

const App = ({ urlGameId }) => {
  const pubnub = new PubNub({
    publishKey: "pub-c-d4a424e5-efde-498e-af55-ead4fe257bed",
    subscribeKey: "sub-c-9437e116-6e8b-11eb-889a-ee4206f2a398",
    uuid: urlGameId ? "GAME_HOST_1" : "GAME_GUEST",
  });

  return (
    <Provider store={store}>
      <PubNubProvider client={pubnub}>
        <Game urlGameId={urlGameId} />
      </PubNubProvider>
    </Provider>
  );
};

export default App;
