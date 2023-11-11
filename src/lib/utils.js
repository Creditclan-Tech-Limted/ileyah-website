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

export function formatToNaira(number) {
  const formattedNumber = number.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });
  return formattedNumber;
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

export const banks = [
  {
    id: '14',
    value: '044',
    text: 'Access Bank Nigeria Plc'
  },
  {
    id: '16',
    value: '063',
    text: 'Access Bank(Diamond)'
  },
  {
    id: '15',
    value: '014',
    text: 'Afribank Nigeria Plc'
  },
  {
    id: '13',
    value: '401',
    text: 'Aso Savings and Loans Ltd'
  },
  {
    id: '38',
    value: '317\r\n',
    text: 'Cellulant'
  },
  {
    id: '58',
    value: '50823',
    text: 'CEMCS Microfinance Bank'
  },
  {
    id: '37',
    value: '303',
    text: 'Chams Mobile'
  },
  {
    id: '32',
    value: '023',
    text: 'Citibank Nigeria'
  },
  {
    id: '36',
    value: '302',
    text: 'Eartholeum'
  },
  {
    id: '17',
    value: '050',
    text: 'Ecobank Nigeria Plc'
  },
  {
    id: '54',
    value: '562',
    text: 'Ekondo Microfinance Bank'
  },
  {
    id: '18',
    value: '084',
    text: 'Enterprise Bank Plc'
  },
  {
    id: '19',
    value: '070',
    text: 'Fidelity Bank Plc'
  },
  {
    id: '8',
    value: '309',
    text: 'First Bank Nigeria Mobile'
  },
  {
    id: '20',
    value: '011',
    text: 'First Bank Of Nigeria Plc'
  },
  {
    id: '1',
    value: '214',
    text: 'First City Monument Bank Plc'
  },
  {
    id: '53',
    value: '00103',
    text: 'Globus Bank'
  },
  {
    id: '21',
    value: '058',
    text: 'Guaranty Trust Bank Plc'
  },
  {
    id: '52',
    value: '50383',
    text: 'Hasal Microfinance Bank'
  },
  {
    id: '22',
    value: '030',
    text: 'Heritage Bank'
  },
  {
    id: '30',
    value: '301',
    text: 'Jaiz Bank Plc'
  },
  {
    id: '23',
    value: '082',
    text: 'Keystone Bank Plc'
  },
  {
    id: '49',
    value: '50211',
    text: 'Kuda Bank'
  },
  {
    id: '33',
    value: '014',
    text: 'MainStreet Bank'
  },
  {
    id: '48',
    value: '565',
    text: 'One Finance'
  },
  {
    id: '47',
    value: '526',
    text: 'Parallex Bank'
  },
  {
    id: '39',
    value: '526',
    text: 'Parallex Microfinance Bank'
  },
  {
    id: '9',
    value: '311',
    text: 'Parkway'
  },
  {
    id: '6',
    value: '305',
    text: 'Paycom'
  },
  {
    id: '46',
    value: '076',
    text: 'Polaris Bank'
  },
  {
    id: '31',
    value: '101',
    text: 'Providus Bank'
  },
  {
    id: '45',
    value: '125',
    text: 'Rubies MFB'
  },
  {
    id: '24',
    value: '076',
    text: 'Skye Bank Plc'
  },
  {
    id: '44',
    value: '51310',
    text: 'Sparkle Microfinance Bank'
  },
  {
    id: '3',
    value: '221',
    text: 'Stanbic - Ibtc Bank Plc'
  },
  {
    id: '25',
    value: '068',
    text: 'Standard Chartered Bank'
  },
  {
    id: '4',
    value: '232',
    text: 'Sterling Bank Plc'
  },
  {
    id: '34',
    value: '100',
    text: 'Suntrust Bank Nigeria'
  },
  {
    id: '43',
    value: '302',
    text: 'TAJ Bank'
  },
  {
    id: '42',
    value: '51211',
    text: 'TCF MFB'
  },
  {
    id: '41',
    value: '102',
    text: 'Titan Bank'
  },
  {
    id: '26',
    value: '032',
    text: 'Union Bank Of Nigeria Plc'
  },
  {
    id: '2',
    value: '032',
    text: 'Union Bank Plc'
  },
  {
    id: '27',
    value: '033',
    text: 'United Bank for africa Plc'
  },
  {
    id: '35',
    value: '215',
    text: 'Unity Bank Plc'
  },
  {
    id: '40',
    value: '566',
    text: 'VFD'
  },
  {
    id: '28',
    value: '035',
    text: 'Wema Bank Plc'
  },
  {
    id: '11',
    value: '322',
    text: 'Zenith Bank Mobile'
  },
  {
    id: '29',
    value: '057',
    text: 'Zenith Bank Plc'
  },
  {
    id: '688',
    value: '50515',
    text: 'Moniepoint MFB'
  },
  {
    id: '100004',
    value: '100004',
    text: 'Opay'
  },
].sort((a, b) => {
  if (a.text < b.text) return -1;
  if (a.text > b.text) return 1;
  return 0;
});