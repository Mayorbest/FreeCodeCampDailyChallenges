/**
 * Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

A valid ordered list item in Markdown must:

Start with zero or more spaces, followed by
A number (1 or greater) and a period (.), followed by
At least one space, and then
The list item text.
If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.

For example, given "1. My item", return "<li>My item</li>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

1. convertListItem("1. My item") should return "<li>My item</li>".
Waiting:2. convertListItem(" 1.  Another item") should return "<li>Another item</li>".
Waiting:3. convertListItem("1 . invalid item") should return "Invalid format".
Waiting:4. convertListItem("2. list item text") should return "<li>list item text</li>".
Waiting:5. convertListItem(". invalid again") should return "Invalid format".
Waiting:6. convertListItem("A. last invalid") should return "Invalid format".
 */
//let sentence = "Hello, world! How are you?";
//let words = sentence.match(/\b\w+\b/g); // Matches whole words
//(/(?<=[.!?])\s/); // Splits by . ! ? followed by optional space


function convertListItem(markedItems) {
  let items;
  let num;
  let lists = markedItems.split(' ');
  lists.forEach((item, index) => {
    item = `${item.trim()} `;
    items += item
    markedItems =items
  })
  /*let Num= lists[0];
  let num = Number(Num);
  if (num && Num.includes('.')) { markedItems = "<li>".concat(item,'</li>')}
  else {markedItems = 'Invalid format'}*/
  return markedItems;
};

console.log(convertListItem("1. My item"));
console.log(convertListItem(" 1.  Another item"));
console.log(convertListItem("1 . invalid item"));
console.log(convertListItem("2. list item text"));
console.log(convertListItem(". invalid again"));
console.log(convertListItem("A. last invalid"));