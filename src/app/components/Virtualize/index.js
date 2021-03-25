import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import styled from "styled-components";

const StyledScroll = styled(PerfectScrollbar)`

`;

const Virtualize = ({ data, viewHeight, itemHeight }) => {
  const totalItemOnView = Math.floor(viewHeight / itemHeight);
  const [renderList, setRenderList] = useState([]);
  const header = ["Company Name", "Street", "City", "Country"];

  useEffect(() => {
    const initList = data.filter((item, index) => index < totalItemOnView);
    setRenderList(initList);
  }, [data, totalItemOnView]);

  const calculating = (scrollTop) => {
    const addItem = Math.floor(scrollTop / itemHeight);
    const newList = data.filter(
      (item, index) =>
        index < totalItemOnView + addItem && index > addItem - 1
    );
    setRenderList(newList);
  };

  return (
      <StyledScroll
        style={{ height: `${viewHeight}px` }}
        onScrollY={(container) => {
          calculating(container.scrollTop);
        }}
      >
        <div style={{height: `${data.length * itemHeight}px`} }>
          {renderList.map((item, index) => (
            <div key={index} style={{height: `${itemHeight}px`}}>{ item.name}</div>
          ))}
        </div>
      </StyledScroll>
  );
};

export default Virtualize;
