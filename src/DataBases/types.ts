export interface IUser {
  email: string;
  password: string;
  isOrganization: boolean;
}

export interface IEventData {
  id: string;
  name: string;
  local: string;
  time: number;
  image: string;
}
