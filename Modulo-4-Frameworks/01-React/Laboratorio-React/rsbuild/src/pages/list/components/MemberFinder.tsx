export default function MemberFinder() {

  const handleGetMembers = () => {

  }
  return (
    <form onSubmit={handleGetMembers}>
      <label>Username:
        <input
        />
      </label>
      <button type="submit" className="btn btn-sm smooth">Login</button>
    </form>
  )
}
