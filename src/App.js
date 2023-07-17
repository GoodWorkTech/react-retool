import Retool from "./components/Retool";
import { useState } from "react";

const App = () => {
  const iframeStyle = {
    height: '100.1vh',
    width: '100%',
  };
  const [setRetoolData] = useState("");
  const [data] = useState("");

  return (
    <div>
      <Retool
        url="https://support.retool.com/embedded/public/cb9e15f0-5d7c-43a7-a746-cdec870dde9a"
        data={data}
        onData={setRetoolData}
        styling={iframeStyle}
      ></Retool>
    </div>
  );
};

export default App;
