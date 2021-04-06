const { Router } = require("express")
const router = Router()

router.get("/", (req, res) => {
	let result = [
		{
			id: "1",
			name: "string",
			country: "string",
			duration: "string",
			yearOfIssue: "string",
			age: "string",
			categories: "[]",
			linkImg: "string",
			linkKinopoisk: "string",
			linkVideo: "string",
			createdAt: "someDate",
			deletedAt: "null"
		},
		{
			id: "2",
			name: "string",
			country: "string",
			duration: "string",
			yearOfIssue: "string",
			age: "string",
			categories: "[]",
			linkImg: "string",
			linkKinopoisk: "string",
			linkVideo: "string",
			createdAt: "someDate",
			deletedAt: "null"
		}
	]
	res.json(result)
})

router.get("/:id", (req, res) => {
	res.json({
		id: "1",
		name: "string",
		country: "string",
		duration: "string",
		yearOfIssue: "string",
		age: "string",
		categories: "[]",
		linkImg: "string",
		linkKinopoisk: "string",
		linkVideo: "string",
		createdAt: "someDate",
		deletedAt: "null"
	})
})

router.post("/", (req, res) => {
	res.json({
		id: "1",
		name: "string",
		country: "string",
		duration: "string",
		yearOfIssue: "string",
		age: "string",
		categories: "[]",
		linkImg: "string",
		linkKinopoisk: "string",
		linkVideo: "string",
		createdAt: "someDate",
		deletedAt: "null"
	})
})

router.put("/:id", (req, res) => {
	res.json({
		id: "1",
		name: "string",
		country: "string",
		duration: "string",
		yearOfIssue: "string",
		age: "string",
		categories: "[]",
		linkImg: "string",
		linkKinopoisk: "string",
		linkVideo: "string",
		createdAt: "someDate",
		deletedAt: "null"
	})
})

router.delete("/:id", (req, res) => {
	res.json({
		message: "Successfully Deleted"
	})
})


module.exports = router
