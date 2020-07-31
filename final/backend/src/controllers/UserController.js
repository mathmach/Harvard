const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        try {
            const { name, email, password, confirmPassword } = request.body

            if (password !== confirmPassword) {
                return response.status(400).json({ error: 'Confirm Password not match' })
            }

            const id = await connection('user').insert({
                name,
                email,
                password
            })

            return response.status(200).json({ id })
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error })
        }
    }
}