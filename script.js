fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false "
  )
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((object) => {
      console.log(object[0].id);
      let tableData = "";
      object.map((values) => {
        tableData +=`<tr>
          <td width="12px"><img src="${values.image}"></td>
          <td width="180px">${values.name}</td>
          <td width="180px">${values.symbol.toUpperCase()}</td>
          <td width="180px">$${values.current_price}</td>
          <td width="180px">$${values.total_volume}</td>
          <td width="120px">${values.price_change_percentage_24h}%</td>
          <td>Mkt Cap : $${values.market_cap}</td>
                </tr>`;
      });
      document.getElementById("body").innerHTML = tableData;
    });