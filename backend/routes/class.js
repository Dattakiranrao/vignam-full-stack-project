const express = require("express");
const router = express.Router();
const Subject = require("../models/Subject.js")
const Video = require("../models/Video.js")
const Option = require("../models/Option.js")
const Question = require("../models/Question.js")
const Chapter = require("../models/Chapter.js")


router.get("/", (req, res) => {
  obj = {
    name: "datta",
    age: 21,
  };
  res.json(obj)
});

router.get("/class", async (req, res) => {
    const subjects = await Subject.find({});
    res.json(subjects)
})

router.get("/class1/maths", async (req, res) => {
    const chapters = await Chapter.find({});
    let filteredChaptersData = chapters.filter((s) => s.className === "class1" && s.subjectName === "maths")
    const videos = await Video.find({});
    let filteredVideoData = videos.filter((s) => s.className === "class1" && s.subjectName === "maths")
    const questions = await Question.find({});
    let filteredQuestionData = questions.filter((s) => s.className === "class1" && s.subjectName === "maths")
    const options = await Option.find({});
    let filteredOptionsData = options.filter((s) => s.className === "class1" && s.subjectName === "maths" )
    res.json({chapters: filteredChaptersData, videos:filteredVideoData, questions: filteredQuestionData, options: filteredOptionsData})
    console.log({chapters: filteredChaptersData, videos:filteredVideoData, questions: filteredQuestionData, options: filteredOptionsData})
});

router.get("/class1/english", async (req, res) => {
    const chapters = await Chapter.find({});
    let filteredChaptersData = chapters.filter((s) => s.className === "class1" && s.subjectName === "english")
    const videos = await Video.find({});
    let filteredVideoData = videos.filter((s) => s.className === "class1" && s.subjectName === "english")
    const questions = await Question.find({});
    let filteredQuestionData = questions.filter((s) => s.className === "class1" && s.subjectName === "english")
    const options = await Option.find({});
    let filteredOptionsData = options.filter((s) => s.className === "class1" && s.subjectName === "english" )
    res.json({chapters: filteredChaptersData, videos:filteredVideoData, questions: filteredQuestionData, options: filteredOptionsData})
    console.log({chapters: filteredChaptersData, videos:filteredVideoData, questions: filteredQuestionData, options: filteredOptionsData})
});

router.get("/class2/maths", async (req, res) => {
    const chapters = await Chapter.find({});
    let filteredChaptersData = chapters.filter((s) => s.className === "class2" && s.subjectName === "maths")
    const videos = await Video.find({});
    let filteredVideoData = videos.filter((s) => s.className === "class2" && s.subjectName === "maths")
    const questions = await Question.find({});
    let filteredQuestionData = questions.filter((s) => s.className === "class2" && s.subjectName === "maths")
    const options = await Option.find({});
    let filteredOptionsData = options.filter((s) => s.className === "class2" && s.subjectName === "maths" )
    res.json({chapters: filteredChaptersData, videos:filteredVideoData, questions: filteredQuestionData, options: filteredOptionsData})
    console.log({chapters: filteredChaptersData, videos:filteredVideoData, questions: filteredQuestionData, options: filteredOptionsData})
});

router.get("/class2/english", async (req, res) => {
    const chapters = await Chapter.find({});
    let filteredChaptersData = chapters.filter((s) => s.className === "class2" && s.subjectName === "english")
    const videos = await Video.find({});
    let filteredVideoData = videos.filter((s) => s.className === "class2" && s.subjectName === "english")
    const questions = await Question.find({});
    let filteredQuestionData = questions.filter((s) => s.className === "class2" && s.subjectName === "english")
    const options = await Option.find({});
    let filteredOptionsData = options.filter((s) => s.className === "class2" && s.subjectName === "english" )
    res.json({chapters: filteredChaptersData, videos:filteredVideoData, questions: filteredQuestionData, options: filteredOptionsData})
    console.log({chapters: filteredChaptersData, videos:filteredVideoData, questions: filteredQuestionData, options: filteredOptionsData})
});

module.exports = router;
