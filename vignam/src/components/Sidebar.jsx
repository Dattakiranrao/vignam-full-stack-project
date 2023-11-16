import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sidebar({ topics, getHeroState }) {
  console.log(topics[0]);

  return (
    <>
      <style>{`.MuiPaper-elevation{border: none !important;box-shadow: none !important; background: #ebf8ff;}`}</style>

      <div className="bg-blue-100 h-[100vh] flex justify-center items-start pt-9">
        <div className="px-4 w-[240px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="text-xl">{topics[0].mainName}</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <button
                onClick={() => {
                  getHeroState(true);
                }}
              >
                {topics[0].chapterName}
              </button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
