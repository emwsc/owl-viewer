import { useEffect } from "react";
import { getDBStore } from "../../utils/db";
import configuredFirebase from "../../firebase/firebase";
import { getVodsJson } from "../../utils/owlApi";
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
  return (
    prevProps.selectedStage === nextProps.selectedStage &&
    prevProps.selectedTeams.length === nextProps.selectedTeams.length
  );
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

export const useOnSelectGame = ({ selectedGameId, setVideoScreenState }) => {
  useEffect(
    () => {
      if (selectedGameId) {
        setVideoScreenState({ isVideosScreenVisible: true, vods: [] });
        getVods(selectedGameId).then(vods =>
          setVideoScreenState({ isVideosScreenVisible: true, vods })
        );
      }
    },
    [selectedGameId]
  );
};

export function getVods(matchid) {
  return new Promise((resolve, reject) => {
    if (!matchid) {
      resolve([]);
      return;
    }
    getVodsJson(matchid).then(results => {
      if (results.code === 404) {
        resolve([]);
        return;
      }
      resolve(
        results.data.map(item => {
          return {
            id: item.unique_id,
            thumbnail: item.thumbnail,
            title: item.title,
            url: item.embed
          };
        })
      );
    });
  });
}
