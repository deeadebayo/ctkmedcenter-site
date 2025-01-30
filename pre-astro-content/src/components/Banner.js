import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { css } from "@emotion/react";
import { getFormattedHealthyDate } from "../utils/formattedDate";

const bannerStyle = css`
  padding-bottom: 100px;

  .banner__contact {
    display: flex;
    flex-flow: row;
    gap: 1.5em;
    justify-content: space-around;
  }
`;

export default function Banner({ date }) {
  return (
    <header css={bannerStyle}>
      <Container>
        <Row className="justify-content-between">
          <Col>
            <p>
              Today is {getFormattedHealthyDate(date)}. It's a great day to be
              healthy!
            </p>
          </Col>
          <Col sm={4} className="banner__contact">
            <span>
              📞<a href="tel:7705548015">770 554 8015</a>
            </span>
            <span>
              <a href="mailto:info@ctkmedcenter.com?subject=General%20Inquiry">
                info@ctkmedcenter.com
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
