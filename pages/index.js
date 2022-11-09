import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import PerGraphCard from "../components/common/Cards/PerGraphCard/PerGraphCard";
import IdentifiedIc from "../public/Images/identified-ic.png";
import ContractedIc from "../public/Images/contracted-ic.png";
import RegisteredIc from "../public/Images/registered-ic.png";
import TobepresentIc from "../public/Images/created-ic.png";
import ForContainerCard from "../components/common/Cards/ForContainerCard/ForContainerCard";
import BiotechIc from "../public/Images/biotech-ic.png";
import HealthtechIc from "../public/Images/healthtech-ic.png";
import MedtechIc from "../public/Images/medtech-ic.png";
import HospitalIc from "../public/Images/hospital-ic.png";
import CallscheduledIc from "../public/Images/callscheduled-ic.png";
import InstagramIc from "../public/Images/instagram-ic.png";
import YoutubeIc from "../public/Images/youtube-ic.png";
import TiktokIc from "../public/Images/tiktok-ic.png";
import TotalIc from "../public/Images/total-ic.png";
import PreparationIc from "../public/Images/preparation-ic.png";
import OngoingIc from "../public/Images/ongoing-ic.png";
import FinishedIc from "../public/Images/finished-ic.png";
import CreatedIc from "../public/Images/created-ic.png";
import TobesendIc from "../public/Images/tobesend.png";
import FeedbackIc from "../public/Images/feedback-ic.png";
import WithoutReportIc from "../public/Images/withoutreport-ic.png";
import ApprovedIc from "../public/Images/approved-ic.png";
import UserIc from "../public/Images/user-icon.svg";
import ClientIc from "../public/Images/client-icon.svg";
import SpeakerIc from "../public/Images/speaker-icon.svg";
import FileIc from "../public/Images/file-icon.svg";
import DateNoti from "../components/common/DateNoti";

