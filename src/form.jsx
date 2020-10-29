import React from "react";
import Button from "@material-ui/core/Button";
import { TextField, Box } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// let ename='',edes='';

export default function Form(props) {
  const [name, setName] = React.useState(props.name);
  const [des, setDes] = React.useState(props.des);
  const update = () => {
    setName(props.name);
    setDes(props.des);
  };

  const open = props.open;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <Box display="flex" flexDirection="column">
            <TextField
              id="standard-basic"
              label="Folder Name"
              variant="outlined"
              value={name !== undefined && name.length !== 0 ? name : ""}
              onChange={(event) => {
                update();
                setName(event.target.value);
              }}
            />
            <TextField
              id="time"
              label="Folder Description "
              type="text"
              value={des !== undefined && des.length !== 0 ? des : ""}
              onChange={(event) => setDes(event.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.onclick(name, des)}
            color="primary"
            autoFocus
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
