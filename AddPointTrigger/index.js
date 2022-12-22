module.exports = async function (context, req) {
    context.log('processing score');
    const {body} = req

    if(body != 'undefined' && typeof body === 'object'){

        //TODO: validate user belongs to team
        const {teamId, userId} = req.body
        context.bindings.out = teamId
    }
}