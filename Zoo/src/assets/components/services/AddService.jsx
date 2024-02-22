
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react';
import Service from './Service';
import ServicesList from './ServicesList';
import * as React from 'react';
import { useState } from 'react';
import { addServiceToServer } from '../data/server';
import './Service.css';

const AddService = (observer(() => {
    const [service, setService] = useState({ name: "", descripition: "", child: "", adult: "", img: "" });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setService({ name: "", descripition: "", child: "", adult: "", img: "" });
        setOpen(false);
    };

    return (
        <>
            <div id="addService">
                <React.Fragment>
                    <Fab id='fab' variant="outlined" onClick={handleClickOpen}>
                        <AddIcon />
                    </Fab>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            component: 'form',
                            onSubmit: (event) => {
                                event.preventDefault();
                                const formData = new FormData(event.currentTarget);
                                const formJson = Object.fromEntries(formData.entries());
                                const form = formJson.form;
                                console.log(form);
                                handleClose();
                            },
                        }}
                    >

                        <DialogTitle>הוספת שירות</DialogTitle>
                        <DialogContent>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' }, display: 'grid', columnGap: 3,
                                    rowGap: 0.1,
                                    gridTemplateColumns: 'repeat(1fr)',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField label="שם השירות" variant="outlined" value={service.name}
                                    onChange={(e) => setService({ ...service, name: e.target.value })} />

                                <TextField label="תיאור" variant="outlined" value={service.descripition}
                                    onChange={(e) => setService({ ...service, descripition: e.target.value })} />


                                <TextField label="מחירון למבוגר" type="number" variant="outlined" value={service.adult}
                                    onChange={(e) => setService({ ...service, adult: e.target.value })} />

                                <TextField label="מחירון לילד"
                                    variant="outlined" type="number" value={service.child}
                                    onChange={(e) => setService({ ...service, child: e.target.value })} />

                                <TextField label="קישור לתמונה " variant="outlined" value={service.img}
                                    onChange={(e) => setService({ ...service, img: e.target.value })} />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" onClick={() => addServiceToServer(service) && setService({ name: "", descripition: "", child: "", adult: "", img: "" })}>הוסף שירות</Button>
                            {/* <Button type="submit" onClick={() => handleSubmit(service)}>הוספה</Button> */}
                        </DialogActions>
                    </Dialog>

                </React.Fragment>
            </div >
        </>
    )
}))

export default AddService
