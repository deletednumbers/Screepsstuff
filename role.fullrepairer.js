var roleFullRepairer = 
{
    /** @param {Creep} creep **/
    run: function(creep) 
    {
        
	    if(creep.store.getFreeCapacity() > 0) 
	    {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#00aaaa'}});
            }
        }
        else 
        {
            const targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < object.hitsMax});
                                                            /**{filter: object.hits / object.hitsMax <= .5})**/
                                                            /**{filter: object => object.hits < object.hitsMax}**/
            targets.sort((a,b) => (a.hits/a.hitsMax) > (b.hits/b.hitsMax));

            if(targets.length > 0) 
            {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) 
                {
                    creep.say('repairing')
                    creep.moveTo(targets[0]);
              
                }
                
                
                
            }
        }
    }
}
module.exports = roleFullRepairer;
