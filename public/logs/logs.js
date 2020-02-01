getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();
  const root1 = document.getElementById("row");
  
  for (item of data) {
    
    const root = document.createElement('div');
    const mood = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');
    root.style.textAlign = "center"
    root.style.fontSize = "15px"
    root.style.paddingBottom = "3%"
     root.style.fontStyle = "oblique"


    mood.textContent = `Hashtag: ${item.mood}`;
    geo.textContent = `${item.lat.toFixed(5)}°, ${item.lon.toFixed(5)}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    image.alt = 'Try to make a good Expression';

    root.append(mood,geo,date,image);
     root.classList.add("col-xs-12")
      root.classList.add("col-md-6")
    root.classList.add("col-lg-4")
    
    //document.("data").appendChild(root)
    root1.appendChild(root);
  }
  console.log(data);
}


