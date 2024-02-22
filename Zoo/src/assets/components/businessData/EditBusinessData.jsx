import { Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react'
import * as React from 'react';
import { useState } from 'react';
import { addBusinessData } from '../data/server';
import './Business.css';

const EditBusinessData = (observer(() => {

    const [BD, setBD] = useState({ businessName: "", logo: "", address: "", phone: "", details: "" });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div id="edit">
                <React.Fragment>
                    <Fab id='fab' variant="outlined" onClick={handleClickOpen}>
                        <EditIcon />
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
                        <DialogTitle>עדכון פרטי העסק</DialogTitle>
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
                                <TextField label="שם" variant="outlined" value={BD.businessName}
                                    onChange={(e) => setBD({ ...BD, businessName: e.target.value })} />

                                <TextField label="קישור ללוגו" variant="outlined" value={BD.logo}
                                    onChange={(e) => setBD({ ...BD, logo: e.target.value })} />

                                <TextField label="כתובת" variant="outlined" value={BD.address}
                                    onChange={(e) => setBD({ ...BD, address: e.target.value })} />

                                <TextField label="טלפון" variant="outlined" type="number" value={BD.phone}
                                    onChange={(e) => setBD({ ...BD, phone: e.target.value })} />

                                <TextField label="תיאור" variant="outlined" value={BD.details}
                                    onChange={(e) => setBD({ ...BD, details: e.target.value })} />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>ביטול</Button>
                            <Button type="submit" onClick={() => addBusinessData(BD)}>עדכון</Button>
                        </DialogActions>
                    </Dialog>

                </React.Fragment>
            </div>
        </>
    )

}))
export default EditBusinessData