import faker, { Company, Address } from "Faker";
import PerfectScrollbar from "react-perfect-scrollbar";
faker.locale = "en";

const ReactWindow = () => {
  const number = 50;
  const array = new Array(number).fill();

  const generatedList = array.map(() => ({
    name: Company.companyName(),
    street: Address.streetAddress(),
    city: Address.city(),
    country: Address.ukCountry(),
  }));

  const header = ["Company Name", "Street", "City", "Country"];
  const calculating = (arrLength) => {};

  return (
    <table>
      <PerfectScrollbar
        style={{ height: "500px" }}
        onScrollY={(container) => {
          console.log(container.scrollTop);
        }}
      >
        {generatedList.map((item, index) => (
          <tr key={`table-row-${index}`} style={{ height: "50px" }}>
            {Object.values(item).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </PerfectScrollbar>
    </table>
  );
};

export default ReactWindow;
