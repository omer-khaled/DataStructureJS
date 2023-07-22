class Point3D{
    #x;#y;#z;
    constructor(x=0,y=0,z=0){
        this.#x = x;
        this.#y = y;
        this.#z = z;
    }
    // setter and geter of x
    set x(value){
        this.#x = value;
    }
    get x(){
        return this.#x;
    }
    // setter and geter of y
    set y(value){
        this.#y = value;
    }
    get y(){
        return this.#y;
    }
    // setter and geter of z
    set z(value){
        this.#z = value;
    }
    get x(){
        return this.#z;
    }
    // prtint Point
    print3DPoint(){
        console.log(`x : ${this.#x}\ny : ${this.#y}\nz : ${this.#z}`);
    }
    // Calculate Area
    static calculateDistance(point1,point2){
        return Math.sqrt(((point1.#x - point2.#x)**2)+((point1.#y - point2.#y)**2)+((point1.#z - point2.#z)**2));
    }
}

let point1 = new Point3D(10,10,10);
let point2 = new Point3D(5,5,5);
console.log('*******Print******')
point1.print3DPoint();
point2.print3DPoint();
console.log('*******calculate******')
console.log(Point3D.calculateDistance(point1,point2));