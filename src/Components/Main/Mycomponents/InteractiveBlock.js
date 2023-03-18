import React, { useState, useEffect } from "react";
export default InteractiveBlock;
function InteractiveBlock(props) {
  
  //Convert props to individual variables
  const toRender = props.type;

  switch (toRender) {
    case "personal":
      return <BLK_PERSONAL />;
    case "education":
      return <BLK_MULTILAYERED unit={Unit_Education} />;
    case "experience":
      return <BLK_MULTILAYERED unit={Unit_Experience} />;
    case "skills":
      return <BLK_MULTILAYERED unit={Unit_Skills} />;
    case "languages":
      return <BLK_MULTILAYERED unit={Unit_Languages} />;
    default:
      return "Please refresh the page.";
  }
}

const scr_formSubmit = (event) => {
  event.preventDefault();
  var data = new FormData(event.target);
  let formObject = Object.fromEntries(data.entries());
  console.log(formObject);
};

function BLK_PERSONAL() {
  //Set variables for the optional sections
  const [resumePage, set_resumePage] = useState(1);
  const [option_title, set_option_title] = useState(true);
  const [option_address, set_option_address] = useState(true);
  const [option_mail, set_option_mail] = useState(true);
  const [option_phone, set_option_phone] = useState(true);
  const [option_website, set_option_website] = useState(true);

  return (
    <>
        <div className="1">
        <div className="basicBox" id="nameBox">
          <label>What is your name?</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Purrito Cat"
            id="dynval_name"
          ></input>
          <br />
        </div>

        {option_title ? (
          <>
            <div className="basicBox" id="titleBox">
              <label>Do you have a career title? </label>
              <button onClick={() => set_option_title(0)}>🗑️</button>
              <input
                type="text"
                name="title"
                placeholder="Box Inspector"
                id="dynval_title"
              ></input>
              <br />
            </div>
          </>
        ) : (
          <>
            <button onClick={() => set_option_title(1)}>Add title</button>
            <br />
          </>
        )}

        {option_address ? (
          <>
            <div className="basicBox" id="addressBox">
              <label>Your town? </label>
              <button onClick={() => set_option_address(false)}>🗑️</button>
              <input
                type="text"
                name="address"
                placeholder="Cattown"
                id="dynval_address"
              ></input>
              <label>And province / state! </label>
              <input
                type="text"
                name="address"
                placeholder="New Meowia"
                id="dynval_state"
              ></input>

              <br />
            </div>
          </>
        ) : (
          <>
            <button onClick={() => set_option_address(true)}>
              Add Address
            </button>
            <br />
          </>
        )}

        {option_mail ? (
          <>
            <div className="basicBox" id="mailBox">
              <label>Your e-mail? </label>
              <button onClick={() => set_option_mail(false)}>🗑️</button>
              <input
                type="email"
                name="email"
                placeholder="purrito@meow.cat"
                id="dynval_email"
              ></input>
              <br />
            </div>
          </>
        ) : (
          <>
            <button onClick={() => set_option_mail(true)}>Add Mail</button>
            <br />
          </>
        )}

        {option_phone ? (
          <>
            <div className="basicBox" id="phoneBox">
              <label>Phone Number? </label>
              <button onClick={() => set_option_phone(0)}>🗑️</button>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="9025555555"
                id="dynval_phone"
              ></input>
              <br />
            </div>
          </>
        ) : (
          <>
            <button onClick={() => set_option_phone(1)}>
              📞 Add phone number
            </button>
          </>
        )}

        {option_website ? (
          <>
            <div className="basicBox" id="siteBox">
              <label>Do you want to add a website link? </label>
              <button onClick={() => set_option_website(0)}>🗑️</button>
              <input
                type="url"
                name="personalWebsite"
                placeholder="You can leave this area empty."
                id="dynval_website"
              ></input>
              <br />
            </div>
          </>
        ) : (
          <>
            <button onClick={() => set_option_website(true)}>
              Add Website
            </button>
            <br />
          </>
        )}
</div>

<div className="2">
        <div className="basicBox">
          <br />
          <label htmlFor="dynval_desc">Talk about yourself!</label>
          <br />
          <textarea
            id="dynval_desc"
            rows="5"
            cols="40"
            placeholder="I am a cat."
          ></textarea>
          <br />
        </div>

        <div className="basicBox">
          <br />
        <label>Do you want to upload a photo?</label>
        <input type="file" id="img" name="img" accept="image/*"/>
        <button onClick={() => set_option_website(true)}>
              Remove any photos from my resume.
          </button>

        </div>
        </div>
    </>
  );
}

