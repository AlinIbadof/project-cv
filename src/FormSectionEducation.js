import React, { Component } from "react";
import InputTab from "./InputTab";

class FormSectionEducation extends Component {
  render() {
    const {
      sectionName,
      onInputChange,
      uniNameValue,
      uniCityValue,
      degreeValue,
      subjectValue,
      uniFromValue,
      uniToValue,
    } = this.props;

    return (
      <div className="educationsection">
        <fieldset>
          <legend>{sectionName}</legend>
          <InputTab
            classNameVar="uniname pinfo"
            labelName="University: "
            inputType="text"
            onChange={onInputChange}
            inputName="uniName"
            inputValue={uniNameValue}
          />

          <InputTab
            classNameVar="unicity pinfo"
            labelName="City: "
            inputType="text"
            onChange={onInputChange}
            inputName="uniCity"
            inputValue={uniCityValue}
          />

          <InputTab
            classNameVar="degree pinfo"
            labelName="Degree: "
            inputType="text"
            onChange={onInputChange}
            inputName="degree"
            inputValue={degreeValue}
          />

          <InputTab
            classNameVar="subject pinfo"
            labelName="Subject: "
            inputType="text"
            onChange={onInputChange}
            inputName="subject"
            inputValue={subjectValue}
          />

          <InputTab
            classNameVar="unifrom pinfo"
            labelName="From: "
            inputType="text"
            onChange={onInputChange}
            inputName="uniFrom"
            inputValue={uniFromValue}
          />

          <InputTab
            classNameVar="unito pinfo"
            labelName="To: "
            inputType="text"
            onChange={onInputChange}
            inputName="uniTo"
            inputValue={uniToValue}
          />
        </fieldset>
      </div>
    );
  }
}

export default FormSectionEducation;
