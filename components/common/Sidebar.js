import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../public/Images/PatientsInfluence1PNG.png";
import Dashboard from "../../public/Images/QrCodedash.png";
import Discover from "../../public/Images/CirclesThreePlus.png";
import Influencers from "../../public/Images/ApplePodcastsLogoInfluencers.png";
import Clients from "../../public/Images/UserSwitchclients.png";
import Campaigns from "../../public/Images/Graphcampaigns.png";
import Reports from "../../public/Images/ChartBar.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const [showDiscover, setShowDiscover] = useState(false);
  let [isActive, setIsActive] = useState("Dash");

  function handleSwitch(camp) {
    setIsActive(camp);
  }

  console.log(isActive);

  return (
    <div className="sidebar">
      <div className="d-flex justify-content-center">
        <Image
          src={Logo}
          className="logo"
          alt="logo"
          width="100px"
          height="53px"
        />
      </div>
      <div className="BTNsEC">
        <Link
          href="/"
          onClick={() => {
            handleSwitch("Dash");
          }}
        >
          <div
            className={`switchBtn ${
              isActive === "Dash" ? "activeBtnSide" : "inactiveBtn"
            }`}
          >
            <Image src={Dashboard} alt="dash" />
            &nbsp;Dashboard
          </div>
        </Link>
        <div>
          <div
            className={`switchBtn2 dropDownSidebAR ${
              isActive === "Dis" ? "activeBtnSide" : "inactiveBtn"
            }`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image src={Discover} alt="dash" />
              &nbsp;Discover
              {!showDiscover && (
                <FaChevronDown
                  style={{ marginLeft: "10px" }}
                  size={16}
                  onClick={() => {
                    setShowDiscover((prevState) => !prevState);
                  }}
                />
              )}
              {showDiscover && (
                <FaChevronUp
                  style={{ marginLeft: "10px" }}
                  size={16}
                  onClick={() => {
                    setShowDiscover((prevState) => !prevState);
                  }}
                />
              )}{" "}
            </div>
            {(showDiscover ||
              isActive === "DisInfu" ||
              isActive === "DisCli") && (
              <div className="indisBtb">
                <Link
                  href="discoverinfluencers"
                  onClick={() => {
                    handleSwitch("DisInfu");
                  }}
                >
                  Influencers
                </Link>
                <Link
                  href="discoverclient"
                  onClick={() => {
                    handleSwitch("DisCli");
                  }}
                >
                  Clients
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="switchBtn dropDownSidebAR disBtb"  onClick={() => setShowDiscover(prevState => !prevState)}>
            <Image src={Discover} alt="dash"/> &nbsp;Discover 
            {!showDiscover && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
            {showDiscover && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>}
            {showDiscover && 
            <div className='indisBtb'>
              <Link href="discoverinfluencers" onClick={ () => {handleSwitch("DisInfu")}}>Influencers</Link>
              <Link href="discoverclient" onClick={ () => {handleSwitch("DisCli")}}>Clients</Link>
            </div>}
            </div> */}
        <Link href="/influencer">
          <div
            onClick={() => {
              handleSwitch("Infu");
            }}
            className={` switchBtn ${
              isActive === "Infu" ? "activeBtnSide" : "inactiveBtn"
            }`}
          >
            <Image src={Influencers} alt="dash" />
            &nbsp;Influencers
          </div>
        </Link>
        <Link href="/clients">
          <div
            onClick={() => {
              handleSwitch("Cli");
            }}
            className={` switchBtn ${
              isActive === "Cli" ? "activeBtnSide" : "inactiveBtn"
            }`}
          >
            <Image src={Clients} alt="dash" />
            &nbsp;Clients
          </div>
        </Link>
        <Link href="/campaigns">
          <div
            onClick={() => {
              handleSwitch("Camp");
            }}
            className={` switchBtn ${
              isActive === "Camp" ? "activeBtnSide" : "inactiveBtn"
            }`}
          >
            <Image src={Campaigns} alt="dash" />
            &nbsp;Campaigns
          </div>
        </Link>
        <Link href="/reports">
          <div
            onClick={() => {
              handleSwitch("Rep");
            }}
            className={` switchBtn ${
              isActive === "Rep" ? "activeBtnSide" : "inactiveBtn"
            }`}
          >
            <Image src={Reports} alt="dash" />
            &nbsp;Reports
          </div>
        </Link>
      </div>
    </div>
  );
}
