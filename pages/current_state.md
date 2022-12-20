#### Where we are at now?

The game is open-ended, and you are free to explore the millions of star systems in the game. You can land on planets, slingshot past gas giants, do a flip and burn maneuver while going for a nice trade opportunity or when you are trying to help out a drifting ship in distress. 

The flight model is fully Newtonian in a two-body problem manner. The player can experience how spaceflight would actually work if one would be sitting in a spacecraft of [torchship](http://projectrho.com/public_html/rocket/torchships.php) levels of power and efficiency of several thousand km/s deltaVs and multi-g accelerations. Ships have visible maneuvering thrusters, although their effects are not directly simulated. 

Direct brachistocronne (aka point and burn) travel is the default, with a simple but handy UI for it. Ships can enter orbits and do orbital maneuvers as well. The game even provides a rudimentary maneuver planning interface similar to what KSP or CoaDE has. Atmospheric drag and lift are simulated to an extent, but not to flight-sim levels. 

Star systems are 1:1 scale, and the player can seamlessly travel from a surface starport to the outskirts of the system. Conventional flight to other systems is not possible, systems are wholly separate entities in that sense. 

The galaxy, the star systems within and planetary bodies are procedurally generated, but it is possible to create systems by hand too. The game has a large catalog of existing real stars mostly those that are close to Sol, or are well known and bright starts further away. The player can visit these stars.
Interstellar travel is done via Hyperspace Drives; one can travel from almost anywhere to a low sun orbit of the target system.   

Travel time is not instantaneous, but depends on distance and drive class. A typical jump can take several days or more and an important factor for missions. Range depends on ship mass and drive class, and can go up to about a hundred ly.

The player can buy new ships, but only can have one at a time. Essentially the player is the ship currently. Ships can be equipped with several kinds of equipment to enhance or add functionality. Examples are cargo and fuel scoops, passenger cabins, weapons, shield generators and so on.

The player starts with a small ship and some equipment and is free to roam. There are several types of missions to earn money doing, ranging from simple deliveries to planetary data gathering, Search & Rescue operations or assassinations. These missions are facilitated through a BBS system which can be found on spaceports. Spaceports also provide maintenance service, a place to contact police to pay fines, and to refuel.

The game is extensible with mods which can replace or add functionality or assets like ships, stations and such. Scripting and UI definition are done with the [lua scripting language](https://www.lua.org/) and data for spaceships, systems and such are stored in [json files](https://www.json.org/json-en.html).