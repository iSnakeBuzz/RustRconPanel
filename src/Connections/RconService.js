class RconService {

    constructor(address, port, password) {
        this.urlString = `ws://${address}:${port}/${password}`;
        this.socket = new WebSocket(this.urlString);
        this.identifier = 1001;
        this.callbacks = {};

        this.socket.addEventListener('open', (e) => console.log(`[Socket] Connected to ${this.urlString}`));
        this.socket.addEventListener('close', this.disconnect);
        this.socket.addEventListener('error', (e, error) => console.log(`[Socket] Error at ${this.urlString}`, e, error));

        this.socket.addEventListener('message', (e) => {
            console.log(`[Socket] Receiving data from ${this.urlString}`)
            let data = JSON.parse(e.data);
            let dataIdentifier = data.Identifier;

            if (dataIdentifier > 1000) {
                let item = this.callbacks[dataIdentifier];
                if (item != null) {
                    item.callback(data);
                }

                this.callbacks[dataIdentifier] = null;
                return;
            }
        })
    }

    onMessage(callback) {
        this.socket.addEventListener('message', callback);
    }

    onOpen(callback) {
        this.socket.addEventListener('open', callback);
    }

    sendMessage(message, identifier) {
        let packet = {
            Identifier: identifier,
            Message: message,
            Name: "WebRcon"
        };

        this.socket.send(JSON.stringify(packet));
    }

    request(message, callback) {
        if (!this.isReady) return;
        this.identifier++;

        this.callbacks[this.identifier] = {
            callback: callback
        };
        this.sendMessage(message, this.identifier);
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }

        this.callbacks = {};
    }

    isReady() {
        return this.socket.readyState === 1;
    }

}

export default RconService;