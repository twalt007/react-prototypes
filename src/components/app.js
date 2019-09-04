import React from "react"
import Table from './table'

const students = [
    {
        name: 'Dr. Jeckyl',
        course: 'Chemistry',
        grade: '76'
    },
    {
        name: 'Mr. Hyde',
        course: 'Forensics',
        grade: '89'
    },
    {
        name: 'Prudence Blackbird',
        course: 'Music',
        grade: '99'
    }
];

export default () => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

