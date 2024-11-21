function Apifetch(path,data,method){
    let options={
        method:method,
        Headers:{
            'content-type':'application/json'
        }

    };

    if(method==='POST'|| method==='PUT'){
        options.body=JSON.stringify(data);
    }

    return fetch(`${path}`,options)
    .then(response=>{
        return response.json();
    })
}


Apifetch('http',data,'POST')
.then(data=>{
    return data.json();
})