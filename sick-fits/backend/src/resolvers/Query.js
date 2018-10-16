const Query = {
    dogs(parent, args, ctx, info) {
        return [{ name: 'Snickers' }, { name: 'Joe' }]
    }
}

module.exports = Query;
