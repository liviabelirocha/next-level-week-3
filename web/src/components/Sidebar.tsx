import React from "react";
import { useHistory } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";
import { FiArrowLeft } from "react-icons/fi";

import "../styles/components/sidebar.css";

function Sidebar() {
  const { goBack } = useHistory();

  return (
    <div id="aside">
      <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    </div>
  );
}

export default Sidebar;
