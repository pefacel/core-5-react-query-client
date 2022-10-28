  

export default async function handler(req, res) {
  if (req.method === "GET") {
    async function getData(url = "") {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return response.json();
    }
   
    try {
   
      const  data  = await getData("http://localhost:8000/api/cards"  );
      return res.status(200).json(data);
    } catch (error) {
      res.status(401).end();
    }
  } else   if (req.method === "POST") {

    async function postData(url = "", body = {}) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return response.json();
    }

    try {
   
      const  data  = await postData("http://localhost:8000/api/cards",req.body);
      return res.status(200).json(data);
    } catch (error) {
      res.status(401).end();
    }
    
  }else{
   return res.status(401).end();
  }


}
