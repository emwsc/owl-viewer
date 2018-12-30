import { getDBStore } from "../../utils/db";

const idbschedule = getDBStore("schedule");

export function getSchedule(selectedYear, firebase) {
  return new Promise(resolve => {
    const firestore = firebase.firestore();
    firestore
      .collection("schedule")
      .doc(selectedYear.toString())
      .get()
      .then(doc => {
        const schedule = doc.data();
        idbschedule.set(schedule);
        resolve(schedule);
      });
  });
}

export function getCachedSchedule(selectedYear) {
  return new Promise(resolve => {
    resolve(idbschedule.get(selectedYear));
  });
}

export const areEqualStages = (prevProps, nextProps) => {
  return (
    prevProps.selectedStage === nextProps.selectedStage &&
    prevProps.scheduleYear === nextProps.scheduleYear &&
    prevProps.visibleStages.filter(x => x.isVisible).length ===
      nextProps.visibleStages.filter(x => x.isVisible).length
  );
};
