// const WebSocket = require('ws');

const socket = new WebSocket('wss://fstream.binance.com/ws/btcusdt@kline_1m');
const dataList = document.getElementById('data-list');

socket.onopen = function() {
  console.log('WebSocket connection opened.');
};

socket.onmessage = function(event) {
  const message = JSON.parse(event.data);
  const klineData = message.k;

  if (klineData) {
    const startTime = new Date(klineData.t).toLocaleString();
    const closePrice = klineData.c;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `BTC Price: ${closePrice}`;

    // Append the list item to the data list
    dataList.appendChild(listItem);
  }
};

socket.onclose = function() {
  console.log('WebSocket connection closed.');
};
