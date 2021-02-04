class Gift {
	constructor(req) {
		this.name = req.name
		this.rank = this.isRank(req.rank)
	}

	isRank(rank) {
		return rank == 0 ? true : false
	}
}

module.exports = Gift