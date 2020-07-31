const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        try {
            const { email, password } = request.body

            const user = await connection('user')
                .where('email', email).andWhere('password', password)
                .select([
                    'id',
                    'name'
                ])
                .first()

            if (!user) {
                return response.status(400).json({ error: 'Email or password wrong' })
            }

            return response.status(200).json(user)
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error })
        }
    }
}