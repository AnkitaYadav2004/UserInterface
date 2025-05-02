let container = document.getElementById("cnt");
let all_products = [];

async function GetData(url) {
  try {
    let res = await fetch(url);
    console.log(res.status);

    if (res.status === 200) {
      let data = await res.json();
      console.log(data);

      all_products = data;  // Store data for search
      displayAllProducts(data);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function displayAllProducts(dataArray) {
  let input = "";
  dataArray.forEach((val) => {
    input += `
      <div class="card">
        <h3>${val.name}</h3>
        <div>
          <p>${val.phone.split(" ")[0]}</p>
          <p>${val.email}</p>
        </div>
        <p>${val.address.street}, ${val.address.city}</p>
        <hr/>
        <a href="http://${val.website}" target="_blank">${val.website}</a>
      </div>`;
  });
  container.innerHTML = input;
}

GetData("https://jsonplaceholder.typicode.com/users");

let userinput = document.getElementById("searchcnt");

userinput.addEventListener("input", (e) => {
  let usvale = e.target.value.toLowerCase();
  let filterdata = all_products.filter((val) => {
    return val.name.toLowerCase().includes(usvale);
  });

  displayAllProducts(filterdata);
});






