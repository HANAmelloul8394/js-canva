class Client {
    constructor(id, cable) {
        this.id = id;
        this.cable = cable;
    }
    createPackage() {
        let sendTo = document.getElementById(`sendTo${this.id}`).value;
        let message = document.getElementById(`message${this.id}`).value;
        if (sendTo != "")
            document.getElementById(`message${this.id}`).value = "";
        document.getElementById(`sendTo${this.id}`).value = "";
        let y;
        switch (this.cable) {
            case cable1:
                {
                    y = 90;
                    break;
                }
            case cable2:
                {
                    y = 240;
                    break;

                }
            case cable3:
                {
                    y = 390;
                    break;
                }
        }
        if (sendTo != "") {
            let newPackage = new Package(message, this.id, sendTo, this.cable, 0, y + 3, "right");
            newPackage.cable.chekifCableActive(newPackage);
        }
        else
            document.getElementById(`receive${this.id}`).innerHTML = 'Please enter an adrass';
    }
}