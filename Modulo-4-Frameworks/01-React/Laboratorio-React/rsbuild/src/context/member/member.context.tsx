import { createContext, useState, useEffect, PropsWithChildren, useContext } from 'react';
import { fetchMembers } from 'src/api/memberAPI';
import { MemberEntity } from 'src/types/members';

interface MembersContextType {
  members: MemberEntity[];
  loading: boolean;
  error: string | null;
  setMembers: React.Dispatch<React.SetStateAction<MemberEntity[]>>;
}

export const MembersContext = createContext<MembersContextType>({
  members: [],
  loading: true,
  error: null,
  setMembers: () => { },
});

export const MembersProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(error)
  useEffect(() => {
    fetchMembers("lemoncode")
      .then((members) => setMembers(members))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <MembersContext.Provider value={{ members, loading, error, setMembers }}>
      {children}
    </MembersContext.Provider>
  );
};

export const useMember = () => {
  return useContext(MembersContext);
};

