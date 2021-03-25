import { useState, useRef, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import styled from "styled-components";

const StyledScroll = styled(PerfectScrollbar)`
  .ps__thumb-y {
    height: 100px !important;
  }
`;

const Virtualize = ({ data, viewHeight, itemHeight }) => {
  const scrollRef = useRef(null);
  const totalItemOnView = Math.floor(viewHeight / itemHeight);
  const [renderList, setRenderList] = useState([]);
  const header = ["Company Name", "Street", "City", "Country"];
  const ps = new PerfectScrollbar(scrollRef);

  useEffect(() => {
    if (scrollRef) {
      console.log(scrollRef);
    }
  }, [scrollRef]);

  useEffect(() => {
    const initList = data.filter((item, index) => index < totalItemOnView + 2);
    setRenderList(initList);
  }, [data]);

  const calculating = (scrollTop) => {
    console.log(scrollRef);
    const addItem = Math.floor(scrollTop / itemHeight);
    const newList = data.filter(
      (item, index) =>
        index < totalItemOnView + addItem + 2 && index > addItem - 1
    );
    setRenderList(newList);
  };

  return (
    <table>
      <StyledScroll
        style={{ height: `${viewHeight}px` }}
        onScrollY={(container) => {
          calculating(container.scrollTop);
        }}
        ref={scrollRef}
      >
        {renderList.map((item, index) => (
          <tr key={`table-row-${index}`} style={{ height: `${itemHeight}px` }}>
            {Object.values(item).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </StyledScroll>
    </table>
  );
};

export default Virtualize;
