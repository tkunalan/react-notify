function myHeaders() {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    return headers;
}

let postRegisterStep1 = (data) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/auth/register-online-user-step1', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(data),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem)
                    } else {
                        reject("error")
                    }
                });
    });
};


let postRegisterStep12 = (data) =>{

    return new Promise((resolve, reject) =>{
        fetch (sessionStorage.getItem('base_url') + '/api/auth/register-online-user-step2', {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(data),
        }).then(res => res.json())

            .catch(error => console.error('Error:', error))
            .then(
                (FindResponseItem) => {
                    if (FindResponseItem !== undefined && FindResponseItem.status !== 400
                        && FindResponseItem.status !== 404 && FindResponseItem.status !== 403) {
                        resolve(FindResponseItem)
                    } else {
                        reject("error")
                    }
                });
    });
};


export {postRegisterStep1,postRegisterStep12}
