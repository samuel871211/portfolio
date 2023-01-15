const header = document.getElementById('header');
console.log(header);
for (const item of headerList) {
  const aElement = document.createElement('a');
  aElement.innerText = item.name;
  aElement.href = item.href;
  header.appendChild(aElement);
};