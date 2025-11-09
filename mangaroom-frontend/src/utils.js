
//const user_data = fetch('http://localhost:3000/user_data').then(res => res.json()).then(data => {console.log(data)});

async function getUserData() {
    const user_data = await fetch('http://localhost:3000/user_data');
    const response = await user_data.json();

    console.log(response);
}

getUserData();
