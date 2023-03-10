---
title: Flight and Navigation
category: design-docs
---

# Flight and Navigation

- **Full scale solar systems and the realistic direct transfer travel** in them is one of the unique and interesting points of the game. It would benefit from UI-UX improvements, like a proper travel planning interface and some more visual feedback in the flight UI, like showing the orbits of bodies. *This could be a project on its own.*

- **Orbital maneuvering gameplay** while mostly happens as a last resort or in corner cases, I think is still an important aspect of the game. It would benefit from some UI and UX improvements, like worldview orbit display when in orbit.

- **Autopilot needs a bit of rethinking** in my opinion: Right now it is just a way to not actually fly, which defeats the purpose of a space game even if one only wants to trade. I propose that the player facing autopilot should be relegated to executing flight plans made in the orbital map. *This could be a project on its own, or combined with the above UI/UX projects*
  - The player arrives in a system, and plans their flight to their destinations via the orbital map. Then the autopilot executes the planned trip. The efficiency and speed of the route would be decided by the player and their skill in planning. 
  - Planning tools could include:
    - Fly to vicinity command - first one would fly to a certain distance from the planet - for those who just want something similar to the current autopilot
    - Enter orbit  - or the player would enter at an arbitrary orbit around the destination planet.
    - Wait for destination to be in sight - the ship then would wait for the ground port to come over the horizon for approach
    - Manual transfer planner - with acceleration, coasting and deceleration phase, and ability to fine-tune acceleration and the final speed (and thus orbit). Would need integration functionality, so it actually goes through the whole flight and shows the actual curved path the ship would take influenced by gravity. This could also support more precise planning than the approach command, since one could fine-tune the trip to arrive when the port or station is at the right position and almost directly approach it.
    - Orbital maneuvers - these could be chained together even with other commands for a more complex flight.
  - [CoaDE](https://www.childrenofadeadearth.com/) has some nice tools for it, a possible inspiration. And it does integrate maneuvers, and does not treat them as instantaneous change of velocity. For transfer planning this would be quite important. It also has a nice semi-turn based approach for orbital flight: the player sets the time step, and the orbits show these time-steps. And one can advance time by these steps. Such a system, or the ability to put time accel off alarms onto the flight plan would be quite handy in my opinion.  

- **Interstellar and interplanetary travel** - might need some thinking - sometimes I find the multi-ton fuel requirement a bit odd and limiting. Note sure about it though, but it would benefit from some discussion I think.
  - There cold be jump pellets or something for a certain number of jumps. These could be slowly manufactured from hydrogen  (or water) if needed, even by the drive or reactor. These pellets would mass less than a ton. (say 0.1t)
  - There could also be reactor fuel consumed at a certain slow rate depending on power draw. (H2, Deuterium - wonder how much is really needed). H2 and even deuterium could be found in the field for refueling. 
  - And a jump could draw a pellet, and a certain amount of that fuel. 
  - We could switch propellant back to water, because it is more dense. Player could refuel on planets that have water or ice, or could use other propellants found elsewhere either planet-side or from gas giant scooping. (Performance then would be dictated by density of those.)
  - Or we can still postulate some super-dense H2 storage system and keep it as is and not overcomplicate things. 
    - Either way, pumping down fuel could benefit from some complexity: you could only pump down as much as you have empty H2 containers either bought or depleted by jump. Those containers would weigh very little, and could be traded in/refilled while refueling (automatically mostly, but could be done by hand too).  But I might overcomplicate things again. Anyhow it feels weird that we can just pump down H2 form the tanks, especially if we consider the 1m3 = 1t assumption we have right now. That stuff won't stay in a bladder nicely, and needs supercooling. 