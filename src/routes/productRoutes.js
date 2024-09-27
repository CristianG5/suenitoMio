const { Router } = require('express');
const { getProductsHandlers, getDetallesHandlers, postProductsHandlers } = require("../handlers/productsHandlers");

const productsRouter = Router();


productsRouter.get("/", getProductsHandlers);

productsRouter.get("/:id", getDetallesHandlers);

productsRouter.post("/", postProductsHandlers)

module.exports = {
    productsRouter
}