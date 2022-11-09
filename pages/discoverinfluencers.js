import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import InstagramIc from "../public/Images/instagram-ic.png";
import YoutubeIc from "../public/Images/youtube-ic.png";
import TiktokIc from "../public/Images/tiktok-ic.png";
import DateNoti from "../components/common/DateNoti";
import UserIc from "../public/Images/user-icon.svg";
import ThreeContainerCard from "../components/common/Cards/ThreeContainerCard/ThreeContainerCard";

export default function Discoverinfluencers(props) {
  const [DiscoverInfluencerData, setDiscoverInfluencerData] = useState([
    {
      name: "Instagram",
      icon: InstagramIc,
      rate: 2,
      up: true,
      total: 7552.8,
    },
    { name: "Youtube", icon: YoutubeIc, rate: 2, up: true, total: 7552.8 },
    {
      name: "Tiktok",
      icon: TiktokIc,
      rate: 6,
      up: false,
      total: 7552.8,
    },
  ]);

  useEffect(() => {
    props.setHead("Discover Influencers");
  }, [props.setHead]);

  return (
    <div className="detailsContainer">
      <div className="mainCardsContainer">
        <Row>
          {DiscoverInfluencerData &&
            DiscoverInfluencerData.length &&
            DiscoverInfluencerData.map((data, index) => {
              return (
                <Col md={6} xl={4} key={index}>
                  <ThreeContainerCard
                    data={data}
                    numberIcon={<Image src={UserIc} width="14" height="16" />}
                  />
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
