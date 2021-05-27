class Mkulima {
    constructor() {
        this.farmList = [];
        this.productList = [];
 }
    addFarm(farmId, farmName, farmer, phoneNumber, address) {
        var farmDetails= {
            farmId: farmId,
            farmName: farmName,
            farmer: farmer,
            phoneNumber: phoneNumber,
            address: address
        }

        return this.farmList.push(farmDetails)
    }
    removeFarm(farmId) {
        let removeId=this.getFarm(farmId)
        let idIndex = this.farmList.indexOf(removeId)
        return this.farmList.splice(idIndex ,1)
    }
        updateFarm(farmId, farmName, farmer, phoneNumber, address){
            let newFarm = this.farmList.find(newFarm => newFarm.address == "Karen")
            newFarm = {
                farmId:farmId,
                farmName: farmName,
                phoneNumber: phoneNumber,
                address: address,
                farmer: farmer,

            }
            return newFarm
        }
        getFarm(farmId){
            for(var i=0;i<this.farmList.length;i++){
                let myFarm = this.farmList[i]
                if(myFarm.farmId == farmId){
                    return myFarm
                }
            }}


        addProduct(productId, name, prices){
            var productDetail= {
                productId: productId,
                name: name,
                prices: prices,
            }

            return  this.productList.push(productDetail)
        }
        removeProduct(productId){
            let  removeId=this. getProduct(productId)
            let idIndex=this.productList.indexOf(removeId)
            return  this.productList.splice(idIndex,1)
        }


        updateProduct(productId, name, price){
            let newProduct = this.productList.find(newProduct => newProduct.price == 6800)
             let newProducts = {
                productId: productId,
                name: name,
                prices: price,


            }
            return newProducts
        }
        getProduct(productId){
            for(var i=0;i<this.productList.length;i++){
                let myProducts= this.productList[i]
                if(myProducts.productId == productId){
                }
                return myProducts
            }
        }



        printProducts(products, prices){
            var farm = {
                products: products,
                prices: prices,

            }
            return farm

        }

        calculateOrderCost(productId, quantity){
           return "TotalCost :"+`${productId * quantity}` ;

   }
}

let farm = new Mkulima();
farm.addFarm(756,"Gashora Farm","Karisa",+2578989737,"Gashora");
farm.addFarm(756,"Gishwati Farm","Kamasa",+257867589737,"Bigogwe");
farm.addFarm(116,"Kirehe Farm","Kamari",+25078990837,"Kirehe");
console.log(farm.removeFarm(756));
console.log(farm.farmList)
console.log(farm.updateFarm(345,"Kinamba farm","Gad",+3453436336,"Kinamba"));
console.log(farm.updateFarm(345," Bihangara farm","Gahano",+253436336,"Rubavu"));
console.log(farm.getFarm(116));

let product = new Mkulima();
product.addProduct(756,"Akabanga",6700);
product.addProduct(456,"Mangoes",6000);
product.addProduct(346,"Oranges",2600);
product.removeProduct(346);
console.log(product.productList)
console.log(product.updateProduct("3452DT","Maize",6800));
console.log(product.updateProduct("564DT","Corn",6800));
console.log(product.getProduct("564DT"));
console.log(product.printProducts("Orange",600,"apple",500,"Banana",700));
console.log(product.printProducts("Mangoes",400,"Watermelon",500,"Orange",900));
console.log(product.calculateOrderCost(756,34))