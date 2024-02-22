import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
import DataStore from '../data/dataStore';

function KindOfServices({ value, onChange }) {

    //לסוג האטרקציה-select
    const [] = React.useState('');
    const kindsOfServices = [];

    DataStore.services.forEach((s) => {
        if (!kindsOfServices.includes(s.name))
            kindsOfServices.push(s.name)
    })


    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small-label">אטרקציה</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={value}
                    label="serviceKind"
                    onChange={onChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {kindsOfServices.map((s, i) => <MenuItem key={i} value={s}>{s}</MenuItem>)}

                </Select>
            </FormControl>
        </>
    )
}
export default KindOfServices