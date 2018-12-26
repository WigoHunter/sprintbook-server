const Query = {
	async sprints(parent, args, ctx, info) {
		const sprints = await ctx.db.query.sprints();
		return sprints;
	},
};

module.exports = Query;
