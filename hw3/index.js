const nickNameEl = document.getElementById('nickname');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const addButton = document.getElementById('addButton');
const tbody = document.getElementById('tbody');
addButton.addEventListener('click', addNewRow);

function addNewRow () {
  const nickName = nickNameEl.value;
  const email = emailEl.value;
  const phone  = phoneEl.value;
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5 = document.createElement('td');
  td1.innerText = nickName;
  td2.innerText = email;
  td3.innerText = phone;
  td4.innerText = new Date().toISOString();
  // innerHTML可直接插入HTML字串，並解析成HTML格式(不建議這樣做)
  td5.innerHTML = '<button>刪除</button>';
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tbody.appendChild(tr);
}