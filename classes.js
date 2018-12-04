class Tile {

    constructor(valuex, valuey)
    {

        
        this.x= rectX,
        this.y= rectY,
        this.width= tilesWidth,
        this.height= tilesHeigth,
        this.fill= 'white',
        this.stroke= 'black',
        this.strokeWidth= 1,
        this.draggable= true,
        this.valueLeft=0,
        this.valueRigt=0
        this.shadowColor='Black',
        this.shadowBlur= 10,
        this.shadowOffset= {
            x : 5,
            y : 5
        },
        this.shadowOpacity= 0.6
        

    }

    get isDouble( ){
      return this.valueLeft==this.valueRigt;
       
    }

    get canUse(){
    return (this.valueLeft==boardValueLeft || this.valueLeft==boardValueRight) 
    || (this.valueRigt==boardValueLeft || this.valueLeft==boardValueRight) ;
    
    }
}

class Board {
    constructor(){

    }
}