export default function Home(props) {
  const [DiscInfluencers, setDiscInfluencers] = useState([
    {
      name: "Identified",
      icon: IdentifiedIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Instagram", per: 80 },
        { name: "Youtube", per: 80 },
        { name: "Tiktok", per: 80 },
      ],
    },
    {
      name: "Contacted",
      icon: ContractedIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Instagram", per: 80 },
        { name: "Youtube", per: 80 },
        { name: "Tiktok", per: 80 },
      ],
    },
    {
      name: "Registered",
      icon: RegisteredIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Instagram", per: 80 },
        { name: "Youtube", per: 80 },
        { name: "Tiktok", per: 80 },
      ],
    },
    {
      name: "To be approved",
      icon: TobepresentIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Instagram", per: 80 },
        { name: "Youtube", per: 80 },
        { name: "Tiktok", per: 80 },
      ],
    },
  ]);

  const [DiscClients, setDiscClients] = useState([
    {
      name: "Identified",
      icon: IdentifiedIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Biotech", per: 80 },
        { name: "Healthech", per: 80 },
        { name: "Medtech", per: 80 },
        { name: "Hospitals", per: 80 },
      ],
    },
    {
      name: "Contacted",
      icon: ContractedIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Biotech", per: 80 },
        { name: "Healthech", per: 80 },
        { name: "Medtech", per: 80 },
        { name: "Hospitals", per: 80 },
      ],
    },
    {
      name: "Registered",
      icon: RegisteredIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Biotech", per: 80 },
        { name: "Healthech", per: 80 },
        { name: "Medtech", per: 80 },
        { name: "Hospitals", per: 80 },
      ],
    },
    {
      name: "Call Scheduled",
      icon: CallscheduledIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Biotech", per: 80 },
        { name: "Healthech", per: 80 },
        { name: "Medtech", per: 80 },
        { name: "Hospitals", per: 80 },
      ],
    },
  ]);

  const [OurInflu, setOurInflu] = useState([
    {
      name: "Instagram",
      icon: InstagramIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "In campaings", per: 80 },
        { name: "Available", per: 80 },
      ],
    },
    {
      name: "Youtube",
      icon: YoutubeIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "In campaings", per: 80 },
        { name: "Available", per: 80 },
      ],
    },
    {
      name: "Tiktok",
      icon: TiktokIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "In campaings", per: 80 },
        { name: "Available", per: 80 },
      ],
    },
    {
      name: "Total",
      icon: TotalIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "In campaings", per: 80 },
        { name: "Available", per: 80 },
      ],
    },
  ]);

  const [OurClient, setOurClient] = useState([
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

  const [CampaignOverview, setCampaignOverview] = useState([
    {
      name: "In Preparation",
      icon: PreparationIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Instagram", per: 80 },
        { name: "Youtube", per: 80 },
        { name: "Tiktok", per: 80 },
      ],
    },
    {
      name: "Ongoing",
      icon: OngoingIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Instagram", per: 80 },
        { name: "Youtube", per: 80 },
        { name: "Tiktok", per: 80 },
      ],
    },
    {
      name: "Finished",
      icon: FinishedIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Instagram", per: 80 },
        { name: "Youtube", per: 80 },
        { name: "Tiktok", per: 80 },
      ],
    },
    {
      name: "Without report",
      icon: WithoutReportIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Instagram", per: 80 },
        { name: "Youtube", per: 80 },
        { name: "Tiktok", per: 80 },
      ],
    },
  ]);

  const [ReportOverview, setReportOverview] = useState([
    {
      name: "To Be Created",
      icon: CreatedIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Basic", per: 80 },
        { name: "Pro", per: 80 },
        { name: "Premium", per: 80 },
      ],
    },
    {
      name: "To Be Sent",
      icon: TobesendIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Basic", per: 80 },
        { name: "Pro", per: 80 },
        { name: "Premium", per: 80 },
      ],
    },
    {
      name: "Waiting Feedback",
      icon: FeedbackIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Basic", per: 80 },
        { name: "Pro", per: 80 },
        { name: "Premium", per: 80 },
      ],
    },
    {
      name: "Approved",
      icon: ApprovedIc,
      rate: 2,
      up: true,
      total: 75,
      perData: [
        { name: "Basic", per: 80 },
        { name: "Pro", per: 80 },
        { name: "Premium", per: 80 },
      ],
    },
  ]);

  useEffect(() => {
    props.setHead("Dashboard");
  }, [props.setHead]);

  return (
    <div className="detailsContainer">
      <div className="mainCardsContainer">
        <Row>
          <Col lg={12}>
            <div className="adminContainer">
              <h2 className="title">Discover Influencers</h2>
              <Row className="mb-3">
                {DiscInfluencers.map((data, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <PerGraphCard
                        data={data}
                        numberIc={<Image src={UserIc} width="13" height="14" />}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <div className="adminContainer">
              <h2 className="title">Discover Clients</h2>
              <Row className="mb-3">
                {DiscClients.map((data, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <PerGraphCard
                        data={data}
                        numberIc={
                          <Image src={ClientIc} width="12" height="14" />
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <div className="adminContainer">
              <h2 className="title">Our Influencers</h2>
              <Row className="mb-3">
                {OurInflu.map((data, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <PerGraphCard
                        data={data}
                        numberIc={<Image src={UserIc} width="13" height="14" />}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <div className="adminContainer">
              <h2 className="title">Our Clients</h2>
              <Row className="mb-3">
                {OurClient &&
                  OurClient.length &&
                  OurClient.map((data, index) => {
                    return (
                      <Col md={6} xl={3} key={index}>
                        <ForContainerCard
                          data={data}
                          numberIcon={
                            <Image src={ClientIc} width="12" height="14" />
                          }
                        />
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <div className="adminContainer">
              <h2 className="title">Campaigns overview</h2>
              <Row className="mb-3">
                {CampaignOverview.map((data, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <PerGraphCard
                        data={data}
                        numberIc={
                          <Image src={SpeakerIc} width="14" height="14" />
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <div className="adminContainer">
              <h2 className="title">Reports overview</h2>
              <Row className="mb-3">
                {ReportOverview.map((data, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <PerGraphCard
                        data={data}
                        numberIc={<Image src={FileIc} width="14" height="14" />}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="calenderContainer">
        <DateNoti />
      </div>
    </div>
  );
}
