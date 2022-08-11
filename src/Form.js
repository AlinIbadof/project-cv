import React, { Component } from "react";
import CreatedCV from "./CreatedCV";
import FormSectionEducation from "./FormSectionEducation";
import FormSectionPersonal from "./FormSectionPersonal";
import FormSectionWork from "./FormSectionWork";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phoneNo: "",

      uniName: "",
      uniCity: "",
      degree: "",
      subject: "",
      uniFrom: "",
      uniTo: "",

      position: "",
      company: "",
      jobCity: "",
      jobFrom: "",
      jobTo: "",

      submitted: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("data submitted");
    this.setState({
      submitted: true,
    });
  };

  render() {
    if (this.state.submitted === true) {
      return (
        <div className="main">
          <div className="formsection">
            <form className="form">
              <FormSectionPersonal
                sectionName="Personal Information"
                onInputChange={this.handleInputChange}
                firstNameValue={this.state.firstName}
                lastNameValue={this.state.lastName}
                addressValue={this.state.address}
                emailValue={this.state.email}
                phoneNoValue={this.state.phoneNo}
              />

              <FormSectionEducation
                sectionName="Education"
                onInputChange={this.handleInputChange}
                uniNameValue={this.state.uniName}
                uniCityValue={this.state.uniCity}
                degreeValue={this.state.degree}
                subjectValue={this.state.subject}
                uniFromValue={this.state.uniFrom}
                uniToValue={this.state.uniTo}
              />

              <FormSectionWork
                sectionName="Work"
                onInputChange={this.handleInputChange}
                positionValue={this.state.position}
                companyValue={this.state.company}
                jobCityValue={this.state.jobCity}
                jobFromValue={this.state.jobFrom}
                jobToValue={this.state.jobTo}
              />
              <button type="submit" onClick={this.handleSubmit}>
                Submit Data
              </button>
            </form>
          </div>
          <CreatedCV
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            address={this.state.address}
            email={this.state.email}
            phoneNo={this.state.phoneNo}
            uniName={this.state.uniName}
            uniCity={this.state.uniCity}
            degree={this.state.degree}
            subject={this.state.subject}
            uniFrom={this.state.uniFrom}
            uniTo={this.state.uniTo}
            position={this.state.position}
            company={this.state.company}
            jobCity={this.state.jobCity}
            jobFrom={this.state.jobFrom}
            jobTo={this.state.jobTo}
          />
        </div>
      );
    } else
      return (
        <div className="main">
          <div className="formsection">
            <form className="form">
              <FormSectionPersonal
                sectionName="Personal Information"
                onInputChange={this.handleInputChange}
                firstNameValue={this.state.firstName}
                lastNameValue={this.state.lastName}
                addressValue={this.state.address}
                emailValue={this.state.email}
                phoneNoValue={this.state.phoneNo}
              />

              <FormSectionEducation
                sectionName="Education"
                onInputChange={this.handleInputChange}
                uniNameValue={this.state.uniName}
                uniCityValue={this.state.uniCity}
                degreeValue={this.state.degree}
                subjectValue={this.state.subject}
                uniFromValue={this.state.uniFrom}
                uniToValue={this.state.uniTo}
              />

              <FormSectionWork
                sectionName="Work"
                onInputChange={this.handleInputChange}
                positionValue={this.state.position}
                companyValue={this.state.company}
                jobCityValue={this.state.jobCity}
                jobFromValue={this.state.jobFrom}
                jobToValue={this.state.jobTo}
              />
              <button type="submit" onClick={this.handleSubmit}>
                Submit Data
              </button>
            </form>
          </div>
        </div>
      );
  }
}

export default Form;
