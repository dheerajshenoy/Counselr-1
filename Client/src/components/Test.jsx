import css from "./test.css"
import { Button, Card,  RadioGroup, FormControl, FormControlLabel, FormLabel, Radio } from "@material-ui/core";
import { Link, Route, Navigate } from 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

let questions = [

    {
        question: "The average of the marks obtained in an examination by 8 students was 51 and by 9 other students was 68. The average marks of all 17 students was",
        options: ["59", "59.5", "60", "60.5"],
        answer: "60"
    },

    {
        question: "A library has an average number of 510 visitors on Sunday and 240 on other days. The average number of visitors per day in a month of 30 days beginning with Sunday is",
        options: ["300","290","285", "295"],
        answer: "285"
    },

    {
	question: "12 kg of rice costing 30 per kg is mixed with 8 kg of rice costing 40 per kg. The average per kg price of mixed rice is",
	options: ["35","34","38","37"],
	answer:"34"
    },

    {
	question: "A can do a piece of work in 10 days and B can do it in 15 days. They work together for 5 days, the rest of the work is finished by C in two more days. If they got ₹ 6000 as wages for the whole work, then find the daily wages of A, B and C",
	options: ["600,400,500", "400,600,800", "400,500,600", "None of these"],
	answer:"600,400,500"
    },

    {
	question: "A goldsmith observes that one of his employees prepares a necklace in 9 hours, while another employee prepares it in 10 hours. If they work together, they stud 10 gems less every hour and thus prepare a necklace in 5 hours, then the number of gems studded in each necklace is",
	options:["1200","1000","800","900"],
	answer:"900"
    },

    {
        question: "P and Q can do a piece of work in 12 days, Q and R can do a piece of work in 15 days and R and P can do a piece of work in 20 days. Q alone can do the whole work in",
        options: ["25","30","20","24"],
        answer: "20"
    },

    {
        question: "If the compound ratio of [(3a + 2b) : 3] and [1 : (3a + b)] is 1 : 2, find the ratio a : b",
        options: ["1:4","1:6","1:2","1:3"],
        answer: "1:3"
    },

    {
        question: "The cost price of a book is ₹110 and the selling price is ₹123.20. What percent profit will the bookseller make on selling it?",
        options:["11%","12%","13%","14%"],
        answer: "12%"
    },

    {
	question: "Imran borrowed a sum of money from Jayant at the rate of 8% per annum simple interest for the first four years, 10% per annum for the next six years, and 12% per annum for the period beyond 10 years. If he pays a total of Rs. 12,160 as interest only at the end of 15 years, how much way did he borrow?",
	options: ["8000","10000","12000","9000"],
        answer: "8000"
        },

    {
        question: "A constable was 114 meters behind a thief. A constable walks 21 meters and a thief 15 meters in a minute, then in how much time will the constable catch the thief?",
        options: ["19 min","17 min","18 min","16 min"],
        answer: "19 min"
    },

    {
        question: "A 240 m long train crosses a 300 m long platform in 27 seconds. What is the speed of the train in km/h?",
        options: ["36","20","66","60"],
        answer: "36"
    },

    {
        question: "If + means −, − means ×, × means ÷, and ÷ means +, what will be the value of the following expression?\n5 ÷ 5 + 5 – 10 × 10 = ?",
        options: ["15","4","5","10"],
        answer: "5"
    },

    {
        question: "By interchanging the given two signs and numbers which of the following equation will be correct?\n+ and –, 7 and 6",
        options: ["4 × 7 + 6 – 3 ÷ 1 = 20",
                 "8 × 7 + 5 ÷ 1 – 6 = 17",
                 "7 – 6 × 3 + 4 ÷ 1 = 8",
                 "7 × 2 – 6 + 4 ÷ 2 = 13"],
        answer: "4 × 7 + 6 – 3 ÷ 1 = 20"
    },

    {
        question: "In a school of 200 students, the following chart represents the percentage of students involved in different sports. What is the number of students playing cricket?",
        options: ["17"," 83","24","34"],
        answer: "83"
    },

    {
        question: "Two trains of lengths 100 m and 140 m respectively are running in opposite directions on parallel tracks. If their speed is 29 km/hour and 43 km/hour respectively. In what time will they cross each other?",
        options: ["14 sec","10 sec","12 sec","20 sec"],
        answer: "12 sec"
    },

    {
        question: " P, Q, R, S, T, U, V and W are sitting at a round table and facing the centre. P is second to the right of T and is the neighbor of T, R and V. S does not sit near to P and V and U are sitting nearby. Q is not between S and W and W is not between U and S. Who are not neighbors among themselves",
        options: ["RV","RP","UV","QW"],
        answer: "RV"
    },

    {
        question: "Five friends A, B, C, D & E went to college, each one of them reached at different times. If B reached after C & D; A and E reached before C & D, then who was the last person to reach?",
        options: ["A","D","C","B"],
        answer: "B"
    },

    {
        question: "Which of the following option will replace the question mark?\nMILD: NROW:: BACK: ?",
        options: ["CNEA","YZXP","CMJA","YPFX"],
        answer: "YZXP"
    },

    {
        question: "Select the option that is related to the third word in the same way as the second word is related to the first word. (The words must be considered as meaningful English words and must not be related to each other based on the number of letters/number of consonants/vowels in the word.)\n Movie: Director :: Orchestra: ?",
        options:["Choreographer","Conductor","Dancer","Audience"],
        answer:"Conductor"
    },


    {
        question:"Select the option that is related to the fifth number in the same way as the second number is related to the first number and the fourth number is related to the third number.\n 7 : 13 :: 16 : 31 :: 46 : ?",
        options:["81","83","91","97"],
        answer:"91"
    },


    {
        question:"In a certain code, the word COMPAQ is written as DQNRBS and SONY is written as TQOA. In the same code, how is MOTOROLA written?",
        options:["NPUPSPMB",
                 "INUNSNMB",
                 "NQUQSQMC",
                 "OPUPUPIB"],
        answer:"NQUQSQMC"
    },


    {
        question:"In a certain code language, ‘CROSS’ is written as ‘66’ and ‘CHART’ is written as ‘90’. How will ‘SYMBOL’ be written in that language?",
        options:["82","93","76","88"],
        answer:"82"
    },

            {
	        question: "In a row of people all facing north, Prince is 5th from the right end. Amit is 15th from the right end. Amit is exactly between Prince and Aditya. If Aditya is sixth from the left end of the line, how many people are there in the row?",
	        options: ["29","30","31","32"],
    answer: "30"
},

    {
        question: "Choose the related word/letters/number from the given alternatives.\n 36 : 6 : : 441 : ?",
        options: ["11","21","25","32"],
	answer: "21"
    },

    {
	question: "A man was engaged on a job for 40 days on the condition that he will get a wage of Rs. 180 for the day he works, but he will have to pay a fine of Rs. 20 for each day of his absence. If he gets Rs. 520 at the end of the month, then, he was absent for how many days?",
	options: ["12 days","10 days","6 days","8 days"],
        answer: "10 days"
    },

    {
        question: "The ratio of the age of a son and father is 1: 4. After 9 years, the ratio will be 2: 5. What is the present age (in years) of the son?",
        options: ["10","8","9","12"],
        answer: "9"
    },

    {
	question: "If the cost of 10 books is ₹250, then find the cost of 15 books",
	options: ["125","115","375","215"],
        answer: "375"
    },

    {
        question: "In a certain code language, 'GREEN' is written as 'HTHIS' and ‘SAFFRON’ is written as ‘TCIJWUU’. How will 'WHITE' be written in that language?",
        options:["XJLXJ","XJLWJ","XLLXJ","XJLVJ"],
        answer:"XJLXJ"
    },
]

