const { Router } = require("express")
const router = Router()

router.post("/login", (req, res) => {
	res.json({
		fio: "string",
		role: "string",
		email: "string",
		token: "AUTHORIZATION_TOKEN"
	})
})

router.get("/", (req, res) => {
	let result = [
		{
			id: "1",
			fio: "string",
			birthday: "string",
			gender: "string",
			role: "string",
			email: "string",
			createdAt: "someDate",
			deletedAt: "null"
		},
		{
			id: "1",
			fio: "string",
			birthday: "string",
			gender: "string",
			role: "string",
			email: "string",
			createdAt: "someDate",
			deletedAt: "null"
		}
	]
	res.json(result)
})

router.get("/:id", (req, res) => {
	res.json({
		id: "1",
		fio: "string",
		birthday: "string",
		gender: "string",
		role: "string",
		email: "string",
		createdAt: "someDate",
		deletedAt: "null",
		token: "AUTHORIZATION_TOKEN"
	})
})

router.put("/:id", (req, res) => {
	res.json({
		id: "1",
		fio: "string",
		birthday: "string",
		gender: "string",
		role: "string",
		email: "string",
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
