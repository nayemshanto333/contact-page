export interface Iperson {
    id: number;
    name: string;
    email: string;
  }
  
  export const persons: Iperson[] = [
    {
      id: 1,
      name: "Hasib",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      name: "Rasel",
      email: "johndoe@example.com",
    },
    {
      id: 3,
      name: "Nayem",
      email: "nayemshantobd@gmail.com",
    },
  ];
  

  export interface IContact {
    name: string;
    email: string;
    phone: number;
    message: string;
  }