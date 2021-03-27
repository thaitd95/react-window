import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import styled from "styled-components";

const StyledScroll = styled(PerfectScrollbar)``;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columnsNumber}, 600px)`};
  height: ${(props) => `${props.height}px`};
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
      props.position % 2 === 0 ? "#f1f1f1" : "inherit"};
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columnsNumber}, 600px)`};
  height: 50px;
  position: sticky;
  top: 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 5px 20px -10px #e8e8e8;
  }
`;

const Virtualize = ({ data, viewHeight, itemHeight, columns }) => {
  const totalItemOnView = Math.floor(viewHeight / itemHeight);
  const [renderList, setRenderList] = useState([]);
  const [top, setTop] = useState(0);
  const [startPosition, setStartPosition] = useState(0);

  useEffect(() => {
    const initList = data.filter((item, index) => index < totalItemOnView);
    setRenderList(initList);
  }, [data, totalItemOnView]);

  const calculating = (scrollTop) => {
    const addItem = Math.floor(scrollTop / itemHeight);
    const newList = data.filter(
      (item, index) => index < totalItemOnView + addItem && index > addItem - 1
    );
    setRenderList(newList);
    setTop(scrollTop);
    setStartPosition(addItem);
  };

  const renderValues = (item) =>
    Object.values(item).map((value, index) => (
      <div key={`col-${index}`}>{value}</div>
    ));

  return (
    <StyledScroll
      style={{ height: `${viewHeight}px`, width: "100%" }}
      onScrollY={(container) => {
        calculating(container.scrollTop);
      }}
    >
      <div
        style={{
          height: `${data.length * itemHeight}px`,
          position: "relative",
        }}
      >
        <Header columnsNumber={columns.length}>
          {columns.map((item, index) => (
            <div key={`header-col-${index}`}>{item}</div>
          ))}
        </Header>
        <div
          style={{ position: "absolute", top: `${top + 50}px`, width: "100%" }}
        >
          {renderList.map((item, index) => (
            <Row
              key={`row-${index}`}
              position={startPosition + index}
              height={itemHeight}
              columnsNumber={columns.length}
            >
              {renderValues(item)}
            </Row>
          ))}
        </div>
      </div>
    </StyledScroll>
  );
};

export default Virtualize;
