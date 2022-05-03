const res = await fetch('/signup', { 
  method: 'POST', 
  body: JSON.stringify({ email, password }),
  headers: {'Content-Type': 'application/json'}
});
const data = await res.json();
console.log(data);