const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        try {
            const { page = 1 } = request.query

            const [count] = await connection('hospital').count()

            const hospitals = await connection('hospital')
                .leftJoin('donation', 'hospital.id', '=', 'donation.hospital_id')
                .limit(6)
                .offset((page - 1) * 6)
                .select([
                    'hospital.id',
                    'hospital.name',
                    connection.raw('COALESCE(SUM(donation.value), 0) as total')
                ])
                .groupBy('hospital.id')

            response.header('X-Total-Count', count['count(*)'])

            return response.status(200).json(hospitals)
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error })
        }
    },

    async findById(request, response) {
        try {
            const { id } = request.params

            const hospital = await connection('hospital')
                .leftJoin('donation', 'hospital.id', '=', 'donation.hospital_id')
                .where('hospital.id', id)
                .select([
                    'hospital.*',
                    connection.raw('COALESCE(SUM(donation.value), 0) as total')
                ])
                .groupBy('hospital.id')
                .first()

            return response.status(200).json(hospital)
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error })
        }
    }
}