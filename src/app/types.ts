interface IUserData {
  id: number;
  email: string;
  exp: number;
  iat: number;
  roles: IRole[]
}

interface IRole {
  id: number;
  createdAt: string;
  name: string;
  updatedAt: string;
  UserRole: IUserRole;
}

interface IUserRole {
  id: number;
  userId: number;
  roleId: number;
  createdAt: string;
  updatedAt: string;
}

interface IMeetupData {
  id?: number;
  name: string;
  description: string;
  location: string;
  target_audience: string;
  need_to_know: string;
  will_happen: string;
  reason_to_come: string;
  time: string;
  duration: number;
  createdBy?: number;
  owner?: IUserDesc;
  users?: IUserDesc[];
}

interface IUserDesc {
  id: number;
  email: string;
  password: string;
  fio: string;
}

interface IUserData {
  id: number;
  email: string;
  password: string;
  fio: string;
  createdAt: string;
  roles: IRole[];
}

interface MutableUserData {
  email: string;
  password: string;
  fio: string;
}

export { IUserData, IRole, IUserRole, IMeetupData, IUserDesc, MutableUserData }