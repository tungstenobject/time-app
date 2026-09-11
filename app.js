const output = document.getElementById('output');
const button = document.getElementById('load');

async function getData() {
  try {
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();
    output.textContent = data.message;
  } catch (error) {
    console.error('Request failed:', error);
  }
}

button.addEventListener('click', getData);