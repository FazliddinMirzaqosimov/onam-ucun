import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const SurahsContext = createContext({});
const SurahsActionsContext = createContext({});

export function getSurahs(): any {
  return useContext(SurahsContext);
}

export function getSurahsActions(): any {
  return useContext(SurahsActionsContext);
}

function SurahProvider({ children }: { children: React.ReactNode }) {
  const [surahsState, setSurahsState] = useState<any>({
    surahs: [],
    error: null,
    loading: true,
    ayatAudio: {
      src: "",
      loop: true,
      autoPlay: true,
    },
  });
  const refreshSurahs = () => {
    axios
      .get("http://api.alquran.cloud/v1/surah")
      .then((res) => {
        setSurahsState({
          ...surahsState,
          surahs: res.data.data,
          loading: false,
        });
      })
      .catch((error) =>
        setSurahsState({ ...surahsState, error: error.message })
      );
  };

  useEffect(() => {
    refreshSurahs();
  }, []);

  const setLoading = (loading: boolean) => {
    setSurahsState({ ...surahsState, loading });
  };
  const setError = (error: boolean) => {
    setSurahsState({ ...surahsState, error });
  };
  const setSurahs = (surahs: boolean) => {
    setSurahsState({ ...surahsState, surahs });
  };
  const setAyatAudio = (ayatAudio: boolean) => {
    setSurahsState({ ...surahsState, ayatAudio });
  };
  return (
    <SurahsActionsContext.Provider
      value={{
        setLoading,
        setError,
        setSurahs,
        refreshSurahs,
        setAyatAudio,
      }}
    >
      <SurahsContext.Provider value={surahsState}>
        {children}
      </SurahsContext.Provider>
    </SurahsActionsContext.Provider>
  );
}

export default React.memo(SurahProvider);
