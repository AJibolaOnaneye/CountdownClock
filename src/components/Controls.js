import React from "react";

const Controls = ({paused, onPausedToggle}) => {
  return (
    <div className="field is-grouped is-grouped-centered">
      <p className="control">
        <button className="button is-rounded is-danger is-medium is-outlined"
        disabled={paused}
        onClick={onPausedToggle}>
        Pause</button>
      </p>
      <p className="control">
        <button className="button is-success is-rounded is-medium is-outlined"
        disabled={!paused}
        onClick={onPausedToggle}>
        Resume</button>
      </p>
    </div>
  );
};

export default Controls;

// props
// disable={props.onPaused}