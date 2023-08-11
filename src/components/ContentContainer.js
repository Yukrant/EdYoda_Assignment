import React, { useState } from "react";
import "../styles/ContentContainer.css";
import pt1 from "../icons/pt1.png";
import pt2 from "../icons/pt2.png";
import pt3 from "../icons/pt3.png";
import pt4 from "../icons/pt4.png";
import pt5 from "../icons/pt5.png";
import p1 from "../icons/1.png";
import p2 from "../icons/2.png";
import Clock from "../icons/Clock.png";
import Razorpay from "../icons/Razorpay.png";
import check from "../icons/check.png";

const plans = [
  { name: "Basic", price: 99 },
  { name: "Pro", price: 149 },
  { name: "Premium", price: 179 },
];

const ContentContainer = () => {
  const [status, setStatus] = useState(2);
  const [selectedPlan, setSelectedPlan] = useState(plans[2]);
  const discountAmount = () => {
    const discountPrice = 18500 - selectedPlan.price;
    return discountPrice;
  };
  const calculateTotalPrice = () => {
    const totalPrice = selectedPlan.price;
    return totalPrice;
  };

  return (
    <>
      <div className="body">
        <div className="main">
          <div className="header">Access curated courses worth</div>
          <div className="header2">
            <div className="he1">
              ₹&nbsp;
              <span class="outer">
                <span class="inner">18,500</span>
              </span>
            </div>

            <div className="he2">&nbsp;at just</div>
            <div className="he3">&nbsp;₹ 99</div>
            <div className="he2">&nbsp;per year!</div>
          </div>
          <div className="pt">
            <img className="icon" src={pt1} alt="" />
            <div className="pt1">
              <div className="col">100+</div>
              <div>&nbsp;Job relevent cources</div>
            </div>
          </div>
          <div className="pt">
            <img className="icon" src={pt2} alt="" />
            <div className="pt1">
              <div className="col">20,000+&nbsp;</div>
              <div>Hours of content</div>
            </div>
          </div>
          <div className="pt">
            <img className="icon" src={pt3} alt="" />
            <div className="pt1">
              <div className="col">Exclusive&nbsp;</div>
              <div>webinar access</div>
            </div>
          </div>
          <div className="pt">
            <img className="icon" src={pt4} alt="" />
            <div className="pt1">
              <div>Scholarship worth&nbsp;</div>
              <div className="col">₹94,500</div>
            </div>
          </div>
          <div className="pt">
            <img className="icon" src={pt5} alt="" />
            <div className="pt1">
              <div className="col">Ad Free</div>
              <div>&nbsp;learning experience</div>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="progress">
            <div className="p">
              <img src={p1} alt="" />
              <div>Sign up</div>
            </div>
            <div className="p">
              <img src={p2} alt="" />
              <div>Subscribe</div>
            </div>
          </div>
          <div className="form_h">Select your subscription plan</div>
          <div className="input">
            <div className="in1">
              <div>
                <div className="tag1">Offer expired</div>
                <div className="in">
                  <div>
                    <input type="radio" className="check" checked />
                    &nbsp;
                    <label>12 Months Subscription </label>
                  </div>
                  <div className="price">
                    <div className="r1">Total&nbsp;₹99</div>
                    <div className="r2">₹8&nbsp;/mo</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="in2"
              onClick={() => {
                setSelectedPlan(plans[2]);
                setStatus(2);
              }}
            >
              <div className="tag2">
                <div>Recommended</div>
              </div>
              <div className="in">
                <div className="ch">
                  {status === 2 ? (
                    <img className="ch_img" src={check} alt="" />
                  ) : (
                    <input type="radio" />
                  )}
                  <label>&nbsp;12 Months Subscription </label>
                </div>
                <div className="price">
                  <div className="r1">Total&nbsp;₹179</div>
                  <div className="r2">₹15&nbsp;/mo</div>
                </div>
              </div>
            </div>
            <div
              className="in3"
              onClick={() => {
                setSelectedPlan(plans[1]);
                setStatus(1);
              }}
            >
              <div className="ch">
                {status === 1 ? (
                  <img className="ch_img" src={check} alt="" />
                ) : (
                  <input type="radio" />
                )}
                <label>&nbsp;6 Months Subscription </label>
              </div>
              <div className="price">
                <div className="r1">Total&nbsp;₹149</div>
                <div className="r2">₹25&nbsp;/mo</div>
              </div>
            </div>
            <div
              className="in4"
              onClick={() => {
                setSelectedPlan(plans[0]);
                setStatus(0);
              }}
            >
              <div className="ch">
                {status === 0 ? (
                  <img className="ch_img" src={check} alt="" />
                ) : (
                  <input type="radio" />
                )}
                <label>&nbsp;3 Months Subscription </label>
              </div>
              <div className="price">
                <div className="r1">Total&nbsp;₹99</div>
                <div className="r2">₹33&nbsp;/mo</div>
              </div>
            </div>
          </div>
          <div className="summary">
            <div className="text">
              <div>Subscription Fee</div>
              <div>₹ 18,500</div>
            </div>
            <div className="alert">
              <div className="text2">
                <div className="offer">Limited time offer</div>
                <div>-₹ {discountAmount()}</div>
              </div>
              <div className="text1">
                <img className="t1" src={Clock} alt="" />
                <div className="offer">
                  &nbsp;Offer valid till 25th March 2023{" "}
                </div>
              </div>
            </div>
            <div className="text">
              <div>
                <b>Total</b> (Incl. of 18% GST)
              </div>
              <div className="final">
                <b>₹{calculateTotalPrice()}</b>
              </div>
            </div>
          </div>
          <div className="button">
            <div className="cancel">CANCEL</div>
            <div className="proceed">PROCEED TO PAY</div>
          </div>
          <div>
            <img className="form_icon" src={Razorpay} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentContainer;
