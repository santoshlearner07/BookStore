import React from "react";
import '../summary/orderSummary.scss'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import thedesign from '../../Assests/thedesign.png'

import Typography from "@mui/material/Typography";

function orderSummary(props) {
  return (
    <>
      <div className="mainOrderSummery">
        <div
          className="card-contents"
          style={{ display: "flex", marginBottom: "10px" }}
        >
          <div className="card-contents1" style={{ display: "flex" }}>
            <Card
              sx={{
                maxWidth: 320,
                maxHeight: 500,
                height: 140,
                width: 120,
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #E2E2E2",
                borderRadius: "3px",
                opacity: "1",
              }}
            >
              <CardContent
                style={{
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={thedesign}
                  alt="book-Image"
                  style={{ height: "120px" }}
                />
              </CardContent>
            </Card>
            <div
              className="card-contents-2"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                style={{ paddingLeft: "0.7vw", fontWeight: "bold" }}
                variant="h6"
                color="black"
                textAlign="left"
              >
                {props.bookitem.product_id.bookName}
              </Typography>
              <Typography
                style={{ paddingLeft: "0.7vw", paddingBottom: "1vh" }}
                variant="h7"
                color="text.secondary"
                textAlign="left"
              >
                by {props.bookitem.product_id.author}
              </Typography>
              <Typography
                style={{
                  paddingLeft: "0.7vw",
                  fontWeight: "bold",
                  paddingBottom: "1vh",
                }}
                variant="h8"
                color="black"
                textAlign="left"
              >
                Rs. {props.bookitem.product_id.price}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default orderSummary;