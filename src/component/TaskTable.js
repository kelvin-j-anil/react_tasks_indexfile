import React from 'react';
import './TaskTable.css'; // Import the CSS file

const TaskTable = () => {
  const tasks = [
    {
      slNo: '1. WordCountTextBox',
      repositoryLink: 'https://github.com/kelvin-j-anil/word_count_textbox_reacttasks1',
      deploymentLink: 'https://kelvin-j-anil.github.io/word_count_textbox_reacttasks1/',
    },
    {
      slNo: '2. Calculator',
      repositoryLink: 'https://github.com/kelvin-j-anil/calculator_reacttask2',
      deploymentLink: 'https://kelvin-j-anil.github.io/calculator_reacttask2/',
    },
    {
        slNo: '3. ColorPicker',
        repositoryLink: 'https://github.com/kelvin-j-anil/color_picker_reacttask3',
        deploymentLink: 'https://kelvin-j-anil.github.io/color_picker_reacttask3/',
      },
      {
        slNo: '4. TableUsingAxios',
        repositoryLink: 'https://github.com/kelvin-j-anil/table_using_axios',
        deploymentLink: 'https://kelvin-j-anil.github.io/table_using_axios/',
      },
      {
        slNo: '5. AgeCalculator',
        repositoryLink: 'https://github.com/kelvin-j-anil/age_calculator_reacttask5',
        deploymentLink: 'https://kelvin-j-anil.github.io/age_calculator_reacttask5/',
      },
      {
        slNo: '6. Portfolio',
        repositoryLink: 'https://github.com/kelvin-j-anil/Portfolio_reacttasks6 ',
        deploymentLink: 'https://kelvin-j-anil.github.io/Portfolio_reacttasks6/',
      },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>React Tasks </th>
          <th>Repository Link</th>
          <th>Deployment Link</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.slNo}</td>
            <td>
              <a href={task.repositoryLink} target="_blank" rel="noopener noreferrer">
                Repository Link
              </a>
            </td>
            <td>
              <a href={task.deploymentLink} target="_blank" rel="noopener noreferrer">
                Deployment Link
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
