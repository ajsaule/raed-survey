const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = async (req, res) => {
  const {
    nom,
    age,
    presentezVous,
    votreEnvies,
    professionnelle,
    objectifs,
    demarcheEnterpeneuriale,
    aucun,
    lesImprevus,
    caMeFrustre,
    lincertitude,
    toutPrevenir,
    votreEnvieDeux,
    vosObjectifs,
    etRessources,
    indicateurs,
    tachesEffectuer,
    acteurs,
  } = req.body

  console.log(req)

  const msg = {
    to: 'andrejsaule8@gmail.com',
    from: 'andrejsaule8@gmail.com',
    subject: '🚨 Raed Survey',
    html: `
        <h4>Nom:</h4>
        ${nom}
        <h4>Âge:</h4>
        ${age}
        <h4>Présentez-vous</h4>
        ${presentezVous}
        <h4>Présentez votre envie</h4>
        ${votreEnvies}
        <h4>Votre envie professionnelle</h4>
        ${professionnelle}
        <h4>Vous objectifs</h4>
        ${objectifs}
        <h4>Votre démarche entrepreneuriale</h4>
        ${demarcheEnterpeneuriale}
        <h4>Si aucun, veuillez préciser</h4>
        ${aucun}
        <h4>Les imprévus me dérangent énormément</h4>
        ${lesImprevus}
        <h4>Ça me frustre de ne pas avoir toute linformation dont jai besoin</h4>
        ${caMeFrustre}
        <h4>L'incertitude m'empêche de profiter pleinement de la vie</h4>
        ${lincertitude}
        <h4>On devrait tout prévenir pour éviter les surprises</h4>
        ${toutPrevenir}
        <h4>Qu’est-ce que vous voulez pour votre avenir? Comment vous voyez-vous d’ici trois ans?</h4>
        ${votreEnvieDeux}
        <h4>Quels sont vos objectifs professionnels à plus court terme? Comment vous voyez-vous d'ici 6 mois?</h4>
        ${vosObjectifs}
        <h4>De quels moyens disposez-vous? Quelles sont vos ressources financières, matérielles, humaines?</h4>
        ${etRessources}
        <h4>Que vous fixez-vous comme cap à atteindre? Quel seuil vous fixez-vous?</h4>
        ${indicateurs}
        <h4>Quels sont les grandes tâches à effectuer? Quel est votre plan d'action?</h4>
        ${tachesEffectuer}
        <h4>Qui sont les acteurs impliqués dans ce projet? Quelles seront les personnes impactées par ce projet?</h4>
        ${acteurs}
      `,
  }

  if (req.headers.referer === 'https://raed-survey.vercel.app/') {
    try {
      await sgMail.send(msg)
      res.send(req.Headers)
      res.status(204).end()
    } catch (err) {
      console.log('err123', err)
      res.status(500)
    }
  }
}

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://raed-survey.vercel.app/'
  )

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

module.exports = allowCors(handler)
