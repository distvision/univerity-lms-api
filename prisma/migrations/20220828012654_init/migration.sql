-- CreateTable
CREATE TABLE "Students" (
    "stud_ID" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("stud_ID")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "ins_ID" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("ins_ID")
);

-- CreateTable
CREATE TABLE "Course" (
    "course_ID" TEXT NOT NULL,
    "course_name" TEXT NOT NULL,
    "course_desc" TEXT NOT NULL,
    "school_yr" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("course_ID")
);

-- CreateTable
CREATE TABLE "Subjects" (
    "sub_ID" TEXT NOT NULL,
    "subject_name" TEXT NOT NULL,
    "id_course" TEXT NOT NULL,

    CONSTRAINT "Subjects_pkey" PRIMARY KEY ("sub_ID")
);

-- AddForeignKey
ALTER TABLE "Subjects" ADD CONSTRAINT "Subjects_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "Course"("course_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
