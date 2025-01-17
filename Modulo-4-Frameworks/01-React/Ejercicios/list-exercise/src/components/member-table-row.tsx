import React from 'react'
import { MemberEntity } from '../model/model'

interface Props {
  member: MemberEntity
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props

  return (
    <React.Fragment key={member.id}>
      <img src={member.avatar_url} aria-label="Github profile image" />
      <span>{member.id}</span>
      <span>{member.login}</span>
      <a href={member.html_url} aria-label={`Github profile link for ${member.login}`} target="_blank" rel="noreferrer">
        {member.html_url}
      </a>
    </React.Fragment>
  )
}
