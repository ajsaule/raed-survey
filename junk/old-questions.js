  const json = {
    title: 'Sondage pour Raed',
    showProgressBar: 'top',
    goNextPageAutomatic: true,
    showNavigationButtons: true,
    completedHtml: "<h1>Merci d'avoir complété notre sondage</h1>", // Thank you message
    pages: [
      {
        // Page 1
        questions: [
          {
            name: 'nom',
            type: 'text',
            title: "S'il vous plaît entrez votre nom:",
            placeHolder: 'Jon Snow',
            isRequired: true,
            autoComplete: 'name',
          },
          {
            name: 'age',
            type: 'text',
            title: 'Veuillez entrer votre âge:',
            placeHolder: '23',
            isRequired: true,
            autoComplete: 'age',
          },
          {
            type: 'comment',
            name: 'presentezVous',
            title: 'Présentez-vous',
            placeholder:
              'Vous (Qui êtes-vous? Vos études? Votre vécu professionnel?)',
          },
          {
            type: 'comment',
            name: 'votreEnvie',
            title: 'Présentez votre envie',
            placeholder:
              'Votre envie (Logique, développement, création, reprise, horizon?)',
          },
        ],
      },
      {
        // Page 2
        questions: [
          {
            type: 'comment',
            name: 'professionnelle',
            title: 'Vous finalité',
            placeholder:
              'Votre envie professionnelle (Qu’est-ce que vous voulez pour votre avenir? Comment vous voyez-vous d’ici trois ans?)',
          },
          {
            type: 'comment',
            name: "objectifs",
            title: 'Vous objectifs',
            placeholder:
              "Vous objectifs (Quels sont vos objectifs professionnels à plus court terme? Comment vous voyez-vous d'ici 3 mois?)",
          },
        ],
      },
      {
        // Page 3
        questions: [
          {
            type: 'radiogroup',
            name: 'demarcheEnterpeneuriale',
            title:
              'Votre démarche entrepreneuriale (Dans quelle démarche entrepreneuriale souhaitez vous vous lancer)',
            showNoneItem: true,
            // colCount: 4,
            choices: [
              'Vous souhaitez lancer de nouveaux projets dans votre entrepriset',
              "Vous réfléchissez à la création d'une entreprise",
              'Vous souhaitez céder votre entreprise',
              "Vous réfléchissez à la reprise d'entreprise",
            ],
          },
          {
            type: 'comment',
            name: 'aucun',
            title: 'Si aucun, veuillez préciser',
          },
        ],
      },
      {
        // Page 4
        questions: [
          {
            type: 'radiogroup',
            name: 'lesImprevus',
            title: 'Les imprévus me dérangent énormément',
            showOtherItem: true,
            choices: [
              'Pas du tout correspondant',
              'Un peu correspondant',
              'Assez correspondant',
              'Très correspondant',
              'Tout à fait correspondant',
            ],
          },
          {
            type: 'radiogroup',
            name:
              'caMeFrustre',
            title: 'Ça me frustre de ne pas avoir toute linformation dont jai besoin',
            showOtherItem: true,
            choices: [
              'Pas du tout correspondant',
              'Un peu correspondant',
              'Assez correspondant',
              'Très correspondant',
              'Tout à fait correspondant',
            ],
          },
        ],
      },
      {
        // Page 5
        questions: [
          {
            type: 'radiogroup',
            name: "lincertitude",
            title: "L'incertitude m'empêche de profiter pleinement de la vie",
            showOtherItem: true,
            choices: [
              'Pas du tout correspondant',
              'Un peu correspondant',
              'Assez correspondant',
              'Très correspondant',
              'Tout à fait correspondant',
            ],
          },
          {
            type: 'radiogroup',
            name: 'toutPrevenir',
            title: 'On devrait tout prévenir pour éviter les surprises',
            showOtherItem: true,
            choices: [
              'Pas du tout correspondant',
              'Un peu correspondant',
              'Assez correspondant',
              'Très correspondant',
              'Tout à fait correspondant',
            ],
          },
        ],
      },
      {
        // Page 6
        questions: [
          {
            type: 'comment',
            name: 'votreEnvieDeux',
            title: 'Votre envie professionnelle',
            placeholder:
              'Qu’est-ce que vous voulez pour votre avenir? Comment vous voyez-vous d’ici trois ans?',
          },
          {
            type: 'comment',
            name: 'vosObjectifs',
            title: 'Vos objectifs',
            placeholder:
              "Quels sont vos objectifs professionnels à plus court terme? Comment vous voyez-vous d'ici 6 mois?",
          },
          {
            type: 'comment',
            name: 'etRessources',
            title: 'Moyens et ressources',
            placeholder:
              'De quels moyens disposez-vous? Quelles sont vos ressources financières, matérielles, humaines?',
          },
        ],
      },
      {
        // Page 7
        questions: [
          {
            type: 'comment',
            name: 'indicateurs',
            title: 'Indicateurs',
            placeholder:
              'Que vous fixez-vous comme cap à atteindre? Quel seuil vous fixez-vous?',
          },
          {
            type: 'comment',
            name: 'tachesEffectuer',
            title: 'Tâches à effectuer',
            placeholder:
              "Quels sont les grandes tâches à effectuer? Quel est votre plan d'action?",
          },
          {
            type: 'comment',
            name: 'acteurs',
            title: 'Acteurs',
            placeholder:
              'Qui sont les acteurs impliqués dans ce projet? Quelles seront les personnes impactées par ce projet?',
          },
        ],
      },
    ],
  }