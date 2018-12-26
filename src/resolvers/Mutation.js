const Mutations = {
	async createSprint(parent, args, ctx, info) {
		const sprint = await ctx.db.mutation.createSprint({
			data: {
				...args
			}
		}, info);

		return sprint;
	}
};

module.exports = Mutations;
