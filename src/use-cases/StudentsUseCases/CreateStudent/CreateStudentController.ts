import { Request, Response } from "express";
import { PrismaStudentsRepository } from "../../../repositories/prisma/prismaStudentsRepository";
import { CreateStudentUseCase } from "./CreateStudentUseCase";


export class CreateStudentController {

  async handle(request: Request, response: Response) {
    const { fname, lname, age, gender} = request.body

    // inversao de dependencia
    const prismaStudentsRepository = new PrismaStudentsRepository()
    const createStudentUseCase = new CreateStudentUseCase(
      prismaStudentsRepository
    ) 

    await createStudentUseCase.execute({
      fname,
      lname,
      age,
      gender
    })

  return response.status(201).send()
}
}