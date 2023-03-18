import "./Main.css";
import InteractiveBlock from "./Mycomponents/InteractiveBlock";

function Main({ domain }) {
  return (
    <>
      <h1 className="header center white-text" id="catTitle">
        Resume.cat 🐈
      </h1>
      <p className="center white-text">
        Creating a resume is hard, I will help you create a <strong>real</strong> one step-by-step!
      </p>
      <br />
      <div className="inputzone">
        <InteractiveBlock type="personal" />
        <InteractiveBlock type="education" />
        <InteractiveBlock type="experience" />
        <InteractiveBlock type="skills" />
      </div>
      <br />
    </>
  );
}

export default Main;
