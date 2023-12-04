import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// import ReactApexChart from "react-apexcharts";






export const COLUMNS_USERS = [
  {
    Header: "Id Utilisateur",
    accessor: "id",
    className: "text-center ",
  },
  {
    Header: "Nom",
    accessor: "name",
    className: "text-center ",
  },
  {
    Header: "email",
    accessor: "email",
    className: "text-center ",
  },
  {
    Header: "Téléphone",
    accessor: "phoneNumber",
    className: "text-center ",
  },
  {
    Header: "adresse",
    accessor: "address",
    className: "text-center ",
  },
];


export const USERS = [
    {
        "id": 1,
        "email": "BerryN@lunnovel.org",
        "phoneNumber": "+243811819504",
        "address": "221, ave des usines",
        "name": "Berry Numbi"
    },
    {
        "id": 2,
        "email": "congogrow2022@gmail.com",
        "phoneNumber": "",
        "address": "",
        "name": "Bondoko"
    },
    {
        "id": 3,
        "email": "virungainter.center@gmail.com",
        "phoneNumber": "+243894193590/+243811959874",
        "address": "avenue biayi prolongée référence marché moïse /commune de Lubumbashi /ville de Lubumbashi",
        "name": "Virunga international center"
    },
    {
        "id": 4,
        "email": "lydiaskvegas.1@gmail.com",
        "phoneNumber": "0821512898",
        "address": "",
        "name": "Lydia Saku"
    },
    {
        "id": 5,
        "email": "rodriguezm@cinolu.org",
        "phoneNumber": "+243990740951",
        "address": "Lido golf",
        "name": "Rodriguez MONGA "
    },
    {
        "id": 6,
        "email": "robertminga00@gmail.com",
        "phoneNumber": "+243821713608",
        "address": "Ngaliema, Q: P, numéro 65/90",
        "name": "Robert Minga Mbengele "
    },
    {
        "id": 7,
        "email": "dhisseinngolo10@gmail.com",
        "phoneNumber": "0812491844",
        "address": "Kalamu, Frontière 71, Kinshasa ",
        "name": "DHISSEIN NGOLO"
    },
    {
        "id": 8,
        "email": "sosthenenzalampangi47@gmail.com",
        "phoneNumber": "+243819403089",
        "address": "sosthenenzalampangi47@gmail.com",
        "name": "Nzalampangi "
    },
    {
        "id": 9,
        "email": "ennoctyty@gmail.com",
        "phoneNumber": "+243998868063",
        "address": "Q. MAJENGO, Avenue MAPENDO",
        "name": "Innocent MWENDO TUYISENGE"
    },
    {
        "id": 10,
        "email": "olimuf@gmail.com",
        "phoneNumber": "+243976306828",
        "address": "8c matondo, kingu, selembao",
        "name": "Olivier BAMPENDI MUFUTA"
    },
    {
        "id": 11,
        "email": "eurlishecheengulu@gmail.com",
        "phoneNumber": "+243995405590",
        "address": "Goma",
        "name": "Eurlish"
    },
    {
        "id": 12,
        "email": "harveylukau097@gmail.com",
        "phoneNumber": "+243897143174",
        "address": "Avenue mueka numéro 16 disengomoka . Mbanza ngungu/kongo centrale",
        "name": "Lukau Kiame harvy"
    },
    {
        "id": 13,
        "email": "jeremie.nk96@gmail.com",
        "phoneNumber": "0996944275",
        "address": "Kinshasa",
        "name": "Nitu"
    },
    {
        "id": 14,
        "email": "josuev@cinolu.org",
        "phoneNumber": "+243812656895",
        "address": "221, avenue des usines",
        "name": "Josué VANGU"
    },
    {
        "id": 15,
        "email": "arnoldmboma89@gmail.com",
        "phoneNumber": "+243895833969",
        "address": "20b Mampoko Kinshasa n'djili ",
        "name": "Arnold "
    },
    {
        "id": 16,
        "email": "dansmonga394@gmail.com",
        "phoneNumber": "0979600621",
        "address": "Avenue 17 mai, n°32b, quartier la vallée , commune annexe",
        "name": "Dianda"
    },
    {
        "id": 17,
        "email": "yannickmakanzu@gmail.com",
        "phoneNumber": "0894108825",
        "address": "procoki",
        "name": "Yannick Makanzu"
    },
    {
        "id": 18,
        "email": "sparknkashama@gmail.com",
        "phoneNumber": "0994740714",
        "address": "06 circulaire, Hewa-bora, lubumbashi, RDC ",
        "name": "Spark Nkashama"
    },
    {
        "id": 19,
        "email": "jndoboy68@gmail.com",
        "phoneNumber": "+243 828541171",
        "address": "Toko 12 motel fikin limete",
        "name": "Joel NDOBOY"
    },
    {
        "id": 20,
        "email": "bumbafidele@gmail.com",
        "phoneNumber": "+243997328120",
        "address": "Rdc, Nord-Kivu, Nyiragongo, Kiziba 2, Matovu (BITANKE Nyabushongo)",
        "name": "BUMBA OBUTU FIDÈLE"
    },
    {
        "id": 21,
        "email": "kyobeledavid@gmail.com",
        "phoneNumber": "+243972015504",
        "address": "Babemba 55 Lubumbashi",
        "name": "Kyobele mukomo David"
    },
    {
        "id": 22,
        "email": "belamimwepu25@gmail.com",
        "phoneNumber": "0976867445",
        "address": "Lubumbashi ",
        "name": "Mwepu "
    },
    {
        "id": 23,
        "email": "mukengeremuderhwabienvenu@gmail.com",
        "phoneNumber": "+243970290083",
        "address": "RDC/NORD-KIVU/GOMA",
        "name": "MUKENGERE MUDERHWA BIENVENU"
    },
    {
        "id": 24,
        "email": "khondearsene47@gmail.com",
        "phoneNumber": "0858298477",
        "address": "Kinshasa, commune de matete ",
        "name": ""
    },
    {
        "id": 25,
        "email": "moisekapenda0@gmail.com",
        "phoneNumber": "0991387685",
        "address": "Lubumbashi/kolwezi ",
        "name": "Moise KAPENDA "
    },
    {
        "id": 26,
        "email": "patrickmb7@gmail.com",
        "phoneNumber": "+243992343301",
        "address": "78, ENAC HEWA BORA KAMPEMBA ",
        "name": "patrick "
    },
    {
        "id": 27,
        "email": "reception@cinolu.org",
        "phoneNumber": "+243811819504",
        "address": "221,ave des usines",
        "name": "Reception "
    },
    {
        "id": 28,
        "email": "stephanelola4@gmail.com",
        "phoneNumber": "+243971859077",
        "address": "Goma, Quartier mabanga, Avenue Industrielle",
        "name": "Lola Ciza Stéphane "
    },
    {
        "id": 29,
        "email": "benedict@owangasolar.com",
        "phoneNumber": "4046427192",
        "address": "benedict@owangasolar.com",
        "name": "Benedict Owanga"
    },
    {
        "id": 30,
        "email": "yannickmagayaneyannick@gmail.com",
        "phoneNumber": "+243979068311",
        "address": "Lubumbashi",
        "name": "Yannick Magayane "
    },
    {
        "id": 31,
        "email": "princengongo48@gmail.com",
        "phoneNumber": "+243902152607",
        "address": "Province du Nord-Kivu, Ville et commune de Goma, Quartier Himbi, Avenue Walikale n°185",
        "name": "Prince Mobambo Ngongo"
    },
    {
        "id": 32,
        "email": "bagalwakabobyaprince@gmail.com",
        "phoneNumber": "+243825167801",
        "address": "",
        "name": "BAGALWA François "
    },
    {
        "id": 33,
        "email": "issekapamba@gmail.com",
        "phoneNumber": "0977821325",
        "address": "Kinshasa ",
        "name": "Michael Kapamba "
    },
    {
        "id": 34,
        "email": "aimernzuzi@gmail.com",
        "phoneNumber": "+243979377802",
        "address": "aimerancenzuzi@aimybusiness.com",
        "name": "Aimerance Nzuzi"
    },
    {
        "id": 35,
        "email": "dodd@la-difference.com",
        "phoneNumber": "+243998842206",
        "address": "Goma",
        "name": "Dodd"
    },
    {
        "id": 36,
        "email": "marysemandaila96@gmail.com",
        "phoneNumber": "0973768997",
        "address": "Avenue lareine 03",
        "name": "Maryse Mandaïla "
    },
    {
        "id": 37,
        "email": "makukabenjamin29@gmail.com",
        "phoneNumber": "0995482318",
        "address": "Camp campus 46 , commune de Lemba , ville de Kinshasa ",
        "name": "Makuka"
    },
    {
        "id": 38,
        "email": "gedkaskany@gmail.com",
        "phoneNumber": "+243850946127",
        "address": "212, Rue BOLONGO, LINGWALA, KINSHASA",
        "name": "GEDEON KASONGA KANYINDA"
    },
    {
        "id": 39,
        "email": "bulehemuisiyabipaul27@gmail.com",
        "phoneNumber": "+243977796035",
        "address": "",
        "name": "Bulehemu "
    },
    {
        "id": 40,
        "email": "jonathantshombe@gmail.com",
        "phoneNumber": "0999540233",
        "address": "Matondo N°4",
        "name": "Tshombe"
    },
    {
        "id": 41,
        "email": "gradyngay7@gmail.com",
        "phoneNumber": "+243814368937",
        "address": "41bis abattoir Sanfil Masina",
        "name": "Ngay "
    },
    {
        "id": 42,
        "email": "Congovert.m@gmail.com",
        "phoneNumber": "+243974887863",
        "address": "3 avenue mafunda c/ kampemba ",
        "name": "Christian Mwamb"
    },
    {
        "id": 43,
        "email": "ibrahim_c@crestif.co",
        "phoneNumber": "+243912984005",
        "address": "21, avenue des élites ",
        "name": "Chenge"
    },
    {
        "id": 44,
        "email": "mapi.muhesi@gmail.com",
        "phoneNumber": "+243891739416",
        "address": "89, BENI. KATINDO G. GOMA",
        "name": "MAPIRIMOJA CHRISTIAN"
    },
    {
        "id": 45,
        "email": "elviskankola1@gmail.com",
        "phoneNumber": "0973112293",
        "address": "Lubumbashi, malela, Rdc ",
        "name": "Kankola"
    },
    {
        "id": 46,
        "email": "musanziwilfried@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Wilfried Musanzi "
    },
    {
        "id": 47,
        "email": "jemimhayvette@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Jemimha Yvette"
    },
    {
        "id": 48,
        "email": "vangumabika@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Josué Vangu"
    },
    {
        "id": 49,
        "email": "wassolunangachristian@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "chris wasso"
    },
    {
        "id": 50,
        "email": "aimengwe@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "aime nzolo"
    },
    {
        "id": 51,
        "email": "rita.ngalula.rn@gmail.com",
        "phoneNumber": "0998121304",
        "address": "Des violettes numéro 50 ",
        "name": "Rita Ngalula"
    },
    {
        "id": 52,
        "email": "arselkabeya2013@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Arsel KABEYA"
    },
    {
        "id": 53,
        "email": "theodoremwembo123@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Théodore Mwembo"
    },
    {
        "id": 54,
        "email": "solenetshilobo@gmail.com",
        "phoneNumber": "0972279074",
        "address": "20105, avenue Lumumba quartier industriel commune kampemba ",
        "name": "solene tshilobo"
    },
    {
        "id": 55,
        "email": "cepaneed@hotmail.com",
        "phoneNumber": "+243998902939 whatsapp ",
        "address": "CEPANED Uvira RDC",
        "name": "Hervé Magaribi "
    },
    {
        "id": 56,
        "email": "info.ehula@gmail.com",
        "phoneNumber": "+243973614801",
        "address": "Goma RDC",
        "name": "EHULA TECHNOLOGIES "
    },
    {
        "id": 57,
        "email": "dieumercimudahamarodin@gmail.com",
        "phoneNumber": "+243991034587",
        "address": "Bukavu/ Bagira ",
        "name": "DIEUMERCI MUDAHAMA Rodin "
    },
    {
        "id": 58,
        "email": "eliepongo7@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Elie Pongo"
    },
    {
        "id": 59,
        "email": "happywasingya@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Clarisse Masika"
    },
    {
        "id": 60,
        "email": "lothyya@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Béatrice Nday wa Mbayo"
    },
    {
        "id": 61,
        "email": "dasecsarl@gmail.com",
        "phoneNumber": "0819394729",
        "address": "Av. Kenya réf. Boulangerie Smart ",
        "name": "Daniel Ilunga Wa Mukina"
    },
    {
        "id": 62,
        "email": "huguettearafa02@gmail.com",
        "phoneNumber": "0819894607",
        "address": "71 av des volontaires commune de Lubumbashi ",
        "name": "Arafa amisi "
    },
    {
        "id": 63,
        "email": "danielbobasha9@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Daniel Bobasha"
    },
    {
        "id": 64,
        "email": "shekina646@gmail.com",
        "phoneNumber": null,
        "address": null,
        "name": "Shekina Banza"
    },
    {
        "id": 65,
        "email": "benibiringanine21@gmail.com",
        "phoneNumber": "0811562656",
        "address": "Kalimoto 2",
        "name": "Béni Ntwali"
    }
]

