import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyDNpzr1hqqE-6KxpOO2PM9MKWeLhky-418';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then(response => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      console.log('Coordinates:', coordinates);
    })
    .catch(err => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);