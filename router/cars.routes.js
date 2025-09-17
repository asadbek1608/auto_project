const Router = require("express")
const { getAllCars, getOneCar, addCar, updateCar, deleteCar, getCarsByBrand } = require("../controller/cars.ctr")
const customValidatorMiddleware = require("../middleware/cars.validate.middleware")
const accessTokenMiddleware = require("../middleware/accessToken.middleware")

const carRouter = Router()

carRouter.get("/get_all_cars", getAllCars)
carRouter.get("/brand_cars/:brandId", getCarsByBrand)
carRouter.get("/get_one_car/:id", getOneCar)
carRouter.post("/add_car", accessTokenMiddleware, customValidatorMiddleware, addCar)
carRouter.put("/update_car/:id", accessTokenMiddleware, updateCar)
carRouter.delete("/delete_car/:id", accessTokenMiddleware, deleteCar)

module.exports = carRouter