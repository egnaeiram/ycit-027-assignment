
function isPalindrome(str, low, high)
	{
		while (low < high)
		{
			if (str.charAt(low) != str.charAt(high))
				return false;
			low++;
			high--;
		}
		return true;
	}


	function possiblePalinByRemovingOneChar(str)
	{
		var low = 0, high = str.length - 1;

		while (low < high)
		{
			if (str.charAt(low) == str.charAt(high))
			{
				low++;
				high--;
			}
			else
			{
				if (isPalindrome(str, low + 1, high))
					return low;

				if (isPalindrome(str, low, high - 1))
					return high;
				return -1;
			}
		}

		return -1;
	}
        
    
console.log(possiblePalinByRemovingOneChar('3'));
console.log(possiblePalinByRemovingOneChar('aaab'));
console.log(possiblePalinByRemovingOneChar('baa'));
console.log(possiblePalinByRemovingOneChar('aaa'));


