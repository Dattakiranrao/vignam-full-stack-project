import { React, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Class1Maths() {
  const [heroState, setHeroState] = useState(localStorage.getItem("heroState"));
  const [wait, setWait] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getClass1MathsData = async () => {
      let url = `http://localhost:8000/api/class1/maths`;
      const response = await fetch(url, {
        method: "GET",
      });
      const json = await response.json();
      setData(json);
      setWait(false);
    };

    getClass1MathsData();
  }, []);
  console.log("data", data);

  let question1 = [];
  let question2 = [];

  if (!wait) {
    for (var q of data.questions) {
      let dict = {
        question: "",
        options: [],
      };
      if (q.questionNumber === "1") {
        dict.question = q.question;
        for (var o of data.options) {
          if (o.questionNumber === "1") {
            dict.options.push(o);
          }
        }
        question1.push(dict);
      }
      if (q.questionNumber === "2") {
        dict.question = q.question;
        for (var op of data.options) {
          if (op.questionNumber === "2") {
            dict.options.push(op);
          }
        }
        question2.push(dict);
      }
    }
  }

  const getHeroState = (hState) => {
    setHeroState(hState);
  };

  useEffect(() => {
    localStorage.setItem("heroState", heroState);
  });

  return (
    <>
      {wait ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={wait}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className="w-full flex h-[100vh]">
          <div className="w-[20%] h-[100vh]">
            <Sidebar topics={data.chapters} getHeroState={getHeroState} />
          </div>
          {heroState ? (
            <div className="w-[80%] h-[100vh]">
              <Hero
                theory={data.chapters}
                video={data.videos}
                questions={[question1, question2]}
              />
            </div>
          ) : (
            <div>Please Select A chapter</div>
          )}
        </div>
      )}
    </>
  );
}
