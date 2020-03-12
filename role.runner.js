var roleRunner = 
{
    /** @param {Creep} creep **/
    run: function(creep) 
    {
        
        gameTimeString = Game.time.toString();
        x = gameTimeString.slice(2,4)
        x = Number(x)
        y = gameTimeString.slice(3,5)
        y = Number(y)
        
        if (x>50)
        {
            x = x-50
        }
        
        if (y>50)
        {
            y = y-50
        }
        
        if ((x<50) & (y < 50))
        {
            creep.moveTo(x,y)
           /** Game.rooms['W8N6'].createConstructionSite(creep.pos, STRUCTURE_ROAD);**/
        }
    }
}

module.exports = roleRunner;