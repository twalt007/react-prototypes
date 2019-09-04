import React from 'react';



export default (props) => {

    const tableRows = props.data.map((student,index)=> {
        // console.log(student);
        return (
            <tr key={index}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.grade}</td>
            </tr>
        );
        });

    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
                {/* <tr>
                    <td>Jane</td>
                    <td>Math</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>History</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>Joan</td>
                    <td>English</td>
                    <td>B</td>
                </tr> */}
            </tbody>
        </table>
    )
}