import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserIc from "../public/Images/user-icon.svg";
import Image from "next/image";
import ForContainerCard from "../components/common/Cards/ForContainerCard/ForContainerCard";
import DateNoti from "../components/common/DateNoti";
import BiotechIc from "../public/Images/biotech-ic.png";
import HealthtechIc from "../public/Images/healthtech-ic.png";
import MedtechIc from "../public/Images/medtech-ic.png";
import HospitalIc from "../public/Images/hospital-ic.png";

export default function DiscoverClient(props) {
  const [DiscoverInfluencerData, setDiscoverInfluencerData] = useState([
    {
      name: "Biotech",
      icon: BiotechIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Healthtech",
      icon: HealthtechIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Meditech",
      icon: MedtechIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Hospitals",
      icon: HospitalIc,
      rate: 2,
      up: true,
      total: 75,
    },
  ]);

  useEffect(() => {
    props.setHead("Discover Clients");
  }, [props.setHead]);

  return (
    <div className="detailsContainer">
      <div className="mainCardsContainer">
        <div className="disClientConatiner">
          <h2 className="title">Clients Summary</h2>
          <Row>
            {DiscoverInfluencerData &&
              DiscoverInfluencerData.length &&
              DiscoverInfluencerData.map((data, index) => {
                return (
                  <Col md={6} xl={3} key={index}>
                    <ForContainerCard
                      data={data}
                      numberIc={<Image src={UserIc} width="13" height="14" />}
                    />
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
      <div className="calenderContainer">
        <DateNoti />
      </div>
    </div>
  );
}
