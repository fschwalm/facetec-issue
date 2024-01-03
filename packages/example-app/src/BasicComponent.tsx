import React from "react";
import { SampleApp } from "./sample-app/react-ts-sample";

export default class BasicComponent extends React.Component {
  onLivenessCheckPressed(): void {
    SampleApp.onLivenessCheckPressed();
  }

  render() {
    return (
      <div>
        <div className="wrapping-box-container">
          <div id="controls" className="controls">
            <button id="liveness-button" className="big-button" onClick={ () => { return this.onLivenessCheckPressed(); } }>3D Liveness Check</button>
            <p id="status">Initializing...</p>
          </div>
          <div id="custom-logo-container">
            <img id="facetec-logo" src="../images/facetec_logo.png"/>
          </div>
        </div>
      </div>
    );
  }
}
