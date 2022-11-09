import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DateNoti from "../components/common/DateNoti";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import ForContainerCard from "../components/common/Cards/ForContainerCard/ForContainerCard";
import ForProgressCard from "../components/common/Cards/ForProgressCard/ForProgressCard";
import PreparationIc from "../public/Images/preparation-ic.png";
import OngoingIc from "../public/Images/ongoing-ic.png";
import FinishedIc from "../public/Images/finished-ic.png";
import TotalIc from "../public/Images/total-ic.png";
import SpeakerIc from "../public/Images/speaker-icon.svg";
import UserIc from "../public/Images/user-icon.svg";

export default function Campaigns(props) {
  const [DiscoverInfluencerData, setDiscoverInfluencerData] = useState([
    {
      name: "In preparation",
      icon: PreparationIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Ongoing",
      icon: OngoingIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Finished",
      icon: FinishedIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Total",
      icon: TotalIc,
      rate: 2,
      up: true,
      total: 75,
    },
  ]);

  const [CampaignData, setCampaignData] = useState([
    {
      name: "Industry",
      icon: PreparationIc,
      rate: [80, 80, 80, 80, 80, 80, 80],
    },
    {
      name: "Location",
      icon: OngoingIc,
      rate: [80, 80, 80, 80, 80, 80, 80],
    },
    {
      name: "Disease area",
      icon: FinishedIc,
      rate: [80, 80, 80, 80, 80, 80, 80],
    },
    {
      name: "Platform",
      icon: TotalIc,
      rate: [80, 80, 80, 80, 80, 80, 80],
    },
  ]);

  useEffect(() => {
    props.setHead("Campaigns");
  }, [props.setHead]);

  return (
    <div className="detailsContainer">
      <div className="mainCardsContainer">
        <h2 className="title">Campaigns Breakdown</h2>
        <Row>
          {DiscoverInfluencerData &&
            DiscoverInfluencerData.length &&
            DiscoverInfluencerData.map((data, index) => {
              return (
                <Col md={6} xl={3} key={index}>
                  <ForContainerCard
                    data={data}
                    numberIcon={
                      <Image src={SpeakerIc} width="14" height="14" />
                    }
                  />
                </Col>
              );
            })}
        </Row>
        <Row className="mt-3">
          {CampaignData &&
            CampaignData.length &&
            CampaignData.map((data, index) => {
              return (
                <Col md={6} xl={3} key={index}>
                  <ForProgressCard data={data} numberIcon={<Image src={UserIc} width="13" height="14" />} />
                </Col>
              );
            })}
        </Row>
      </div>
      <div className="calenderContainer">
        <DateNoti />
      </div>
    </div>
  );
}
