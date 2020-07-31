import React, {useState} from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from 'react-icons-kit'

export const CardHobbie = (dataTextHobbie, iconHobbie, descriptionHobbie, buttonHobbie, littleCaption) => {
    
    const [openDialog, setOpenDialog] = useState(false)
    const [littleDescription, setLittleDescription] = useState('')

    const handleClose = () =>{
        setOpenDialog(false)
    }
    
    return(
        <>
        <div className="card-hobbie">
            <div className="imgBx-hobbie" data-text={dataTextHobbie} >
                <Icon icon={iconHobbie} size={130} />
            </div>
            <div className="content-cardHobbie">
                <div>
                    <h3>{dataTextHobbie}</h3>
                    <p>{descriptionHobbie}</p>
                    <button onClick={() => {setOpenDialog(true); setLittleDescription(littleCaption)}} className="readMore-about">{buttonHobbie}</button>
                </div>
            </div>
        </div>


        <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Share with me!</DialogTitle>
            <DialogContent>
            <DialogContentText>
                {littleDescription}
            </DialogContentText>
                <TextField autoFocus margin="dense" id="name" label="Your name!" type="text" fullWidth />
                <TextField margin="dense" id="book" label="Your information" type="text" fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Share!
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}