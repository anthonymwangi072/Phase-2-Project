import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function LoginForm(props) {
  const [open, setOpen] = React.useState(false);
  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });
  const { setUserDetails, userDetails } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loginUser = async (email) => {
    return await fetch(`http://localhost:3001/users/${email}`);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await loginUser(loginForm.email)
    const userInfo = JSON.parse(await response.text())
    if (loginForm.password === userInfo.password) {
      setUserDetails({ ...userInfo, password: null });
    } else {
      alert("User login Failed");
    }
    handleClose()
  };

  const handleChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Login
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleLogin}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={loginForm.email}
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
              value={loginForm.password}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleLogin}>
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
