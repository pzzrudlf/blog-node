module.exports = {
    async index(ctx, next) {
        await ctx.render('index', {
            title: 'blog',
            desc: 'welcome!'
        })
    }
}