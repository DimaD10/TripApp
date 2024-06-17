import { create } from "zustand";
import { DEFAULT_TRIP_DURATION } from "./constants/configuration.constants";

type TripDurationStoreType = {
  duration: number;
  switchDuration: (newDuration: number) => void;
};

export const useTripDurationStore = create<TripDurationStoreType>((set) => ({
  duration: DEFAULT_TRIP_DURATION,

  switchDuration: (newDuration) => set((state) => ({ duration: newDuration })),
}));
