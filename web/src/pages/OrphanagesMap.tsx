import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import api from "../services/api";
import { OrphanageInterface } from "../interfaces/Orphanage";

import mapMarkerImg from "../images/map-marker.svg";

import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<OrphanageInterface[]>([]);

  useEffect(() => {
    api.get("orphanages").then((res) => {
      setOrphanages(res.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="logo" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>

      <Map
        center={[-3.7899266, -38.5889868]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
}

export default OrphanagesMap;