export let DATATABLE = [
  {
    PurchaseDate: "#01",
    ClientName: "Tiger Nixon",
    ProductID: "PRO12345",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$320,800",
    color: "badge badge-success",
  },
  {
    PurchaseDate: "#02",
    ClientName: "Garrett Winters",
    ProductID: "PRO8765",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-primary">Add Cart</span>,
    ProductCost: "$170,750",
  },
  {
    PurchaseDate: "#03",
    ClientName: "Ashton Cox",
    ProductID: "PRO54321",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$86,000",
  },
  // {
  //   PurchaseDate: "#04",
  //   ClientName: "Cedric Kelly",
  //   ProductID: "PRO97654",
  //   Product: "Micromax 81cm (32 inch) HD Ready LED TV",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-secondary">Delivering</span>,
  //   ProductCost: "$433,060",
  // },
  // {
  //   PurchaseDate: "#05",
  //   ClientName: "Airi Satou",
  //   ProductID: "PRO4532",
  //   Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-danger">Shipped</span>,
  //   ProductCost: "$162,700",
  // },
  // {
  //   PurchaseDate: "#06",
  //   ClientName: "Brielle Williamson",
  //   ProductID: "PRO6789",
  //   Product: "Digisol DG-HR3400 Router ",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-secondary">Delivering</span>,
  //   ProductCost: "$372,000",
  // },
  // {
  //   PurchaseDate: "#07",
  //   ClientName: "Herrod Chandler",
  //   ProductID: "PRO4567",
  //   Product: "Dell WM118 Wireless Optical Mouse",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-info">Add to Cart</span>,
  //   ProductCost: "$137,500",
  // },
  // {
  //   PurchaseDate: "#08",
  //   ClientName: "Rhona Davidson",
  //   ProductID: "PRO32156",
  //   Product: "Dell 16 inch Laptop Backpack ",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-pink">Delivered</span>,
  //   ProductCost: "$327,900",
  // },
  // {
  //   PurchaseDate: "#09",
  //   ClientName: "Colleen Hurst",
  //   ProductID: "PRO35785",
  //   Product: "Mi LED Smart TV 4A 80",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-danger">Shipped</span>,
  //   ProductCost: "$205,500",
  // },
  // {
  //   PurchaseDate: "#10",
  //   ClientName: "Sonya Frost",
  //   ProductID: "PRO23409",
  //   Product: "Vu 80cm (32 inch) HD Ready LED TV",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-secondary">Delivering</span>,
  //   ProductCost: "$103,600",
  // },
  // {
  //   PurchaseDate: "#11",
  //   ClientName: "Jena Gaines",
  //   ProductID: "PRO12345",
  //   Product: "Digisol DG-HR3400 Router",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-success">Delivered</span>,
  //   ProductCost: "$90,560",
  // },
  // {
  //   PurchaseDate: "#12",
  //   ClientName: "Quinn Flynn",
  //   ProductID: "PRO64326",
  //   Product: "Dell 16 inch Laptop Backpack",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-info">Add to Cart</span>,
  //   ProductCost: "$342,000",
  // },
  // {
  //   PurchaseDate: "#13",
  //   ClientName: "Charde Marshall",
  //   ProductID: "PRO87563",
  //   Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-orange">Pending</span>,
  //   ProductCost: "$470,600",
  // },
  // {
  //   PurchaseDate: "#14",
  //   ClientName: "Haley Kennedy",
  //   ProductID: "PRO65439",
  //   Product: "Mi LED Smart TV 4A 80",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-orange">Pending</span>,
  //   ProductCost: "$313,500",
  // },
  // {
  //   PurchaseDate: "#15",
  //   ClientName: "Tatyana Fitzpatrick",
  //   ProductID: "PRO097254",
  //   Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
  //   PaymentMode: "Cash on delivered ",
  //   Status: <span className="badge badge-info">Add to Cart</span>,
  //   ProductCost: "$385,750",
  // },
  // {
  //   PurchaseDate: "#16",
  //   ClientName: "Michael Silva",
  //   ProductID: "PRO45312",
  //   Product: "Mi LED Smart TV 4A 80",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-danger">Shipped</span>,
  //   ProductCost: "$198,500",
  // },
  // {
  //   PurchaseDate: "#17",
  //   ClientName: "Paul Byrd",
  //   ProductID: "PRO45674",
  //   Product: "Digisol DG-HR3400 Router",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-info">Add to Cart</span>,
  //   ProductCost: "$725,000",
  // },
  // {
  //   PurchaseDate: "#18",
  //   ClientName: "Gloria Little",
  //   ProductID: "PRO34653",
  //   Product: "Dell WM118 Wireless Optical Mouse",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-orange">Pending</span>,
  //   ProductCost: "$237,500",
  // },
  // {
  //   PurchaseDate: "#19",
  //   ClientName: "Bradley Greer",
  //   ProductID: "PRO24467",
  //   Product: "Dell 16 inch Laptop Backpack ",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-orange">Pending</span>,
  //   ProductCost: "$132,000",
  // },
  // {
  //   PurchaseDate: "#20",
  //   ClientName: "Dai Rios",
  //   ProductID: "PRO35323",
  //   Product: "Vu 80cm (32 inch) HD Ready LED TV",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-info">Add to Cart</span>,
  //   ProductCost: "$217,500",
  // },
  // {
  //   PurchaseDate: "#21",
  //   ClientName: "Jenette Caldwell",
  //   ProductID: "PRO56793",
  //   Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-success">Delivered</span>,
  //   ProductCost: "$345,000",
  // },
  // {
  //   PurchaseDate: "#22",
  //   ClientName: "Yuri Berry",
  //   ProductID: "PRO32156",
  //   Product: "Dell 16 inch Laptop Backpack ",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-info">Add to Cart</span>,
  //   ProductCost: "$675,000",
  // },
  // {
  //   PurchaseDate: "#23",
  //   ClientName: "Caesar Vance",
  //   ProductID: "PRO4567",
  //   Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-orange">Pending</span>,
  //   ProductCost: "$106,450",
  // },
  // {
  //   PurchaseDate: "#24",
  //   ClientName: "Doris Wilder",
  //   ProductID: "PRO6789",
  //   Product: "Dell WM118 Wireless Optical Mouse",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-danger">Shipped</span>,
  //   ProductCost: "$85,600",
  // },
  // {
  //   PurchaseDate: "#25",
  //   ClientName: "Angelica Ramos",
  //   ProductID: "PRO4532",
  //   Product: "Digisol DG-HR3400 Router ",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-success">Delivered</span>,
  //   ProductCost: "$1,200,000",
  // },
  // {
  //   PurchaseDate: "#26",
  //   ClientName: "Gavin Joyce",
  //   ProductID: "PRO97654",
  //   Product: "Dell WM118 Wireless Optical Mouse",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-success">Delivered</span>,
  //   ProductCost: "$92,575",
  // },
  // {
  //   PurchaseDate: "#27",
  //   ClientName: "Jennifer Chang",
  //   ProductID: "PRO45412",
  //   Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-danger">Shipped</span>,
  //   ProductCost: "$357,650",
  // },
  // {
  //   PurchaseDate: "#28",
  //   ClientName: "Brenden Wagner",
  //   ProductID: "PRO12345",
  //   Product: "Dell 16 inch Laptop Backpack",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-info">Add to Cart</span>,
  //   ProductCost: "$206,850",
  // },
  // {
  //   PurchaseDate: "#29",
  //   ClientName: "Fiona Green",
  //   ProductID: "PRO8765",
  //   Product: "Digisol DG-HR3400 Router ",
  //   PaymentMode: "Cash on delivered",
  //   Status: <span className="badge badge-orange">Pending</span>,
  //   ProductCost: "$850,000",
  // },
  // {
  //   PurchaseDate: "#30",
  //   ClientName: "Shou Itou",
  //   ProductID: "PRO54321",
  //   Product: "Dell WM118 Wireless Optical Mouse",
  //   PaymentMode: "Online Payment",
  //   Status: <span className="badge badge-success">Delivered</span>,
  //   ProductCost: "$163,000",
  // },
];

export const GlobalFilter = ({ filter, setFilter }) => {

  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};
