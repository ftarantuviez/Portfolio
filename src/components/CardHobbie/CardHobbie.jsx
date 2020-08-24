import React, {useState} from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from 'react-icons-kit'
import Swal from 'sweetalert2'

import db from '../../firebase'

export const CardHobbie = (dataTextHobbie, iconHobbie, descriptionHobbie, buttonHobbie, littleCaption) => {
    
    const [openDialog, setOpenDialog] = useState(false)
    const [littleDescription, setLittleDescription] = useState('')
    const [name, setName] = useState('')
    const [information, setInformation] = useState('')
    const [hobbie, setHobbie] = useState('')

    const handleClose = () =>{
        setOpenDialog(false)
    }

    const handleShare = (e) => {
        db.collection('hobbies').add({
            name,
            hobbie,
            text: information
        })
        .then(() => {
            Swal.fire({title: `${name}, your message was sent succesfully :)`, icon: 'success'})
            setName('')
            setInformation('')
            setOpenDialog(false)
        })
        .catch(e => {
            alert(`${name}, something went wrong :'(. Please try again`)
        })
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
                    <button onClick={() => {setOpenDialog(true); setLittleDescription(littleCaption); setHobbie(dataTextHobbie)}} className="readMore-about">{buttonHobbie}</button>
                </div>
            </div>
        </div>


        <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Share with me!</DialogTitle>
            <DialogContent>
            <DialogContentText>
                {littleDescription}
            </DialogContentText>
                <TextField autoFocus margin="dense" onChange={(e) => setName(e.target.value)} value={name} id="name" label="Your name!" type="text" fullWidth />
                <TextField margin="dense" onChange={(e) => setInformation(e.target.value)} value={information} label="Your information" type="text" fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleShare} color="primary">
                    Share!
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}