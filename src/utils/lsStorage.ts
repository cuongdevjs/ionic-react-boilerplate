import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

const getItem = async (key: string) => {
  const { value } = await Storage.get({ key });
  return value;
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
