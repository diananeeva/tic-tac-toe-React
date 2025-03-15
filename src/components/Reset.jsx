import GameState from "./GameState";

function Reset({gameState, onReset}) {

    if(gameState === GameState.inProgress){
        return;
    }
  return (
    <div>
      <button onClick={onReset} className="reset-button">Reset</button>
    </div>
  );
}

export default Reset;
