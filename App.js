import React from 'react'
import ReactDOM from 'react-dom'

function sum(a, b){
    return a + b
}

function withdraw(account, amount) {
    account.total -= amount
}

/*
    All React components must act like `pure` function with respect to their props
*/


/*
    Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of "state". State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.
*/