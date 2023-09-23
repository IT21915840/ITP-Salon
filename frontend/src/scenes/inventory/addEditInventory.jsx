import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, FormHelperText, Grid, Input, InputLabel, Paper, TextField } from '@mui/material';
import { Form } from 'react-router-dom';
import sampleImage from '../../assets/placeholder.webp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AddEditModel = (props) => { 
  const {open,setOpen} = props; 
  const handleClose = () => setOpen(!open);

  return (
    <div> 
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Paper sx={style}>
            <form>
                <Typography variant='h4' >Add / Edit Inventory</Typography>
                <img src={sampleImage}  style={{width:'330px',marginTop:'10px',marginBottom:'5px'}}/> 
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <FormControl  xs={12}>
                                <InputLabel htmlFor="my-input">Name</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Enter inventory name.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}> 
                            <FormControl>
                                <InputLabel htmlFor="my-input">Quentity</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Enter inventory quentity.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl> 
                                <TextField
                                    id="standard-textarea"
                                    label="Description"
                                    placeholder="Description"
                                    multiline
                                    variant="standard"
                                />
                                <FormHelperText id="my-helper-text">Enter inventory description.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="primary"
                                size="small" 
                            >
                                 Save
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="primary"
                                size="small" 
                                onClick={() => setOpen(!open)}
                            >
                                 Cancle
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                
            </form>
        </Paper>
      </Modal>
    </div>
  );
}

export default AddEditModel;