const { Router } = require("express")
const router = Router()

router.get("/", (req, res) => {
	let result = [
		{
			id: "1",
			name: "string"
		},
		{
			id: "2",
			name: "string"
		}
	]
	res.json(result)
})

module.exports = router
