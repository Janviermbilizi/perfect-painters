import React from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-center py-0 m-0">
      <div className="row py-2 m-0">
        <div className="col-6 col-sm-7 text-left pr-1">
          <PhoneOutlined
            className="float-left pr-1"
            style={{
              fontSize: "25px",
              color: "#08c",
              paddingTop: "2px",
            }}
          />{" "}
          <div className="float-left" style={{ lineHeight: "35px" }}>
            (301) 865-9833
          </div>
        </div>
        <div className="col-6 col-sm-5 text-right pl-1">
          <Link
            to="/#"
            type="button"
            data-toggle="modal"
            data-target="#modalCenterQuiz"
            className="btn btn-primary"
          >
            FREE ESTIMATE
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
