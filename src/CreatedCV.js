import React, { Component } from "react";

class CreatedCV extends Component {
  render() {
    const {
      firstName,
      lastName,
      address,
      email,
      phoneNo,
      uniName,
      uniCity,
      degree,
      subject,
      uniFrom,
      uniTo,
      position,
      company,
      jobCity,
      jobFrom,
      jobTo,
    } = this.props;

    return (
      <div className="cv">
        <img
          src={process.env.PUBLIC_URL + "/avatar.png"}
          alt="avatar"
          className="avatarimg"
        ></img>
        <div className="cvpinfo">
          <div className="personalinfo">Personal Information</div>
          <div>
            Name: {firstName} {lastName}
          </div>
          <div>Address: {address}</div>
          <div>Email: {email}</div>
          <div>Phone No.: {phoneNo}</div>
        </div>

        <div className="cveducation">
          <div className="universityinfo">Education</div>
          <div>University: {uniName}</div>
          <div>City: {uniCity}</div>
          <div>Degree: {degree}</div>
          <div>Subject: {subject}</div>
          <div>From: {uniFrom}</div>
          <div>To: {uniTo}</div>
        </div>

        <div className="cvwork">
          <div className="jobinfo">Work Experience</div>
          <div>Position: {position}</div>
          <div>Company: {company}</div>
          <div>City: {jobCity}</div>
          <div>From: {jobFrom}</div>
          <div>To: {jobTo}</div>
        </div>
      </div>
    );
  }
}

export default CreatedCV;
