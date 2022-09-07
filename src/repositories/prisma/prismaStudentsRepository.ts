import { prisma } from "../../prisma";
import { IStudentCreateData, IStudentsRepository } from "../IStudentsRepository";

export class PrismaStudentsRepository implements IStudentsRepository {
 async create({fname,lname,age,gender}: IStudentCreateData){
    await prisma.students.create({
      data:{
        fname,
        lname,
        age,
        gender,
      }
    })
  }
}