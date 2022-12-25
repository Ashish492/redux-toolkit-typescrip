import { useContext } from "react";
import { AppContext } from "../app/state/AppState";

export const useGetUser = (id: string | null = null) => {
  const { userRef } = useContext(AppContext);
  if (!id) return userRef.current;
  return userRef.current.filter(user => user.id.localeCompare(id));
};
