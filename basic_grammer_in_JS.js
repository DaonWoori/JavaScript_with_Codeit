// 파이썬 함수를 JS로 구현하기

/*
 * 미술관 티켓 가격을 계산해 주는 함수
 * standard, student는 카테고리에 해당하는 티켓 개수

 def ticket_price(standard, student):
    standard_price = 15000
    student_prcie = 8000
 
    total_price = standard * standard_price + student * student_prcie
    
    return total_price
 */

// 이름: Camel Case 사용 <-> python의 경우 Snake Case 사용용
function ticketPrcie(standard, student){
   let standardPrice = 15000; // 변수 선언
   let studentPrice = 8000;

   let totalPrice = standard * standardPrice + student * standardPrice;

   return totalPrice;
}

// 함수 호출
console.log(ticketPrcie(3, 0));
console.log(ticketPrcie(2, 2));