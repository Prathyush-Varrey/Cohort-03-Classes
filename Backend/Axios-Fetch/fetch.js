// fetch the API "https://jsonplaceholder.typicode.com/todos/1"

// normal way to fetch the API
function main() {
     fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then(async (res) => {
               const response = await res.json();
               console.log(response)
          });
}

// usin async and await
async function fetch2() {
     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
     const json = await response.json();
     console.log(json);
     
}
// use second method because it's more efficient
main()
fetch2()