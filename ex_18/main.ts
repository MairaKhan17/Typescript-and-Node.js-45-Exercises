// Exercise : 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Canada", "Brazil"];

// array in its original order
console.log("Original order:", placesToVisit);

//  array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

//  the original array is still in its original order
console.log("Original order:", placesToVisit);

// array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

//  the original array is still in its original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list (modifies the original list)
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to bring it back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array to store it in alphabetical order 
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

