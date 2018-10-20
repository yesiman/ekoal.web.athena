enum job
{
  tech,
  ouv,
  man
}

export class User {
  id: string;
  uid: string;
  nom: string;
  prenom: string;
  password: string;  
  work: job;
  contacts: UserContacts;
}
export class UserWork {
  company: string;
  position: string;
  salary: number;
}
export class UserContacts{
  email: string;
  phone: string;
}