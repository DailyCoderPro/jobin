 const getJsonData = async ({limit=10, offset=0}) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
        "limit": limit,
        "offset": offset
       });
       
    const requestOptions = {
     method: "POST",
     headers: myHeaders,
     body
    };
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
    const data = await response.json();
    return data;
}

export default getJsonData;