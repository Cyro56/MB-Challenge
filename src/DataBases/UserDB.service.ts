import {IUser} from './types';

export class UsersDBService {
  private users: IUser[];

  private static instance: UsersDBService | null = null;

  private constructor() {
    this.users = [
      {
        email: 'CyroCosta@MBLabs.com',
        password: 'senha123',
        isOrganization: false,
      },
      {
        email: 'usuario2@example.com',
        password: 'outrasenha456',
        isOrganization: true,
      },
      {
        email: 'usuario3@example.com',
        password: 'senhasupersegura789',
        isOrganization: false,
      },
    ];
  }

  public static getInstance(): UsersDBService {
    if (!UsersDBService.instance) {
      UsersDBService.instance = new UsersDBService();
    }
    return UsersDBService.instance;
  }

  public getUsers(): IUser[] {
    return this.users;
  }

  public createUser(
    email: string,
    password: string,
    isOrganization: boolean,
  ): void {
    const newUser = {email, password, isOrganization};
    this.users.push(newUser);
  }
}
