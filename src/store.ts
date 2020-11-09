import { writable } from "svelte/store";
import type { IProject } from "./data";

interface IStore {
  projects: IProject[];
}

const createStore = () => {
  const { subscribe, update } = writable<IStore>({
    projects: [],
  });

  return {
    subscribe,
    setPropjects: (projects: IProject[]) => update(() => ({ projects })),
  };
};

export const store = createStore();
