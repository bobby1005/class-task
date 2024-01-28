class Company {
    nameofcompany = 'fastMeal' 
    numberofemployees = 105
       boardofdirectors  = 5
       static numberofboardofdirectors = 5
   
       hire () {
           console.log('we hire the best')
       
       }
       static staticMethod() {
           console.log('we hire the best')
   
       }
   
       static accessStatic() {
           console.log(company.numberofemployees)
       }
   }
   promptUSer();
   
   main();
   
   