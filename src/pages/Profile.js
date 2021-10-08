import React, { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Div } from "../components/Div";
import { P } from "../components/Paragraph";
import { ButtonSecondary } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";

const Profile = (props) => {

  const [userData, setuserData] = useState({});
  useEffect(() => {
    axios.get('/api/profile/myprofile')
    .then((res)=>{
      setuserData(res.data.user)
    })
    .catch((err)=>console.log('passbook err',err))
  }, []);
  
  const {first_name,last_name,email}=userData
  
  return (
    <Container pb={3}>
      <Div width={[1, 2 / 3, 3 / 4, 3 / 5]}>
        <P fontSize={"var(--fs-h2)"}>PROFILE</P>
        <Div>
          <P>First Name</P>
          <Input placeholder="First Name" disabled={true} type="text" value={first_name}  p={3} />
        </Div>
        <Div>
          <P>Last Name</P>
          <Input placeholder="Last Name"  disabled={true}  type="text" value={last_name} p={3} />
        </Div>
        <Div>
          <P>Email Id</P>
          <Input placeholder="Email Id" disabled={true}  type="text" value={email} p={3} />
        </Div>
        <Div>
          <P>Mobile Number</P>
          <Input placeholder="Mobile Number"  disabled={true} type="text" p={3} />
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
