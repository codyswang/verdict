import React from 'react'

export default function VerdictStyle(props) {
    if(props.verdict === "NOT TOXIC") {
      return <span id="not-toxic">NOT TOXIC</span>
    }
    if(props.verdict === "???") {
      return <span id="question">?</span>
    }
    return <span id="toxic">TOXIC</span>
}

