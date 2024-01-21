'use client';

export default function Error ({ error }) {
    return (
        <main className="error">
            <h1>An error occured</h1>
            <p>Failed to fetch meals data, please try again later!</p>
        </main>
    )
}