import Geocode from "react-geocode";
import * as _ from "lodash";

Geocode.setApiKey("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
Geocode.setLanguage("vi");
Geocode.setRegion("vi");
Geocode.setLocationType("ROOFTOP");

export const getLatitudeLongitude = async (address) => {
  const response = await Geocode.fromAddress(address);
  console.log(_.pick(response.results[0].geometry.location, ["lat", "lng"]));
  return _.pick(response.results[0].geometry.location, ["lat", "lng"]);
};