const renderQuestion = (qobj, index) => {
}

const submitTest = () => {
}

export default function Test() {
    let navigate = useNavigate()

    const [userAnswers, setUserAnswers] = useState({});

    const handleAnswerChange = (questionIndex, answer) => {
        setUserAnswers({ ...userAnswers, [questionIndex]: answer });
    };

    const handleSubmit = () => {

        let score = 10
        navigate("/Result", { state: { score: score } });

        // if (!isAllQuestionsAnswered()) {
        //     alert("Please answer all the questions!!");
        //     return;
        // }
        // let score = 0;
        // questions.forEach((question, index) => {
        //     if (userAnswers[index] === question.answer) {
        //         score++;
        //     }
        // });

    };

    const isAllQuestionsAnswered = () => {
        return Object.keys(userAnswers).length === questions.length;
    };

    return (
        <div class="test-container">
            {questions.map((question, index) => (
                <div class="question-card">
                    <FormControl component="fieldset">
                        <span class="question-title"><b>{index + 1}</b>. {question.question}</span>
                        <RadioGroup
                            aria-label={`question${index}`}
                            name={`question${index}`}
                            value={userAnswers[index] || ''}
                            onChange={(event) => handleAnswerChange(index, event.target.value)}>
                            {question.options.map((option, optionIndex) => (
                                <FormControlLabel
                                    key={optionIndex}
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            ))}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
}
