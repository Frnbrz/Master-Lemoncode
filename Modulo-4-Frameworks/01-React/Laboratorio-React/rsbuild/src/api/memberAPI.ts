
export const fetchMembers = async () => {
  const response = await fetch(`https://api.github.com/orgs/lemoncode/members`);
  return await response.json();
};
