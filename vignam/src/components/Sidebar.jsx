import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sidebar({ topics, getHeroState }) {
  console.log(topics[0]);

  return (
    <div className="bg-gray-100 h-[100vh] flex justify-center items-start pt-9">
      <div className="px-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{topics[0].mainName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <button onClick={() =>{getHeroState(true);} }>
              {topics[0].chapterName}
            </button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
