'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.MAPBOX_TOKEN || "pk.eyJ1IjoibHVjYXNtbzA2NiIsImEiOiJjbHdxdGlibjAwMWl2Mmlwajdqa2g1ZzRrIn0.fCwjgiDott4ZXETd1LmKPw";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-84.47276, 34.08700], // Updated coordinates
        zoom: 16
      });

      new mapboxgl.Marker()
        .setLngLat([-84.47276, 34.08700])
        .addTo(map);

      return () => map.remove();
    }
  }, []);

  return <div ref={mapContainer} className="w-full h-full border rounded-3xl" />;
};

export default Map;
