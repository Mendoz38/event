import axios from 'axios'

export async function reverseGeocode(lat, lng) {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
    )
    return response.data.address.city + ' - ' + response.data.address.country
  } catch (error) {
    console.error("Erreur lors de la récupération de l'adresse :", error)
    throw error
  }
}
