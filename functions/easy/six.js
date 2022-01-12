/*

Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle


Note: scalene triangle - all angles are different
      isosceles triangle - two angles are same 
      equilateral triangle - all three angles are 60 
*/

function typeOfTriangle(a, b, c) {
  if (a + b + c != 180) {
    return "Not a triangle";
  }

  if (a == b && a == c) {
    return "Equilateral triangle";
  }

  if (a == b || a == c || b == c) {
    return "isosceles triangle";
  }

  return "scalene triangle";
}

console.log(typeOfTriangle(30, 120, 30)); // isosceles triangle
console.log(typeOfTriangle(60, 60, 60)); // equilateral triangle
console.log(typeOfTriangle(30, 60, 90)); // scalene triangle
