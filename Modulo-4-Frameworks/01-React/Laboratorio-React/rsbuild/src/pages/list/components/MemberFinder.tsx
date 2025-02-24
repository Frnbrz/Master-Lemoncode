import { fetchMembers } from "src/api/memberAPI"
import { useMember } from "src/context/member/member.context";

export default function MemberFinder() {
  const { error } = useMember()


  const handleGetMembers = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const orgName = formData.get("orgName") as string;
    fetchMembers(orgName);
  }


  return (

    <form onSubmit={handleGetMembers}>
      <p>
        <label htmlFor="orgName">Organización:</label>
        <input type="text" name="orgName" id="orgName" placeholder="lemoncode" />
      </p>
      <button type="submit" className="btn btn-sm smooth">Login</button>

      {error && <p className="error-text">{error}</p>}
    </form >

  )
}
