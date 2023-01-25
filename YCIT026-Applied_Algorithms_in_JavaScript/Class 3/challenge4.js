{} + [];    // answer : 0
[] + [];    // answer : ''
[] + {};    // answer : '[object Object]'
+ [];       // answer : 0
String([]) + String([]); // answer : ''
String ([]); // answer : ''
String({}); '[object Object]'
{} + {}; // '[object Object] [object Object]'
Array(16).join("wat"); // 'watwatwatwatwatwatwatwatwatwatwatwatwatwatwatwat'
Array(16).join("wat" - 1); // 'NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN'
Array(16).join("wat" + 1); // 'wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1'