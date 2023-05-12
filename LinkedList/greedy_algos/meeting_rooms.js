//meeting rooms1
function canAttendMeetings(A) {
  let length = A.length;
  let start = [];
  let end = [];
  for (let i = 0; i < A.length; i++) {
    start.push(A[i][0]);
    end.push(A[i][1]);
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let i, j, meetingCount, ans;

  //i and j are pointers
  i = 0;
  j = 0;
  meetingCount = 0;
  ans = 0;

  while (i < length && j < length) {
    if (start[i] < end[j]) {
      //increment count
      meetingCount++;
      //shift start pointer to the next one
      i++;
    } else if (start[i] >= end[j]) {
         //decrement count
      meetingCount--;
      //shift end pointer to the next one
      j++;
    }

    ans = Math.max(ans, meetingCount);
  }

  return ans;
}

var meetings = canAttendMeetings([[1, 18],
    [18, 23],
    [15, 29],
    [4, 15],
    [2, 11],
    [5, 13]]);
console.log(meetings);