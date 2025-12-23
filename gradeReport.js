import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const ask = (question) => rl.question(question);
let totalGpt = [];
let totalCredithour = [];
async function calculateCourse(semester) {
  let input = await ask(`how many course for semester ${semester + 1} \n`);
  while (
    isNaN(input) ||
    input === '' ||
    Number(input) < 0 ||
    Number(input) > 7
  ) {
    console.log(
      'invalid please insert a valid number of course (between 4 and 7)'
    );
    input = await ask(`how many course for semester ${semester} \n`);
  }
  return input;
}
async function courseTitle(courseNumber) {
  let courseName = await ask(
    `enter the course tittle for course ${courseNumber} \n`
  );
  while (
    courseName.length < 3 ||
    courseName.length > 30 ||
    !/^[a-zA-Z0-9\s\-:&']+$/.test(courseName)
  ) {
    courseName = await ask(
      `enter the course tittle for course   ${courseNumber}\n`
    );
  }
  return courseName;
}
async function CTS(courseNumber) {
  let cts = await ask(
    `enter the CTS value of the course for course  ${courseNumber} \n`
  );
  while (isNaN(cts) || cts === null || cts === '' || cts <= 0) {
    console.log('invalid please insert a valid cts value ');
    cts = await ask(`enter the CTS value of for course ${courseNumber} \n`);
  }
  return cts;
}
async function courseCode(courseNumber) {
  let courseCode = await ask(
    `enter the course code for course ${courseNumber} \n`
  );
  while (
    courseCode.length < 3 ||
    courseCode > 30 ||
    !/^[a-zA-Z0-9\s\-:&']+$/.test(courseCode)
  ) {
    console.log('invalid please insert a valid course code fromat like EN103');
    courseCode = await ask(
      `enter the course code for course ${courseNumber} \n`
    );
  }
  return courseCode;
}
async function calculateRank(courseNumber) {
  let item = await ask(`Rank out of 100 for course ${courseNumber} \n`);
  while (isNaN(item) || item === '' || item < 0 || item > 100) {
    console.log('invalid please insert a valid rank out of 100');
    item = await ask(`Rank out of 100 for course ${courseNumber}  \n`);
  }
  if (item === 0) {
    console.log('Non Grade');
  } else {
    switch (true) {
      case item < 40 && item > 0:
        return [0, 'F'];
      case item < 45 && item >= 40:
        return [1, 'D'];
      case item < 50 && item >= 45:
        return [1.75, 'C-'];
      case item < 60 && item >= 50:
        return [2, 'C'];
      case item < 65 && item >= 60:
        return [2.5, 'C+'];
      case item < 70 && item >= 65:
        return [2.75, 'B-'];

      case item < 75 && item >= 70:
        return [3, 'B'];

      case item < 80 && item >= 75:
        return [3.5, 'B+'];

      case item < 85 && item >= 80:
        return [3.75, 'A-'];

      case item < 90 && item >= 85:
        return [4, 'A'];

      case item >= 90 && item <= 100:
        return [4, 'A+'];
      default:
        console.log(` default ${item}`);
        break;
    }
  }
}
async function creditHour(courseNumber) {
  let item = await ask(`enter the credithours for course ${courseNumber} \n  `);
  while (item < 1 || item > 12 || isNaN(item) || item === '') {
    console.log('invalid credithour');
    item = await ask(`enter the credithours for course ${courseNumber} \n  `);
  }
  return item;
}
function GPT(credithour, rank) {
  let gptSum = credithour * rank[0];
  return gptSum;
}
function calculateGPA(rankArray, credithourArray) {
  let gpaSum = rankArray.reduce((sum, value, index) => {
    sum += value * credithourArray[index];
    if (index == rankArray.length - 1) {
      let credithourSum = credithourArray.reduce(
        (accu, value) => accu + value,
        0
      );
      return sum / credithourSum;
    }
    return sum;
  }, 0);
  return gpaSum;
}
function reduce(sum) {
  let summation = sum.reduce((accu, item) => accu + item, 0);
  return summation;
}
function cumulative(totalGpt, totalCredithour) {
  let sumGpt = reduce(totalGpt);
  let sumCredithr = reduce(totalCredithour);
  return sumGpt / sumCredithr;
}
async function calling(semNumber) {
  let courseNameArray = [];
  let courseCodeResultArray = [];
  let ctsResultArray = [];
  let rankResultArray = [];
  let gradeResultArray = [];
  let creditHourResultArray = [];
  let gptResultArray = [];
  let courseNumber = await calculateCourse(semNumber);
  for (let x = 0; x < courseNumber; x++) {
    let courseName = await courseTitle(x + 1);
    courseNameArray.push(courseName);
    let courseCodeResult = await courseCode(x + 1);
    courseCodeResultArray.push(courseCodeResult);
    let ctsResult = await CTS(x + 1);
    ctsResultArray.push(Number(ctsResult));
    let rankResult = await calculateRank(x + 1);

    rankResultArray.push(Number(rankResult[0]));
    let creditHourResult = await creditHour(x + 1);
    creditHourResultArray.push(Number(creditHourResult));
    totalCredithour.push(Number(creditHourResult));
    gradeResultArray.push(rankResult[1]);
    let gptResult = GPT(creditHourResult, rankResult);
    gptResultArray.push(Number(gptResult));
    totalGpt.push(Number(gptResult));
  }
  let gpaResult = calculateGPA(rankResultArray, creditHourResultArray);
  let cumulativeResult = cumulative(totalGpt, totalCredithour);
  display(
    courseNameArray,
    courseCodeResultArray,
    ctsResultArray,
    rankResultArray,
    creditHourResultArray,
    gptResultArray,
    gpaResult,
    gradeResultArray,
    cumulativeResult
  );
}
async function display(...result) {
  console.log('Grade Report');
  let rows = result[0].map((_, i) => ({
    CourseName: result[0][i],
    CourseCode: result[1][i],
    CTS: result[2][i],
    Rank: result[3][i],
    CreditHour: result[4][i],
    LetterGrade: result[7][i],
    GPT: result[5][i],
  }));
  console.table(rows);
  let semesterGpt = reduce(result[5]);
  let semesterCreditHour = reduce(result[4]);
  let final = [
    {
      GPA: result[6],
      Cumulative: result[8],
      SemesterPoint: semesterGpt,
      SemesterCreditHour: semesterCreditHour,
    },
  ];
  console.table(final);
}
async function calculateSemester() {
  let semester = await ask(`how many semester? \n`);
  while (isNaN(semester) || semester === '' || semester <= 0) {
    console.log('invalid please insert a valid number of semesters');
    semester = await ask(`how many semester? \n `);
  }
  for (let i = 0; i < semester; i++) {
    await calling(i);
  }
  let gptTotal = reduce(totalGpt);
  let creditTotal = reduce(totalCredithour);
  let cumulativeResult = cumulative(totalGpt, totalCredithour);
  let summary = [
    {
      TotalCredit: creditTotal,
      cumulative: cumulativeResult,
      TotalGpt: gptTotal,
    },
  ];
  console.table(summary);
}
calculateSemester();
