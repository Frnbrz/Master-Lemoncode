import React from "react";
import { Link } from "react-router-dom";
import { fetchMembers } from "../../api/api";
import { useOrg } from "../../context/org.context";

export const ListPage: React.FC = () => {
  const { org, setOrg } = useOrg();

  React.useEffect(() => {
    fetchMembers(org.orgName).then((members) => setOrg({ ...org, members }));
  }, [org.orgName]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    const parsedData = Object.fromEntries(form.entries());
    const { orgName } = parsedData;
    setOrg({ orgName: String(orgName), members: [] });
  };

  return (
    <>
      <header>
        <h2>Hello from List page</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          Organización
          <input type="text" name="orgName" placeholder="lemoncode" />
        </label>
        <button type="submit">buscar</button>
      </form>
      <h3>Organización: {org.orgName}</h3>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {org?.members.length === 0 ? (
          <>
            <span></span>
            <span>No members found</span>
            <span></span>
          </>
        ) : (
          org.members?.map((member) => (
            <>
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <Link to={`/detail/${member.login}`}>{member.login}</Link>
            </>
          ))
        )}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
