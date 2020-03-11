var roleRunner = 
{

    /** @param {Creep} creep **/
    run: function(creep) 
    {
        gameTimeString = Game.time.toString();
        x = gameTimeString.slice(2,4);
        x = Number(x);

        y = gameTimeString.slice(3,5);
        y = Number(y);
        if (x < 50)
        {
            if (y < 50)
            {
                creep.moveTo(x,y);
                
            }
        }
    }
}

module.exports = roleRunner;