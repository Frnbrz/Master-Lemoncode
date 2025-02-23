import { MemberEntity } from "src/types/members";

export async function fetchMembers(orgName: string): Promise<MemberEntity[]> {
  const response = await fetch(`https://api.github.com/orgs/${orgName}/members`);
  return await response.json();
};
