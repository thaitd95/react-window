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

const ReactWindow = () => {
  const number = 10000;
  const array = new Array(number).fill();

  const generatedList = () =>
    array.map(() => ({
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
    }));

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
      data={generatedList()}
      columns={columns}
      viewHeight={500}
      itemHeight={50}
    />
  );
};

export default ReactWindow;
