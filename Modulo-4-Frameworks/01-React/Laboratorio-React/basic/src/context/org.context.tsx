import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface Organization {
  orgName: string,
  members: MemberEntity[]
}

interface OrgContextProps {
  org: Organization;
  setOrg: (org: Organization) => void;
}

const OrgContext = createContext<OrgContextProps | undefined>(undefined);

export const OrgProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [org, setOrg] = useState<Organization>({
    orgName: "lemoncode",
    members: []
  });

  return (
    <OrgContext.Provider value={{ org, setOrg }}>
      {children}
    </OrgContext.Provider>
  );
};

export const useOrg = (): OrgContextProps => {
  const context = useContext(OrgContext);
  if (context === undefined) {
    throw new Error('useOrg must be used within an OrgProvider');
  }
  return context;
};
