import React, { Component } from "react";
import InputTab from "./InputTab";

class FormSectionPersonal extends Component {
  render() {
    const {
      sectionName,
      onInputChange,
      firstNameValue,
      lastNameValue,
      addressValue,
      emailValue,
      phoneNoValue,
    } = this.props;

    return (
      <div className="pinfosection">
        <fieldset>
          <legend>{sectionName}</legend>
          <InputTab
            classNameVar="firstname pinfo"
            labelName="First Name: "
            inputType="text"
            onChange={onInputChange}
            inputName="firstName"
            inputValue={firstNameValue}
          />

          <InputTab
            classNameVar="lastname pinfo"
            labelName="Last Name: "
            inputType="text"
            onChange={onInputChange}
            inputName="lastName"
            inputValue={lastNameValue}
          />

          <InputTab
            classNameVar="address pinfo"
            labelName="Address: "
            inputType="text"
            onChange={onInputChange}
            inputName="address"
            inputValue={addressValue}
          />

          <InputTab
            classNameVar="email pinfo"
            labelName="Email: "
            inputType="email"
            onChange={onInputChange}
            inputName="email"
            inputValue={emailValue}
          />

          <InputTab
            classNameVar="phoneno pinfo"
            labelName="Phone No.: "
            inputType="text"
            onChange={onInputChange}
            inputName="phoneNo"
            inputValue={phoneNoValue}
          />
        </fieldset>
      </div>
    );
  }
}

export default FormSectionPersonal;
