import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import servicesRoutes from "./routes/services.js";
import productsRoutes from "./routes/products.js";
import inventoryRoutes from "./routes/inventory.js";
import reviewsandratingsRoutes from "./routes/reviewsandratings.js";
import newsandpromotionsRoutes from "./routes/newsandpromotions.js";
import accountRoutes from "./routes/account.js";
import appointmentRoutes from "./routes/appointment.js";
import cartRoutes from "./routes/cart.js";
import generalRoutes from "./routes/general.js";

// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
} from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors());

/* ROUTES */
app.use("/services", servicesRoutes);
app.use("/products", productsRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/reviewsandratings", reviewsandratingsRoutes);
app.use("/newsandpromotions", newsandpromotionsRoutes);
app.use("/account", accountRoutes);
app.use("/appointment", appointmentRoutes);
app.use("/cart", cartRoutes);
app.use("/general", generalRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    //User.insertMany(dataUser);
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);

  })
  .catch((error) => console.log(`${error} did not connect`));