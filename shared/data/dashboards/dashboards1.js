import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// import ReactApexChart from "react-apexcharts";

export class Statistics1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Projets Cartographiés",
          data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        },
        {
          name: "Projects en attente",
          data: [34, 22, 37, 56, 21, 35, 60, 34, 56, 78, 89, 53],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 280,
        },
        grid: {
          borderColor: "#f2f6f7",
          show: true,
        },
        colors: ["var(--primary-bg-color)" || "#38cab3", "#e4e7ed"],
        plotOptions: {
          bar: {
            borderradius: "5px",
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: "#ebeff5",
                },
                {
                  from: -45,
                  to: 0,
                  color: "#ebeff5",
                },
              ],
            },
            columnWidth: "40%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        legend: {
          show: true,
          position: "top",
        },
        xaxis: {
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
          },
        },
        yaxis: {
          title: {
            text: "stats",
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={280}
        />
      </div>
    );
  }
}
export class Viewers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Male",
          data: [51, 44, 55, 42, 58, 50, 62],
        },
        {
          name: "Female",
          data: [56, 58, 38, 50, 64, 45, 55],
        },
      ],
      options: {
        chart: {
          height: 315,
          type: "line",
          toolbar: {
            show: false,
          },
          background: "none",
          fill: "#fff",
        },
        grid: {
          borderColor: "#f2f6f7",
        },
        colors: ["var(--primary-bg-color)" || "#38cab3", "#e4e7ed"],
        background: "transparent",
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },

        legend: {
          show: true,
          position: "top",
        },
        xaxis: {
          show: false,
          axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
          },
        },
        yaxis: {
          show: false,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={300}
        />
      </div>
    );
  }
}

export const Radialbar = {
  className: "forth circle",
  series: [85],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100],
    },
  },
  options: {
    colors: ["var(--primary-bg-color)"],

    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        hollow: {},
      },
    },
  },
};

export const COLUMNS = [
  {
    Header: "Id Projet",
    accessor: "PurchaseDate",
    className: "text-center ",
  },
  {
    Header: "Solution",
    accessor: "ClientName",
    className: "text-center ",
  },
  {
    Header: "Description",
    accessor: "ProductID",
    className: "text-center ",
  },
  {
    Header: "Thematique",
    accessor: "Product",
    className: "text-center ",
  },
  // {
  //   Header: "Product Cost",
  //   accessor: "ProductCost",
  //   className: "text-center ",
  // },
  {
    Header: "Challengs",
    accessor: "PaymentMode",
    className: "text-center ",
  },
  {
    Header: "Status",
    accessor: "Status",
    className: "text-center ",
  },
];

export const SOLUTIONS_COLUMNS = [
  {
    Header : "Id Projet",
    accessor : "id",
    className: "text-center"
  },
  {
    Header : "Nom de la Solution",
    accessor : "name",
    // className: "text-left"
  },
  {
    Header : "lien youtube",
    accessor : "videoLink",
    // className: "text-left"
  },
  {
    Header : "Description",
    accessor : "description",
    // className: "text-left"
  },
  {
    Header : "Target",
    accessor : "targetedProblem",
    className: "text-left"
  },
  {
    Header : "Date de création",
    accessor : "createdAt",
    className: "text-left"
  }
]

