module.exports = {
    getInventoryList: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
            .then((inventory) => {
                res.status(200).send(inventory)
            }).catch(res.status(400).send('ERROR'))
    },

    createProduct: (req, res) => {
        const db = req.app.get('db')

        const newProduct = {...req.body}

        db.create_product(newProduct)
            .then(newProduct => res.status(200).send(newProduct))
            .catch(err => res.status(500).send(err));
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
            .then(editedProduct => res.status(200).send(editedCharacter))
            .catch(error => res.status(500).send(error))
    }
}