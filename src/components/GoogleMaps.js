import React, { useEffect } from 'react';

const GoogleMap = ({ apiKey }) => {
  useEffect(() => {
    // Carregar o script da API do Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    document.body.appendChild(script);

    // Inicializar o mapa quando o script for carregado
    script.onload = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -23.5505199, lng: -46.6333094 }, // Exemplo de coordenadas (São Paulo)
        zoom: 15, // Zoom padrão
      });

      // Marcador (opcional)
      new window.google.maps.Marker({
        position: { lat: -23.5505199, lng: -46.6333094 },
        map,
        title: 'Localização',
      });
    };
  }, [apiKey]);

  return <div id="map" style={{ height: '300px', width: '100%' }}></div>;
};

export default GoogleMap;
