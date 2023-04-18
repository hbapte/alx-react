import $ from 'jquery';
import debounce from 'lodash/debounce';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(count + ' clicks on the button');
}

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  $('#button').click(debounce(updateCounter, 1000));
});
