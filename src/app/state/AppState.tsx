import { createContext, useRef } from "react";

import { User } from "../../interface";

type Props = {
  children: React.ReactNode;
};
interface AppContexts {
  userRef: React.MutableRefObject<User[]>;
}
export const AppContext = createContext<AppContexts>({} as AppContexts);
let user: User[] = [
  {
    name: "ashish shrestha",
    id: "0",
  },
  {
    name: "harry",
    id: "1",
  },
];

const AppState = ({ children }: Props) => {
  let userRef = useRef<User[]>(user);
  const states: AppContexts = {
    userRef,
  };
  return (
    <>
      <AppContext.Provider value={states}>{children}</AppContext.Provider>
    </>
  );
};

export default AppState;
