import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


import TextareaAutosize from '@mui/base/TextareaAutosize';


export default function SubmitForm(props) {
    const [open, setOpen] = React.useState(false);
    const [submitForm, setSubmitForm] = React.useState({
      name: "",
      email: "",
      password: "",
      phonenumber:"",
      content: ""
    });
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const submitUserForm = async () => {
      return await fetch(`http://localhost:3001/responses`,{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name: submitForm.name,
          email_address: submitForm.email,
          phonenumber: submitForm.phonenumber,
          content: submitForm.content
        })
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await submitUserForm();
      handleClose();
    };
  
    const handleChange = (event) => {
      setSubmitForm({
        ...submitForm,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
      <div>
        <Button color="secondary" onClick={handleClickOpen}>
          Submit Details
        </Button>
  
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit}>
            <DialogTitle>Submit Details</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                value={submitForm.name}
                onChange={handleChange}
              />
  
              <TextField
                autoFocus
                margin="dense"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                value={submitForm.email}
                onChange={handleChange}
              />


            <TextField
                autoFocus
                margin="dense"
                name="phonenumber"
                label="Phone"
                type="text"
                fullWidth
                variant="outlined"
                value={submitForm.phonenumber}
                onChange={handleChange}
              />

            <TextareaAutosize
                
                minRows={4}
                placeholder="Message content..."
                style={{ width: 200 }}
                name="content"
                value={submitForm.content}
                onChange={handleChange}
                />
            
  
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" >
                Submit Details
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
  

