import type { Context } from "https://edge.netlify.com";
const vehicle=[
  {
    "Make": "Tata",
    "Model": "Nano Genx"
  },
  {
    "Make": "Datsun",
    "Model": "Redi-Go"
  },
  {
    "Make": "Renault",
    "Model": "Kwid"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Eeco"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Alto K10"
  },
  {
    "Make": "Datsun",
    "Model": "Go"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Celerio Tour"
  },
  {
    "Make": "Hyundai",
    "Model": "Santro"
  },
  {
    "Make": "Tata",
    "Model": "Tiago"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Celerio X"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Ignis"
  },
  {
    "Make": "Renault",
    "Model": "Triber"
  },
  {
    "Make": "Premier",
    "Model": "Rio"
  },
  {
    "Make": "Toyota",
    "Model": "Etios Liva"
  },
  {
    "Make": "Nissan",
    "Model": "Micra Active"
  },
  {
    "Make": "Tata",
    "Model": "Bolt"
  },
  {
    "Make": "Hyundai",
    "Model": "Xcent Prime"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Dzire Tour"
  },
  {
    "Make": "Hyundai",
    "Model": "Elite I20"
  },
  {
    "Make": "Hyundai",
    "Model": "Aura"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Dzire"
  },
  {
    "Make": "Ford",
    "Model": "Freestyle"
  },
  {
    "Make": "Volkswagen",
    "Model": "Ameo"
  },
  {
    "Make": "Ford",
    "Model": "Aspire"
  },
  {
    "Make": "Toyota",
    "Model": "Platinum Etios"
  },
  {
    "Make": "Toyota",
    "Model": "Etios Cross"
  },
  {
    "Make": "Mahindra",
    "Model": "Verito Vibe"
  },
  {
    "Make": "Fiat",
    "Model": "Urban Cross"
  },
  {
    "Make": "Toyota",
    "Model": "Glanza"
  },
  {
    "Make": "Fiat",
    "Model": "Avventura"
  },
  {
    "Make": "Honda",
    "Model": "Jazz"
  },
  {
    "Make": "Mahindra",
    "Model": "Bolero Power Plus"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Vitara Brezza"
  },
  {
    "Make": "Hyundai",
    "Model": "I20 Active"
  },
  {
    "Make": "Ford",
    "Model": "Ecosport"
  },
  {
    "Make": "Renault",
    "Model": "Duster"
  },
  {
    "Make": "Hyundai",
    "Model": "Verna"
  },
  {
    "Make": "Mahindra",
    "Model": "Xuv300"
  },
  {
    "Make": "Renault",
    "Model": "Lodgy"
  },
  {
    "Make": "Volkswagen",
    "Model": "Vento"
  },
  {
    "Make": "Mahindra",
    "Model": "E2O Plus"
  },
  {
    "Make": "Tata",
    "Model": "Tigor Ev"
  },
  {
    "Make": "Honda",
    "Model": "Brv"
  },
  {
    "Make": "Mahindra",
    "Model": "Thar"
  },
  {
    "Make": "Force",
    "Model": "Gurkha"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Xl6"
  },
  {
    "Make": "Fiat",
    "Model": "Abarth Avventura"
  },
  {
    "Make": "Mahindra",
    "Model": "Tuv300 Plus"
  },
  {
    "Make": "Mahindra",
    "Model": "Marazzo"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpio"
  },
  {
    "Make": "Skoda",
    "Model": "Monte Carlo"
  },
  {
    "Make": "Mahindra",
    "Model": "Xuv500"
  },
  {
    "Make": "Mahindra",
    "Model": "E Verito"
  },
  {
    "Make": "Tata",
    "Model": "Hexa"
  },
  {
    "Make": "Toyota",
    "Model": "Innova Crysta"
  },
  {
    "Make": "Jeep",
    "Model": "Compass"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla Altis"
  },
  {
    "Make": "Honda",
    "Model": "Civic"
  },
  {
    "Make": "Mg",
    "Model": "Zs Ev"
  },
  {
    "Make": "Kia",
    "Model": "Carnival"
  },
  {
    "Make": "Skoda",
    "Model": "Superb"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Outlander"
  },
  {
    "Make": "Volvo",
    "Model": "V40"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz A-Class"
  },
  {
    "Make": "Toyota",
    "Model": "Fortuner"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Pajero Sport"
  },
  {
    "Make": "Ford",
    "Model": "Endeavour"
  },
  {
    "Make": "Volvo",
    "Model": "V40 Cross Country"
  },
  {
    "Make": "Mini",
    "Model": "Cooper 3 Door"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Gla-Class"
  },
  {
    "Make": "Skoda",
    "Model": "Kodiaq Scout"
  },
  {
    "Make": "Mini",
    "Model": "Countryman"
  },
  {
    "Make": "Bmw",
    "Model": "X1"
  },
  {
    "Make": "Toyota",
    "Model": "Camry"
  },
  {
    "Make": "Volvo",
    "Model": "S60"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz C-Class"
  },
  {
    "Make": "Bmw",
    "Model": "3-Series"
  },
  {
    "Make": "Honda",
    "Model": "Accord Hybrid"
  },
  {
    "Make": "Volvo",
    "Model": "S60 Cross Country"
  },
  {
    "Make": "Toyota",
    "Model": "Prius"
  },
  {
    "Make": "Audi",
    "Model": "Q5"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Glc"
  },
  {
    "Make": "Land Rover Rover",
    "Model": "Range Evoque"
  },
  {
    "Make": "Lexus",
    "Model": "Es"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz E-Class"
  },
  {
    "Make": "Bmw",
    "Model": "5-Series"
  },
  {
    "Make": "Lexus",
    "Model": "Nx 300H"
  },
  {
    "Make": "Audi",
    "Model": "A5"
  },
  {
    "Make": "Jaguar",
    "Model": "F-Pace"
  },
  {
    "Make": "Bmw",
    "Model": "6-Series"
  },
  {
    "Make": "Volvo",
    "Model": "V90 Cross Country"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Montero"
  },
  {
    "Make": "Audi",
    "Model": "A5 Cabriolet"
  },
  {
    "Make": "Porsche",
    "Model": "Macan"
  },
  {
    "Make": "Land Rover Rover",
    "Model": "Range Velar"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Gle"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz E-Class All Terrain"
  },
  {
    "Make": "Land Rover",
    "Model": "Discovery"
  },
  {
    "Make": "Volvo",
    "Model": "Xc90"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Cls"
  },
  {
    "Make": "Land Rover Rover",
    "Model": "Range Sport"
  },
  {
    "Make": "Jaguar",
    "Model": "F-Type"
  },
  {
    "Make": "Jaguar",
    "Model": "Xj"
  },
  {
    "Make": "Bmw",
    "Model": "X7"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne Coupe"
  },
  {
    "Make": "Maserati",
    "Model": "Ghibli"
  },
  {
    "Make": "Bmw",
    "Model": "M4"
  },
  {
    "Make": "Toyota",
    "Model": "Land Cruiser"
  },
  {
    "Make": "Bmw",
    "Model": "M5"
  },
  {
    "Make": "Audi",
    "Model": "Rs7"
  },
  {
    "Make": "Porsche",
    "Model": 911
  },
  {
    "Make": "Land Rover Rover",
    "Model": "Range"
  },
  {
    "Make": "Lexus",
    "Model": "Lc 500H"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Maybach"
  },
  {
    "Make": "Porsche",
    "Model": "Panamera"
  },
  {
    "Make": "Lexus",
    "Model": "Lx 450D"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz S-Class Cabriolet"
  },
  {
    "Make": "Audi",
    "Model": "R8"
  },
  {
    "Make": "Lamborghini",
    "Model": "Urus"
  },
  {
    "Make": "Bentley",
    "Model": "Continental Gt"
  },
  {
    "Make": "Ferrari",
    "Model": "Portofino"
  },
  {
    "Make": "Bentley",
    "Model": "Bentayga"
  },
  {
    "Make": "Aston Martin",
    "Model": "Db 11"
  },
  {
    "Make": "Ferrari",
    "Model": "458 Speciale"
  },
  {
    "Make": "Bentley",
    "Model": "Mulsanne"
  },
  {
    "Make": "Bugatti",
    "Model": "Chiron"
  },
  {
    "Make": "Bajaj",
    "Model": "Qute (Re60)"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Alto"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "S-Presso"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Celerio"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand I10 Prime"
  },
  {
    "Make": "Mahindra",
    "Model": "Kuv100 Nxt"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Swift"
  },
  {
    "Make": "Tata",
    "Model": "Altroz"
  },
  {
    "Make": "Icml",
    "Model": "Extreme"
  },
  {
    "Make": "Tata",
    "Model": "Tigor"
  },
  {
    "Make": "Tata",
    "Model": "Zest"
  },
  {
    "Make": "Honda",
    "Model": "Amaze"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Gypsy"
  },
  {
    "Make": "Hyundai",
    "Model": "Venue"
  },
  {
    "Make": "Tata",
    "Model": "Nexon"
  },
  {
    "Make": "Fiat",
    "Model": "Linea"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Ertiga"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Baleno Rs"
  },
  {
    "Make": "Honda",
    "Model": "Wr-V"
  },
  {
    "Make": "Mahindra",
    "Model": "Tuv300"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "S-Cross"
  },
  {
    "Make": "Renault",
    "Model": "Captur"
  },
  {
    "Make": "Mahindra",
    "Model": "Xylo"
  },
  {
    "Make": "Kia",
    "Model": "Seltos"
  },
  {
    "Make": "Nissan",
    "Model": "Terrano"
  },
  {
    "Make": "Tata",
    "Model": "Safari Storme"
  },
  {
    "Make": "Mg",
    "Model": "Hector"
  },
  {
    "Make": "Tata",
    "Model": "Nexon Ev"
  },
  {
    "Make": "Hyundai",
    "Model": "Elantra"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat"
  },
  {
    "Make": "Isuzu",
    "Model": "Mu-X"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan"
  },
  {
    "Make": "Skoda",
    "Model": "Superb Sportline"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz B-Class"
  },
  {
    "Make": "Skoda",
    "Model": "Kodiaq"
  },
  {
    "Make": "Audi",
    "Model": "Q3"
  },
  {
    "Make": "Mini",
    "Model": "Convertible"
  },
  {
    "Make": "Mini",
    "Model": "Clubman"
  },
  {
    "Make": "Mini",
    "Model": "John Cooper Works"
  },
  {
    "Make": "Jaguar",
    "Model": "Xf"
  },
  {
    "Make": "Audi",
    "Model": "A6"
  },
  {
    "Make": "Land Rover",
    "Model": "Discovery Sport"
  },
  {
    "Make": "Volvo",
    "Model": "Xc60"
  },
  {
    "Make": "Jeep",
    "Model": "Wrangler"
  },
  {
    "Make": "Bmw",
    "Model": "Z4 Roadster"
  },
  {
    "Make": "Audi",
    "Model": "Q7"
  },
  {
    "Make": "Audi",
    "Model": "S5"
  },
  {
    "Make": "Ford",
    "Model": "Mustang"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz E-Class Cabriolet"
  },
  {
    "Make": "Porsche",
    "Model": 718
  },
  {
    "Make": "Toyota",
    "Model": "Land Cruiser Prado"
  },
  {
    "Make": "Audi",
    "Model": "Rs5"
  },
  {
    "Make": "Audi",
    "Model": "Q8"
  },
  {
    "Make": "Maserati",
    "Model": "Levante"
  },
  {
    "Make": "Audi",
    "Model": "A8 L"
  },
  {
    "Make": "Maserati",
    "Model": "Quattroporte"
  },
  {
    "Make": "Maserati",
    "Model": "Grancabrio"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Amg-Gt"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Amg Gt 4-Door Coupe"
  },
  {
    "Make": "Lamborghini",
    "Model": "Huracan"
  },
  {
    "Make": "Ferrari",
    "Model": "488 Gtb"
  },
  {
    "Make": "Ferrari",
    "Model": "Gtc4 Lusso"
  },
  {
    "Make": "Lamborghini",
    "Model": "Aventador"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Omni"
  },
  {
    "Make": "Datsun",
    "Model": "Go+"
  },
  {
    "Make": "Fiat",
    "Model": "Punto Evo Pure"
  },
  {
    "Make": "Ford",
    "Model": "Figo"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Baleno"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand I10"
  },
  {
    "Make": "Fiat",
    "Model": "Linea Classic"
  },
  {
    "Make": "Nissan",
    "Model": "Sunny"
  },
  {
    "Make": "Mahindra",
    "Model": "Bolero"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Ciaz"
  },
  {
    "Make": "Skoda",
    "Model": "Rapid"
  },
  {
    "Make": "Fiat",
    "Model": "Abarth Punto"
  },
  {
    "Make": "Hyundai",
    "Model": "Creta"
  },
  {
    "Make": "Tata",
    "Model": "Harrier"
  },
  {
    "Make": "Isuzu",
    "Model": "Dmax V-Cross"
  },
  {
    "Make": "Jeep",
    "Model": "Compass Trailhawk"
  },
  {
    "Make": "Honda",
    "Model": "Cr-V"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Cla-Class"
  },
  {
    "Make": "Mini",
    "Model": "Cooper 5 Door"
  },
  {
    "Make": "Audi",
    "Model": "A4"
  },
  {
    "Make": "Audi",
    "Model": "A3 Cabriolet"
  },
  {
    "Make": "Volvo",
    "Model": "S90"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz C-Class Cabriolet"
  },
  {
    "Make": "Land Rover Rover",
    "Model": "Range Evoque Convertible"
  },
  {
    "Make": "Jeep",
    "Model": "Grand Cherokee"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz Gls"
  },
  {
    "Make": "Bmw",
    "Model": "7-Series"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz G-Class"
  },
  {
    "Make": "Lexus",
    "Model": "Ls 500H"
  },
  {
    "Make": "Lexus",
    "Model": "Lx 570"
  },
  {
    "Make": "Bentley",
    "Model": "Flying Spur"
  },
  {
    "Make": "Ferrari",
    "Model": "458 Spider"
  },
  {
    "Make": "Maruti Suzuki",
    "Model": "Alto 800 Tour"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand I10 Nios"
  },
  {
    "Make": "Hyundai",
    "Model": "Xcent"
  },
  {
    "Make": "Nissan",
    "Model": "Micra"
  },
  {
    "Make": "Mahindra",
    "Model": "Nuvosport"
  },
  {
    "Make": "Nissan",
    "Model": "Kicks"
  },
  {
    "Make": "Tata",
    "Model": "Winger"
  },
  {
    "Make": "Hyundai",
    "Model": "Kona Electric"
  },
  {
    "Make": "Audi",
    "Model": "A3"
  },
  {
    "Make": "Volvo",
    "Model": "Xc40"
  },
  {
    "Make": "Bmw",
    "Model": "X3"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz V-Class"
  },
  {
    "Make": "Bmw",
    "Model": "M2 Competition"
  },
  {
    "Make": "Mercedes",
    "Model": "Mercedes-Benz S-Class"
  },
  {
    "Make": "Nissan",
    "Model": "Gtr"
  },
  {
    "Make": "Aston Martin",
    "Model": "Rapide"
  },
  {
    "Make": "Maruti Suzuki R",
    "Model": "Wagon"
  },
  {
    "Make": "Tata",
    "Model": "Tiago Nrg"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia"
  },
  {
    "Make": "Dc",
    "Model": "Avanti"
  },
  {
    "Make": "Bmw",
    "Model": "X4"
  },
  {
    "Make": "Lexus",
    "Model": "Rx 450H"
  },
  {
    "Make": "Aston Martin",
    "Model": "Vantage"
  },
  {
    "Make": "Fiat",
    "Model": "Punto Evo"
  },
  {
    "Make": "Honda",
    "Model": "City"
  },
  {
    "Make": "Jaguar",
    "Model": "Xe"
  },
  {
    "Make": "Maserati",
    "Model": "Granturismo"
  },
  {
    "Make": "Mahindra",
    "Model": "Verito"
  },
  {
    "Make": "Bmw",
    "Model": "X5"
  },
  {
    "Make": "Mahindra",
    "Model": "Alturas G4"
  },
  {
    "Make": "Ferrari",
    "Model": "812 Superfast"
  }
]
export default async (request: Request, context: Context) => {
  return context.bike(vehicle);
};
