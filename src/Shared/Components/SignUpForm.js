import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function SignUpForm(props) {
  const [open, setOpen] = React.useState(false);
  const [signUpForm, setSignUpForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signUpUser = async () => {
    return await fetch(`http://localhost:3001/users`,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name: signUpForm.name,
        email_address: signUpForm.email,
        password: signUpForm.password 
      })
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const response = await signUpUser();
    handleClose();
  };

  const handleChange = (event) => {
    setSignUpForm({
      ...signUpForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Sign Up
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSignUp}>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              value={signUpForm.name}
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
              value={signUpForm.email}
              onChange={handleChange}
            />

            <TextField
              autoFocus
              margin="dense"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={signUpForm.password}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" >
              Sign Up
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
