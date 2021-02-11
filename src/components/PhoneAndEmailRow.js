import React from "react";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

function PhoneAndEmailRow(props) {
  return (
    <div className="row">
      <div className="col-lg-6">
        <p className="float-md-left">
          <PhoneOutlined
            className="pr-1"
            style={{
              fontSize: "25px",
              color: "#08c",
              paddingTop: "2px",
            }}
          />{" "}
          <span style={{ lineHeight: "35px" }}>+1(301) 865-9833</span>
        </p>
      </div>
      <div className="col-lg-6">
        <p className="float-md-right">
          <MailOutlined
            className="pr-1"
            style={{
              fontSize: "25px",
              color: "#08c",
              paddingTop: "2px",
            }}
          />{" "}
          <span className="px-1" style={{ lineHeight: "30px" }}>
            theperfectpaintersmd@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
}
export default PhoneAndEmailRow;
