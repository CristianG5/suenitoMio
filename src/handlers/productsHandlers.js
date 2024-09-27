const getProductsHandlers = (req, res) => {
    const {name, price} = req.query;
    if(name)res.status(200).send(`Nombre del producto ${name}`);
    else res.status(200).send('Todos los productos')
}

const getDetallesHandlers = (req, res) => {
    const {id} = req.params
    res.status(200).send(`Detalle del producto ${id}`);
}

const postProductsHandlers = (req, res) => {
    res.status(200).send("Creando productos")
}

module.exports = {
    getProductsHandlers,
    getDetallesHandlers,
    postProductsHandlers
}