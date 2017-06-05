export class User {
	id?: string;
	_id?: string;
	roleId: string;
	userName: string;
	password: string;
	firstName: string;
	lastName: string;
  createdByUserId: string;
}

export class UserStatus {
  _id?: string;
  id?: string;
  name: string;
  dateCreated: string;
  dateUpdated: string;
  createdByUserId: string;
}
