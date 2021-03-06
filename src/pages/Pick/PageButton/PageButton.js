import React, { Component } from "react";

import "./PageButton.scss";

function Btn({ value, current, event }) {
  return (
    <li
      className={current ? "button clicked" : "button"}
      onClick={event}
      // style={{ opacity: !!current ? 1 : 0.8 }}
    >
      {value}
    </li>
  );
}

export class PageButton extends Component {
  getTargetPage = (e) => {
    console.log(e.target.innerText);
    this.props.clickEvent(e.target.innerText);
    this.props.setQS(e.target.innerText);
    // this.props.getPageNum(this.targetPage.innerText);
    // this.props.pagingNum(this.targetPage.innerText);
  };

  render() {
    // const { pageNum, id, clicked } = this.props;
    const { pages, prev, next } = this.props;
    // console.log(typeof this.getTargetPage);
    return (
      <div className="PageButton">
        <Btn
          type="arrow"
          value="<"
          current={false}
          event={this.getTargetPage}
        />
        {pages.map((page, idx) => {
          return (
            <Btn
              key={idx}
              type="number"
              value={page.value}
              current={page.current}
              event={this.getTargetPage}
            />
          );
        })}
        <Btn type="arrow" value=">" current={false} event={this.getTargetPage} />
      </div>
    );
  }
}

export default PageButton;
