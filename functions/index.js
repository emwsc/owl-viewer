"use strict";
const fetch = require("node-fetch");
const functions = require("firebase-functions");
const cors = require("./node_modules/cors")({
  origin: true
});
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

function owlGetShedule() {
  return fetch("https://api.overwatchleague.com/schedule");
}

exports.schedulecron = functions.https.onRequest((req, res) => {
  if (req.method === "PUT") {
    return res.status(403).send("Forbidden!");
  }

  return cors(req, res, () => {
    const lastUpdateTime = `schedulecron ${new Date().toLocaleDateString()}  ${new Date().toLocaleTimeString()}`;
    owlGetShedule()
      .then(response => {
        return response.json();
      })
      .then(results => {
        let stages = results.data.stages.map(stage => {
          return {
            id: stage.id,
            name: stage.name,
            weeks: stage.weeks.map(week => {
              return {
                id: week.id,
                startDate: week.startDate,
                endDate: week.endDate,
                name: week.name,
                matches: week.matches.map(match => {
                  return {
                    startDate: match.startDateTS,
                    id: match.id,
                    bracket: stage.name /*match.bracket.stage.title*/,
                    scores: match.scores.map(score => {
                      return score.value;
                    }),
                    competitors: match.competitors.map(competitor => {
                      return {
                        id: competitor.id,
                        secondaryColor: "#" + competitor.secondaryColor,
                        primaryColor: "#" + competitor.primaryColor,
                        name: competitor.name,
                        logo: competitor.logo
                      };
                    })
                  };
                })
              };
            })
          };
        });
        //const db = admin.firestore();
        const schedule = {
          year: 2019,
          lastUpdateTime,
          stages: stages
        };
        debugger;
        // db.collection("schedule")
        //   .doc("2019")
        //   .update(schedule)
        //   .then(doc => {
        //     res.status(200).send(lastUpdateTime);
        //   });
      });
  });
});
