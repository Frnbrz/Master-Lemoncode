export interface User {
  user: string;
}

export const createEmptyUserProfile = (): User => ({
  user: "",
});
