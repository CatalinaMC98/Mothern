var admin = require('firebase-admin');

var serviceAccount = require('./mothern-eac5a-firebase-adminsdk-ului0-a097299e43.json');

const SCRIPT_RUN_TIME = 20;

exports.handler = async (event) => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const firestore = admin.firestore();
  firestore
    .collection('userinfo')
    .get()
    .then((entries) => {
      entries.forEach((entry) => {
        result = entry.data();
        if (
          result.citas !== undefined &&
          result.citas !== null &&
          result.citas instanceof Array
        ) {
          result.citas.forEach((cita) => {
            diffTime = cita.fecha.toDate() - new Date();
            if (
              diffTime <= (24 - SCRIPT_RUN_TIME) * 60 * 60 * 1000 + 86400000 &&
              diffTime >= 0
            ) {
              firestore
                .collection('userinfo')
                .doc(entry.id)
                .collection('pushtokens')
                .where('active', '==', true)
                .get()
                .then((pts) => {
                  pts.forEach((pt) => {
                    sendCitaPushNotification(
                      [pt.id],
                      cita.centro,
                      cita.especialidad,
                      cita.fecha.toDate()
                    );
                  });
                });
            }
          });
        }
      });
      //event
    });

  const sendCitaPushNotification = (registrationTokens, place, spec, date) => {
    var hours = date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours();
    var minutes =
      date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes();

    const message = {
      notification: {
        title: 'Cita médica',
        body: `Recuerda que mañana tienes una cita médica de ${spec} en ${place} a las ${hours}:${minutes}`,
      },
      tokens: registrationTokens,
    };
    admin
      .messaging()
      .sendMulticast(message)
      .then((response) => {
        console.log(response.successCount + ' messages were sent successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
