module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
            .then((inventory) => {
                res.status(200).send(inventory)
            }).catch(error => res.status(500).send(error))
    },

    createProduct: (req, res) => {
        const db = req.app.get('db')

        const {name, price, imgurl} = req.body

        db.create_product([name, price, imgurl])
            .then(() => res.sendStatus(200))
            .catch(error => res.status(500).send(error));
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params

        db.delete_product(+id)
            .then(() => res.sendStatus(200))
            .catch((error) => res.status(500).send(error))
    },

    editProduct: (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params
        const {name, price, imgurl} = req.body

        db.editProduct([+id, name, price, imgurl])
            .then(() => res.status(200).sendStatus(200))
            .catch(error => res.status(500).send(error))
    },

    getOneProduct: (req, res) => {
        const db = req.app.get('db')

        const {id} =req.params

        db.get_one_product(+id).then((product) => {
            res.status(200).send(product)
        }).catch(console.log('problem'))
    }
}