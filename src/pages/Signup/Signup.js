import React, { Component } from "react";
import "../Signup/Signup.scss";
import Toggle from "../Signup/signupComponent/Toggle";
import Vehicles from "../Signup/signupComponent/Vehicles";

const API = "http://10.58.1.45:8000/user/signup";

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "@",
      name: "ab",
      password: "12345678",
      inputSign: false,
      allCheck: false,
      firstCheck: false,
      secondCheck: false,
      thirdCheck: false,
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  selectAll = async (e) => {
    let targets = document.querySelectorAll(".checkedBox");
    console.log(targets);
    await this.setState({ allCheck: !this.state.allCheck });
    const { allCheck } = this.state;
    for (let i = 0; i < targets.length; i++) {
      targets[i].checked = allCheck;
    }
  };

  checkValidationOfSelectAll = () => {
    let targets = document.querySelectorAll(".checkedBox");
    for (let i = 0; i < targets.length; i++) {
      if (!targets[i].checked) {
        this.setState({ allCheck: false });
        return;
      }
      this.setState({ allCheck: true });
    }
  };

  componentDidUpdate() {
    let target = document.querySelector(".checkBox");
    target.checked = this.state.allCheck ? true : false;
  }

  handleLogin = (e) => {
    e.preventDefault();
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
    console.log("=============");
    console.log("백엔드 응답 메세지 :", result);
    if (result.message === "SUCCESS") {
      this.props.history.push("/");
    }
  });
  };

  render() {
    console.log(this.state.name)
    return (
      <div className="Signup">
        <div className="signupContainer">
          <div className="signupBoard">
            <header>
              <span>Sign up</span>
            </header>
            <div className="joinInfoBoard">
              <section className="inputSection">
                <form>
                  <input
                    name="email"
                    onChange={this.handleInput}
                    type="text"
                    className="emailInput"
                    required
                    placeholder="Email Address"
                  />
                  <span
                    name="inputSign"
                    className={
                      this.state.email.includes("@")
                        ? "emailMessage"
                        : "warningMessage"
                    }
                  >
                    이메일 주소를 입력하세요.
                  </span>
                  <input
                    name="name"
                    onChange={this.handleInput}
                    type="text"
                    className="nameInput"
                    required
                    placeholder="Name"
                  />
                  <span
                    className={
                      this.state.name.length > 1
                        ? "nameMessage "
                        : "warningMessage"
                    }
                  >
                    이름을 입력하세요.
                  </span>
                  <input
                    name="password"
                    onChange={this.handleInput}
                    type="password"
                    className="passwordInput"
                    required
                    placeholder="Password"
                  />
                  <span
                    className={
                      this.state.password.length > 7
                        ? "passwordMessage "
                        : "warningMessage"
                    }
                  >
                    비밀번호를 입력하세요.
                  </span>
                </form>
              </section>
              <section className="infoSection">
                <div className="joinInfoWrap">
                  <div className="joinInfoTitle">
                    <div className="infoTitle">
                      <span>사용자 약관 전체 동의</span>
                      <input
                        type="checkbox"
                        name="allCheck"
                        onClick={this.handleCheckBox}
                        className="checkBox"
                        onChange={this.selectAll}
                      />{" "}
                    </div>
                  </div>
                  <div className="firstAgreement">
                    <div className="keyAgreement">
                      서비스 이용 약관 동의 (필수)
                    </div>
                    <div className="valueAgreement">
                      <span>
                        동의
                        <input
                          name="firstCheck"
                          type="checkbox"
                          className="checkedBox"
                          onChange={this.checkValidationOfSelectAll}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="firstAgrForm">
                    <Toggle>
                      <Vehicles
                        infoTitle="개인정보 수집 및 이용 동의"
                        first="1. 수집항목 : [필수] 이름, 연락처, 이메일주소, 인원정보"
                        second="2. 수집 및 이용목적 : 사업자회원과 예약이용자의 원활한 거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록보존, 스테이폴리오 멤버십 및 프로모션, 이벤트 안내"
                        third="3. 보관기간 : 회원탈퇴 등 개인정보 이용목적 달성 시까지 보관. 단, 상법 및 ‘전자상거래 등에서의 소비자 보호에 관한 법률’ 등 관련 법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관함"
                        fourth="4. 동의 거부권 등에 대한 고지 : 정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다."
                      />
                    </Toggle>
                    <div className="secondAgreement">
                      <div className="keyAgreement">
                        개인정보 취급방침 동의 (필수)
                      </div>
                      <div className="valueAgreement">
                        <span>
                          동의
                          <input
                            name="secondCheck"
                            type="checkbox"
                            className="checkedBox"
                            onChange={this.checkValidationOfSelectAll}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="secondAgrForm">
                    <Toggle>
                      <Vehicles
                        infoTitle="제 1조 (총칙)"
                        first="1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 주민등록번호 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다.) 를 말합니다."
                        second="2. staywefolio는 귀하의 개인정보 보호를 매우 중요시하며, ‘정보통신망 이용촉진 및 정보보호에 관한 법률’ 상의 개인정보 보호규정 및 정보통신부가 제정한 ‘개인정보 보호지침’을 준수하고 있습니다."
                        third="3. staywefolio는 개인정보취급방침을 정하고 이를 귀하께서 언제나 쉽게 확인할 수 있게 공개하도록 하고 있습니다."
                        fourth="4. staywefolio는 개인정보 처리방침의 지속적인 개선을 위하여 개정하는데 필요한 절차를 정하고 있으며, 개인정보 처리방침을 회사의 필요한 사회적 변화에 맞게 변경할 수 있습니다. 그리고 개인정보처리방침을 개정하는 경우 버전번호 등을 부여하여 개정된 사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다."
                      />
                    </Toggle>
                    <div className="thirdAgreement">
                      <div className="keyAgreement">
                        마케팅 정보 수신 동의 (선택)
                      </div>
                      <div className="valueAgreement">
                        <span>
                          동의
                          <input
                            name="thirdCheck"
                            type="checkbox"
                            className="checkedBox"
                            onChange={this.checkValidationOfSelectAll}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="thirdAgrForm">
                    <Toggle>
                      <Vehicles
                        infoTitle="staywefolio 멤버십 서비스 혜택, 프로모션 및 이벤트,
                        마케팅 정보 안내 등을 주 목적으로 하며 수신 동의 시
                        메일, 문자 메시지, 푸시 알림에 수신 동의 처리됩니다.
                        동의하지 않으셔도 서비스 이용이 가능하며 동의하신
                        이후에도 정보 수신 시 안내에 따라 수신 동의를 철회할 수
                        있습니다."
                      />
                    </Toggle>
                  </div>
                  <div className="signupBtnWrap">
                    <button
                      onClick={this.handleLogin}
                      className={
                        this.state.allCheck === true &&
                        this.state.email.includes("@") &&
                        this.state.name.length > 1 &&
                        this.state.password.length > 7
                          ? "falseBtn signupBtn"
                          : "falseBtn"
                      }
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
