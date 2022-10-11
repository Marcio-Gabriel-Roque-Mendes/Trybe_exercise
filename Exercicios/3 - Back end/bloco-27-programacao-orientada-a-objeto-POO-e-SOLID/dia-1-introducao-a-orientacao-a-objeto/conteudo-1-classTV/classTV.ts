class Tv {
	private _brand: string;
	private _size: number;
	private _resolution: string;
	private _connections: string[];
	private _connectedTo?: string | undefined;

	constructor(brand: string, size: number, resolution: string, connections: string[], /*connectedTo?: string | undefined*/){
		this._brand = brand;
		this._size = size;
		this._resolution = resolution;
		this._connections = connections;
		// this._connectedTo = connectedTo;
	}
	
	turnOn():void {
		console.log(`Creiando uma nova TV ${this._brand} de ${this._size} 
		polegadas, mais especificamentd sua resolução é de ${this._resolution} 
		e entradas para conexões ${this._connections}`);
	}

	get connectedTo(): string | undefined {
		return this._connectedTo;
	}

	set connectedTo(newValue: string | undefined) {
		if (!newValue || this._connections.includes(newValue)) {
		  this._connectedTo = newValue;
		  console.log(this._connectedTo);
		} else {
			console.log('Sorry, connection unavailable!')
			console.log(this._connections, 'connections AQUI');
			;
		}
	  }
}

const tv2 = new Tv('Samsung', 50, 'Full HD', ['HDMI', 'USB', 'Ethernet'])
tv2.turnOn()
tv2.connectedTo = 'Wi-fi'
console.log('Nova conexão, ', tv2.connectedTo);
