angular.module('BookSeat', [])
  .controller("MainCtrl", ["$http", "$scope", "$q", function($http, $scope, $q) {

    $scope.$on('$viewContentLoaded', function() {
      $('.collapsible').collapsible({
        accordion: true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });

      $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });

      $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      });

    });
    $scope.bookedSeat = [];

    $scope.curr_book = {
      username : '',
      noOfSeats : 0,
      seats : []
    };
    $scope.username = '';
    $scope.noOfSeats = 0;
    $scope.ticketgrid = false;

    $scope.seatCount = 0;
    $scope.bookedBtn = false;
    $scope.nums = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.chars = ['A','B','C','D','E','F','G','H','I','J'];

    $scope.seats = [
                    [{id :'A1', status:0, disable : 0},{id :'A2', status:0, disable : 0},{id :'A3', status:0, disable : 0},{id :'A4', status:0, disable : 0},{id :'A5', status:0, disable : 0},{id :'A6', status:0, disable : 0},{id :'A7', status:0, disable : 0},{id :'A8', status:0, disable : 0},{id :'A9', status:0, disable : 0},{id :'A10', status:0, disable : 0},{id :'A11', status:0, disable : 0},{id :'A12', status:0, disable : 0}],
                    [{id :'B1', status:0, disable : 0},{id :'B2', status:0, disable : 0},{id :'B3', status:0, disable : 0},{id :'B4', status:0, disable : 0},{id :'B5', status:0, disable : 0},{id :'B6', status:0, disable : 0},{id :'B7', status:0, disable : 0},{id :'B8', status:0, disable : 0},{id :'B9', status:0, disable : 0},{id :'B10', status:0, disable : 0},{id :'B11', status:0, disable : 0},{id :'B12', status:0, disable : 0}],
                    [{id :'C1', status:0, disable : 0},{id :'C2', status:0, disable : 0},{id :'C3', status:0, disable : 0},{id :'C4', status:0, disable : 0},{id :'C5', status:0, disable : 0},{id :'C6', status:0, disable : 0},{id :'C7', status:0, disable : 0},{id :'C8', status:0, disable : 0},{id :'C9', status:0, disable : 0},{id :'C10', status:0, disable : 0},{id :'C11', status:0, disable : 0},{id :'C12', status:0, disable : 0}],
                    [{id :'D1', status:0, disable : 0},{id :'D2', status:0, disable : 0},{id :'D3', status:0, disable : 0},{id :'D4', status:0, disable : 0},{id :'D5', status:0, disable : 0},{id :'D6', status:0, disable : 0},{id :'D7', status:0, disable : 0},{id :'D8', status:0, disable : 0},{id :'D9', status:0, disable : 0},{id :'D10', status:0, disable : 0},{id :'D11', status:0, disable : 0},{id :'D12', status:0, disable : 0}],
                    [{id :'E1', status:0, disable : 0},{id :'E2', status:0, disable : 0},{id :'E3', status:0, disable : 0},{id :'E4', status:0, disable : 0},{id :'E5', status:0, disable : 0},{id :'E6', status:0, disable : 0},{id :'E7', status:0, disable : 0},{id :'E8', status:0, disable : 0},{id :'E9', status:0, disable : 0},{id :'E10', status:0, disable : 0},{id :'E11', status:0, disable : 0},{id :'E12', status:0, disable : 0}],
                    [{id :'F1', status:0, disable : 0},{id :'F2', status:0, disable : 0},{id :'F3', status:0, disable : 0},{id :'F4', status:0, disable : 0},{id :'F5', status:0, disable : 0},{id :'F6', status:0, disable : 0},{id :'F7', status:0, disable : 0},{id :'F8', status:0, disable : 0},{id :'F9', status:0, disable : 0},{id :'F10', status:0, disable : 0},{id :'F11', status:0, disable : 0},{id :'F12', status:0, disable : 0}],
                    [{id :'G1', status:0, disable : 0},{id :'G2', status:0, disable : 0},{id :'G3', status:0, disable : 0},{id :'G4', status:0, disable : 0},{id :'G5', status:0, disable : 0},{id :'G6', status:0, disable : 0},{id :'G7', status:0, disable : 0},{id :'G8', status:0, disable : 0},{id :'G9', status:0, disable : 0},{id :'G10', status:0, disable : 0},{id :'G11', status:0, disable : 0},{id :'G12', status:0, disable : 0}],
                    [{id :'H1', status:0, disable : 0},{id :'H2', status:0, disable : 0},{id :'H3', status:0, disable : 0},{id :'H4', status:0, disable : 0},{id :'H5', status:0, disable : 0},{id :'H6', status:0, disable : 0},{id :'H7', status:0, disable : 0},{id :'H8', status:0, disable : 0},{id :'H9', status:0, disable : 0},{id :'H10', status:0, disable : 0},{id :'H11', status:0, disable : 0},{id :'H12', status:0, disable : 0}],
                    [{id :'I1', status:0, disable : 0},{id :'I2', status:0, disable : 0},{id :'I3', status:0, disable : 0},{id :'I4', status:0, disable : 0},{id :'I5', status:0, disable : 0},{id :'I6', status:0, disable : 0},{id :'I7', status:0, disable : 0},{id :'I8', status:0, disable : 0},{id :'I9', status:0, disable : 0},{id :'I10', status:0, disable : 0},{id :'I11', status:0, disable : 0},{id :'I12', status:0, disable : 0}],
                    [{id :'J1', status:0, disable : 0},{id :'J2', status:0, disable : 0},{id :'J3', status:0, disable : 0},{id :'J4', status:0, disable : 0},{id :'J5', status:0, disable : 0},{id :'J6', status:0, disable : 0},{id :'J7', status:0, disable : 0},{id :'J8', status:0, disable : 0},{id :'J9', status:0, disable : 0},{id :'J10', status:0, disable : 0},{id :'J11', status:0, disable : 0},{id :'J12', status:0, disable : 0}] ];

                                                
    $scope.submit = function() {
      if($scope.username !== '' && $scope.noOfSeats > 0 && $scope.noOfSeats < 121) {
        $scope.ticketgrid = true;
        localStorage.setItem('ticketgrid', true);
        $scope.curr_book.username = $scope.username;
        $scope.curr_book.noOfSeats = $scope.noOfSeats;

        if (typeof(Storage) !== "undefined") {
          localStorage.setItem('username', $scope.username);
          localStorage.setItem('noOfSeats', $scope.noOfSeats);
          localStorage.setItem('curr_book',JSON.stringify($scope.curr_book)); // converting a javascript object into a string 
        }
      }
    };

    $scope.chooseSeat = function(id, x, y) {
      $scope.bookedBtn = false;
      localStorage.setItem('bookedBtn',$scope.bookedBtn);
      var seatNo = $scope.seats[x][y].id;
      var tempSeat = {
        no : seatNo,
        x :   x,
        y :   y
      };
      console.log($scope.seats);
      if($scope.seats[parseInt(x)][parseInt(y)].status === true){
        if($scope.seatCount < $scope.noOfSeats){
          $scope.curr_book.seats.push(tempSeat);
          var retrievedCurrBook = localStorage.getItem('curr_book');
          retrievedCurrBook = JSON.parse(retrievedCurrBook);
          retrievedCurrBook.seats.push(tempSeat);
          localStorage.setItem('curr_book',JSON.stringify(retrievedCurrBook));
          $scope.seatCount = $scope.seatCount + 1;
          localStorage.setItem('seatCount',$scope.seatCount);
        }else{
          alert('uncheck one');
          $scope.seats[parseInt(x)][parseInt(y)].status = false;
        }
      } else{
        var retrievedCurrBook = localStorage.getItem('curr_book');
        retrievedCurrBook = JSON.parse(retrievedCurrBook);
        for(var k=0,len2=retrievedCurrBook.seats.length;k<len2;k++){
            if(retrievedCurrBook.seats[k].no === seatNo){
              retrievedCurrBook.seats.splice(k,1);
              localStorage.setItem('curr_book',JSON.stringify(retrievedCurrBook));
              break;
            }
        }
        for(var i=0, len = $scope.curr_book.seats.length; i<len ;i++){
          if($scope.curr_book.seats[i].no === seatNo){
            $scope.curr_book.seats.splice(i, 1);
            break;
          }
        }
        $scope.seatCount = $scope.seatCount - 1;
        localStorage.setItem('seatCount',$scope.seatCount);
      }
      if($scope.seatCount === $scope.noOfSeats){
        $scope.bookedBtn = true;
      
        localStorage.setItem('bookedBtn',$scope.bookedBtn);
      }
    }


    $scope.bookTickets = function(){
      // if user already exists
      var flag = 0;
      var tempO = JSON.parse(localStorage.getItem('curr_book'));
      if($scope.bookedSeat && $scope.bookedSeat.length>0){
        for(var i=0,len=$scope.bookedSeat.length;i<len;i++){
            if($scope.bookedSeat[i].username.toLowerCase() === tempO.username.toLowerCase()){
              flag = 1;
              var sn = parseInt($scope.bookedSeat[i].noOfSeats) + parseInt(tempO.noOfSeats);
              $scope.bookedSeat[i].noOfSeats = sn;
              for(var j=0,len1=tempO.seats.length; j<len1;j++){
                $scope.bookedSeat[i].seats.push(tempO.seats[j]);
              }
            }
            if(i === len-1 && flag === 0){
              $scope.bookedSeat.push(tempO);
            }
        }
      }
      else if($scope.bookedSeat.length === 0){
        $scope.bookedSeat.push(tempO);
      }

      for(var i=0,len=tempO.seats.length;i<len;i++){
        $scope.seats[parseInt(tempO.seats[i].x)][parseInt(tempO.seats[i].y)].disable = 1;
      }
      $scope.curr_book.username = '';
      $scope.curr_book.noOfSeats = 0;
      $scope.curr_book.seats = [];

      $scope.username = '';
      $scope.noOfSeats = 0;
      $scope.ticketgrid = false;
      $scope.seatCount = 0;
      $scope.bookedBtn = false;
      localStorage.clear();
      localStorage.setItem('bookedSeat',JSON.stringify($scope.bookedSeat));
    }

    $scope.init = function(){
      if (typeof(Storage) !== undefined) {
        var tempObj = JSON.parse(localStorage.getItem('curr_book')); //converts text into javascript object
        $scope.curr_book = tempObj;
        $scope.username = localStorage.getItem('username') ;
        var noOfSeats = localStorage.getItem('noOfSeats');
        $scope.noOfSeats = parseInt(noOfSeats);
        var seatCount = localStorage.getItem('seatCount');
        $scope.seatCount = parseInt(seatCount);
        if(localStorage.getItem('ticketgrid') === 'false')
        $scope.ticketgrid = false;
        else
        $scope.ticketgrid = true;

        if(localStorage.getItem('bookedBtn') === 'false')
        $scope.bookedBtn = false;
        else
        $scope.bookedBtn = true;
        if($scope.curr_book !== null){
          for(var l=0,len3=$scope.curr_book.seats.length;l<len3;l++){
            $scope.seats[parseInt($scope.curr_book.seats[l].x)][parseInt($scope.curr_book.seats[l].y)].status = true;
          }
        }
        var tempB = JSON.parse(localStorage.getItem('bookedSeat'));
        if(tempB !== null && tempB.seats !== null){
          for(var l=0,len3=tempB.length;l<len3;l++){
            for(var f=0,len4=tempB[l].seats.length;f<len4;f++){
              $scope.seats[parseInt(tempB[l].seats[f].x)][parseInt(tempB[l].seats[f].y)].disable = true;
            }
          }
        } 
      }
    };
    if(localStorage.getItem('username') !== null){
      $scope.init();
    }
    if(localStorage.getItem('bookedSeat') !== null){
      $scope.bookedSeat = JSON.parse(localStorage.getItem('bookedSeat'));
    }
}]);
