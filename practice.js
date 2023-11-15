let obj = {};
fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-5FA645EA-BBB9-4EDF-AD57-84C2F0275943")
.then(response => response.json())
.then(data =>{
    console.log(data)
    obj = data;
})
console.log(obj)

const btn = document.getElementById("btn")

btn.addEventListener('click', ()=>{
    console.log(obj)

    for(let i=0;i<22;i++){
        console.log(obj.records.location[i].locationName)
    }

    obj.records.location.forEach(item => {
        console.log(item)
    })
})

