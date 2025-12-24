/**
 * Re: Fwd: Fw: Count
Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):

"fw:"
"fwd:"
"re:"
Return the total number of occurrences of these markers.

Tests
Waiting:1. emailChainCount("Re: Meeting Notes") should return 1.
Waiting:2. emailChainCount("Meeting Notes") should return 0.
Waiting:3. emailChainCount("Re: re: RE: rE: Meeting Notes") should return 4.
Waiting:4. emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes") should return 5.
Waiting:5. emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary") should return 23.
 */

function emailChainCount(mail) {
  mail = mail.trim();
  let words = mail.split(":")
  words.forEach((word, index) => {
    word = word.toUpperCase();
    if(word.includes(word)) {mail = index}
    else{mail = 0}
  });
  return mail;
}

console.log(emailChainCount("Re: Meeting Notes"));
console.log(emailChainCount("Meeting Notes"));
console.log(emailChainCount("Re: re: RE: rE: Meeting Notes"));
console.log(emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes"));
console.log(emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary"));