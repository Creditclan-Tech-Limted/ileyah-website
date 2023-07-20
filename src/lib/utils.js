export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(+value)
};

export const parseJsonString = value => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
}
export function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function capitalizeFirstLetter(string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const sectors = [
  { value: "61", text: "Agriculture" },
  { value: "11", text: "Banking" },
  { value: "29", text: "Business Owner / Enterprenuer" },
  { value: "31", text: "Civil Servant" },
  { value: "43", text: "Construction" },
  { value: "48", text: "Education" },
  { value: "65", text: "Energy" },
  { value: "59", text: "Financial Services" },
  { value: "60", text: "FMCG" },
  { value: "46", text: "Franchising" },
  { value: "44", text: "Gambling" },
  { value: "69", text: "General Commerce" },
  { value: "12", text: "Government" },
  { value: "52", text: "Healthcare" },
  { value: "50", text: "Hospitality / Tourism" },
  { value: "14", text: "Information Technology" },
  { value: "58", text: "Insurance" },
  { value: "30", text: "Legal Services" },
  { value: "51", text: "Mass Media" },
  { value: "64", text: "Mining & Quarying" },
  { value: "71", text: "Non Governmental Organization(NGOs)" },
  { value: "35", text: "Others" },
  { value: "49", text: "Pharmaceuticals" },
  { value: "34", text: "Principal / Head Teacher" },
  { value: "32", text: "Public Servant" },
  { value: "68", text: "Public Utilities" },
  { value: "47", text: "Real Estate" },
  { value: "70", text: "Religious Organization" },
  { value: "45", text: "Retail Sales" },
  { value: "33", text: "Teacher" },
  { value: "13", text: "Telecommunications" },
  { value: "63", text: "Tourism" },
  { value: "62", text: "Transport & Logistics" },
  { value: "55", text: "Waste Disposal" }
];

export const staff_strength = [
  { value: '1 - 5', text: '1 - 5' },
  { value: '5-10', text: '5-10' },
  { value: '10-25', text: '10-25' },
  { value: '25-50', text: '25-50' },
  { value: '50-100', text: '50 - 100' }
]

export const lgas = [
  { text: 'Agege', value: 'Agege' },
  { text: 'Ajeromi-Ifelodun', value: 'Ajeromi-Ifelodun' },
  { text: 'Alimosho', value: 'Alimosho' },
  { text: 'Amuwo-Odofin', value: 'Amuwo-Odofin' },
  { text: 'Apapa', value: 'Apapa' },
  { text: 'Badagry', value: 'Badagry' },
  { text: 'Epe', value: 'Epe' },
  { text: 'Eti-Osa', value: 'Eti-Osa' },
  { text: 'Ibeju-Lekki', value: 'Ibeju-Lekki' },
  { text: 'Ifako-Ijaiye', value: 'Ifako-Ijaiye' },
  { text: 'Ikeja', value: 'Ikeja' },
  { text: 'Ikorodu', value: 'Ikorodu' },
  { text: 'Kosofe', value: 'Kosofe' },
  { text: 'Lagos Island', value: 'Lagos Island' },
  { text: 'Lagos Mainland', value: 'Lagos Mainland' },
  { text: 'Mushin', value: 'Mushin' },
  { text: 'Ojo', value: 'Ojo' },
  { text: 'Oshodi-Isolo', value: 'Oshodi-Isolo' },
  { text: 'Shomolu', value: 'Shomolu' },
  { text: 'Surulere', value: 'Surulere' }
];

export const areas = [
  { text: 'Ajah', value: 'Ajah' },
  { text: 'Ikorodu Road', value: 'Ikorodu Road' },
  { text: 'Ikeja', value: 'Ikeja' },
  { text: 'Victoria Island', value: 'Victoria Island' },
  { text: 'Lekki', value: 'Lekki' },
  { text: 'Yaba', value: 'Yaba' },
  { text: 'Surulere', value: 'Surulere' },
  { text: 'Ikoyi', value: 'Ikoyi' },
  { text: 'Oshodi', value: 'Oshodi' },
  { text: 'Ikorodu', value: 'Ikorodu' },
  { text: 'Apapa', value: 'Apapa' },
  { text: 'Mushin', value: 'Mushin' },
  { text: 'Berger', value: 'Berger' },
  { text: 'Maryland', value: 'Maryland' },
  { text: 'Ojota', value: 'Ojota' },
  { text: 'Alausa', value: 'Alausa' },
  { text: 'Ogba', value: 'Ogba' },
  { text: 'Idimu', value: 'Idimu' },
  { text: 'Egbeda', value: 'Egbeda' },
  { text: 'Isolo', value: 'Isolo' }
];