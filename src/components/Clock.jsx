import { useEffect, useState } from "react";

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
    <div>
      <h1>{time.toLocaleTimeString("en-US", options)}</h1>
    </div>
  );
}

export default Clock;
