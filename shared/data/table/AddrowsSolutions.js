import React, { useState, Fragment } from "react";
import { Button, Modal, Table, Pagination } from "react-bootstrap";
import { nanoid } from "nanoid";

export const SavetableSolutions = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [detailsSolutionId, setDetailsSolutionId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const data = [
    {
      id: 1,
      name: "Projet test",
      videoLink: "https://www.youtube.com/watch?v=AqNnlGPJ5tU",
      imageLink: null,
      description: "Description de test",
      callId: 1,
      thematicId: 1,
      targetedProblem: "Problème de test",
      statusId: 1,
      createdAt: "2023-11-30T18:08:39.563Z",
      updatedAt: "2023-11-30T18:08:39.563Z",
      userId: 1,
      thematic: {
        id: 1,
        name: "Transparence et sécurité dans l’artisanat Minier",
        odds: "3, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 2,
      name: "Test 2",
      videoLink: "",
      imageLink: null,
      description: "Test 2",
      callId: 1,
      thematicId: 3,
      targetedProblem: "Test 2",
      statusId: 1,
      createdAt: "2023-11-30T19:14:01.222Z",
      updatedAt: "2023-11-30T19:14:01.222Z",
      userId: 1,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 3,
      name: "Recyclage des bouteilles en plastique ",
      videoLink: "https://youtu.be/Aoh6ycsXXvg?si=rbxelMoIv6Rhd9bl",
      imageLink: null,
      description: "Le recyclage des bouteilles en plastique en pavés ",
      callId: 1,
      thematicId: 3,
      targetedProblem: "La mauvaise gestion des plastiques après utilisation ",
      statusId: 1,
      createdAt: "2023-11-30T19:26:36.590Z",
      updatedAt: "2023-11-30T19:26:36.590Z",
      userId: 4,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 4,
      name: "Bunga",
      videoLink: "",
      imageLink: null,
      description: "Une solution qui aide ",
      callId: 1,
      thematicId: 4,
      targetedProblem: "La mentalité ",
      statusId: 1,
      createdAt: "2023-11-30T19:39:15.556Z",
      updatedAt: "2023-11-30T19:39:15.556Z",
      userId: 5,
      thematic: {
        id: 4,
        name: "L’amélioration de la mobilité urbaine",
        odds: "9, ",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 5,
      name: "PLANTATION ET COMMERCIALISATION DU RIZ NATUREL ( BUMBA )",
      videoLink: "No",
      imageLink: null,
      description:
        "Nous avons constaté que plus 99% consomment du riz qui contient les produits synthétique et qui ne bon a la santé humaine et ces riz vienne d'ailleurs. \nNotre solution est planter et commercialiser du riz naturel (100% bio BUMBA ) qui est riche en protéines et vitamine , il est consommé moin 10% .",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Les riz mélanger avec les produits synthétique qui est mieux consommer dans la RDC . Qui cause beaucoup de problème a la santé que beaucoup sont ignorant . ",
      statusId: 1,
      createdAt: "2023-11-30T23:16:18.813Z",
      updatedAt: "2023-11-30T23:16:18.813Z",
      userId: 7,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 6,
      name: "CultivaNet : Réseau social d’affaires pour les agriculteurs Congolais.",
      videoLink: "https://fb.watch/oFdVjMP3f2/",
      imageLink: null,
      description:
        "CultivaNet est un réseau social pour les agriculteurs Congolais, conçue comme une plateforme virtuelle pouvant faciliter les échanges (messagerie, e-commerce), la promotion des produits agricoles, ainsi que les services de consultance agricole et de location de matériels aux agriculteurs Congolais.",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Notre solution contribue à la résolution des problèmes suivants : \n1. Manque de visibilité et de promotion des produits agricoles congolais sur le marché national et international.\n2. Difficulté d'accès aux services de consultance agricole et de location de matériels pour les agriculteurs congolais.\n3. Besoin de renforcement en capacités pour les jeunes agriculteurs pour leur inclusion dans le secteur agricole.",
      statusId: 1,
      createdAt: "2023-12-01T06:42:11.996Z",
      updatedAt: "2023-12-01T06:42:11.996Z",
      userId: 9,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 7,
      name: "Bulongo",
      videoLink: "",
      imageLink: null,
      description: "kjrhaglrenj t!",
      callId: 1,
      thematicId: 1,
      targetedProblem: "kjlbkjvzrk;",
      statusId: 1,
      createdAt: "2023-12-01T08:30:20.138Z",
      updatedAt: "2023-12-01T08:30:20.138Z",
      userId: 14,
      thematic: {
        id: 1,
        name: "Transparence et sécurité dans l’artisanat Minier",
        odds: "3, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 8,
      name: "Tourniquet d'aspersion d'eau Sunbeam ",
      videoLink: "https://www.linkedin.com/in/arnold-mboma-b288b0257",
      imageLink: null,
      description:
        "Le tourniquet par aspersion Sunbeam fabriqué à partir de tuyaux PVC est une solution innovante qui pourrait contribuer à réduire le retard de la RDC en matière d'irrigation. Cette solution est simple à mettre en œuvre et à entretenir, et elle est relativement peu coûteuse.\nLe tourniquet par aspersion fonctionne de la manière suivante : un tuyau PVC est fixé à un pivot central. Le tuyau est ensuite équipé d'un embout d'aspersion qui permet de distribuer l'eau de manière uniforme sur le jardin. Le tourniquet est actionné par un moteur électrique, qui permet de contrôler la vitesse de rotation du tourniquet.",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Augmenter les rendements agricoles : l'irrigation permet d'apporter l'eau nécessaire aux plantes pour qu'elles puissent pousser et produire de la biomasse. Les rendements agricoles peuvent ainsi être multipliés par deux ou trois, voire davantage.\nDiversifier les cultures : l'irrigation permet de cultiver des plantes qui nécessitent beaucoup d'eau, comme le riz, les légumes ou les fruits. Cela permet de diversifier l'offre alimentaire et de réduire la dépendance aux cultures pluviale.\nAméliorer la qualité des produits agricoles : l'irrigation permet de garantir une croissance régulière des plantes, ce qui a un impact positif sur la qualité des produits agricoles.La pénurie de maïs qui a frappé la région du Kassaï en 2023 est un exemple des conséquences du retard de la RDC en matière d'irrigation. En effet, le maïs est une culture qui nécessite beaucoup d'eau, et l'absence d'irrigation a rendu les récoltes très vulnérables à la sécheresse. Le tourniquet Sunbeam est solution adaptée pour tous types de cultures",
      statusId: 1,
      createdAt: "2023-12-01T12:24:59.423Z",
      updatedAt: "2023-12-01T12:24:59.423Z",
      userId: 15,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 9,
      name: "La formation HSE",
      videoLink: "",
      imageLink: null,
      description:
        "Bonjour la direction moi c'est Mr David kyobele mukomo je suis le responsable de l'entreprise best company solutions bcs training.\nNous donnons des formations dans plusieurs domaines.\nFormé les travailleurs a bien travaille en sécurité pour éviter les risques professionnels aux travailleurs.\nMerci beaucoup pour votre réponse favorable",
      callId: 1,
      thematicId: 1,
      targetedProblem:
        "Manque de formation au travailleurs .\nPour travailler d'une manière sécuritaires",
      statusId: 1,
      createdAt: "2023-12-01T13:26:00.381Z",
      updatedAt: "2023-12-01T13:26:00.381Z",
      userId: 21,
      thematic: {
        id: 1,
        name: "Transparence et sécurité dans l’artisanat Minier",
        odds: "3, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 10,
      name: "Economie circulaire de production de biogaz avec les déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques ",
      videoLink: "",
      imageLink: null,
      description:
        "La ville de Goma, en République démocratique du Congo, est confrontée à une série de défis environnementaux, notamment la production massive de déchets, l'assainissement insuffisant des voiries et la pollution atmosphérique. Ces défis ont un impact négatif sur la santé publique, la qualité de vie et le climat.\n\nLe projet d'économie circulaire de production de biogaz à partir des déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques à Goma propose une solution innovante pour répondre à ces défis. Ce projet a pour objectif de :\n\n* Réduire la production de déchets en valorisant les déchets organiques et plastiques\n* Améliorer l'assainissement des voiries\n* Protéger le climat\n* Respecter les principes de la responsabilité sociale des entreprises (RSE) et des critères ESG\n\nLe processus\n\nLe projet repose sur un processus circulaire qui permet de transformer les déchets en ressources. Les déchets organiques sont collectés auprès des ménages et des entreprises et sont ensuite transformés en biogaz. Le biogaz est utilisé pour produire de l'électricité et de la chaleur, qui peuvent être utilisées pour alimenter des foyers, des entreprises ou des infrastructures publiques.\n\nLes déchets plastiques sont également collectés et sont ensuite transformés en pavés écologiques. Les pavés écologiques sont fabriqués à partir d'un mélange de déchets plastiques et de sable. Ils sont résistants, durables et respectueux de l'environnement.\n\nLes avantages\n\nLe projet présente de nombreux avantages, notamment :\n\nRéduction de la production de déchets: Le projet permet de réduire la production de déchets en valorisant les déchets organiques et plastiques. Cela contribue à réduire la pollution et à améliorer la gestion des déchets.\nAmélioration de l'assainissement des voiries : Les pavés écologiques sont plus durables que les pavés traditionnels. Ils résistent mieux à l'usure et aux intempéries. Cela permet d'améliorer l'état des voiries et de réduire les coûts d'entretien.\nProtection du climat : La production de biogaz permet de réduire les émissions de gaz à effet de serre. Le biogaz est une source d'énergie renouvelable qui contribue à lutter contre le changement climatique.\nRespect des principes de la RSE et des critères ESG : Le projet contribue à améliorer la santé publique, la qualité de vie et le climat. Il respecte également les principes de la responsabilité sociale des entreprises (RSE) et des critères ESG.\n\nAtteinte des objectifs de l'ODD\n\nLe projet d'économie circulaire de production de biogaz à partir des déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques à Goma contribue à atteindre les objectifs suivants des Objectifs de développement durable (ODD) des Nations Unies :\n\nODD 6 : Accès à l'eau et à l'assainissement : Le projet contribue à améliorer l'assainissement des voiries, ce qui contribue à améliorer l'accès à l'eau et à l'assainissement.\nODD 11 : Villes et communautés durables : Le projet contribue à améliorer l'état des voiries, ce qui contribue à créer des villes et communautés durables.\nODD 13 : Action pour le climat : Le projet contribue à réduire les émissions de gaz à effet de serre, ce qui contribue à lutter contre le changement climatique.\n\nEn définitive, le projet d'économie circulaire de production de biogaz à partir des déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques à Goma est une solution innovante qui présente de nombreux avantages. Ce projet contribue à améliorer la santé publique, la qualité de vie et le climat. Il respecte également les principes de la responsabilité sociale des entreprises (RSE) et des critères ESG.",
      callId: 1,
      thematicId: 4,
      targetedProblem:
        "Ce projet résout les problèmes suivants: \nProduction massive de déchets : Le projet permet de réduire la production de déchets en valorisant les déchets organiques et plastiques. Cela contribue à réduire la pollution et à améliorer la gestion des déchets.\nAssainissement insuffisant des voiries** : Les pavés écologiques sont plus durables que les pavés traditionnels. Ils résistent mieux à l'usure et aux intempéries. Cela permet d'améliorer l'état des voiries et de réduire les coûts d'entretien.\nPollution atmosphérique : La production de biogaz permet de réduire les émissions de gaz à effet de serre. Le biogaz est une source d'énergie renouvelable qui contribue à lutter contre le changement climatique.\n\nCas urgent à résoudre : le tronçon Terminus-BITANKE ici à Goma\n\nLe tronçon Terminus-BITANKE est un tronçon de 1.5 kilomètres qui relie le centre-ville de Goma à la commune de Binza. Ce tronçon est en mauvais état depuis plusieurs années. Les pavés qui ont été posés sont de mauvaise qualité et s'effritent facilement. Cela cause des problèmes de sécurité pour les usagers de la route, notamment les motocyclistes et les automobilistes.\n\nLes problèmes les plus urgents à résoudre sur ce tronçon sont les suivants :\n\nLes pavés s'effritent facilement : Cela cause des nids-de-poule et des trous dans la chaussée. Cela rend la circulation dangereuse et peut causer des accidents.\nLes pavés sont inégaux : Cela cause des vibrations et des secousses pour les usagers de la route. Cela peut provoquer des nausées, des maux de tête et des douleurs dorsales.\nLes pavés sont glissants : Cela rend la circulation dangereuse par temps humide ou pluvieux. Cela peut causer des chutes et des accidents.\n\nLa solution la plus urgente est de remplacer les pavés existants par des pavés écologiques de meilleure qualité. Ces pavés sont plus résistants, plus durables et plus sûrs. Ils contribueront à améliorer la sécurité des usagers de la route et à réduire la pollution atmosphérique.\n\nEn bref, Le projet d'économie circulaire de production de biogaz à partir des déchets organiques pour la fabrication de pavés écologiques à partir des déchets plastiques à Goma est une solution innovante qui présente de nombreux avantages. Ce projet contribuera à améliorer la santé publique, la qualité de vie et le climat. Il est urgent de résoudre le cas du tronçon Terminus-BITANKE pour améliorer la sécurité des usagers de la route.",
      statusId: 1,
      createdAt: "2023-12-01T13:34:38.380Z",
      updatedAt: "2023-12-01T13:34:38.380Z",
      userId: 20,
      thematic: {
        id: 4,
        name: "L’amélioration de la mobilité urbaine",
        odds: "9, ",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 11,
      name: "Mécanisation légère pour une agriculture Responsable en RDC",
      videoLink: "",
      imageLink: null,
      description:
        "Notre projet propose une solution innovante de mécanisation légère pour moderniser et optimiser les pratiques agricoles.\n Nos équipements de pointe offrent une efficacité accrue tout en réduisant les coûts opérationnels pour les agriculteurs.\nCes équipements offrent une productivité améliorée, une réduction des efforts manuels, une adaptabilité à diverses cultures et une empreinte environnementale réduite.\n",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Efforts Physiques : En diminuant la nécessité d'efforts manuels intensifs, la mécanisation légère soulage les agriculteurs des tâches physiquement exigeantes, réduisant ainsi la fatigue et les risques de blessures.\nOptimisation des Opérations : Les équipements légers offrent une productivité accrue, permettant un travail plus rapide et plus précis, ce qui se traduit par des récoltes plus abondantes et de meilleure qualité.\nMoindre Dépendance à la Main-d'œuvre : En remplaçant une partie du travail manuel par des machines légères, les coûts liés à la main-d'œuvre peuvent être réduits, surtout dans les zones où la main-d'œuvre est rare ou coûteuse.\nFlexibilité des Équipements : La mécanisation légère peut être adaptée à différents types d'exploitations et à diverses cultures, offrant ainsi une solution polyvalente aux besoins variés des agriculteurs.\nRéduction de l'Impact Environnemental : En intégrant des pratiques et des technologies plus respectueuses de l'environnement, la mécanisation légère peut contribuer à une agriculture plus durable en minimisant l'utilisation de ressources et en réduisant les émissions de gaz à effet de serre.\nAdoption de Nouvelles Technologies : La mécanisation légère favorise l'adoption de technologies innovantes dans le secteur agricole, stimulant ainsi la modernisation et l'efficacité des exploitations.\n",
      statusId: 1,
      createdAt: "2023-12-01T14:50:34.392Z",
      updatedAt: "2023-12-01T14:50:34.392Z",
      userId: 23,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 12,
      name: "XXXXX",
      videoLink: "https://youtu.be/xxx",
      imageLink: null,
      description: "XXXXXX",
      callId: 1,
      thematicId: 2,
      targetedProblem: "XXXXX",
      statusId: 1,
      createdAt: "2023-12-01T19:25:34.705Z",
      updatedAt: "2023-12-01T19:25:34.705Z",
      userId: 1,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 13,
      name: "Zoobambo",
      videoLink: "",
      imageLink: null,
      description:
        "La ville de Goma est une ville qui prend du jour au jour de l'expansion et a besoin d'un endroit où les habitants pourront contempler la nature et les animaux en toute quiétude. Raison pour laquelle nous avons pour projet de créér un zoo aux alentours de la ville car ce projet, nous le pensons pourrait générer à long terme un grand bénéfice en recevant non seulement la visite des habitants de Goma mais aussi ceux des villes voisines (Bukavu, Uvira, Beni, Butembo,...)",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Notre solution résoud le problème du manque de zoo dans la partie est de notre pays.",
      statusId: 1,
      createdAt: "2023-12-02T05:52:05.406Z",
      updatedAt: "2023-12-02T05:52:05.406Z",
      userId: 31,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 14,
      name: "Test 5",
      videoLink: "https://youtu.be/PheyzzUt3ao",
      imageLink: null,
      description: "test 5",
      callId: 1,
      thematicId: 2,
      targetedProblem: "test 5",
      statusId: 1,
      createdAt: "2023-12-02T07:04:36.810Z",
      updatedAt: "2023-12-02T07:04:36.810Z",
      userId: 1,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 15,
      name: "j",
      videoLink: "",
      imageLink: null,
      description: "n",
      callId: 1,
      thematicId: 3,
      targetedProblem: "l",
      statusId: 1,
      createdAt: "2023-12-02T10:40:01.716Z",
      updatedAt: "2023-12-02T10:40:01.716Z",
      userId: 17,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 16,
      name: "Solution alternative à appliquer pour éviter les embouteillages inutiles ",
      videoLink: "",
      imageLink: null,
      description:
        "En étant environnementaliste, notre travail consistera d’effectuer une descente sur terrain en fin de sensibiliser la population en général mais surtout beaucoup plus les chauffeurs en ce qui concerne le respect du code de la route et avec l’aide des bourgmestres de communes et les policiers routier, nous allons appliquer cette solution ensemble .",
      callId: 1,
      thematicId: 4,
      targetedProblem:
        "Cette solution nous permettra de mettre en place une cartographie bien déterminée de chaque arrêt routier en fin d’éviter les embouteillages inutiles dans la ville.",
      statusId: 1,
      createdAt: "2023-12-02T11:07:23.111Z",
      updatedAt: "2023-12-02T11:07:23.111Z",
      userId: 37,
      thematic: {
        id: 4,
        name: "L’amélioration de la mobilité urbaine",
        odds: "9, ",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 17,
      name: "OasisApp ",
      videoLink: "",
      imageLink: null,
      description:
        "« Go anywhere, Get anything, pay anyone.»\n\nOasis App est une solution développée par la société CRESTIF SARL, dans le but de résoudre le problème de la mobilité et celle de l'interopérabilité que les utilisateurs rencontrent lors de l'accès aux services financiers une épine dorsale dans l’émergence du commerce électronique.\nPar mobilité nous sous-entendons une plateforme au sein de laquelle les utilisateurs ont accès à toute une agglomérations des services de leurs quotidien. (Nous voulons participer à l’augmentation de l’inclusion financière).\n\nImaginez une plateforme qui InterConnect plusieurs portefeuilles électroniques (mobile Banking, mobile money, crypto monnaie...) permettant aux marchands d'encaisser des paiements venant de n'importe quelle porte feuille, en n'importe quelle devise, dans n'importe quel lieu en utilisant juste un smartphone comme terminal.\n\nLa plateforme offre aux petits commerçants la possibilité d'acheter ou de proposer des biens et services sans connaissances technologiques.",
      callId: 1,
      thematicId: 2,
      targetedProblem:
        "Étant donné que notre solution s’inscrit dans l’optique d’une super App. Nous avions catalogué les problèmes qui nous ont permis d’apporter cette solution. Le but est de rendre aussi facile l’accès aux services financiers que l’utilisation de la messagerie instantanée.\n\nProblème à résoudre :\n•Problème de la mobilité sur un grand réseau\n•Interopérabilité d'un portefeuille électronique\n•Accès à distance aux services disponible dans votre environnement\n•Absence d'une plateforme permettant aux marchand d'atteindre les consommateurs\n•Promouvoir des services en B2B, C2C, B2C et C2C des marchands partenaires.",
      statusId: 1,
      createdAt: "2023-12-02T20:16:08.133Z",
      updatedAt: "2023-12-02T20:16:08.133Z",
      userId: 43,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 18,
      name: "Plateforme de partage de compétences pour l'inclusion financière numérique.",
      videoLink: "",
      imageLink: null,
      description:
        "La mise en place d'une plateforme en ligne qui met en relation des experts en inclusion financière numérique avec des communautés locales à faible revenu. Les experts peuvent partager leurs connaissances et compétences pour aider les individus et les petites entreprises à accéder aux services financiers numériques, tels que les comptes bancaires mobiles, les paiements électroniques et les microcrédits. La plateforme peut également fournir des ressources éducatives et des outils pratiques pour renforcer les compétences financières des utilisateurs.",
      callId: 1,
      thematicId: 2,
      targetedProblem:
        "Pas de pauvreté en favorisant l'accès aux services financiers pour les populations à faible revenu.\nTravail décent et croissance économique - en soutenant le développement des petites entreprises et de l'entrepreneuriat.\nIndustrie, innovation et infrastructure - en promouvant l'utilisation des technologies numériques pour l'inclusion financière.\nRéduction des inégalités - en réduisant l'écart d'accès aux services financiers entre les populations à faible revenu et les autres.",
      statusId: 1,
      createdAt: "2023-12-02T21:53:04.722Z",
      updatedAt: "2023-12-02T21:53:04.722Z",
      userId: 44,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 19,
      name: "KAPPI",
      videoLink: "",
      imageLink: null,
      description:
        "Kappi est une application web qui permet la création simplifiée de facture, un partage et un suivit de retard instantanément ",
      callId: 1,
      thematicId: 2,
      targetedProblem:
        "Le problème de création de factures ( plus compliqué avec les ERP et plus compliqué encore à la création manuelle ) et le partage de ces dernières ",
      statusId: 1,
      createdAt: "2023-12-03T04:30:41.467Z",
      updatedAt: "2023-12-03T04:30:41.467Z",
      userId: 45,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 20,
      name: "Titre de test",
      videoLink: "",
      imageLink: null,
      description: "Teste",
      callId: 1,
      thematicId: 2,
      targetedProblem: "Test",
      statusId: 1,
      createdAt: "2023-12-03T15:57:25.175Z",
      updatedAt: "2023-12-03T15:57:25.175Z",
      userId: 46,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 21,
      name: "Goma Lima",
      videoLink: "https://youtu.be/XQ6mu-csoD8",
      imageLink: null,
      description:
        "Goma lima est un projet qui vise à améliorer le taux de production et transformation des légumes utilisés régulièrement dans la cuisine de la ville entre autre : L'oignon et la tomate",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Goma Lima est une solution qui existe issue du problème de non accès aux légumes que fait face la population de Goma  suite aux guerres  qui bloquent l'accès aux zones de production des légumes,  mais aussi Goma Lima vient palier au problème de hausse de prix de légumes mais aussi à l'importation; enfin Goma lima ne se limite pas seulement à résoudre les problèmes de la production et la commercialisation, Goma Lima a aussi une académie Agricole qui encadre les jeunes passionnés par l'agroalimentaire à avoir toutes les notions sur la production ainsi que la commercialisation des produits agricoles",
      statusId: 1,
      createdAt: "2023-12-03T18:49:12.391Z",
      updatedAt: "2023-12-03T18:49:12.391Z",
      userId: 49,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 22,
      name: "Créer une plate forme ou application de paiement des taxes et impôts en ligne ",
      videoLink: "Pas encore ",
      imageLink: null,
      description:
        "La solution est de permettre chaque opérateur économique de faire son paiement là où il se retrouve, et avoir un contrôle régulier sur les suivis de ses paiements et gagner en temps également.\nPermettre aussi une traçabilité à l' état congolais.",
      callId: 1,
      thematicId: 2,
      targetedProblem:
        "1. Le manque à gagner de l' état congolais\n2.  faire un long fil à des guichets pour payer ses taxes et impôts parfois on perds même toute la journée en attente.\n",
      statusId: 1,
      createdAt: "2023-12-04T00:14:18.619Z",
      updatedAt: "2023-12-04T00:14:18.619Z",
      userId: 54,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 23,
      name: "Transformation des soja en produits à base de soja tel que la farine de soja, le lait de soja, la nourriture pour les animaux ( vache, chèvre,mouton...)",
      videoLink: "",
      imageLink: null,
      description:
        "La transformation de soja permettra d'éradiquer la malnutrition qui ravage notre province en particulier et notre pays en général (RDC), A contribuer à la consommation des protéines vertes mais aussi a approvisionner les éleveurs en nourriture pour leurs animaux.",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Cette solution résous le problème de malnutrition tel que la kwachorcore, béribéri et le marasme. Des maladies due au manque de protéines vue le pouvoir d'achat très bat des congolais et l'incapacité a se procurer du lait et la viande des animaux tel que la vache, la chèvre...",
      statusId: 1,
      createdAt: "2023-12-04T06:23:20.009Z",
      updatedAt: "2023-12-04T06:23:20.009Z",
      userId: 59,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 24,
      name: "",
      videoLink: "",
      imageLink: null,
      description:
        "un service de transport appelé EXCELLENCE VIE,  qui met de véhicule de transport Booking avec un système de surveillance de la route, des clients et du chauffeur associer à la géolocalisation, caméra de surveillance (pour garder l'historique de tous les clients à bord et limiter la tracasserie policière), signalisation de la personne référence à destination...",
      callId: 1,
      thematicId: 4,
      targetedProblem:
        "Les secteurs des transports présente un grand danger pour ma ville avec les enlèvements qui se multiplient, le vol de véhicule et la sécurité est devenue un grand besoin dans les grandes villes...les mauvaise état de parking des véhicules..",
      statusId: 1,
      createdAt: "2023-12-04T06:51:53.435Z",
      updatedAt: "2023-12-04T06:51:53.435Z",
      userId: 52,
      thematic: {
        id: 4,
        name: "L’amélioration de la mobilité urbaine",
        odds: "9, ",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 25,
      name: "Fabrication des machines à granulé pour la production des aliments des volailles",
      videoLink: "https://youtube.com/shorts/xassfCQUu38?si=FV5uaPyMjvKQMU8k",
      imageLink: null,
      description:
        "Notre solution est une machine à granulé permettant de produire localement les aliments des volailles (poules,cailles, dindon) et bétail (vaches, lapins, chèvres). ",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "1.Le coût élevé de l'élevage, ceci est en grande partie lier au coût de l'aliment;\n2.Coût élevé de la procuration de machines à granulé qui sont importer, qui prennent beaucoup de temps et un coût élevé de transport;\n3. \n\n",
      statusId: 1,
      createdAt: "2023-12-04T07:21:03.680Z",
      updatedAt: "2023-12-04T07:21:03.680Z",
      userId: 61,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 26,
      name: "Payment des voitures en ligne",
      videoLink: "",
      imageLink: null,
      description:
        "Notre solution permet de vendre les véhicules qui sont déjà sur place peut importe la ville nous avons des collaborateurs des parkings dans toutes les villes de la RDC et la on a accès a une diversité des voitures qui sont permettdéjà sur place en RDC ",
      callId: 1,
      thematicId: 2,
      targetedProblem:
        "Notre solution permettra aux gens qui désire acheter un véhicule d'avoir des informations rapidement sur un véhicule et un prix exact et faire l'achat directement sur la plateforme sans se déplacer donc nous facilitons la vie dans cette partie du business ",
      statusId: 1,
      createdAt: "2023-12-04T09:39:28.851Z",
      updatedAt: "2023-12-04T09:39:28.851Z",
      userId: 64,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 27,
      name: "Exploitation minière en toute sécurité en réduisant le risque d'eboulement et en respectant son environnement local ",
      videoLink: "",
      imageLink: null,
      description:
        "1.Stabilisé la mine en connaissant le comportement mécanique de la roche  pour avoir un soutènement avec une grande facteur de sécurité \n1. Minimiser la projection de blocs en cas travaux tir en respectant les différent paramètres de fragmentation \n3. Connaissance sur l'impact de notre minerais face à la santé Humaine, éviter l'évaporation de particule solide  qui peut nouire l'environnement. Prendre de bonnes précautions lors de transport de minerais brut \n\n4. Concevoir  un système d'aérage adapté pour permettre d'avoir l'air qui répond au norme de respiration \n",
      callId: 1,
      thematicId: 1,
      targetedProblem:
        "Les problèmes d'exploitation minière dans de mines ou carrières non stable,  qui ne respecte pas son environnement en polluants chaque son environnement mais aussi qui donne une mauvaise respiration au travailleur par manque d'air frais\nNon respect de paramètres de fragmentation qui conduit à des projection de blocs qui cause de mort dans de mines ",
      statusId: 1,
      createdAt: "2023-12-04T11:49:34.620Z",
      updatedAt: "2023-12-04T11:49:34.620Z",
      userId: 81,
      thematic: {
        id: 1,
        name: "Transparence et sécurité dans l’artisanat Minier",
        odds: "3, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 28,
      name: "MALIFOOD ",
      videoLink: "",
      imageLink: null,
      description:
        "malifood est un céréale mis au point pour garantir une bonne santé des enfants malnutris il a été créé en 2020 par des jeunes entrepreneurs congolais vivant à lubumbashi.\nnotre but est de venir en aide aux enfants qui n´ont pas la chance d'atteindre la fleure de l'âge et décède à cause de problèmes de manque d'aliments adéquats ",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "notre solution résoud le problème de malnutrition des enfants de moins de 5 ans vivant en RDC",
      statusId: 1,
      createdAt: "2023-12-04T11:51:25.917Z",
      updatedAt: "2023-12-04T11:51:25.917Z",
      userId: 83,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 29,
      name: "Mécanisation agricole",
      videoLink: "",
      imageLink: null,
      description:
        "La mécanisation a le potentiel d’accroître la production, d’améliorer le timing des opérations, \r\nd’élargir l’application d’énergie à l’amélioration du traitement des cultures, de l’irrigation et \r\ndes infrastructures, de compenser les pénuries de main-d’œuvre et d’alléger la pénibilité du\r\nlabeur, ce qui est particulièrement important lorsque la main-d’œuvre qui vieillit et se \r\nféminise continue à utiliser principalement la houe manuelle pour la culture primaire.",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Les problèmes qui se posent pour la mécanisation\r\nsont nombreux:\n-les petits exploitants vivent souvent dans des conditions de vie précaires et perçoivent \r\ndonc des revenus irréguliers et bas; \r\n-le coût des intrants de la mécanisation (et autres intrants) est souvent hors de portée \r\ndes familles paysannes; \r\n-les faibles rendements ne permettent pas de mettre de l’argent de côté, ce qui conduit \r\nà une faible demande de mécanisation et à une productivité de plus en plus faible;\r\n-les compétences techniques nécessaires pour adopter et exploiter de manière rentable \r\nles machines agricoles font défaut;\r\n-les services contractuels de machines proposés par l’État ont pratiquement disparu à \r\ncause de leur manque de rentabilité;\r\n-la fabrication locale de machines ne s’est pas suffisamment développée pour être en \r\nmesure de fournir des machines sophistiquées, a fortiori des tracteurs;\r\n-les services de réparation sont généralement satisfaisants pour les technologies \r\nsimples (actionnées à la main ou par des animaux); mais en ce qui concerne les \r\néquipements motorisés, la fourniture de pièces de rechange peut être lente et causer de \r\nlongues périodes de chômage, habituellement à des moments critiques de l’année. \r",
      statusId: 1,
      createdAt: "2023-12-04T12:36:37.289Z",
      updatedAt: "2023-12-04T12:36:37.289Z",
      userId: 73,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 30,
      name: "Monitoring et Mécanismes d'alerte précoce liés aux chaînes d'approvisionnement des minerais de 3T et de l'or dans les provinces du Nord et du Sud-Kivu. ",
      videoLink: "",
      imageLink: null,
      description:
        "La solution consiste à mettre en place un outil digital au niveau local DATAWAY pour faciliter la collecte et documentation des cas de fraude, corruption et de contrebande minière. \nCette outil va faciliter au même moment l'accès aux informations liées aux risques et incidents en déhors de la traçabilité, tels que les cas de violences basées sur le genre, l'esclavage moderne et sur les risques et incidents environnementaux. \nL'outil donnera la possibilité de proposer des actions correctives à travers la plateforme. \nEn déhors de l'outil, nous allons mettre en place des points focaux qui seront formés sur la collecte des données sensibles à travers l'outil mais aussi les formations et les sensibilisations sur la lutte contre la fraude et la corruption ainsi que leurs impacts sur les communautés aux profits des acteurs des chaînes seront organisées. \n\nEn déhors de cela, les sites miniers concernées seront directement localisable à travers cette plateforme. Les coordonnées GPS et les informations nécessaires des ZEA (zones d'exploitations artisanales) seront directement intégrées à travers l'outil. \n\nLa chaine de l'information sera établie de la manière suivante : \n- OSC, Structure de suivi des activités minières et les point focaux se chargeront de la collecte d'informations.\n- TFP-RDC réçoit les informations, les analyse et fait croisement avant de les intégrer sur la plateforme afin de donner accès au gouvernement à ces données. \n- Une fois, le gouvernement saisi de la situation, les données peuvent être partagés avec d'autres acteurs internationaux. Ceci pourrait dépendre de termes de collaboration entre le bailleur du projet et TFP-RDC. \n- Les acteurs internationaux et nationaux pourrait ainsi proposer à travers la platerforme des actions correctives qui devront être mises en oeuvre pour renforcer la traçabilité des minerais ou lutter contre les autres problèmes sociaux et environnementaux. ",
      callId: 1,
      thematicId: 1,
      targetedProblem:
        "Plusieurs fléaux minent le secteur des ressources minières à l’Est du pays, en particulier le Nord et le Sud-Kivu, principalement le trafic illicite transfrontalier, la fraude et la contrebande minières, l’évasion fiscale, le blanchiment des flux financiers, le soutien direct et indirect aux forces de sécurités publiques/privées et les groupes armés, la corruption et les fausses déclarations de l’origine des minerais, l’implication des personnes non éligibles dans les activités minières, etc.; créant des tensions et entraves à la paix, la stabilité, la sécurité et le développement dans la région.\n\nFace à tous les problèmes créés par l’exploitation et le commerce illicites des minerais et surtout de la criminalisation des produits miniers en provenance de la région des Grands Lacs, les voix se sont levées d’abord pour condamner les conflits, les guerres, les violations flagrantes des droits humains, le non-respect des normes environnementales, etc. Mais peu d’actions à l’interne ont été menées pour mobiliser les acteurs locaux à mettre en place des mécanismes de base, au niveau communautaire, susceptibles de lutter contre ses fléaux.\n\nPourtant, il existe de nombreux organes de lutte contre la corruption, fraude et contrebande minière, qui, associés au plaidoyer et actions des organisations de la société civile, pourraient engagées des actions d’urgence au niveau local, au profit des communautés, pour endiguer ces phénomènes sur terrain.\n\nEu égard à ce qui précède, Together For Peacebuilding (TFP-RDC) va collaborer avec la Commission Nationale de Lutte contre la Fraude Minière (CNLFM) et la Commission de Suivi des Activités Minières (CSAM), pour mener des actions en vue de sensibiliser les acteurs des chaînes d'approvisionnement sur la lutte contre la corruption, la fraude et la contrebande minières ; mais aussi et surtout faciliter à l'accès à l'information à travers un outil digital de collecte des données. \n",
      statusId: 1,
      createdAt: "2023-12-04T13:05:15.934Z",
      updatedAt: "2023-12-04T13:05:15.934Z",
      userId: 92,
      thematic: {
        id: 1,
        name: "Transparence et sécurité dans l’artisanat Minier",
        odds: "3, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 31,
      name: "Exploitons nos minerais dans la lumière ",
      videoLink: "",
      imageLink: null,
      description:
        "De par notre projet intitulé \"Exploitons nos minerais dans la lumière\", nous visons à rendre non occulte l'exploitation des minerais en République Démocratique du Congo. Nous souhaitons à rendre ce secteur totalement normal pour tout celui ou celle qui souhaite s'y aventurer.",
      callId: 1,
      thematicId: 1,
      targetedProblem:
        "Ce projet dénommé \"Exploitons nos minerais dans la lumière\", nous permettra à résoudre les problèmes suivant :\n- La publication de tous les rapports comptables des exploitants traitant avec les artisans chaque année ;\n- L'installation de l'administration de L'État congolais même au plus profond de nos villages afin de limiter les trafics illicites de nos minerais.\n- Convaincre nos artisans que l'exploitation des minerais est tout à fait normal comme faire de l'agriculture ou de l'élevage ; d'où il suffirait simplement de se conformer aux règles de l'État congolais.\n- Contrôler la fixation des prix sur les minerais produits par les artisans.",
      statusId: 1,
      createdAt: "2023-12-04T14:12:59.458Z",
      updatedAt: "2023-12-04T14:12:59.458Z",
      userId: 101,
      thematic: {
        id: 1,
        name: "Transparence et sécurité dans l’artisanat Minier",
        odds: "3, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 32,
      name: "WOMEN entrepreneuriat ",
      videoLink: "",
      imageLink: null,
      description:
        "Formé des jeunes femmes aux  différents métiers professionnel dans les zones reculées pour leur permettre d'être autonome \nTels que \nL'informatique\nLa création des objets artisanale \nLa création de leurs propres entreprise avec leur talents personnelles ",
      callId: 1,
      thematicId: 2,
      targetedProblem:
        "Ma solution résoud les problème des jeunes filles mère dans nos communautés a cause de manque d'éducation plusieurs filles ce livre aux hommes,le manque de la connaissance personnel de ceux talent,don qu'elle sont en eux et n'exploite pas,demantir cette théorie qui dit que pour réussir faut faire de longs études qui complète faux.et le mariage précoce la femme qui pensé le secours de ça vie c'est l'homme tandis que une homme n'est pas une banque.notre communauté et remplie de théorie qui empêche la femme des épanouir.pourquoi pas commence par aidé les femmes avoir conscience de leurs potentiel et réussir ",
      statusId: 1,
      createdAt: "2023-12-04T14:46:48.509Z",
      updatedAt: "2023-12-04T14:46:48.509Z",
      userId: 67,
      thematic: {
        id: 2,
        name: "Inclusion financière digitale des opérateurs informels",
        odds: "1, 8, 10",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
    {
      id: 33,
      name: "Mise en place d’une unité locale de transformation de manioc en chips ",
      videoLink: "",
      imageLink: null,
      description:
        "Nous travaillons de sorte à offrir une alternative plus saine à la traditionnelle de chips de sorte à lutter contre les maladies cardiovasculaires  et voir également le risque élevé de cancer et d'obésité ",
      callId: 1,
      thematicId: 3,
      targetedProblem:
        "Les aliments qui contiennent trop de matières grasses, trop de sels, conservateurs,  colorant et autres addictifs chimique nuisible à la santé sont considérés comme étant des aliments ayant des mauvaises répercussions sur la santé à l'exemple des maladies cardiovasculaires,  d'une hausse du taux de cholestérol,  de l'acidité dans le sang ainsi que de risque d'obésité et de cancers lorsque ce dernier est d'une couleur foncée ",
      statusId: 1,
      createdAt: "2023-12-04T17:36:16.568Z",
      updatedAt: "2023-12-04T17:36:16.568Z",
      userId: 67,
      thematic: {
        id: 3,
        name: "Mécanisation légère agricole",
        odds: "2, 8",
        createdAt: "2023-11-30T18:03:05.564Z",
        updatedAt: "2023-11-30T18:03:05.564Z",
      },
    },
  ];

  const [solutions, setSolutions] = useState(data);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleDetailsClick = (solutionId) => {
    setDetailsSolutionId(solutionId);
  };

  const handleDetailsClose = () => {
    setDetailsSolutionId(null);
  };

  const ReadOnlyRow = ({ solution, handleDetailsClick, handleDeleteClick }) => {
    return (
      <tr>
        <td className="wd-5p text-center">{solution.id}</td>
        <td>{truncateText(solution.name, 20)}</td>
        <td>{truncateText(solution.description, 20)}</td>
        <td>{truncateText(solution.targetedProblem, 20)}</td>
        <td>{solution.createdAt}</td>
        <td>{solution.thematic.name}</td>
        <td>
          <Button
            variant=""
            className="btn btn-primary me-1"
            type="button"
            onClick={() => handleDetailsClick(solution.id)}
          >
            Details
          </Button>
          {/* <Button
            variant=""
            className="btn btn-danger me-1"
            type="button"
            onClick={() => handleDeleteClick(solution.id)}
          >
            Delete
          </Button> */}
        </td>
      </tr>
    );
  };

  const getSolutionDetails = (solutionId) => {
    const solution = data.find((s) => s.id === solutionId);

    if (!solution) {
      return <p>Solution not found.</p>;
    }

    return (
      <div>
        <p>
          <strong>Name:</strong> {solution.name}
        </p>
        <p>
          <strong>Description:</strong> {solution.description}
        </p>
        <p>
          <strong>Targeted Problem:</strong> {solution.targetedProblem}
        </p>
        <p>
          <strong>Created At:</strong> {solution.createdAt}
        </p>
        {/* Ajoutez d'autres détails au besoin */}
      </div>
    );
  };

  const handleDeleteClick = (solutionId) => {
    const newSolutions = [...solutions];

    const index = solutions.findIndex((solution) => solution.id === solutionId);

    newSolutions.splice(index, 1);

    setSolutions(newSolutions);
  };

  // Calculer l'index de début et de fin pour l'affichage actuel
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = solutions.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app-container">
      <Table className="table table-bordered text-nowrap border-bottom">
        <thead>
          <tr>
            <th className="wd-5p text-center">ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Target</th>
            <th>Date création</th>
            <th>Thématique</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((solution) => (
            <Fragment key={solution.id}>
              <ReadOnlyRow
                solution={solution}
                handleDetailsClick={handleDetailsClick}
                handleDeleteClick={handleDeleteClick}
              />
            </Fragment>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: Math.ceil(solutions.length / itemsPerPage) }).map(
          (item, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>

      <Modal
        show={detailsSolutionId !== null}
        onHide={handleDetailsClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Solution Details
          </Modal.Title>
          <Button
            variant=""
            className="btn btn-close"
            onClick={handleDetailsClose}
          >
            x
          </Button>
        </Modal.Header>
        <Modal.Body>{getSolutionDetails(detailsSolutionId)}</Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary wd-20p"
            onClick={handleDetailsClose}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
