export interface IStudentCreateData {
  fname: string,
  lname: string,
  gender: string,
  age: number
}


export interface IStudentsRepository {
  create: (data: IStudentCreateData) => Promise<void>
}