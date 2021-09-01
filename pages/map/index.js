import { GoogleMap, LoadScript, InfoWindow } from "@react-google-maps/api";
import Image from "next/image";
import pngn from "../../public/pngn.jpg";

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const positionAkiba = {
  lat: 35.69731,
  lng: 139.7747,
};

const positionIwamotocho = {
  lat: 35.69397,
  lng: 139.7762,
};

const divStyle = {
  width: 50,
  borderRadius: 50,
};

const MyComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_RESTAPI_URL}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <InfoWindow position={positionAkiba}>
          <div style={divStyle}>
            <a href="https://tabelog.com/">
              <Image src={pngn} alt="pngn" />
            </a>
          </div>
        </InfoWindow>
        <InfoWindow position={positionIwamotocho}>
          <div style={divStyle}>
            <Image src={pngn} alt="pngn" />
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
};

export default MyComponent;