export const SOLUTIONS = [
  {
    "id": 1,
    "name": "Projet test",
    "videoLink": "https://www.youtube.com/watch?v=AqNnlGPJ5tU",
    "imageLink": null,
    "description": "Description de test",
    "callId": 1,
    "thematicId": 1,
    "targetedProblem": "Problème de test",
    "statusId": 1,
    "createdAt": "2023-11-30T18:08:39.563Z",
    "updatedAt": "2023-11-30T18:08:39.563Z",
    "userId": 1,
    "thematic": {
      "id": 1,
      "name": "Transparence et sécurité dans l’artisanat Minier",
      "odds": "3, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 2,
    "name": "Test 2",
    "videoLink": "",
    "imageLink": null,
    "description": "Test 2",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "Test 2",
    "statusId": 1,
    "createdAt": "2023-11-30T19:14:01.222Z",
    "updatedAt": "2023-11-30T19:14:01.222Z",
    "userId": 1,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 3,
    "name": "Recyclage des bouteilles en plastique ",
    "videoLink": "https://youtu.be/Aoh6ycsXXvg?si=rbxelMoIv6Rhd9bl",
    "imageLink": null,
    "description": "Le recyclage des bouteilles en plastique en pavés ",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "La mauvaise gestion des plastiques après utilisation ",
    "statusId": 1,
    "createdAt": "2023-11-30T19:26:36.590Z",
    "updatedAt": "2023-11-30T19:26:36.590Z",
    "userId": 4,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 4,
    "name": "Bunga",
    "videoLink": "",
    "imageLink": null,
    "description": "Une solution qui aide ",
    "callId": 1,
    "thematicId": 4,
    "targetedProblem": "La mentalité ",
    "statusId": 1,
    "createdAt": "2023-11-30T19:39:15.556Z",
    "updatedAt": "2023-11-30T19:39:15.556Z",
    "userId": 5,
    "thematic": {
      "id": 4,
      "name": "L’amélioration de la mobilité urbaine",
      "odds": "9, ",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 5,
    "name": "PLANTATION ET COMMERCIALISATION DU RIZ NATUREL ( BUMBA )",
    "videoLink": "No",
    "imageLink": null,
    "description": "Nous avons constaté que plus 99% consomment du riz qui contient les produits synthétique et qui ne bon a la santé humaine et ces riz vienne d'ailleurs. \nNotre solution est planter et commercialiser du riz naturel (100% bio BUMBA ) qui est riche en protéines et vitamine , il est consommé moin 10% .",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "Les riz mélanger avec les produits synthétique qui est mieux consommer dans la RDC . Qui cause beaucoup de problème a la santé que beaucoup sont ignorant . ",
    "statusId": 1,
    "createdAt": "2023-11-30T23:16:18.813Z",
    "updatedAt": "2023-11-30T23:16:18.813Z",
    "userId": 7,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 6,
    "name": "CultivaNet : Réseau social d’affaires pour les agriculteurs Congolais.",
    "videoLink": "https://fb.watch/oFdVjMP3f2/",
    "imageLink": null,
    "description": "CultivaNet est un réseau social pour les agriculteurs Congolais, conçue comme une plateforme virtuelle pouvant faciliter les échanges (messagerie, e-commerce), la promotion des produits agricoles, ainsi que les services de consultance agricole et de location de matériels aux agriculteurs Congolais.",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "Notre solution contribue à la résolution des problèmes suivants : \n1. Manque de visibilité et de promotion des produits agricoles congolais sur le marché national et international.\n2. Difficulté d'accès aux services de consultance agricole et de location de matériels pour les agriculteurs congolais.\n3. Besoin de renforcement en capacités pour les jeunes agriculteurs pour leur inclusion dans le secteur agricole.",
    "statusId": 1,
    "createdAt": "2023-12-01T06:42:11.996Z",
    "updatedAt": "2023-12-01T06:42:11.996Z",
    "userId": 9,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 7,
    "name": "Bulongo",
    "videoLink": "",
    "imageLink": null,
    "description": "kjrhaglrenj t!",
    "callId": 1,
    "thematicId": 1,
    "targetedProblem": "kjlbkjvzrk;",
    "statusId": 1,
    "createdAt": "2023-12-01T08:30:20.138Z",
    "updatedAt": "2023-12-01T08:30:20.138Z",
    "userId": 14,
    "thematic": {
      "id": 1,
      "name": "Transparence et sécurité dans l’artisanat Minier",
      "odds": "3, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 8,
    "name": "Tourniquet d'aspersion d'eau Sunbeam ",
    "videoLink": "https://www.linkedin.com/in/arnold-mboma-b288b0257",
    "imageLink": null,
    "description": "Le tourniquet par aspersion Sunbeam fabriqué à partir de tuyaux PVC est une solution innovante qui pourrait contribuer à réduire le retard de la RDC en matière d'irrigation. Cette solution est simple à mettre en œuvre et à entretenir, et elle est relativement peu coûteuse.\nLe tourniquet par aspersion fonctionne de la manière suivante : un tuyau PVC est fixé à un pivot central. Le tuyau est ensuite équipé d'un embout d'aspersion qui permet de distribuer l'eau de manière uniforme sur le jardin. Le tourniquet est actionné par un moteur électrique, qui permet de contrôler la vitesse de rotation du tourniquet.",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "Augmenter les rendements agricoles : l'irrigation permet d'apporter l'eau nécessaire aux plantes pour qu'elles puissent pousser et produire de la biomasse. Les rendements agricoles peuvent ainsi être multipliés par deux ou trois, voire davantage.\nDiversifier les cultures : l'irrigation permet de cultiver des plantes qui nécessitent beaucoup d'eau, comme le riz, les légumes ou les fruits. Cela permet de diversifier l'offre alimentaire et de réduire la dépendance aux cultures pluviale.\nAméliorer la qualité des produits agricoles : l'irrigation permet de garantir une croissance régulière des plantes, ce qui a un impact positif sur la qualité des produits agricoles.La pénurie de maïs qui a frappé la région du Kassaï en 2023 est un exemple des conséquences du retard de la RDC en matière d'irrigation. En effet, le maïs est une culture qui nécessite beaucoup d'eau, et l'absence d'irrigation a rendu les récoltes très vulnérables à la sécheresse. Le tourniquet Sunbeam est solution adaptée pour tous types de cultures",
    "statusId": 1,
    "createdAt": "2023-12-01T12:24:59.423Z",
    "updatedAt": "2023-12-01T12:24:59.423Z",
    "userId": 15,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 9,
    "name": "La formation HSE",
    "videoLink": "",
    "imageLink": null,
    "description": "Bonjour la direction moi c'est Mr David kyobele mukomo je suis le responsable de l'entreprise best company solutions bcs training.\nNous donnons des formations dans plusieurs domaines.\nFormé les travailleurs a bien travaille en sécurité pour éviter les risques professionnels aux travailleurs.\nMerci beaucoup pour votre réponse favorable",
    "callId": 1,
    "thematicId": 1,
    "targetedProblem": "Manque de formation au travailleurs .\nPour travailler d'une manière sécuritaires",
    "statusId": 1,
    "createdAt": "2023-12-01T13:26:00.381Z",
    "updatedAt": "2023-12-01T13:26:00.381Z",
    "userId": 21,
    "thematic": {
      "id": 1,
      "name": "Transparence et sécurité dans l’artisanat Minier",
      "odds": "3, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 10,
    "name": "Economie circulaire de production de biogaz avec les déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques ",
    "videoLink": "",
    "imageLink": null,
    "description": "La ville de Goma, en République démocratique du Congo, est confrontée à une série de défis environnementaux, notamment la production massive de déchets, l'assainissement insuffisant des voiries et la pollution atmosphérique. Ces défis ont un impact négatif sur la santé publique, la qualité de vie et le climat.\n\nLe projet d'économie circulaire de production de biogaz à partir des déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques à Goma propose une solution innovante pour répondre à ces défis. Ce projet a pour objectif de :\n\n* Réduire la production de déchets en valorisant les déchets organiques et plastiques\n* Améliorer l'assainissement des voiries\n* Protéger le climat\n* Respecter les principes de la responsabilité sociale des entreprises (RSE) et des critères ESG\n\nLe processus\n\nLe projet repose sur un processus circulaire qui permet de transformer les déchets en ressources. Les déchets organiques sont collectés auprès des ménages et des entreprises et sont ensuite transformés en biogaz. Le biogaz est utilisé pour produire de l'électricité et de la chaleur, qui peuvent être utilisées pour alimenter des foyers, des entreprises ou des infrastructures publiques.\n\nLes déchets plastiques sont également collectés et sont ensuite transformés en pavés écologiques. Les pavés écologiques sont fabriqués à partir d'un mélange de déchets plastiques et de sable. Ils sont résistants, durables et respectueux de l'environnement.\n\nLes avantages\n\nLe projet présente de nombreux avantages, notamment :\n\nRéduction de la production de déchets: Le projet permet de réduire la production de déchets en valorisant les déchets organiques et plastiques. Cela contribue à réduire la pollution et à améliorer la gestion des déchets.\nAmélioration de l'assainissement des voiries : Les pavés écologiques sont plus durables que les pavés traditionnels. Ils résistent mieux à l'usure et aux intempéries. Cela permet d'améliorer l'état des voiries et de réduire les coûts d'entretien.\nProtection du climat : La production de biogaz permet de réduire les émissions de gaz à effet de serre. Le biogaz est une source d'énergie renouvelable qui contribue à lutter contre le changement climatique.\nRespect des principes de la RSE et des critères ESG : Le projet contribue à améliorer la santé publique, la qualité de vie et le climat. Il respecte également les principes de la responsabilité sociale des entreprises (RSE) et des critères ESG.\n\nAtteinte des objectifs de l'ODD\n\nLe projet d'économie circulaire de production de biogaz à partir des déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques à Goma contribue à atteindre les objectifs suivants des Objectifs de développement durable (ODD) des Nations Unies :\n\nODD 6 : Accès à l'eau et à l'assainissement : Le projet contribue à améliorer l'assainissement des voiries, ce qui contribue à améliorer l'accès à l'eau et à l'assainissement.\nODD 11 : Villes et communautés durables : Le projet contribue à améliorer l'état des voiries, ce qui contribue à créer des villes et communautés durables.\nODD 13 : Action pour le climat : Le projet contribue à réduire les émissions de gaz à effet de serre, ce qui contribue à lutter contre le changement climatique.\n\nEn définitive, le projet d'économie circulaire de production de biogaz à partir des déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques à Goma est une solution innovante qui présente de nombreux avantages. Ce projet contribue à améliorer la santé publique, la qualité de vie et le climat. Il respecte également les principes de la responsabilité sociale des entreprises (RSE) et des critères ESG.",
    "callId": 1,
    "thematicId": 4,
    "targetedProblem": "Ce projet résout les problèmes suivants: \nProduction massive de déchets : Le projet permet de réduire la production de déchets en valorisant les déchets organiques et plastiques. Cela contribue à réduire la pollution et à améliorer la gestion des déchets.\nAssainissement insuffisant des voiries** : Les pavés écologiques sont plus durables que les pavés traditionnels. Ils résistent mieux à l'usure et aux intempéries. Cela permet d'améliorer l'état des voiries et de réduire les coûts d'entretien.\nPollution atmosphérique : La production de biogaz permet de réduire les émissions de gaz à effet de serre. Le biogaz est une source d'énergie renouvelable qui contribue à lutter contre le changement climatique.\n\nCas urgent à résoudre : le tronçon Terminus-BITANKE ici à Goma\n\nLe tronçon Terminus-BITANKE est un tronçon de 1.5 kilomètres qui relie le centre-ville de Goma à la commune de Binza. Ce tronçon est en mauvais état depuis plusieurs années. Les pavés qui ont été posés sont de mauvaise qualité et s'effritent facilement. Cela cause des problèmes de sécurité pour les usagers de la route, notamment les motocyclistes et les automobilistes.\n\nLes problèmes les plus urgents à résoudre sur ce tronçon sont les suivants :\n\nLes pavés s'effritent facilement : Cela cause des nids-de-poule et des trous dans la chaussée. Cela rend la circulation dangereuse et peut causer des accidents.\nLes pavés sont inégaux : Cela cause des vibrations et des secousses pour les usagers de la route. Cela peut provoquer des nausées, des maux de tête et des douleurs dorsales.\nLes pavés sont glissants : Cela rend la circulation dangereuse par temps humide ou pluvieux. Cela peut causer des chutes et des accidents.\n\nLa solution la plus urgente est de remplacer les pavés existants par des pavés écologiques de meilleure qualité. Ces pavés sont plus résistants, plus durables et plus sûrs. Ils contribueront à améliorer la sécurité des usagers de la route et à réduire la pollution atmosphérique.\n\nEn bref, Le projet d'économie circulaire de production de biogaz à partir des déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques à Goma est une solution innovante qui présente de nombreux avantages. Ce projet contribuera à améliorer la santé publique, la qualité de vie et le climat. Il est urgent de résoudre le cas du tronçon Terminus-BITANKE pour améliorer la sécurité des usagers de la route.",
    "statusId": 1,
    "createdAt": "2023-12-01T13:34:38.380Z",
    "updatedAt": "2023-12-01T13:34:38.380Z",
    "userId": 20,
    "thematic": {
      "id": 4,
      "name": "L’amélioration de la mobilité urbaine",
      "odds": "9, ",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 11,
    "name": "Mécanisation légère pour une agriculture Responsable en RDC",
    "videoLink": "",
    "imageLink": null,
    "description": "Notre projet propose une solution innovante de mécanisation légère pour moderniser et optimiser les pratiques agricoles.\n Nos équipements de pointe offrent une efficacité accrue tout en réduisant les coûts opérationnels pour les agriculteurs.\nCes équipements offrent une productivité améliorée, une réduction des efforts manuels, une adaptabilité à diverses cultures et une empreinte environnementale réduite.\n",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "Efforts Physiques : En diminuant la nécessité d'efforts manuels intensifs, la mécanisation légère soulage les agriculteurs des tâches physiquement exigeantes, réduisant ainsi la fatigue et les risques de blessures.\nOptimisation des Opérations : Les équipements légers offrent une productivité accrue, permettant un travail plus rapide et plus précis, ce qui se traduit par des récoltes plus abondantes et de meilleure qualité.\nMoindre Dépendance à la Main-d'œuvre : En remplaçant une partie du travail manuel par des machines légères, les coûts liés à la main-d'œuvre peuvent être réduits, surtout dans les zones où la main-d'œuvre est rare ou coûteuse.\nFlexibilité des Équipements : La mécanisation légère peut être adaptée à différents types d'exploitations et à diverses cultures, offrant ainsi une solution polyvalente aux besoins variés des agriculteurs.\nRéduction de l'Impact Environnemental : En intégrant des pratiques et des technologies plus respectueuses de l'environnement, la mécanisation légère peut contribuer à une agriculture plus durable en minimisant l'utilisation de ressources et en réduisant les émissions de gaz à effet de serre.\nAdoption de Nouvelles Technologies : La mécanisation légère favorise l'adoption de technologies innovantes dans le secteur agricole, stimulant ainsi la modernisation et l'efficacité des exploitations.\n",
    "statusId": 1,
    "createdAt": "2023-12-01T14:50:34.392Z",
    "updatedAt": "2023-12-01T14:50:34.392Z",
    "userId": 23,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 12,
    "name": "XXXXX",
    "videoLink": "https://youtu.be/xxx",
    "imageLink": null,
    "description": "XXXXXX",
    "callId": 1,
    "thematicId": 2,
    "targetedProblem": "XXXXX",
    "statusId": 1,
    "createdAt": "2023-12-01T19:25:34.705Z",
    "updatedAt": "2023-12-01T19:25:34.705Z",
    "userId": 1,
    "thematic": {
      "id": 2,
      "name": "Inclusion financière digitale des opérateurs informels",
      "odds": "1, 8, 10",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 13,
    "name": "Zoobambo",
    "videoLink": "",
    "imageLink": null,
    "description": "La ville de Goma est une ville qui prend du jour au jour de l'expansion et a besoin d'un endroit où les habitants pourront contempler la nature et les animaux en toute quiétude. Raison pour laquelle nous avons pour projet de créér un zoo aux alentours de la ville car ce projet, nous le pensons pourrait générer à long terme un grand bénéfice en recevant non seulement la visite des habitants de Goma mais aussi ceux des villes voisines (Bukavu, Uvira, Beni, Butembo,...)",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "Notre solution résoud le problème du manque de zoo dans la partie est de notre pays.",
    "statusId": 1,
    "createdAt": "2023-12-02T05:52:05.406Z",
    "updatedAt": "2023-12-02T05:52:05.406Z",
    "userId": 31,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 14,
    "name": "Test 5",
    "videoLink": "https://youtu.be/PheyzzUt3ao",
    "imageLink": null,
    "description": "test 5",
    "callId": 1,
    "thematicId": 2,
    "targetedProblem": "test 5",
    "statusId": 1,
    "createdAt": "2023-12-02T07:04:36.810Z",
    "updatedAt": "2023-12-02T07:04:36.810Z",
    "userId": 1,
    "thematic": {
      "id": 2,
      "name": "Inclusion financière digitale des opérateurs informels",
      "odds": "1, 8, 10",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 15,
    "name": "j",
    "videoLink": "",
    "imageLink": null,
    "description": "n",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "l",
    "statusId": 1,
    "createdAt": "2023-12-02T10:40:01.716Z",
    "updatedAt": "2023-12-02T10:40:01.716Z",
    "userId": 17,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 16,
    "name": "Solution alternative à appliquer pour éviter les embouteillages inutiles ",
    "videoLink": "",
    "imageLink": null,
    "description": "En étant environnementaliste, notre travail consistera d’effectuer une descente sur terrain en fin de sensibiliser la population en général mais surtout beaucoup plus les chauffeurs en ce qui concerne le respect du code de la route et avec l’aide des bourgmestres de communes et les policiers routier, nous allons appliquer cette solution ensemble .",
    "callId": 1,
    "thematicId": 4,
    "targetedProblem": "Cette solution nous permettra de mettre en place une cartographie bien déterminée de chaque arrêt routier en fin d’éviter les embouteillages inutiles dans la ville.",
    "statusId": 1,
    "createdAt": "2023-12-02T11:07:23.111Z",
    "updatedAt": "2023-12-02T11:07:23.111Z",
    "userId": 37,
    "thematic": {
      "id": 4,
      "name": "L’amélioration de la mobilité urbaine",
      "odds": "9, ",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 17,
    "name": "OasisApp ",
    "videoLink": "",
    "imageLink": null,
    "description": "« Go anywhere, Get anything, pay anyone.»\n\nOasis App est une solution développée par la société CRESTIF SARL, dans le but de résoudre le problème de la mobilité et celle de l'interopérabilité que les utilisateurs rencontrent lors de l'accès aux services financiers une épine dorsale dans l’émergence du commerce électronique.\nPar mobilité nous sous-entendons une plateforme au sein de laquelle les utilisateurs ont accès à toute une agglomérations des services de leurs quotidien. (Nous voulons participer à l’augmentation de l’inclusion financière).\n\nImaginez une plateforme qui InterConnect plusieurs portefeuilles électroniques (mobile Banking, mobile money, crypto monnaie...) permettant aux marchands d'encaisser des paiements venant de n'importe quelle porte feuille, en n'importe quelle devise, dans n'importe quel lieu en utilisant juste un smartphone comme terminal.\n\nLa plateforme offre aux petits commerçants la possibilité d'acheter ou de proposer des biens et services sans connaissances technologiques.",
    "callId": 1,
    "thematicId": 2,
    "targetedProblem": "Étant donné que notre solution s’inscrit dans l’optique d’une super App. Nous avions catalogué les problèmes qui nous ont permis d’apporter cette solution. Le but est de rendre aussi facile l’accès aux services financiers que l’utilisation de la messagerie instantanée.\n\nProblème à résoudre :\n•Problème de la mobilité sur un grand réseau\n•Interopérabilité d'un portefeuille électronique\n•Accès à distance aux services disponible dans votre environnement\n•Absence d'une plateforme permettant aux marchand d'atteindre les consommateurs\n•Promouvoir des services en B2B, C2C, B2C et C2C des marchands partenaires.",
    "statusId": 1,
    "createdAt": "2023-12-02T20:16:08.133Z",
    "updatedAt": "2023-12-02T20:16:08.133Z",
    "userId": 43,
    "thematic": {
      "id": 2,
      "name": "Inclusion financière digitale des opérateurs informels",
      "odds": "1, 8, 10",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 18,
    "name": "Plateforme de partage de compétences pour l'inclusion financière numérique.",
    "videoLink": "",
    "imageLink": null,
    "description": "La mise en place d'une plateforme en ligne qui met en relation des experts en inclusion financière numérique avec des communautés locales à faible revenu. Les experts peuvent partager leurs connaissances et compétences pour aider les individus et les petites entreprises à accéder aux services financiers numériques, tels que les comptes bancaires mobiles, les paiements électroniques et les microcrédits. La plateforme peut également fournir des ressources éducatives et des outils pratiques pour renforcer les compétences financières des utilisateurs.",
    "callId": 1,
    "thematicId": 2,
    "targetedProblem": "Pas de pauvreté en favorisant l'accès aux services financiers pour les populations à faible revenu.\nTravail décent et croissance économique - en soutenant le développement des petites entreprises et de l'entrepreneuriat.\nIndustrie, innovation et infrastructure - en promouvant l'utilisation des technologies numériques pour l'inclusion financière.\nRéduction des inégalités - en réduisant l'écart d'accès aux services financiers entre les populations à faible revenu et les autres.",
    "statusId": 1,
    "createdAt": "2023-12-02T21:53:04.722Z",
    "updatedAt": "2023-12-02T21:53:04.722Z",
    "userId": 44,
    "thematic": {
      "id": 2,
      "name": "Inclusion financière digitale des opérateurs informels",
      "odds": "1, 8, 10",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 19,
    "name": "KAPPI",
    "videoLink": "",
    "imageLink": null,
    "description": "Kappi est une application web qui permet la création simplifiée de facture, un partage et un suivit de retard instantanément ",
    "callId": 1,
    "thematicId": 2,
    "targetedProblem": "Le problème de création de factures ( plus compliqué avec les ERP et plus compliqué encore à la création manuelle ) et le partage de ces dernières ",
    "statusId": 1,
    "createdAt": "2023-12-03T04:30:41.467Z",
    "updatedAt": "2023-12-03T04:30:41.467Z",
    "userId": 45,
    "thematic": {
      "id": 2,
      "name": "Inclusion financière digitale des opérateurs informels",
      "odds": "1, 8, 10",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 20,
    "name": "Titre de test",
    "videoLink": "",
    "imageLink": null,
    "description": "Teste",
    "callId": 1,
    "thematicId": 2,
    "targetedProblem": "Test",
    "statusId": 1,
    "createdAt": "2023-12-03T15:57:25.175Z",
    "updatedAt": "2023-12-03T15:57:25.175Z",
    "userId": 46,
    "thematic": {
      "id": 2,
      "name": "Inclusion financière digitale des opérateurs informels",
      "odds": "1, 8, 10",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 21,
    "name": "Goma Lima",
    "videoLink": "https://youtu.be/XQ6mu-csoD8",
    "imageLink": null,
    "description": "Goma lima est un projet qui vise à améliorer le taux de production et transformation des légumes utilisés régulièrement dans la cuisine de la ville entre autre : L'oignon et la tomate",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "Goma Lima est une solution qui existe issue du problème de non accès aux légumes que fait face la population de Goma  suite aux guerres  qui bloquent l'accès aux zones de production des légumes,  mais aussi Goma Lima vient palier au problème de hausse de prix de légumes mais aussi à l'importation; enfin Goma lima ne se limite pas seulement à résoudre les problèmes de la production et la commercialisation, Goma Lima a aussi une académie Agricole qui encadre les jeunes passionnés par l'agroalimentaire à avoir toutes les notions sur la production ainsi que la commercialisation des produits agricoles",
    "statusId": 1,
    "createdAt": "2023-12-03T18:49:12.391Z",
    "updatedAt": "2023-12-03T18:49:12.391Z",
    "userId": 49,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 22,
    "name": "Créer une plate forme ou application de paiement des taxes et impôts en ligne ",
    "videoLink": "Pas encore ",
    "imageLink": null,
    "description": "La solution est de permettre chaque opérateur économique de faire son paiement là où il se retrouve, et avoir un contrôle régulier sur les suivis de ses paiements et gagner en temps également.\nPermettre aussi une traçabilité à l' état congolais.",
    "callId": 1,
    "thematicId": 2,
    "targetedProblem": "1. Le manque à gagner de l' état congolais\n2.  faire un long fil à des guichets pour payer ses taxes et impôts parfois on perds même toute la journée en attente.\n",
    "statusId": 1,
    "createdAt": "2023-12-04T00:14:18.619Z",
    "updatedAt": "2023-12-04T00:14:18.619Z",
    "userId": 54,
    "thematic": {
      "id": 2,
      "name": "Inclusion financière digitale des opérateurs informels",
      "odds": "1, 8, 10",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 23,
    "name": "Transformation des soja en produits à base de soja tel que la farine de soja, le lait de soja, la nourriture pour les animaux ( vache, chèvre,mouton...)",
    "videoLink": "",
    "imageLink": null,
    "description": "La transformation de soja permettra d'éradiquer la malnutrition qui ravage notre province en particulier et notre pays en général (RDC), A contribuer à la consommation des protéines vertes mais aussi a approvisionner les éleveurs en nourriture pour leurs animaux.",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "Cette solution résous le problème de malnutrition tel que la kwachorcore, béribéri et le marasme. Des maladies due au manque de protéines vue le pouvoir d'achat très bat des congolais et l'incapacité a se procurer du lait et la viande des animaux tel que la vache, la chèvre...",
    "statusId": 1,
    "createdAt": "2023-12-04T06:23:20.009Z",
    "updatedAt": "2023-12-04T06:23:20.009Z",
    "userId": 59,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 24,
    "name": "",
    "videoLink": "",
    "imageLink": null,
    "description": "un service de transport appelé EXCELLENCE VIE,  qui met de véhicule de transport Booking avec un système de surveillance de la route, des clients et du chauffeur associer à la géolocalisation, caméra de surveillance (pour garder l'historique de tous les clients à bord et limiter la tracasserie policière), signalisation de la personne référence à destination...",
    "callId": 1,
    "thematicId": 4,
    "targetedProblem": "Les secteurs des transports présente un grand danger pour ma ville avec les enlèvements qui se multiplient, le vol de véhicule et la sécurité est devenue un grand besoin dans les grandes villes...les mauvaise état de parking des véhicules..",
    "statusId": 1,
    "createdAt": "2023-12-04T06:51:53.435Z",
    "updatedAt": "2023-12-04T06:51:53.435Z",
    "userId": 52,
    "thematic": {
      "id": 4,
      "name": "L’amélioration de la mobilité urbaine",
      "odds": "9, ",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
  },
  {
    "id": 25,
    "name": "Fabrication des machines à granulé pour la production des aliments des volailles",
    "videoLink": "https://youtube.com/shorts/xassfCQUu38?si=FV5uaPyMjvKQMU8k",
    "imageLink": null,
    "description": "Notre solution est une machine à granulé permettant de produire localement les aliments des volailles (poules,cailles, dindon) et bétail (vaches, lapins, chèvres). ",
    "callId": 1,
    "thematicId": 3,
    "targetedProblem": "1.Le coût élevé de l'élevage, ceci est en grande partie lier au coût de l'aliment;\n2.Coût élevé de la procuration de machines à granulé qui sont importer, qui prennent beaucoup de temps et un coût élevé de transport;\n3. \n\n",
    "statusId": 1,
    "createdAt": "2023-12-04T07:21:03.680Z",
    "updatedAt": "2023-12-04T07:21:03.680Z",
    "userId": 61,
    "thematic": {
      "id": 3,
      "name": "Mécanisation légère agricole",
      "odds": "2, 8",
      "createdAt": "2023-11-30T18:03:05.564Z",
      "updatedAt": "2023-11-30T18:03:05.564Z"
    }
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
  const [solutions, setSolution] = useState([]);
  const [isLoadingSolution, setIsLoadingSolution] = useState(false);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        setIsLoadingSolution(true);
        const solutionResponse = await axios.get("/solutions");
        setSolution(solutionResponse.data.data);
        setIsLoadingSolution(false);
      } catch (error) {
        console.log(error);
        setIsLoadingSolution(false);
      }
    };
  }, []);

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
