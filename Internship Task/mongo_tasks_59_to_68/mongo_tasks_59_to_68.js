// Task 59: Create Database
use internshipDB

// Task 60: Create Collection
db.createCollection("students")

// Task 61: Drop Collection (just in case you're re-running this)
db.students.drop()
db.createCollection("students")

// Task 62: InsertOne and InsertMany
db.students.insertOne({ name: "Smit", age: 21, course: "MERN" })
db.students.insertMany([
  { name: "Karan", age: 20, course: "Java" },
  { name: "Riya", age: 22, course: "Python" },
  { name: "Aman", age: 19, course: "Data Science" }
])

// Task 63: FindOne and Find with Where
print("FindOne:")
printjson(db.students.findOne())

print("Find Where course = 'MERN':")
printjson(db.students.find({ course: "MERN" }).toArray())

// Task 64: Find with Project
print("Project name & course:")
printjson(db.students.find({}, { name: 1, course: 1, _id: 0 }).toArray())

// Task 65: UpdateOne and UpdateMany
db.students.updateOne({ name: "Smit" }, { $set: { course: "Full Stack" } })
db.students.updateMany({ age: { $lt: 22 } }, { $set: { status: "Junior" } })

// Task 66: Insert If Not Exists (Upsert)
db.students.updateOne(
  { name: "NewStudent" },
  { $set: { course: "AI" } },
  { upsert: true }
)

// Task 67: Comparison Operators
print("Courses in [MERN, Java]:")
printjson(db.students.find({ course: { $in: ["MERN", "Java"] } }).toArray())

print("Age == 21:")
printjson(db.students.find({ age: { $eq: 21 } }).toArray())

print("Age > 20:")
printjson(db.students.find({ age: { $gt: 20 } }).toArray())

print("Age >= 21:")
printjson(db.students.find({ age: { $gte: 21 } }).toArray())

print("Age < 22:")
printjson(db.students.find({ age: { $lt: 22 } }).toArray())

print("Age <= 19:")
printjson(db.students.find({ age: { $lte: 19 } }).toArray())

// Task 68: Logical Operators
print("Using $and:")
printjson(db.students.find({
  $and: [{ age: { $gte: 20 } }, { course: "MERN" }]
}).toArray())

print("Using $or:")
printjson(db.students.find({
  $or: [{ age: { $lt: 20 } }, { course: "Python" }]
}).toArray())

print("Using $not:")
printjson(db.students.find({
  age: { $not: { $gte: 22 } }
}).toArray())

print("Using $nor:")
printjson(db.students.find({
  $nor: [{ course: "Java" }, { course: "MERN" }]
}).toArray())
