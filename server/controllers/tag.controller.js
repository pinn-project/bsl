const { tags, tagging } = require('../configs/databases')
const service = require('../services/tag.service')

module.exports = {
  /**
   * Display a listing of the resource.
   * 
   * @param {Request} req
   * @param {Response} res
   */
  index: async (req, res) => {
    try {
      const query = await tags.findAll()
      res.json(query)
    } catch (error) {
      res.error(error.message, error.status)
    }
  },

  /**
   * Store a newly created resource in storage.
   * 
   * @param {Request} req
   * @param {Response} res
   */
  create: async (req, res) => {
    try {
      // Check is exists.
      const hasExists = await service.hasTagName(req.body.name)
      if (hasExists) {
        return res.error('This [Tag name] already exists.', 409)
      }

      // store a newly.
      const store = await tags.create({
        name: req.body.name
      })

      res.json({
        data: store,
        message: 'Create success.'
      })
    } catch (error) {
      res.error(error.message, error.status)
    }
  },

  /**
   * Display the specified resource.
   * 
   * @param {Request} req
   * @param {Response} res
   */
  show: async (req, res) => {
    try {
      const tag = await tags.findByPk(req.params.id)
      res.json(tag)
    } catch (error) {
      res.error(error.message, error.status)
    }
  },

  /**
   * Update the specified resource in storage.
   * 
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    try {
      // Check has exists.
      const hasExists = await service.hasTagName(req.body.name)
      if (hasExists) {
        return res.error('This [Tag name] already exists.', 409)
      }

      // Update storage.
      await tags.update({ name: req.body.name }, {
        where: { id: req.params.id }
      })
      
      res.json({ message: 'Update success.' })
    } catch (error) {
      res.error(error.message, error.status)
    }
  },

  /**
   * Remove the specified resource from storage.
   * 
   * @param {Request} req
   * @param {Response} res
   */
  destroy: async (req, res) => {
    const id = req.params.id

    try {
      await tagging.destroy({ where: { tagId: id } })
      await tags.destroy({ where: { id } })
      res.json({ message: 'Remove success.' })
    } catch (error) {
      res.error(error.message, error.status)
    }
  }
}