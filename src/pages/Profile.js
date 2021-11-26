import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { Input } from "../components/Input";
import request from "../utils/interceptor";
import { ButtonSecondary } from "../components/Button";
import { LogError } from "../utils/SentryUtils";

const Profile = () => {
  const [userData, setuserData] = useState({});

  /**
   * @description - componentDidmount executes api call to fetch profile info
   * @returns {void}
   */
  useEffect(() => {
    request
      .get("/api/profile/myprofile")
      .then((res) => {
        setuserData(res.data.user);
      })
      .catch((err) => LogError(err));
  }, []);

  const {
    first_name,
    last_name,
    email,
    mobile_number,
    account_name,
    expiry_date,
    card_number,
  } = userData;

  return (
    <Container pb={3}>
      <Div width={[1, 2 / 3, 3 / 4, 3 / 5]}>
        <P fontSize={"var(--fs-h2)"}>PROFILE</P>
        <Div>
          <P>First Name</P>
          <Input
            placeholder="First Name"
            disabled={true}
            type="text"
            value={first_name ? first_name : ""}
            p={3}
          />
        </Div>
        <Div>
          <P>Last Name</P>
          <Input
            placeholder="Last Name"
            disabled={true}
            type="text"
            value={last_name ? last_name : ""}
            p={3}
          />
        </Div>
        <Div>
          <P>Email Id</P>
          <Input
            placeholder="Email Id"
            disabled={true}
            type="text"
            value={email ? email : ""}
            p={3}
          />
        </Div>
        <Div>
          <P>Mobile Number</P>
          <Input
            placeholder="Mobile Number"
            disabled={true}
            value={mobile_number ? mobile_number : ""}
            type="text"
            p={3}
          />
        </Div>
        <P fontSize={"var(--fs-h3)"} mt={3}>
          Bank Details
        </P>
        <Div>
          <P>Card Number</P>
          <Input
            placeholder="Card Number"
            disabled={true}
            value={card_number}
            type="text"
            p={3}
          />
        </Div>
        <Div>
          <P>Account Holder Name</P>
          <Input
            placeholder="Account Holder Name"
            disabled={true}
            value={account_name}
            type="text"
            p={3}
          />
        </Div>
        <Div>
          <P>Expiry Date</P>
          <Input
            placeholder="Expiry Date"
            disabled={true}
            value={expiry_date}
            type="text"
            p={3}
          />
        </Div>
        <ButtonSecondary
          label="SAVE"
          mt={3}
          pl={5}
          pr={5}
          tooltip={"This functionality is currently disabled"}
        />
      </Div>
    </Container>
  );
};

export default Profile;
