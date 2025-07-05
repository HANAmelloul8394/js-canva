class Cable {
    constructor(isActive, y) {
        this.isActive = isActive;
        this.index = 0;
        this.y = y;
    }

    updateCable() {
        let ctx = sendingErea.context;
        ctx.beginPath();
        ctx.moveTo(0, this.y);
        ctx.lineTo(700, this.y);
        ctx.lineWidth = 17;
        ctx.stroke();
    }

    updatePackage(Package) {
        let ctx = sendingErea.context;
        switch (Package.send) {
            case 1:
                {
                    ctx.fillStyle = "red";
                    break;
                }
            case 2:
                {
                    ctx.fillStyle = "blue";
                    break;
                }
            case 3:
                {
                    ctx.fillStyle = "orange";
                    break;
                }
            case 4:
                {
                    ctx.fillStyle = "aqua";
                    break;
                }
            case 5:
                {
                    ctx.fillStyle = "yellow";
                    break;
                }
            case 6:
                {
                    ctx.fillStyle = "greenyellow";
                    break;
                }

        }
        ctx.fillRect(Package.x, Package.y, 70, 14);
    }

    sending(myPackage) {
        myPackage.cable.isActive = true;
        packageOnWay.push(myPackage);
        const myInterval = setInterval(() => {
            sendingErea.clear();
            if (myPackage.direction == "right") {
                if (myPackage.cable == cable1)
                    myPackage.x += 1;
                else if (myPackage.cable == cable2)
                    myPackage.x += 2;
                else
                    myPackage.x += 3;
            }
            else {
                if (myPackage.cable == cable1)
                    myPackage.x -= 1;
                else if (myPackage.cable == cable2)
                    myPackage.x -= 2;
                else
                    myPackage.x -= 3;
            }
            cable1.updateCable();
            cable2.updateCable();
            cable3.updateCable();
            if (myPackage.cable.crashWith(myPackage)) {
                clearInterval(myInterval);
                myPackage.cable.isActive = false;
                let index = packageOnWay.indexOf(myPackage);
                packageOnWay.splice(index, 1);
                if (myPackage.direction == "right")
                    server.cameToServer(myPackage);
                else {
                    console.log(myPackage.receive);
                    let ourMessage = document.getElementById(`receive${myPackage.receive}`);
                    console.log(myPackage.message);
                    ourMessage.innerText = myPackage.message;
                }
            }
            for (let i = 0; i < packageOnWay.length; i += 1) {
                packageOnWay[i].cable.updatePackage(packageOnWay[i]);
            }
        }, 1)
    }

    chekifCableActive(Package) {
        const interval1 = setInterval(() => {
            if (!this.isActive) {
                clearInterval(interval1);
                this.sending(Package);
            }
        }, 1);
    }

    crashWith(myPackage) {
        let myleft = myPackage.x;
        let myright = myPackage.x + 70;
        let crash = false;
        if ((myleft <= 0) || (myright >= 700)) {
            crash = true;
        }
        return crash;
    }
}
