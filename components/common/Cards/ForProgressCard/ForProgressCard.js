import React from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import styles from "./ForProgressCard.module.css";

export default function ForProgressCard({ data, numberIcon }) {
  const { icon, name, rate } = data;
  return (
    <div className="cardCm">
      <Row>
        <Col lg={12}>
          <div className={styles.headerBox}>
            <div className={styles.titleBox}>
              <Image src={icon} width="42" height="42" />
              <span
                className="subTitle"
                style={{ lineHeight: "20px", marginLeft: "10px" }}
              >
                {name}
              </span>
            </div>
          </div>
        </Col>
        <Col lg={12}>
          <div className={styles.progressScrollContainer + " customScroll"}>
            {rate.map((data, index) => {
              return (
                <div key={index}>
                  <div className={styles.progressBox}>
                    {numberIcon}
                    <ProgressBar className={styles.progressBar} now={data} />
                    <span className={styles.perProgressBar}>{data}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
}
