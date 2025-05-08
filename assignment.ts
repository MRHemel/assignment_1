{
    const formatString =(word : string, upperformate:boolean = true)=>{
        if(upperformate){
            return word.toUpperCase();
        }
        else{
            return word
        }
    }

    console.log(formatString('hello'))
    console.log(formatString('hello',false))
    console.log(formatString('hello',true))
}


{
   const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[]=>{

        const filteredItems = items.filter( item => item.rating >= 4)
        return filteredItems
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
 console.log(filterByRating(books))

}



{
    const concatenateArrays=<T>(...arrays: T[][]): T[]=>{
        const array =arrays;
        
        const x = array.reduce((acc,currentarrary)=>acc.concat(currentarrary),[])
        
    //   console.log(x)
      console.log(x)
    }

    concatenateArrays(["a", "b"], ["c"],['d']); 
    concatenateArrays([1,2], [3,4],[2]); 

}


class Vehicle {
    private make : string;
    private year : number;


    constructor( make : string, year : number){
        this.make =make;
        this.year =year;
    }

    getInfo():void{
        console.log(`Make : ${this.make}, Year : ${this.year}`)
    }
}
class Car extends Vehicle {
    private model : string;


    constructor( make : string, year : number , model : string,){
        super(make,year)
        this.model =model;
       
        
    }

    getModel():void{
        console.log(`Model : ${this.model}`)
    }
}
{

    const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel()
}



{
    const processValue=(value: string | number): number =>{
        if(typeof value === 'number'){
            return value*2;
        }
        else if(typeof value === 'string'){
            return value.length;
        }
    
    }

    
   console.log(processValue(10)); 
   console.log(processValue("hello")); 

}


{
    interface Product {
        name: string;
        price: number;
      }
      
      const  getMostExpensiveProduct=(products: Product[]): Product | null=>{
        let x =[]
        const expensive = products.reduce((acc,currentValue)=> acc.price >currentValue.price ? acc:currentValue)
        console.log(expensive)
      }

      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
getMostExpensiveProduct(products)
}



{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): "Weekday" | "Weekend" {
        switch (day) {
          case Day.Saturday:
          case Day.Sunday:
            return "Weekend";
          default:
            return "Weekday";
        }
      }

      console.log(getDayType(Day.Monday));    // Output: "Weekday"
console.log(getDayType(Day.Sunday));
}



{

    async function squareAsync(num: number): Promise<number|string> {
        return new Promise<number|string>((resolve, reject) => {
          setTimeout(() => {
            if (num < 0) {
              reject(new Error('number is negative'));
            } else {
              resolve(num * num);
            }
          }, 1000);
        });
      }

      
      squareAsync(80)
  .then(result => console.log("result:", result)) 
  .catch(error => console.error("error:", error.message));

  squareAsync(-8)
  .then(result => console.log("result:", result))
  .catch(error => console.error("error:", error.message)); 


}