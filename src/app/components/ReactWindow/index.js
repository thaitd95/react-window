import { useMemo } from 'react';
import faker, {
  Company,
  Address,
  Internet,
  PhoneNumber,
  Lorem,
  Name,
  Image,
} from "Faker";
import Virtualize from "../Virtualize";
faker.locale = "en";

const ReactWindow = ({ record, height }) => {
  const data = useMemo(() => new Array(Number(record)).fill().map(() => ({
    name: Company.companyName(),
    bussiness: Company.bs(),
    founder: Name.findName(),
    manager: Name.findName(),
    street: Address.streetAddress(),
    city: Address.city(),
    country: Address.ukCountry(),
    zipCode: Address.zipCode(),
    email: Internet.email(),
    phone: PhoneNumber.phoneNumber(),
    secondPhone: PhoneNumber.phoneNumber(),
    website: Internet.domainName(),
    slogen: Lorem.words(),
    description: Lorem.sentence(),
    image: Image.avatar(),
  })), [record]);

  const columns = [
    "Company Name",
    "Bussiness",
    "Founder",
    "Manager",
    "Street",
    "City",
    "Country",
    "Zip Code",
    "Email",
    "Phone",
    "Second Phone",
    "Website",
    "Slogen",
    "Description",
    "Avatar",
  ];

  return (
    <Virtualize
      data={data}
      columns={columns}
      viewHeight={height}
      itemHeight={50}
    />
  );
};

export default ReactWindow;
