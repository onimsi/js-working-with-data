
async function getData() {
    // const res = await fetch('https://testdrive.kompletecare.com/loginn', {
    //   method: 'POST',
    //   body: {
    //     password: 'password',
    //     email: 'tester@kompletecare.com'
    //   }
    // })
  
    try {
      const res = await fetch('https://testdrive.kompletecare.com/login', {
        method: 'POST',
        body: {
          password: 'password',
          email: 'tester@kompletecare.com'
        }
      })
  
      console.log(await res.json())
  
  
    } catch (err) {
      console.log(err)
    }
  
  
  
  }
  
  getData()
  
  
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
  
  
  const xhr = new XMLHttpRequest()// class
  
   xhr.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       const res = JSON.parse(xhr.response)
  
         document.getElementById('demo').innerHTML = `
          ID: ${res.id}
          Title: ${res.title}
         `
       }
   };
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
   xhr.send()