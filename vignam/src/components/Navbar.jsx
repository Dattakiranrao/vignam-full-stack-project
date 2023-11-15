import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Navbar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [clName, setclName] = useState(localStorage.getItem("selectedClass"));
  useEffect(() => {
    localStorage.setItem("selectedClass", clName);
  });

  return (
    <nav className="flex justify-between px-4 h-12 bg-blue-100 items-center">
      <div className="space-x-16">
        <span>Symbol</span>
        <button
          className="border border-black px-4 py-1 rounded-xl"
          onClick={handleOpen}
        >
          {clName.length > 0 ? (
            <span className="capitalize">{clName}</span>
          ) : (
            "Select a Class"
          )}
        </button>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Class 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col space-y-2">
                    <Link
                      onClick={() => {
                        setclName("Class 1 Maths");
                        handleClose();
                      }}
                      to="/class1/maths"
                      className="hover:bg-gray-100 h-8 flex justify-start items-center px-2"
                    >
                      Maths
                    </Link>
                    <Link
                      onClick={() => {
                        setclName("Class 1 English");
                        handleClose();
                      }}
                      to="/class1/english"
                      className="hover:bg-gray-100 h-8 flex justify-start items-center px-2"
                    >
                      English
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Class 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col space-y-2">
                    <Link
                      onClick={() => {
                        setclName("Class 2 Maths");
                        handleClose();
                      }}
                      to="/class2/maths"
                      className="hover:bg-gray-100 h-8 flex justify-start items-center px-2"
                    >
                      Maths
                    </Link>
                    <Link
                      onClick={() => {
                        setclName("Class 2 English");
                        handleClose();
                      }}
                      to="/class2/english"
                      className="hover:bg-gray-100 h-8 flex justify-start items-center px-2"
                    >
                      English
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Modal>
        </div>
      </div>
      <div>search</div>
    </nav>
  );
}
