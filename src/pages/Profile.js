import React from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import { Input } from "../components/Input";

const Profile = (props) => {
  return (
    <Container pb={3}>
      <Div width={[1, 2 / 3, 3 / 4, 3 / 5]}>
        <P fontSize={"var(--fs-h2)"}>PROFILE</P>
        <Div>
          <P>First Name</P>
          <Input placeholder="First Name" type="text" p={3} />
        </Div>
        <Div>
          <P>Last Name</P>
          <Input placeholder="Last Name" type="text" p={3} />
        </Div>
        <Div>
          <P>Email Id</P>
          <Input placeholder="Email Id" type="text" p={3} />
        </Div>
        <Div>
          <P>Mobile Number</P>
          <Input placeholder="Mobile Number" type="text" p={3} />
        </Div>
        <P fontSize={"var(--fs-h3)"} mt={3}>
          Bank Details
        </P>
        <Div>
          <P>Card Number</P>
          <Input placeholder="Card Number" type="text" p={3} />
        </Div>
        <Div>
          <P>Account Holder Name</P>
          <Input placeholder="Account Holder Name" type="text" p={3} />
        </Div>
        <Div>
          <P>Expiry Date</P>
          <Input placeholder="Expiry Date" type="text" p={3} />
        </Div>
        <ButtonSecondary label="SAVE" mt={3} pl={5} pr={5} />
      </Div>
    </Container>
  );
};

export default Profile;
