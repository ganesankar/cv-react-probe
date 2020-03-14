import React, { Fragment } from "react";

// Redux]

export default class CardShrtLinks extends React.Component {
  state = {
    modal: false,
    title: "",
    body: ""
  };

  render() {
    const { profile } = this.props;
    return (
      <Fragment>
        <div className="card-stats card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="info-icon text-center icon-warning">
                  <i className={` fas fa-user pt-2 fa-2x text-white`}></i>
                </div>
              </div>
              <div className="col-7">
                <div className="numbers">
                  <p className="card-category">You can get more about me!</p>
                  <h3 className="card-title"> Profile Links</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <hr />

            <div className="row ml-0 mr-0">
              {profile &&
                profile.values.length > 0 &&
                profile.values.map((item, index) => {
                  return (
                    <a
                      rel="noopener noreferrer"
                      href={item.link}
                      target="_blank"
                      className="ml-auto mr-auto col-3 text-center"
                    >
                      {" "}
                      <span className="card-stats justify-content-center ">
                        <i className={` fab  ${item.icon}`}></i>
                      </span>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
