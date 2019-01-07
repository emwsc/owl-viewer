import { useEffect } from "react";
import { getDBStore } from "../../utils/db";
import configuredFirebase from "../../firebase/firebase";
const idbschedule = getDBStore("schedule");

export function getSchedule(selectedYear) {
  return new Promise(resolve => {
    const firestore = configuredFirebase.firestore();
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
  return prevProps.selectedStage === nextProps.selectedStage;
};

export const useOnSelectedYear = props => {
  const { state, setState, selectedStage, setSelectedStage } = props;
  useEffect(
    () => {
      let tempSelectedStage = null;
      getCachedSchedule(state.selectedYear)
        .then(cachedSchedule => {
          if (cachedSchedule) {
            setState({
              ...state,
              isLoading: false,
              schedule: cachedSchedule
            });
          }
          setSelectedStage(
            cachedSchedule ? cachedSchedule.stages[0].name : null
          );
          tempSelectedStage = cachedSchedule
            ? cachedSchedule.stages[0].name
            : null;
        })
        .then(() => getSchedule(state.selectedYear))
        .then(fetchedSchedule => {
          const fetchedState = {
            ...state,
            isLoading: false,
            schedule: fetchedSchedule
          };
          if (state.selectedYear === fetchedSchedule.selectedYear) {
            if (!tempSelectedStage && !selectedStage)
              setSelectedStage(fetchedSchedule.stages[0].name);
            setState(fetchedState);
          }
        });
    },
    [state.selectedYear]
  );
};
