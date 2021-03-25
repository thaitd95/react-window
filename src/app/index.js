import { useMemo } from "react";
import faker, { Company, Address } from "Faker";
import Virtualize from "./components/Virtualize";
faker.locale = "en";

const ReactWindow = () => {
  const number = 50;
  const array = new Array(number).fill();
  const generatedList = () =>
    array.map(() => ({
      name: Company.companyName(),
      street: Address.streetAddress(),
      city: Address.city(),
      country: Address.ukCountry(),
    }));

  return <Virtualize data={generatedList()} viewHeight={500} itemHeight={50} />;
};

export default ReactWindow;
