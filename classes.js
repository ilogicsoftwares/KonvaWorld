class Tile {
 
    constructor(valuex, valuey)
    {

        
        this.x= valuex  ? valuex:stage.getWidth() -(stage.getWidth()-450),
        this.y= valuey  ? valuey:stage.getHeight() -(tilesHeigth+TilesBotMarging) ,
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
        this.scale= {
            x : 1,
            y : 1
        },
        this.startScale= 1,
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

///Classes

function addTile(layer) {
    var box = new Konva.Rect(new Tile(iniciaEn));

    layer.add(box);
}

function AddTileGroup(layer){
   
    const primera=iniciaFichaEnManoEn;
    var tilesW=0;
  for (let index = 0; index < 7; index++) {
    
    
    if(index>0)
    iniciaEn=iniciaEn + tilesWidth + TilesRightMarging;
    else
    iniciaEn=primera;

    var box = new Konva.Rect(new Tile(iniciaEn));

    layer.add(box);
      
  }


}