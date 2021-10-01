import { Div } from "../Div";
import {
  CardFooter,
} from "../Card";
import { Menubar } from "../Header/style";
import { ALL_RIGHTS_RESERVED, COPYRIGHT_TEXT } from "../../utils/Constants";

const Footer = () => {
  const items = [
    {
      label: "Contact US",
    },
    {
      label: "Terms Of Use",
    },
    {
      label: "Privacy Policy",
    },
  ];

  return (
    <Div>
      <Div>
        <Menubar minHeight={"8vh"} model={items} />
      </Div>
      <CardFooter minHeight={"4vh"} pl={4} pr={4}>
        <Div>{COPYRIGHT_TEXT}</Div>
        <Div>{ALL_RIGHTS_RESERVED}</Div>
      </CardFooter>
    </Div>
  );
};

export default Footer