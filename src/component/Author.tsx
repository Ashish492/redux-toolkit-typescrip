import { useGetUser } from "../hook/useGetUserHook";

type Props = {
  id: string;
};

const Author = ({ id }: Props) => {
  let user = useGetUser(id)[0];
  return (
    <>
      <span> {user.name}</span>
    </>
  );
};

export default Author;
