import "../styles/globals.css";
import "../styles/calendarNotification.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-times/css/material/default.css";

import Header from "../components/common/Header";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/common/Sidebar";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = "bg";
  });

  const [head, setHead] = useState();

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header head={head} />
      <div className="containerBox overflow-hidden w-100">
        <Sidebar />
        <div className="contentBox">
          <Component {...pageProps} setHead={setHead} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
