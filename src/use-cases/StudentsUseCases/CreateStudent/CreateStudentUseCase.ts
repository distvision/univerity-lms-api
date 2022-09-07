import { IStudentsRepository } from "../../../repositories/IStudentsRepository"

interface ICreateStudentUseCaseRequest {
  fname: string,
  lname: string,
  gender: string,
  age: number
}

export class CreateStudentUseCase {
  constructor(
    private studentsRepository: IStudentsRepository,
  ){}

  async execute(request: ICreateStudentUseCaseRequest){
      const { fname, lname, age, gender} = request

      await this.studentsRepository.create({
        fname,
        lname,
        age,
        gender
      })
  }
}