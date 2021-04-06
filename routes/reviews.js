const { Router } = require("express")
const router = Router()

router.get("/", (req, res) => {
	res.json([
		{
			id: "number",
			fio: "string",
			message: "string",
			createdAt: "date"
		},
		{
			id: "number",
			fio: "string",
			message: "string",
			createdAt: "date"
		}
	])
})

router.post("/", (req, res) => {
	res.json({
		id: "1",
		film: "string",
		user: "1",
		isApproved: "1",
		deletedAt: "null"
	})
})

router.get("/:id", (req, res) => {
	res.json({
		id: "number",
		fio: "string",
		message: "string",
		createdAt: "date"
	})
})

router.put("/:id", (req, res) => {
	res.json({
		id: "number",
		fio: "string",
		message: "string",
		createdAt: "date"
	})
})

router.patch("/:id", (req, res) => {
	res.json({
		id: "number",
		fio: "string",
		message: "string",
		createdAt: "date"
	})
})

router.delete("/:id", (req, res) => {
	res.json({
		id: "number",
		fio: "string",
		message: "string",
		createdAt: "date"
	})
})

module.exports = router