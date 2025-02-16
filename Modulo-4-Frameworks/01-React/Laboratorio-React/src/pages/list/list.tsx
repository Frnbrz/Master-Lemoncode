import React from "react";
import { Link } from "react-router-dom";
import { MemberItem } from "./components/MemberItem";
import { useAuth } from "../../context/user/user.context";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { logout, user } = useAuth()

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <header>
        <h2>Hello {user} from List page</h2>
        <button className="btn btn-sm" onClick={() => handleLogout()}>logout</button>
      </header>
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
