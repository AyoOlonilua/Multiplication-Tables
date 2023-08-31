$(document).ready(function() {
    $("#table").click(function() {

        const number = [1,2,3,4,5,6,7,8,9,10,11,12];
        
        let one = [1];
        let two = [2];
        let three = [3];
        let four = [4];
        let five = [5];

        
        let result1 = [];
        let result2 = [];
        let result3 = [];
        let result4 = [];
        let result5 = [];
        
        function everything1() {
            number.forEach(function(element) {
             answer1 = one * element;
             result1.push(answer1);
            });
            result1.forEach(function(element) {
                $("#resultOne").append("<li>" + element + "</li>");
            });
        };
        everything1();
        
        function everything2() {
            number.forEach(function(element) {
             answer2 = two * element;
             result2.push(answer2);
            });
            result2.forEach(function(element) {
                $("#resultTwo").append("<li>" + element + "</li>");
            });
        };
        everything2();
        
        function everything3() {
            number.forEach(function(element) {
             answer3 = three * element;
             result3.push(answer3);
            });
            result3.forEach(function(element) {
                $("#resultThree").append("<li>" + element + "</li>");
            });
        };
        everything3();
       
        function everything4() {
            number.forEach(function(element) {
             answer4 = four * element;
             result4.push(answer4);
            });
            result4.forEach(function(element) {
                $("#resultFour").append("<li>" + element + "</li>");
            });
        };
        everything4();
        
        function everything5() {
            number.forEach(function(element) {
             answer5 = five * element;
             result5.push(answer5);
            });
            result5.forEach(function(element) {
                $("#resultFive").append("<li>" + element + "</li>");
            });
        };
        everything5();
    });
});