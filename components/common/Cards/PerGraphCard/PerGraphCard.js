import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import { AreaChart, Area } from "recharts";

import styles from "./PerGraphCard.module.css";

export default function PerGraphCard({ data, numberIc }) {
  const { icon, name, total, rate, up, perData } = data;
  const chartData = [
    {
      uv: 1000,
    },
    {
      uv: 500,
    },
    {
      uv: 1200,
    },
    {
      uv: 300,
    },
    {
      uv: 1500,
    },
    {
      uv: 400,
    },
    {
      uv: 300,
    },
    {
      uv: 1100,
    },
    {
      uv: 1300,
    },
    {
      uv: 800,
    },
    {
      uv: 1700,
    },
    {
      uv: 2200,
    },
    {
      uv: 2100,
    },
    {
      uv: 2600,
    },
    {
      uv: 2000,
    },
    {
      uv: 2300,
    },
    {
      uv: 2100,
    },
    {
      uv: 2500,
    },
    {
      uv: 2100,
    },
    {
      uv: 2200,
    },
    {
      uv: 2000,
    },
    {
      uv: 1400,
    },
  ];

  return (
    <div className={styles.cardCm}>
      <Row>
        <Col lg={12}>
          <div className={styles.headerBox}>
            <div className={styles.titleBox}>
              <Image src={icon} width="42" height="42" />
              <span className={styles.subTitle + " subTitle"}>{name}</span>
            </div>
          </div>
        </Col>
        <Col lg={12} className="d-flex align-items-end">
          <div className={styles.infoClient}>
            <div className={styles.IconBox}>
              {numberIc}
              <span>
                {total
                  ? total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : 0}
              </span>
            </div>
            <div className={styles.rateBox}>
              <span className={up ? styles.upRate : styles.downRate}>
                {up ? <FaCaretUp /> : <FaCaretDown />}
                {rate}%
              </span>
              <p className="m-0">Since last month</p>
            </div>
            <div className={styles.graphBox}>
              <AreaChart
                width={68}
                height={26}
                data={chartData}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <Area
                  type="linear"
                  dataKey="uv"
                  stroke="#11CABE"
                  fill="#bcfbff66"
                />
              </AreaChart>
            </div>
          </div>
          <div className={styles.infoInfluinnerCard}>
            {perData.map((data, index) => {
              return (
                <div
                  className={
                    perData.length > 3
                      ? `${styles.percentageBox} ${styles.small}`
                      : styles.percentageBox
                  }
                  key={index}
                >
                  <span className={styles.sociN}>{data.name}</span>
                  <div className={styles.perProgressBox}>
                    <ProgressBar className={styles.progress} now={data.per} />
                    <span className={styles.perProgressBar}>{data.per}%</span>
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
