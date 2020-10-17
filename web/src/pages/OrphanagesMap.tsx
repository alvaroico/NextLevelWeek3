import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../images/map-marker.svg'
import 'leaflet/dist/leaflet.css'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

function OrphanageMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no Mapa</h2>
          <p>{"Muitas crianças estão esperando a sua visita :)"}</p>
        </header>

        <footer>
          <strong>Ribeirão Preto</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map center={[-21.1572213, -47.7341727]} zoom={15} style={{ width: '100%', height: "100%" }}>
        {/* <TileLayer url={`${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={mapIcon} position={[-21.1572213, -47.7341727]} >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>
      <Link to="/orphanages/create" className="create-orphanage" >
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanageMap