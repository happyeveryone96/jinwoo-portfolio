import Nav from "@/components/Nav/Nav";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isAgreeWithPrivacyPolicy, setIsAgreeWithPrivacyPolicy] =
    useState(false);

  const submitMessage = () => {
    if (name && email && message && isAgreeWithPrivacyPolicy) {
      setName("");
      setEmail("");
      setMessage("");
      setIsAgreeWithPrivacyPolicy(false);
    } else if (!name) {
      alert("이름을 입력해주세요.");
    } else if (!email) {
      alert("이메일을 입력해주세요.");
    } else if (!message) {
      alert("메세지를 입력해주세요.");
    } else if (!isAgreeWithPrivacyPolicy) {
      alert("개인 정보 보호 정책에 동의해주세요.");
    }
  };

  return (
    <div>
      <Nav />
      <div className="about-container">
        <div className="copy">
          <div className="copy-wrapper">
            <h1>FRONT-END DEVELOPER JUNG JIN WOO</h1>
            <h2>Phone. 010-5756-0347</h2>
            <h2>Email. happyeveryone@naver.com</h2>
            <h2>Address. 경기도 화성시 산척동</h2>
            <h2>Date of birth. 96.03.30</h2>
            <h2>
              <Link href="https://github.com/happyeveryone96" target="_blank">
                GitHub.
              </Link>
            </h2>
            <h2>
              <Link href="https://velog.io/@happyeveryone96" target="_blank">
                Blog.
              </Link>
            </h2>
          </div>
        </div>

        <div className="overlay">
          <div className="overlay-copy">
            <h2 className="contact">Contact</h2>
            <div className="form">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <textarea
                name=""
                rows={5}
                placeholder="Interested in hiring a creative front end developer and I would like more info"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-action">
              <label className="checkmark-wrapper">
                <span>I accept Privacy Policy</span>
                <input
                  type="checkbox"
                  checked={isAgreeWithPrivacyPolicy}
                  onChange={(e) => {
                    setIsAgreeWithPrivacyPolicy(e.target.checked);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <div className="submit-btn">
                <button id="submit" onClick={submitMessage}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
