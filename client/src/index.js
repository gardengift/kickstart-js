import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOkUd4q75CclzHjwckh_XYGKwSMTaeIJM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16} defaultCenter={{ lat: 45.512794, lng: -122.679565 }}>
    {props.isMarkerShown && (
      <Fragment>
        <Marker position={{ lat: 45.512794, lng: -122.679565 }} />
        <Marker position={{ lat: 45.512044, lng: -122.683526 }} />
        <Marker position={{ lat: 45.512052, lng: -122.680916 }} />
    </Fragment>
  )}

  </GoogleMap>

));

ReactDOM.render(
  <MyMapComponent isMarkerShown />,
  document.getElementById("root")
);
