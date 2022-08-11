import React, { Component } from "react";
import InputTab from "./InputTab";

class FormSectionWork extends Component {
  render() {
    const {
      sectionName,
      onInputChange,
      positionValue,
      companyValue,
      jobCityValue,
      jobFromValue,
      jobToValue,
    } = this.props;

    return (
      <div className="worksection">
        <fieldset>
          <legend>{sectionName}</legend>
          <InputTab
            classNameVar="position pinfo"
            labelName="Position: "
            inputType="text"
            onChange={onInputChange}
            inputName="position"
            inputValue={positionValue}
          />

          <InputTab
            classNameVar="company pinfo"
            labelName="Company: "
            inputType="text"
            onChange={onInputChange}
            inputName="company"
            inputValue={companyValue}
          />

          <InputTab
            classNameVar="jobcity pinfo"
            labelName="City: "
            inputType="text"
            onChange={onInputChange}
            inputName="jobCity"
            inputValue={jobCityValue}
          />

          <InputTab
            classNameVar="jobfrom pinfo"
            labelName="From: "
            inputType="text"
            onChange={onInputChange}
            inputName="jobFrom"
            inputValue={jobFromValue}
          />

          <InputTab
            classNameVar="jobto pinfo"
            labelName="To: "
            inputType="text"
            onChange={onInputChange}
            inputName="jobTo"
            inputValue={jobToValue}
          />
        </fieldset>
      </div>
    );
  }
}

export default FormSectionWork;
