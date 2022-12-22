module.exports = async function (context, req) {
    context.log('processing score');
    const {body = null} = req

    if(typeof body === 'object'){

        //TODO: validate user belongs to team
        const {teamId, userId} = req.body
        context.bindings.out = teamId
    }
}