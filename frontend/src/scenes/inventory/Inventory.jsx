import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
  Fab,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import sampleImage from '../../assets/placeholder.webp';
import AddEditModel from "./addEditInventory";

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
  openModal,
  setOpenModel
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <img src={sampleImage} style={{width:'350px'}} />
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography> 

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setOpenModel(!openModal)}
        >
          Update
        </Button>
        <Button
          color="secondary"
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
            <Typography color={theme.palette.secondary[600]}>
                Delete
            </Typography> 
        </Button>
      </CardActions> 
    </Card>
  );
};

const InventoryManagement = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [openModal, setOpenModel] = useState(false);

  return (
    <>
        <Box m="1.5rem 2.5rem">
        <AddEditModel open={openModal} setOpen={setOpenModel}/>
        <Header title="Inventory" subtitle="Inventory management" />
        {data || !isLoading ? (
            <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
            >
            {data?.map(
                ({
                _id,
                name,
                description,
                price,
                rating,
                category,
                supply,
                stat,
                }) => (
                <Product
                    key={_id}
                    _id={_id}
                    name={name}
                    description={description}
                    price={price}
                    rating={rating}
                    category={category}
                    supply={supply}
                    stat={stat}
                    openModel={openModal}
                    setOpenModel={setOpenModel}
                />
                )
            )}
            </Box>
            
        ) : (
            <>Loading...</>
        )}
        <Fab variant="extended" sx={{
            position:'sticky',
            bottom:'10px',
            width:'100%',
            right:'0',  
            marginTop:'30px',
            marginBottom:'30px'
        }}
            onClick={() => setOpenModel(!openModal)}
        > 
           + Add New Inventory
        </Fab>
        </Box>
        
    </>
  );
};

export default InventoryManagement;