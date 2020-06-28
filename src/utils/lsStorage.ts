import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

const getItem = async (key: string) => {
  return await Storage.get({ key });
};

const setItem = async (key: string, value: string) => {
  return await Storage.set({ key, value });
};

const removeItem = async (key: string) => {
  return await Storage.remove({ key });
};

const clearAll = async () => {
  return await Storage.clear();
};

export { getItem, setItem, removeItem, clearAll };
