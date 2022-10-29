import React from 'react'

import * as Survey from 'survey-react'
import showdown from 'showdown'

import 'survey-react/defaultV2.css'
import 'survey-react/modern.css'
import './index.css'
import './App.css'

// Survey.StylesManager.applyTheme('modern')
Survey.StylesManager.applyTheme('defaultV2')

function App() {
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
            name: 'âge',
            type: 'text',
            title: 'Veuillez entrer votre âge:',
            placeHolder: '23',
            isRequired: true,
            autoComplete: 'age',
          },
          {
            type: 'comment',
            name: 'Présentez-vous et présentez votre envie',
            title: 'Présentez-vous',
            placeholder:
              'Vous (Qui êtes-vous? Vos études? Votre vécu professionnel?)',
          },
          {
            type: 'comment',
            name: 'Votre envie (Logique, développement, création, reprise, horizon?)',
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
            name: 'Votre envie professionnelle (Qu’est-ce que vous voulez pour votre avenir? Comment vous voyez-vous d’ici trois ans?)',
            title: 'Vous finalité',
            placeholder:
              'Votre envie professionnelle (Qu’est-ce que vous voulez pour votre avenir? Comment vous voyez-vous d’ici trois ans?)',
          },
          {
            type: 'comment',
            name: "Vos objectifs (Quels sont vos objectifs professionnels à plus court terme? Comment vous voyez-vous d'ici 3 mois?)",
            title: 'Vous objectifs',
            placeholder:
              "os objectifs (Quels sont vos objectifs professionnels à plus court terme? Comment vous voyez-vous d'ici 3 mois?)",
          },
        ],
      },
      {
        // Page 2
        questions: [
          {
            type: 'radiogroup',
            name: 'Votre démarche entrepreneuriale (Dans quelle démarche entrepreneuriale souhaitez vous vous lancer)',
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
            name: 'autre-precisez',
            title: 'Si aucun, veuillez préciser',
          },
        ],
      },
      { // Page 3 
        questions: [
          {
            type: 'radiogroup',
            title: 'Les imprévus me dérangent énormément',
            name: 'Les imprévus me dérangent énormément',
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
            title:
              'Ça me frustre de ne pas avoir toute linformation dont jai besoin',
            name: 'Ça me frustre de ne pas avoir toute linformation dont jai besoin',
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
      { // Page 4
        questions: [
          {
            type: 'radiogroup',
            title: "L'incertitude m'empêche de profiter pleinement de la vie",
            name: "L'incertitude m'empêche de profiter pleinement de la vie",
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
            title: 'On devrait tout prévenir pour éviter les surprises',
            name: 'On devrait tout prévenir pour éviter les surprises',
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
            type: 'comment',
            name: 'Votre envie professionnelle',
            title: 'Votre envie professionnelle',
            placeholder:
              'Qu’est-ce que vous voulez pour votre avenir? Comment vous voyez-vous d’ici trois ans?',
          },
          {
            type: 'comment',
            name: 'Vos objectifs',
            title: 'Vos objectifs',
            placeholder:
              "Quels sont vos objectifs professionnels à plus court terme? Comment vous voyez-vous d'ici 6 mois?",
          },
          {
            type: 'comment',
            name: 'Moyens et ressources',
            title: 'Moyens et ressources',
            placeholder:
              'De quels moyens disposez-vous? Quelles sont vos ressources financières, matérielles, humaines?',
          },
        ],
      },
      { // Page 6
        questions: [
          {
            type: 'comment',
            name: 'Indicateurs',
            title: 'Indicateurs',
            placeholder:
              'Que vous fixez-vous comme cap à atteindre? Quel seuil vous fixez-vous?',
          },
          {
            type: 'comment',
            name: 'Tâches à effectuer',
            title: 'Tâches à effectuer',
            placeholder:
              "Quels sont les grandes tâches à effectuer? Quel est votre plan d'action?",
          },
          {
            type: 'comment',
            name: 'Acteurs',
            title: 'Acteurs',
            placeholder:
              'Qui sont les acteurs impliqués dans ce projet? Quelles seront les personnes impactées par ce projet?',
          },
        ],
      },
    ],
  }

  const survey = new Survey.Model(json)

  const converter = new showdown.Converter()
  survey.onTextMarkdown.add(function (survey, options) {
    let str = converter.makeHtml(options.text)
    str = str.substring(3)
    str = str.substring(0, str.length - 4)
    options.html = str
  })

  survey.onComplete.add(function (sender) {
    console.log('Result JSON:\n' + JSON.stringify(sender.data, null, 3))
  })
  return <Survey.Survey model={survey} />
}

export default App