function BLK_MULTILAYERED(props) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("hey");
  }, [count]);

  let rows = [];

  for (let i = 0; i < count; i++) {
    rows.push(<props.unit no={i} />);
  }

  return (
    <>
      {rows}
      <button onClick={() => setCount(count + 1)}>Add More</button>
      <button
        onClick={() => {
          if (count != 1) {
            setCount(count - 1);
          }
        }}
      >
        Remove
      </button>
    </>
  );
}

function Unit_Education(props) {
  return (
    <>
      <br />
      <h6>
        <strong>
          Any degrees, diplomas or certificates? (Credential {props.no + 1})
        </strong>
      </h6>
      <label htmlFor="name">Institution Name</label>
      <br />
      <input type="text" id="dynvar_edu_school" name="name" />
      <br />
      <br />
      <label htmlFor="name">Study Field</label>
      <br />
      <input type="text" id="dynvar_edu_field" name="name" />
      <br />
      <br />
      <label htmlFor="name">Study Tier</label>
      <br />
      <input type="text" id="dynvar_edu_tier" name="name" />
      <br />
      <br />
      <label htmlFor="name">Details</label>
      <br />
      <input type="text" id="dynvar_edu_details" name="name" />
      <br />
      <br />
    </>
  );
}

function Unit_Experience(props) {
  return (
    <>
      <br />
      <h6>
        <strong>
          Do you have any previous work experience? (Work {props.no + 1})
        </strong>
      </h6>
      <label htmlFor="name">Position</label>
      <br />
      <input type="text" id="dynvar_exp_position" name="name" />
      <br />
      <br />
      <label htmlFor="name">Company Name</label>
      <br />
      <input type="text" id="dynvar_exp_company" name="name" />
      <br />
      <br />
      <label htmlFor="name">Starting Date</label>
      <br />
      <input type="text" id="dynvar_exp_startdate" name="name" />
      <br />
      <br />
      <label htmlFor="name">Ending Date</label>
      <br />
      <input type="text" id="dynvar_exp_enddate" name="name" />
      <br />
      <br />
      <label htmlFor="name">Details</label>
      <br />
      <input type="text" id="dynvar_exp_details" name="name" />
      <br />
      <br />
      <label htmlFor="name">Highlight</label>
      <input type="text" id="dynvar_exp_highlight" name="name" />
      <br />
      <br />
    </>
  );
}

function Unit_Skills(props) {
  return (
    <>
      <br />
      <h6>
        <strong>Tell me about a skill of yours! (Skill {props.no + 1})</strong>
      </h6>
      <label htmlFor="name">Skill Name</label>
      <br />
      <input type="text" id="dynvar_skill_name" name="name" />
      <br />
      <br />
      <label htmlFor="name">Your Level</label>
      <br />
      <input type="text" id="dynvar_skill_level" name="name" />
      <br />
      <br />
    </>
  );
}

function Unit_Languages(props) {
  return (
    <>
      <br />
      <h6>
        <strong>What languages can you speak? (Language {props.no + 1})</strong>
      </h6>
      <label htmlFor="name">Language Name</label>
      <br />
      <input type="text" id="name" name="name" />
      <br />
      <br />
    </>
  );
}
