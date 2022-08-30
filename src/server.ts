import express, {Request, Response} from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()


// get all students
app.get("/api/v1/students", async (req: Request ,res: Response) =>{
 const allStudents = await prisma.students.findMany()
 res.json({allStudents})
})

//  create a student
app.post('/api/v1/students', async (req: Request, res: Response)=>{
const student = await prisma.students.create({
  data: {
    fname: "Ana",
    lname: "Alface",
    age: 18,
    gender: "F",
  }
})
res.json({student})
})

// get a single student
app.get('/api/v1/students/:id', async (req: Request, res: Response)=>{
  const getStudent = await prisma.students.findUnique({
    where:{
      stud_ID: "cl7cot9k50000t0w8ztrtmx8g"
    }
  })
  res.json({getStudent})
})

// update a single student
app.patch('/api/v1/students/:id', async (req: Request, res:Response)=>{
  const upStudent = await prisma.students.update({
    data:{
      lname: "Bernardo Furede Alface"
    },
    where: {
      stud_ID: "cl7cot9k50000t0w8ztrtmx8g"
    }
  })
  res.json({upStudent})
})

// delete a single student
app.delete('/api/v1/students/:id', async (req: Request, res: Response)=>{
  const deleteSudent = await prisma.students.delete({
    where:{
      stud_ID: "cl7cns2je00131kw82s16edic"
    }
  })
  res.json({deleteSudent})
})


app.listen(3000, ()=> console.log("server is running on port 3000...")
)