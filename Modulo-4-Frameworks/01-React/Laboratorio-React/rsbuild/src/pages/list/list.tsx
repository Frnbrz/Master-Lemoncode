import React from "react";
import { Link } from "react-router-dom";
import { MemberItem } from "./components/MemberItem";
import { fetchMembers } from "../../api/memberAPI"; // Import the new function
import { MemberEntity } from "src/types/members";
import MemberFinder from "./components/MemberFinder";


const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetchMembers('lemoncode').then((json) => setMembers(json));
  }, []);

  return (
    <>
      <MemberFinder />
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

export default ListPage;
