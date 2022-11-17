import React from "react";
import "../App.css";
export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <img
          className="small"
          src="/Anj.png"
          onClick={this.handleShowDialog}
          alt="no imag"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="imag"
              src="/Anj.png"
              onClick={this.handleShowDialog}
              alt="no imag"
            />
          </dialog>
        )}
      </div>
    );
  }
}
