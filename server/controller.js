module.exports = {
    getInventoryList: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
            .then((inventory) => {
                res.status(200).send(inventory)
            }).catch(error => res.status(400).send(error))
    },

    createProduct: (req, res) => {
        const db = req.app.get('db')

        const newProduct = {...req.body}

        db.create_product(newProduct)
            .then(newProduct => res.status(200).send(newProduct))
            .catch(error => res.status(500).send(error));
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')

        const {id} = req.params

        db.delete_product(+id)
            .then(() => res.send('all good'))
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

        db.get_one_product(id).then((product) => {
            res.status(200).send(product)
        }).catch(error => res.status(400).send(error))
    }
}