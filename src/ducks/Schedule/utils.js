import { useEffect } from "react";
import { getDBStore } from "../../utils/db";
import configuredFirebase from "../../firebase/firebase";
import { getVodsJson } from "../../utils/owlApi";
import { LOADING_TEXTS } from "./constants";

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
        // idbschedule.set(schedule);
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
  debugger;
  return (
    prevProps.selectedYear === nextProps.selectedYear &&
    prevProps.selectedStage === nextProps.selectedStage &&
    prevProps.selectedTeams.length === nextProps.selectedTeams.length
  );
};

/**
 * Hook that allows to fetch schedule for selected year
 * @param {object} props
 * @param {object} props.state
 * @param {object} props.setState
 * @param {object} props.selectedStage
 * @param {object} props.setSelectedStage
 */
export const useOnSelectedYear = props => {
  const { state, setState, selectedStage, setSelectedStage } = props;
  useEffect(() => {
    const tempSelectedStage = null;
    getSchedule(state.selectedYear).then(fetchedSchedule => {
      const fetchedState = {
        ...state,
        isLoading: false,
        schedule: fetchedSchedule
      };
      if (
        state.selectedYear === fetchedSchedule.selectedYear ||
        !tempSelectedStage
      ) {
        if (!tempSelectedStage && !selectedStage) {
          setSelectedStage(fetchedSchedule.stages[0].name);
        }
        setState(fetchedState);
      }
    });
  }, [state.selectedYear]);
};

export const useOnSelectGame = ({ selectedGameId, setVideoScreenState }) => {
  useEffect(() => {
    if (selectedGameId) {
      setVideoScreenState({ isVideosScreenVisible: true, vods: [] });
      getVods(selectedGameId).then(vods => {
        const fullMatch = vods.find(vod => vod.title.includes("Full"));
        if (fullMatch) document.title = `${fullMatch.title} | OWL Viewer`;
        else if (vods && vods.length > 0) {
          document.title = `${vods[0].title} | OWL Viewer`;
        }
        setVideoScreenState({ isVideosScreenVisible: true, vods });
      });
    }
  }, [selectedGameId]);
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
        results.data.map(item => ({
          id: item.unique_id,
          thumbnail: item.thumbnail,
          title: item.title,
          url: item.embed
        }))
      );
    });
  });
}
