const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        try {
            const { hospital_id, value } = request.body
            const user_id = request.headers.authorization

            const [id] = await connection('donation').insert({
                hospital_id,
                user_id,
                value
            })

            return response.status(200).json({ id })
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error })
        }
    }
}