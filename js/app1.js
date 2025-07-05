let sendingErea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 700;
    this.canvas.height = 500;
    this.canvas.id = "canvas";
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[2]);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
sendingErea.start();

let cable1 = new Cable(false,100);
cable1.updateCable();
let cable2 = new Cable(false,250);
cable2.updateCable();
let cable3 = new Cable(false,400);
cable3.updateCable();

let cables=[cable1,cable2,cable3];

let clients=[client1,client2,client3,client4,client5,client6];

for(let i=0;i<clients.length;i++)
{
  let index=Math.floor(i/2);;
  clients[i]=new Client(i+1, cables[index]);
}

let packageOnWay = [];

server = new Server()

for (let i = 1; i < 7; i++) {
  let send = document.getElementById(i);
  send.addEventListener("click", () => { clients[i-1].createPackage()});
}
