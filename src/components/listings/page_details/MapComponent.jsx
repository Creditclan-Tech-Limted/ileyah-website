'use-client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'


const customMarker = new L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconColor:'red',
})

const MapComponent = () => {
  const position = [51.505, -0.09] // Default map coordinates

   

  return (
    <div className='w-full h-96'>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customMarker}>
          <Popup>
            <div>
              <h3>Popup Title</h3>
              <p>Popup content goes here.</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapComponent
