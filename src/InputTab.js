import React, { Component } from "react";

class InputTab extends Component {
  render() {
    const {
      labelName,
      classNameVar,
      inputType,
      onChange,
      inputName,
      inputValue,
    } = this.props;

    return (
      <div className={classNameVar}>
        <label>{labelName}</label>
        <input
          type={inputType}
          onChange={onChange}
          name={inputName}
          value={inputValue}
        ></input>
      </div>
    );
  }
}

export default InputTab;
