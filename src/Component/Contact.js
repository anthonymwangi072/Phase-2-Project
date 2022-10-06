import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import "../Component/Css/ContactStyle.css";

import TextareaAutosize from "@mui/base/TextareaAutosize";

const Contact = () => {
  const [submitForm, setSubmitForm] = React.useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    content: "",
  });

  const [responses, setResponses] = React.useState([]);

  const submitUserForm = async () => {
    return await fetch(`http://localhost:3001/responses`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: submitForm.name,
        email_address: submitForm.email,
        phonenumber: submitForm.phonenumber,
        content: submitForm.content,
      }),
    });
  };

  const getResponses = async () => {
    return await fetch(`http://localhost:3001/responses`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitUserForm();
    const responses = await getResponses();
    setResponses([...(await responses.json())]);
  };

  const handleChange = (event) => {
    setSubmitForm({
      ...submitForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
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

        <br></br>

        <Button type="submit">Submit </Button>
      </form>

      <div>
        {responses.map((response) => {
          return <div>{JSON.stringify(response)}</div>;
        })}
      </div>
    </div>
  );
};
export default Contact;
