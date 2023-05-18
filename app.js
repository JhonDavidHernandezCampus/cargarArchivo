let myform = document.querySelector("#myForm");

myform.addEventListener("submit", async (e)=>{
    e.preventDefault()
    let myHeaders = new Headers({"content-type":"application/json"});
    let data = Object.fromEntries(new FormData(e.target));
    let config = {
        method:"POST",
        headers:myHeaders,
        body: JSON.stringify(data)
    }
    console.log(data);
    let res = await(await fetch("api.php", config)).text();
    console.log(res,"la respuesta fue la anterior");
    document.querySelector("pre").innerHTML = res;  
})