import React from "react";
import Map, { Marker } from "react-map-gl";

const MAPBOX_TOKEN = "pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ";

const MapView = ({ location }) => {
  return (
    <div className="w-full h-64 rounded-lg">
      <Map
        initialViewState={{
          longitude: location.lng,
          latitude: location.lat,
          zoom: 12,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={location.lng} latitude={location.lat} color="red" />
      </Map>
    </div>
  );
};

export default MapView;