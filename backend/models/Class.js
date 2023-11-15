// const mongoose = require('mongoose')
// const { Schema } = mongoose;
//
// const optionSchema = new Schema({
//   opt: {
//     type: String,
//     required: true,
//   },
//   isTrue: Boolean,
// });
//
// const questionSchema = new Schema({
//   question: {
//     type: String,
//     required: true,
//   },
//   options: [optionSchema],
// });
//
// const videoSchema = new Schema({
//   link: {
//     type: String,
//   },
// });
//
// const chapterSchema = new Schema({
//   chapterName: {
//     type: String,
//     required: true,
//   },
//   theory: {
//     type: String,
//     required: true,
//   },
//   simulation: {
//     type: String,
//   },
//   doubts: {
//     type: String,
//   },
//   video: [videoSchema],
//   questions: [questionSchema],
// });
//
// const subjectSchema = new Schema({
//   parentName: {
//     type: String,
//     required: true,
//   },
//   subjectName: {
//     type: String,
//     required: true,
//   },
//   chapters: [chapterSchema],
// });
//
// const Option = mongoose.model("Option", optionSchema);
// const Questions = mongoose.model("Questions", questionSchema);
// const Chapter = mongoose.model("Chapter", chapterSchema);
// const Subject = mongoose.model("Subject", subjectSchema);
// const Video = mongoose.model("Subject", videoSchema);
// // const Class = mongoose.model('Class', classSchema);
//
// module.exports = { Option, Questions, Chapter, Subject, Video }; //, Class
// // const topicSchema = new Schema({
// //   name: {
// //     type: String,
// //     required: true,
// //   },
// // });
// //
// // const classSchema = new Schema({
// //   name: {
// //     type: String,
// //     required: true,
// //   },
// //   subjects: [subjectSchema], // An array of subjects within the class
// // });
//
// // const Topic = mongoose.model("Topic", topicSchema);
