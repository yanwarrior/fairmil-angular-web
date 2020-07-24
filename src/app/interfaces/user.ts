export interface UserInterface {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;
}

export interface UserPaginateInterface {
  count: number;
  previous: string;
  next: string;
  results: UserInterface[];
}

export class UserMaker implements UserInterface {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;

  public static create(): UserMaker {
    return new UserMaker();
  }
}

export class UserPaginationMaker implements UserPaginateInterface {
  count: number;
  previous: string;
  next: string;
  results: UserInterface[];

  public static create(): UserPaginationMaker {
    return new UserPaginationMaker();
  }
}