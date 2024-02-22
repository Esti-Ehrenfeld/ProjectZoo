import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Swal from 'sweetalert2'
import * as React from 'react';
import { useState } from 'react';
import Counter from './Counter';
import { addNewAppointment } from '../data/server';
import KindOfServices from './KindOfServices';
import './Appointment.css'

export default function AddAppointment() {

  //לפרטי הפגישה
  const [appointment, setAppointment] = useState({ service: "", date: "", name: "", email: "", countChild: 0, countAdult: 0 });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {

    e.preventDefault()
    if (appointment.service != "None" && appointment.date != "" && appointment.name != "" && appointment.email != "" && appointment.countChild != 0 && appointment.countAdult != 0) {
      addNewAppointment(appointment)
        .then(x => {
          setAppointment({ service: "", date: "", name: "", email: "", countChild: 0, countAdult: 0 })
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "נרשמת בהצלחה!",
            showConfirmButton: false,
            timer: 1500
          });
          setOpen(false);
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "מתנצלים אין מקום פנוי",

          });
          setOpen(false);
        });
    }
    else {
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" style={{ color: 'black', backgroundColor: 'white', display: 'block', margin: '0 auto' }} onClick={handleClickOpen}>
        לרכישת כרטיסים
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleClose

        }}
      >
        <DialogTitle> לרכישת כרטיסים</DialogTitle>
        <DialogContentText>
          בחר אטרקציה רצויה
        </DialogContentText>
        <KindOfServices value={appointment.service} onChange={(e) => setAppointment({ ...appointment, service: e.target.value })} />
        <DialogContent>
          <DialogContentText>
            בחר תאריך רצוי.
          </DialogContentText>
          {/*date  */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={appointment.date}
              dateFormat="dd/MM/yyyy"
              onChange={(target) => setAppointment({ ...appointment, date: new Date(target.toString()) })} disablePast
            />
          </LocalizationProvider>
          {/* date */}
          <DialogContentText>
            <br />
            בחר כמות מבוגרים
          </DialogContentText>
          <Counter count={appointment.countAdult} setCount={(data) => setAppointment({ ...appointment, countAdult: data })} />
          <DialogContentText>
            <br />
            בחר כמות ילדים
            {console.log(appointment)}
          </DialogContentText>
          <Counter count={appointment.countChild} setCount={(data) => setAppointment({ ...appointment, countChild: data })} />
          <DialogContentText>
            <br />
            הכנס את השם שלך.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={appointment.name}
            onChange={({ target }) => setAppointment({ ...appointment, name: target.value })}
          />

          <DialogContentText>
            <br />
            הכנס את האימייל שלך.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={appointment.email}
            onChange={({ target }) => setAppointment({ ...appointment, email: target.value })}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit">המשך</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
