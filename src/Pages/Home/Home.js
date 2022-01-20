import React from "react";
import { useState, useEffect } from "react";
import { Card, Layout, Row, Col } from "antd";
import "./Home.css";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { Header, Content } = Layout;
function Home() {
  const [Earthquakes, setEarthquakes] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=20`
    );
    const data = await res.json();

    const date = new Date(data.features.time);
    setEarthquakes(data.features);
  }, []);

  return (
    <>
      <Layout className="bg-white">
        <Header>
          <h1>Earthquakes Radar</h1>
        </Header>
        <Content className="center">
          <Row className=".bg-white center">
            {Earthquakes.map((e) => {
              return (
                <Link to={`./Details/${e.id}`} key={e.id}>
                  {" "}
                  <Col span={6} className="m-5">
                    {" "}
                    <Card
                      hoverable
                      className="cards"
                      style={{ width: 280 }}
                      cover={
                        <img
                          alt="example"
                          src="https://www.google.com/maps/d/thumbnail?mid=149KH2jlrfcK5B8tP-_yn4TZ4iOk&hl=en"
                        />
                      }
                    >
                      <Meta
                        title={e.properties.place}
                        description={e.properties.time}
                      />
                    </Card>
                  </Col>
                </Link>
              );
            })}
            {console.log(Earthquakes)}
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
