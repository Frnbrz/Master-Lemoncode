import React from "react";
import { Link } from "react-router-dom";

interface Props {
  member: {
    id: string;
    login: string;
    avatar_url: string;
  };
}

export const MemberItem: React.FC<Props> = ({ member }) => (
  <React.Fragment key={member.id}>
    <img src={member.avatar_url} />
    <span>{member.id}</span>
    <Link to={`/detail/${member.login}`}>{member.login}</Link>
  </React.Fragment>
);
