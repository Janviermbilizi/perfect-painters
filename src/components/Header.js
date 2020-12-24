import React from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-center py-0 m-0">
      <div className="row py-2 m-0">
        <div className="col-6 text-left">
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
        <div className="col-6 text-right">
          <Link to="/contact" type="button" className="btn btn-primary">
            REQUEST FREE ESTIMATE
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
