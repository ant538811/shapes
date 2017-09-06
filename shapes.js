function Shape(type) 
{
   this.type = type;
   function get_type()
   {
   	return type;
   }
}
function Triangle(side1, side2, side3)
{
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	
}
function Square(side1, side2, side3, side4)
{
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
}
function Pentagon(side1, side2, side3, side4, side5)
{
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}
var Triangle = new Shape ("Triangle");
var Square = new Shape ("Square");
var Pentagon = new Shape ("Pentagon");
//console.log(Object.getPrototypeOf(Triangle));
//console.log(Triangle.constructor);
console.log(Triangle instanceof Shape);
console.log(Square instanceof Shape);
console.log(Pentagon instanceof Shape);
//console.log(Shape.prototype.Triangle.get_type);