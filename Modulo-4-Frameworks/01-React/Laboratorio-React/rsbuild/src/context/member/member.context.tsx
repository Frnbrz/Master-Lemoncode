import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { MemberEntity } from 'src/types/members';

export const MembersContext = createContext<MemberEntity[]>([]);

export const GithubMembersProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/{organización}/members');
        const data = await response.json();
        setMembers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <MembersContext.Provider value={{ members, loading, error }}>
      {children}
    </MembersContext.Provider>
  );
};
