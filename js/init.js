console.log('hola');

const btnAction = document.querySelector('#login');
const user = document.querySelector('#user');
const pass = document.querySelector('#pass');
const api = "https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/oauth/token";

btnAction.addEventListener("click", function(e) {
    e.preventDefault();
    getInfoUser();
})

function clickSearch() {
    btnAction.click();
}

const getInfoUser = () => {
    const requestLogin = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "client_id": user.value,
          "client_secret": pass.value,
          "audience": "https://escalab.academy",
          "grant_type": "client_credentials"
        })
    }

    fetch(api, requestLogin)
        .then(response => response.json())
        .then(response => {
            console.log(response.token_type, response.access_token);
        })
        .catch(error => {
            console.log(error);
        })


}