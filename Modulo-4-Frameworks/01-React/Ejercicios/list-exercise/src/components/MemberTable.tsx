import React from 'react'
import { MemberEntity } from '../model/model.ts'
import { MemberTableRow } from './member-table-row'
import MemberTableHeader from './MemberTableHeader.tsx'

export default function MemberTable() {
  const [members, setMembers] = React.useState<MemberEntity[]>([])

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json))
  }, [])
  return (
    <div className="user-list-container">
      <MemberTableHeader />
      {members.map((member) => (
        <MemberTableRow key={member.id} member={member} />
      ))}
    </div>
  )
}
