class Server {
    cameToServer(sendPackage) {
        sendPackage.direction = "left";
        switch (sendPackage.receive) {
            case '1':
            case '2':
                {
                    sendPackage.cable = cable1;
                    sendPackage.y = 93;
                    break;
                }
            case '3':
            case '4':
                {
                    sendPackage.cable = cable2;
                    sendPackage.y = 243;
                    break;
                }
            case '5':
            case '6':
                {
                    sendPackage.cable = cable3;
                    sendPackage.y = 393;
                    break;
                }
            default:
                {
                    sendPackage.message='Adress was not found';
                    sendPackage.receive=sendPackage.send;
                }
        }
        sendPackage.cable.chekifCableActive(sendPackage);
    }
}
