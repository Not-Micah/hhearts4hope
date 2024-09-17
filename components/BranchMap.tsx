"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { DocumentData } from 'firebase/firestore';

const containerStyle = {
    width: '100%',
    height: '100%'
  };

interface BranchMapProps {
    branches: DocumentData[] | null;
}

const BranchMap: React.FC<BranchMapProps> = ({ branches }) => {
    const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDmKrYRHIl-efX8ZoEMgSIJM6jjaQD_-2c"
    });

    if (isLoaded) {
        return (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{lat: 51.509865, lng: -0.118092}}
                zoom={2} 
            >
                {branches?.map((branch, index) => (
                <MarkerF key={index} position={{lat: branch.lat, lng: branch.lng}} />
                ))}
          </GoogleMap>
          )
    }
}

export default BranchMap