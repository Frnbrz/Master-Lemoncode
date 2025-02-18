
export const fetchMembers = async (organizationName: string) => {
  const response = await fetch(`https://api.github.com/orgs/${organizationName}/members`);
  const json = await response.json();
  if (json.status) {
    return [];
  } else {
    return json;
  }
};
