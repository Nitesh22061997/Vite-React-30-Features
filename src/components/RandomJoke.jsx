import React from 'react'

export default function RandomJoke() {

    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The best way to predict the future is to create it. - Peter Drucker",
        "The secret of getting ahead is getting started. - Mark Twain",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The best way to predict the future is to create it. - Peter Drucker",
        "The secret of getting ahead is getting started. - Mark Twain",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex]

    return (
        <div>
            {quote}
        </div>
    )
}
