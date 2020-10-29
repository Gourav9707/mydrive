import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Box } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import Form from "./form";
import View from "./view";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function App() {
  const defaultFolder = [
    {
      name: "Folder1",
      description: "Description1"
    },
    {
      name: "Folder2",
      description: "Description2"
    },
    {
      name: "Folder3",
      description: "Description3"
    }
  ];

  const [folder, setFolder] = React.useState(defaultFolder);

  const [open, setOpen] = React.useState(false);

  const [editname, setEditname] = React.useState("");
  const [editdes, setEditdes] = React.useState("");
  const [editindex, setEdindex] = React.useState(-1);

  const handleadd = () => {
    setOpen(true);
    console.log("add");
  };
  const handlecreate = (name, description) => {
    setOpen(false);
    if (editindex !== -1) {
      folder[editindex].name = name;
      folder[editindex].description = description;
      setEdindex(-1);
      setEditdes("");
      setEditname("");
    } else {
      let foldercopy = [...folder];
      foldercopy.unshift({ name, description });
      setFolder(foldercopy);
      console.log(name + " " + description);
    }
  };

  const handledelete = (index) => {
    console.log("delete" + index);
    let foldercopy = [...folder];
    foldercopy.splice(index, 1);
    setFolder(foldercopy);
  };

  const handleedit = (index) => {
    console.log("edit" + index);
    setEditname(folder[index].name);
    setEditdes(folder[index].description);
    setEdindex(index);
    setOpen(true);
  };

  const classes = useStyles();
  return (
    <div className="App">
      {/* navbar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Drive
          </Typography>
        </Toolbar>
      </AppBar>
      {/* navbar end */}

      <Box
        display="flex"
        m={2}
        flexWrap="wrap"
        m={5}
        justifyContent="space-around"
      >
        {folder.map((folders, index) => (
          <View
            key={index}
            id={index}
            name={folders.name}
            description={folders.description}
            ondelclk={() => handledelete(index)}
            oneditclk={() => handleedit(index)}
          />
        ))}
      </Box>

      <Form open={open} onclick={handlecreate} name={editname} des={editdes} />

      <Fab color="primary" aria-label="add" onClick={handleadd}>
        <AddIcon />
      </Fab>
    </div>
  );
}
