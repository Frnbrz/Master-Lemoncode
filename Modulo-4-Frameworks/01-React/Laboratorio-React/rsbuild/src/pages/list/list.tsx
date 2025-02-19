import React from "react";
import { Link } from "react-router-dom";
import { MemberItem } from "./components/MemberItem";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);


  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);



  return (
    <>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <MemberItem key={member.id} member={member} />
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};

export default ListPage
