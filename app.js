console.log("Hello");

const Commands = require('./models/commands'); 
const commands = JSON.parse(localStorage.getItem('commands')) || [];

const response = $.get('http://localhost:3001/commands');
console.log(response);

$.get('http://localhost:3001/commands')
.then(response => {
  response.forEach(command => {
    $('#commands tbody').append(`
      <tr>
        <td>${command.commandEntered}</td>
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});

$('#add-device').on('click', () => {
    const commandEntered = $('#commandEntered').val();  
    const body = {
      commandEntered,
    };
  
    $.post('http://localhost:3001/commands', body)
    .then(response => {
      location.href = '/';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
  });
