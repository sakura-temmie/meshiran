// // import styled from "styled-components";
// // import { Color } from "./brand";
// // import logo from "./logo.svg";
// import GoogleMapReact, { MapOptions, Maps } from "google-map-react";

// const App = () => {
//   const pins = [
//     {
//       lat: 43.0543412,
//       lng: 141.355018,
//       name: "お姉さんレーベル",
//     },
//     {
//       lat: 43.0543451,
//       lng: 141.3528293,
//       name: "姉キャバ ジャックローズ",
//     },
//   ];
//   const createMapOptions = (maps) => {
//     return {
//       mapTypeControlOptions: {
//         position: maps.ControlPosition.TOP_RIGHT,
//       },
//       mapTypeControl: false,
//       zoomControl: false,
//       scaleControl: false,
//       streetViewControl: false,
//       fullscreenControl: false,
//       styles: [
//         {
//           featureType: "water",
//           elementType: "geometry",
//           stylers: [
//             {
//               color: "#e9e9e9",
//             },
//             {
//               lightness: 17,
//             },
//           ],
//         },
//         {
//           featureType: "landscape",
//           elementType: "geometry",
//           stylers: [
//             {
//               color: "#f5f5f5",
//             },
//             {
//               lightness: 20,
//             },
//           ],
//         },
//         {
//           featureType: "road.highway",
//           elementType: "geometry.fill",
//           stylers: [
//             {
//               color: "#ffffff",
//             },
//             {
//               lightness: 17,
//             },
//           ],
//         },
//         {
//           featureType: "road.highway",
//           elementType: "geometry.stroke",
//           stylers: [
//             {
//               color: "#ffffff",
//             },
//             {
//               lightness: 29,
//             },
//             {
//               weight: 0.2,
//             },
//           ],
//         },
//         {
//           featureType: "road.arterial",
//           elementType: "geometry",
//           stylers: [
//             {
//               color: "#ffffff",
//             },
//             {
//               lightness: 18,
//             },
//           ],
//         },
//         {
//           featureType: "road.local",
//           elementType: "geometry",
//           stylers: [
//             {
//               color: "#ffffff",
//             },
//             {
//               lightness: 16,
//             },
//           ],
//         },
//         {
//           featureType: "poi",
//           elementType: "geometry",
//           stylers: [
//             {
//               color: "#f5f5f5",
//             },
//             {
//               lightness: 21,
//             },
//           ],
//         },
//         {
//           featureType: "poi.park",
//           elementType: "geometry",
//           stylers: [
//             {
//               color: "#dedede",
//             },
//             {
//               lightness: 21,
//             },
//           ],
//         },
//         {
//           elementType: "labels.text.stroke",
//           stylers: [
//             {
//               visibility: "on",
//             },
//             {
//               color: "#ffffff",
//             },
//             {
//               lightness: 16,
//             },
//           ],
//         },
//         {
//           elementType: "labels.text.fill",
//           stylers: [
//             {
//               saturation: 36,
//             },
//             {
//               color: "#333333",
//             },
//             {
//               lightness: 40,
//             },
//           ],
//         },
//         {
//           elementType: "labels.icon",
//           stylers: [
//             {
//               visibility: "off",
//             },
//           ],
//         },
//         {
//           featureType: "transit",
//           elementType: "geometry",
//           stylers: [
//             {
//               color: "#f2f2f2",
//             },
//             {
//               lightness: 19,
//             },
//           ],
//         },
//         {
//           featureType: "administrative",
//           elementType: "geometry.fill",
//           stylers: [
//             {
//               color: "#fefefe",
//             },
//             {
//               lightness: 20,
//             },
//           ],
//         },
//         {
//           featureType: "administrative",
//           elementType: "geometry.stroke",
//           stylers: [
//             {
//               color: "#fefefe",
//             },
//             {
//               lightness: 17,
//             },
//             {
//               weight: 1.2,
//             },
//           ],
//         },
//       ],
//     };
//   };
//   return (
//     <Wrapper>
//       <Header>
//         <Logo src={logo} />
//         <H1>Welcome to React</H1>
//       </Header>
//       <GoogleMapWrapper>
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             key: "",
//           }}
//           defaultCenter={{
//             lat: 43.0543451,
//             lng: 141.3528293,
//           }}
//           defaultZoom={15}
//           options={createMapOptions}
//         >
//           {/* {pins.map(pin => (
//             <Pin lat={pin.lat} lng={pin.lng}>
//               {pin.name}
//             </Pin>
//           ))} */}
//         </GoogleMapReact>
//       </GoogleMapWrapper>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   text-align: center;
// `;
// const Header = styled.header`
//   background-color: ${Color.Primary};
//   height: 150px;
//   padding: 20px;
//   color: white;
// `;
// const Logo = styled.img`
//   animation: App-logo-spin infinite 20s linear;
//   height: 80px;
//   @keyframes App-logo-spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
// const H1 = styled.h1`
//   font-size: 1.5em;
// `;
// const Pin =
//   styled.div <
//   {
//     lat: number,
//     lng: number,
//   } >
//   `
// `;

// const GoogleMapWrapper = styled.div`
//   height: 100vh;
//   width: 100%;
// `;

// export default App;
