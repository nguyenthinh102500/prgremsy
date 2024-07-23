import { Routes, Route } from "react-router-dom";
import Base from "./components/Base/Base";
import SYSTEMS from "./pages/System/Systems";
import MEDIAFILES from "./pages/MediaFiles/MediaFiles";
import RemoteChanels from "./pages/RemoteChanels/RemoteChanels";
import CUSTOMEMODELS from "./pages/CustomModel/CustomModel";
import OTAUPDATES from "./pages/OtaUpdate/OtaUpdate";
import IradioMetric from "./pages/IrRadiometric/IrRadiometric";
import HomePage from "./pages/HomePage/HomePage";

import Temp from "./pages/Temp/Temp";

function App() {
  return (
    <Routes>
      <Route path="/temp" element={<Base childrend={<Temp />}></Base>} />

      <Route path="/" element={<HomePage />} />

      <Route path="/SYSTEMS" element={<Base childrend={<SYSTEMS />}></Base>} />
      <Route
        path="/MEDIA-FILES"
        element={<Base childrend={<MEDIAFILES />}></Base>}
      />
      <Route
        path="/REMOTE-CHANNELS"
        element={<Base childrend={<RemoteChanels />}></Base>}
      />
      <Route
        path="/IR-RADIOMETRIC"
        element={<Base childrend={<IradioMetric />}></Base>}
      />
      <Route
        path="/CUSTOM-MODELS"
        element={<Base childrend={<CUSTOMEMODELS />}></Base>}
      />
      <Route
        path="/OTA-UPDATES"
        element={<Base childrend={<OTAUPDATES />}></Base>}
      />
    </Routes>
  );
}

export default App;
