import express from "express"
import { CreateStudentController } from "../use-cases/StudentsUseCases/CreateStudent/CreateStudentController"

export const routes = express.Router()

const createStudentController = new CreateStudentController()

routes.post('/students', createStudentController.handle)