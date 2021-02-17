
cc.Class({
    extends: cc.Component,

    properties: {

        timeDisp :{
            default : null,
            type: cc.Label,
        },
    },

    spawnClock(){
        var newClock = cc.instantiate(this.New_clock);
        this.node.addChild(newClock);
        newClock.setPosition(this.getNewPosition());
        
    },

    getNewPosition(){
        return cc.v2(487.054,380.329);
    },
    
    onLoad (){
        window.t1 = window.t1 || null;
        this.timeDisp.string = "20";
    },
    
    changeColour: function(){
        // this.spawnClock();

        var i =20;
        this.node.color = cc.color(0,0,255);
        t1 = setInterval(() => {
            this.timeDisp.string = i;
            if (i==0) {
                clearInterval(t1);
            }
            else if (i>5) {
                var temp = 2;
                var t2 = setInterval(() => {
                    if(temp == 0)
                        clearInterval(t2);
                    else if(temp ==1)
                        this.node.color = cc.color(255,255,255);
                    else
                        this.node.color = cc.color(0,255,0);
                    temp = temp - 1;
                }, 500);
            }
            else{
                var temp2 = 2;
                var t3 = setInterval(() => {
                    if(temp2 == 0){
                        this.node.color = cc.color(0,0,255);
                        clearInterval(t3);
                    }
                    else if(temp2 ==1)
                        this.node.color = cc.color(255,255,255);
                    else
                        this.node.color = cc.color(255,0,0);
                    temp2 = temp2 - 1;
                }, 500);
            }
            i = i-1;
        }, 1000); 

        i=20;

    },

    
    colorReset: function(){
        this.node.color = cc.color(0,0,255);
        this.timeDisp.string = "20";
        clearInterval(t1);
    },


});
