import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  });
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  return (
    <ClockStyledDiv>
      <h1>{time.toLocaleTimeString("en-US", options)}</h1>
    </ClockStyledDiv>
  );
}

export default Clock;

const ClockStyledDiv = styled.div`
  position: absolute;
  color: #fff;
  font-size: 120px;
  font-weight: 700;
  text-shadow: 2px 2px 3px #000;
  right: -50%;
  left: -50%;
  top: 35%;
`;
