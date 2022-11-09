import React, { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";
import InstagramIc from "../public/Images/instagram-ic.png";
import YoutubeIc from "../public/Images/youtube-ic.png";
import TiktokIc from "../public/Images/tiktok-ic.png";
import ThreeContainerCard from "../components/common/Cards/ThreeContainerCard/ThreeContainerCard";
import UserIc from "../public/Images/user-icon.svg";
import Image from "next/image";
import DateNoti from "../components/common/DateNoti";

export default function Influencer(props) {
  const [open, setOpen] = React.useState(0);
  function handleSwitch(camp) {
    setIsActive((isActive = camp));
  }
  let [isActive, setIsActive] = React.useState("Preparation");
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
      rate: 2,
      up: true,
      total: 7552.8,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  function handleCheckAll() {
    setSelectAll((prevState) => !prevState);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [campShow, setCampShow] = useState(false);

  const handleCampClose = () => setCampShow(false);
  const handleCampShow = () => setCampShow(true);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const [campModalSwitch, setCampModalSwitch] = useState();

  function handleCampModal(inputText) {
    handleCampShow();
    handleClose();
    setCampModalSwitch(inputText);
  }

  useEffect(() => {
    props.setHead("Influencers");
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
                    numberIc={<Image src={UserIc} width="13" height="14" />}
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
