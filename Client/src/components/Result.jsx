import { Button, Card,  RadioGroup, FormControl, FormControlLabel, FormLabel, Radio } from "@material-ui/core";
import { Link, Route, Navigate, useLocation} from 'react-router-dom'
import React, { useState } from 'react';
import css from "./result.css"

const getScore = () => {
    let location = useLocation();
    const score = location.state.score;
    return score;
}

export default function Result() {
    let score = getScore()
    return (
        <div class="result-container">
            <h2>Result</h2>
            <br/>
            <h3>You have scored: {score} point(s)</h3>
        </div>
    );
}
