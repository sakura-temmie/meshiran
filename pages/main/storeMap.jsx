import Layout from "../../components/layoutParts/Layout";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Image from "next/image";
import i_02 from "../../public/02.jpg";
import i_03 from "../../public/03.jpeg";
import i_04 from "../../public/04.jpg";

const containerStyle = {
  height: "300px",
  width: "100%",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const MyComponent = () => {
  return (
    <Layout title="お店ページ">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_RESTAPI_URL}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        ></GoogleMap>
      </LoadScript>
      <div className="flex ">
        <Image src={i_02} alt="" className="w-1/3 object-cover object-center" />
        <Image src={i_03} alt="" className="w-1/3 object-cover object-center" />
        <Image src={i_04} alt="" className="w-1/3 object-cover object-center" />
      </div>
      <div className="flex w-full">
        <Image src={i_02} alt="" className="w-1/3 object-cover object-center" />
        <Image src={i_03} alt="" className="w-1/3 object-cover object-center" />
        <Image src={i_04} alt="" className="w-1/3 object-cover object-center" />
      </div>
      <div className="flex w-full">
        <Image src={i_02} alt="" className="w-1/3 object-cover object-center" />
        <Image src={i_03} alt="" className="w-1/3 object-cover object-center" />
        <Image src={i_04} alt="" className="w-1/3 object-cover object-center" />
      </div>
      <div className="rounded-t-lg shadow-inner m-2">
        <div className="flex justify-between p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default MyComponent;
