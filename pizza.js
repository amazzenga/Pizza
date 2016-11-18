class pizza{
  //type constructor below
  constructor (s,m,v){
    this.size = s;
    this.meatToppings = m;
    this.veggieToppings = v;
  }
  //type instance functions below
  sizeCost(){
    if(this.size == small){
      return 7.99;
    }
    if(this.size == medium){
      return 9.99;
    }
    if(this.size == large){
      return 12.99;
    }
    if(this.size == extra large){
      return 15.99;
    }
  }

  toppingCost(top){
    if(top == meat){
      return this.meatToppings.length*0.99;
    }
    if(top == veggie){
      return this.veggieToppings.length*0.50;
    }
  }

  price(){
    return sizeCost() + toppingCost();
  }

  //type class functions below
  static promotionalDeal(pizza,percent){
    var percent = percent/100;
    var discount = pizza.price()*percent;
    return pizza.price() - discount;
  }

  addTopping(toptype,newtop){
    if(toptype==meat){
      meatToppings.push(newtop);
    }
    if(toptype == veggie){
      veggieToppings.push(newtop);
    }
  }
}
