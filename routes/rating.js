const { Router } = require("express")
const router = Router()

router.get("/", (req, res) => {
	res.json([
		{
			id: "number",
			film: "id",
			user: "id",
			ball: "5",
			createdAt: "date"
		},
		{
			id: "number",
			film: "id",
			user: "id",
			ball: "5",
			createdAt: "date"
		}
	])
})

router.post("/", (req, res) => {
	res.json({
		id: "number",
		film: "id",
		user: "id",
		ball: "5",
		createdAt: "date"
	})
})

router.get("/:id", (req, res) => {
	res.json({
		id: "number",
		film: "id",
		user: "id",
		ball: "5",
		createdAt: "date"
	})
})

router.put("/:id", (req, res) => {
	res.json({
		id: "number",
		film: "id",
		user: "id",
		ball: "5",
		createdAt: "date"
	})
})

router.delete("/:id", (req, res) => {
	res.json("Successfully deleted")
})

module.exports = router