import {UsersDBService} from '../../DataBases/UserDB.service';

const usersDBService = UsersDBService.getInstance();
const allUsers = usersDBService.getUsers();

export class AuthUser {
  users: {email: string; password: string}[];
  constructor() {
    this.users = allUsers;
  }

  validateUser(email: string, password: string) {
    console.log('validateUser', email, password);
    const MatchUser = this.users.find(
      user => user.email === email && user.password === password,
    );
    return Boolean(MatchUser);
  }
}
