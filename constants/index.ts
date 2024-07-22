export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Devi Shetty",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Aruna Krishnan",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Leela Narayan",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Ashok Grover",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Shaun Murphy",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Gaurav Reddy",
  },
  
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana D'souza",
  },
  
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};