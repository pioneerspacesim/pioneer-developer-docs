# Pioneer Space Simulator
This repository is a design document proposal for the open source game Pioneer Space Simulator. The aim of the document is to define a vision for the game (albeit not too granular), to focus the development efforts for the team and to provide a good and welcoming starting point to aspiring contributors. It is relatively light on granular details to avoid turning contributing to Pioneer into a second job with deadlines and such nastiness.

### About Pioneer

[Pioneer Space Simulator](https://pioneerspacesim.net) is a open source space adventure game set in the Milkyway galaxy at the turn of the 33rd century. Originally Pioneer started out as an open source remake of Frontier: Elite II, initiated by Tom Morton sometime around 2010. Since then the team strives to widen the scope and are slowly maturing the game past its cradle, while honoring these traditions. 

Some things that inspire Pioneer:

- [Frontier: Elite II](https://en.wikipedia.org/wiki/Frontier:_Elite_II). by David Braben and Ian Bell - the seed of all this
- [Independence War 1. and 2](https://en.wikipedia.org/wiki/Independence_War_2:_Edge_of_Chaos). by Particle Systems - these games have very a satisfying flight model and enjoyable combat
- [The Expanse](https://en.wikipedia.org/wiki/The_Expanse_(novel_series)) by James S. A. Corey and the [TV series adaptation](https://en.wikipedia.org/wiki/The_Expanse_(TV_series)) - the nitty-gritty of spaceflight here is quite similar to what Pioneer has
- [Atomic Rockets](http://projectrho.com/public_html/rocket/) by Winchell Chung - a treasure trove of information about  the science of space flight and spaceships both real world and sci-fi
- Elite: Dangerous - has some interesting gameplay and visual ideas. Also, a descendant of Frontier, which is sure something!
- Star Citizen - the complex one, albeit we do not strive for this kind of detail. There are some nice visual workflow ideas in there as well
- Nebulous: Space Combat - the interface can give some nice ideas about overview/management level interfaces, and combat is very detailed
- Dwarf Fortress :P - mostly the systemic/emergent gameplay aspect
- List to be expanded, especially with non-spacesim games for the other parts

### [Where we are at now?](./pages/current_state.md)

### The team

Pioneer is a volunteer effort, chugging along for 12 years now. Current active(ish) team members are:

- [Sturnclaw](https://github.com/Web-eWorks) 
- [Impaktor](https://github.com/impaktor)
- [Gliese852](https://github.com/Gliese852)
- [WKFO](https://github.com/WKFO)
- [Schopin](https://github.com/laarmen)
- [Nozmajner](https://github.com/nozmajner)
- Do tell if you are not included!

Development takes place on [Github](https://github.com/pioneerspacesim), and the we communicate mainly via IRC in [#pioneer](https://web.libera.chat/#pioneer) at libera.chat. 

*Here I'd also include the new dev forum / github discussions and the project boards and such when we figure out how we want those*

### Development infrastructure

Since we are at the verge of an infrastructure change, we might as well think through what we have now and what other tools we would benefit from. This is one reason I've written this design document outline, so the development could gain a bit more focus, thus motivation and spirit. 

**We currently have:** 

- Github for actual development work
- Homepage (static page)
- IRC for chat
- Dev Forum - acts like a shared notebook these days.
- Wiki - on a separate domain. It has both developer and player side documentation.
- User forums and Discord for player community discussions (I think the community aspect is a bit neglected these days)
  - [Discord](https://discord.com/channels/705212721666326618/705544729714098179) is the most active these days. Some of the devs are on it as well. There's weekly interaction at worst, sometimes more. We could lean into it.
  - Twitter - primary "marketing", although it seems to turning to hell these days, even moreso than usual. But can draw in some interest. Managed by impaktor.
  - [Youtube](https://www.youtube.com/channel/UCbFD5Oxc1C9zxqnF4OitGjQ) - used for video posting. Sees a little bit of traffic, even comments, but nothing major. Noz, impaktor, strunclaw, wkfo, gliese852 has access. Noz monitors occasionally.
  - [Sketchfab](https://sketchfab.com/bszlrd/collections/pioneer-space-sim-a207c41476a14acdb3bc266361d58ae0) - used for hosting ship models for the wiki. Draws in some interactions, and people find the models all the time
  - [Reddit](https://www.reddit.com/r/pioneerspacesim/) - about a post per 2-3 months, not much activity. Noz keeps an eye on it
  - [Spacesimcentral](https://spacesimcentral.com/community/pioneer/) Where all this began. An old spacegame enthusiast forum. From our perspective it is not too lively. About a post or so per month at best. Noz keeps an eye on it, impaktor has account. 

**Proposed new infrastructure:**

- Github for actual development work
  - This design document properly writen and elaborated, hosted on github (could be part of the dev wiki)
  - Github Projects for project boards based on this design document
  - Github Discussion or some other forum engine to replace the dev forum as a notebook and async place for discussion. This could be the place for feature requests from users as well. GH Discussion threads can be referenced in the Project boards, even turned into tasks and such.
  - Dev Wiki - hosted on github wiki? Not sure it it has all the things we need. 
    - Possibly there could be a separate coding and asset creation wiki, if you think there's benefit in separating them.
- IRC for chat, as before. (And matrix connection is also possible, which is nice)
- Homepage - could be hosted on github pages. If I'm correct, the current site is compatible with that, and only the domain needs sorting out.
  - Player wiki - manual and tutorials. Could also be hosted on github pages, with MKDocs or Docusaurus
  - Link to community places
- Community spaces - maybe we could rethink which of those we actively want to involve with to avoid overstretching for no benefit. 
  - [Discord](https://discord.com/channels/705212721666326618/705544729714098179) - the most active, even if it's not that active. I think we should have a presence there, and encourage discussion. Could also be an important "marketing" place, given that space gamers are on it. Could also be a place to draw in contributors. (nothing concrete came out of that yet, but there were some upstarts)
  - [Youtube](https://www.youtube.com/channel/UCbFD5Oxc1C9zxqnF4OitGjQ) - useful for video hosting. I think we should keep it
  - [Sketchfab](https://sketchfab.com/bszlrd/collections/pioneer-space-sim-a207c41476a14acdb3bc266361d58ae0) - as currently, to host ship models for the wiki.
  - Twitter - not sure, maybe use it as how we do now, and see that happens when the dust settles. Maybe consider mastodon eventually?
  - Reddit - not much use for it really. I suggest a pinned notice that says that devs don't monitor it, and links to where we or the community could be reached. Maybe repost twitter/youtube "marketing" posts occasionally.
  - Spacesimcentral - I'm a bit sad to say that, but SSC does not provide much benefit either. There's no real community happening there from out perspective, so I suggest the same approach as reddit. 
  - Additional places to think about:
    - Artstation - Noz already uses it as a portfolio site, with some Pioneer content too. Could be a place to draw in artists eventually with those protfolio pieces (I've a backlog of Xylo and cockpits already)
    - [mastodon.art](https://mastodon.art) - upstart art community mastodon instance, with lots libre type people. Might be a good place to post art "marketing" stuff. Noz could do it.

## Design document proposal

The main aim for Pioneer is to be a quite realistic space game with a nice amount of space opera. While realism is an important aspect, fun and interesting gameplay is as much as important, and we strive to hit a good balance in that regard.

### Important aspects:

- **Emergent gameplay coming from the game systems working together** to provide unscripted and unique events. For example an ill-maintained engine forces the player to do orbital maneuvers to get to their destination, but then they have to decide whether to kill of livestock cargo to conserve resources, or attempt to keep them alive, and risk not making it to port. 
  - Scripted missions and stories standing on this systemic and emergent base. 
    - A satisfied mission giver could later follow up with other missions and initiate a chain of other missions
    - A dissatisfied mission giver could send assassins after the player
      - More elaborate stories could be started from certain missions or other in-game events, like a distress call for example turning into a combat chase, then some detective work, then an assault on a pirate outpost.
    - One game start could work as a chain of missions acting as a tutorial. 
  - *I suspect properly implementing this needs a lot of groundwork, but I think this would be a nice thing to aim for.*
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
  - CoaDE has some nice tools for it, a possible inspiration. And it does integrate maneuvers, and does not treat them as instantaneous change of velocity. For transfer planning this would be quite important. It also has a nice semi-turn based approach for orbital flight: the player sets the time step, and the orbits show these time-steps. And one can advance time by these steps. Such a system, or the ability to put time accel off alarms onto the flight plan would be quite handy in my opinion. 
- **Interstellar and interplanetary travel** - might need some thinking - sometimes I find the multi-ton fuel requirement a bit odd and limiting. Note sure about it though, but it would benefit from some discussion I think.
  - There cold be jump pellets or something for a certain number of jumps. These could be slowly manufactured from hydrogen  (or water) if needed, even by the drive or reactor. These pellets would mass less than a ton. (say 0.1t)
  - There could also be reactor fuel consumed at a certain slow rate depending on power draw. (H2, Deuterium - wonder how much is really needed). H2 and even deuterium could be found in the field for refueling. 
  - And a jump could draw a pellet, and a certain amount of that fuel. 
  - We could switch propellant back to water, because it is more dense. Player could refuel on planets that have water or ice, or could use other propellants found elsewhere either planet-side or from gas giant scooping. (Performance then would be dictated by density of those.)
  - Or we can still postulate some super-dense H2 storage system and keep it as is and not overcomplicate things. 
    - Either way, pumping down fuel could benefit from some complexity: you could only pump down as much as you have empty H2 containers either bought or depleted by jump. Those containers would weigh very little, and could be traded in/refilled while refueling (automatically mostly, but could be done by hand too).  But I might overcomplicate things again. Anyhow it feels weird that we can just pump down H2 form the tanks, especially if we consider the 1m3 = 1t assumption we have right now. That stuff won't stay in a bladder nicely, and needs supercooling. 
- **Ship systems** - an important part of emergent gameplay is a granular enough ship systems simulation. This could include equipment damage, wear and tear, quality, efficiency, heat and energy management. A lot of people enjoy this operational aspect of a space game, and we could lean into it with equipments generated RPG style from a pool of points, possibly even procedurally. Another important aspect is ship differentiation by roles and intentions (and the possible misuse of ships due to what's being available) *Certainly a large project with tentacles in about every aspect and other porject*
  - I think the current "internal volume = equipment volume free for all" approach makes ships less differentiated. Which boils down ship choice mostly to deltaV and capacity. 
  - A more elaborate hardpoint system would be beneficial in my opinion because of this. Certain ships could for example have some built in volume dedicated to cabins, and if one wants more cargo space, then sure it can be converted, but not 1:1. And vice versa: one could build in cabins into the cargo space of a freighter to a certain extent, but it would not be just a volume question, since one would also need to install additional life support systems. And these cabins could be less comfortable, limiting the player to lower paying taxi missions.
  - Larger ships could also be differentiated by more complex operation, and a more 'captain issues orders' kind of gameplay (but still retaining the possibility for manual flight). (See Nebulous Space Combat)
    - This could be especially true for trading. 
    - Subcrafts and an overview/management style interface could be a nice addition. Maybe even the ability to remote control at short distances.
  - Damaged equipment could create unexpected behaviours, like induced rotation by faulty RCS for example, or higher signal output, thus ship brighter on radar.
  - The ability to have subcrafts (shuttles, tugs) for certain tasks. Crew could operate these via a management/tactical-like interface
  - More involved crew, and a management interface could be nice too.
  - **The ability to externally dock** - would provide lots of gameplay abilities, and more depth
  - Ability to store replacement equipment, and field-install it even
  - A general "consumables" resource used by life support (albeit slowly, if one has a nice regenerating/closed loop life support system). A spontaneous SAR detour could put a stress on this, when you need to haul six more people than intended.
  - There could be a general "spare parts" resource used for field maintenance and repair. And there could be the ability to cannibalize less important equipment when in a pinch. There could also be spare parts specific to a certain equipment, which would be consumed more slowly for the maintenance of that equipment, but could not be used, or much less efficiently for other equipment.
  - **Volume based cargo and equipment** - equipment should be stored on volumes instead of mass units, and should have a mass associated with them based on density. This would affect ship mass, and thus TWR. Smallest mass could be 0.1 m3 to avoid to much granularity I think. 
    - On the other hand, cargo would either come in standard 1m3 container, or as a bulk of one has bulk storage tanks. (which could be more space efficient, but could only have one type of cargo)
    - Equipment hardpoints would have a size rating, defining the largest it can have.
    - Volume based equipment could be at a 0.1m3 granurality
- **Combat** - another aspect that is important to a lot of people. Especially close quarters combat, because that's where the thrill is. The above ship system granularity is a huge part of this, especially the hardpoints. Right now about every ship can have one front and one rear cannon and a given amount of missiles, which isn't good for ship differentiation either. *Would need proper design, and will be a huge multi-faceted project.*
  - Multiple hardpoints per ship, with size and such limits to differentiate ships more
  - Turrets
  - Different kinds of weapons with different up and downsides
  - Sensors and detection
  - Shields could work in a more unique manner, instead of just being a regenerating second health bar
  - Maneuvering should be more important in combat. Figuring out a way to eliminate jousting as much as possible would be quite important important in my opinion.
  - The above mentioned semi-turn based approach to intercepts could be interesting I think. Like if one wants to pirate, they'd pick a target, plan an intercept, and change that flight plan based on the reaction of the target. And manually finish the last leg of the intercept.
  - Ship health would benefit from some thought also. The ability to mission-kill a ship by disabling engines for example would be nice. Or disarming them, or destroying a certain equipment of theirs that would keep them from fulfiling their task. Which could also happen to the player. --> ability to put out distress calls
  - There are UI-UX considerations for combat as well, both regarding information provided, and aids for the actual combat, like lead indicators, motion trails and such.
- **Non-combat gameplay** - I think it is very important to provide a lot of interesting non-combat gameplay opportunities as well. One important aspect would be in my opinion is **problem solving with ships:** either by flying, maneuvering or proper management of resources and equipment. There are several tropes we could start off from, and especially to elaborate and improve upon them:
  - Deliveries - could be more involved, with orbital rendez-vous and **external docking**, last minute reroutes, multi leg deliveries, "delivery and bring back" missions, etc.
  - SAR missions are great. External docking would add quite a lot to them, especially if the target is rotating due to RCS failure. Spontaneous distress calls would also be nice, either with payment or just reputation increase. Some places could even make responding to them mandatory (which could affect nearby NPC ships too). These could also be traps. 
    There cold also be SAR missions in difficult terrain (asteroid belts, complex structures, etc)
  - Expeditions to unexplored systems - larger multi-leg missions with several types of sub-tasks, like surveys, resupply, couriering and such. Large player ship with subcrafts and management/overview interface could be interesting for this. 
  - Not sure how we could do exploration for it to be interesting and rewarding. Tacking on a minigame E:D style does not seem to be a good direction.
  - Multi-leg inspection missions at places with difficult terrain (asteroid belts, complex superstructures, mountainous places etc)
  - Smuggle deliveries (with more possibility of violence, and opportunity for sneaking and evasion)
  - Resupply missions (deliveries to uninhabited places with limited opportunities to refuel)
  - Salvage-ing derelicts, either planet-side of in orbit. Could be a type of mission, where you have to return the haul (or part of it), or one could buy information on derelicts, or just stumble upon them. Distress calls could lead to them also, if the player gets there late, but then it could also involve the police.
    - Derelicts could also contain clues to other derelicts or stashes and such, if the player cares to investegate.
  - Sight-seeing missions where the player could fly to places of interest. Each body and area could have a hidden "coolness" stat, and the player would use their knowledge of the area to figure out a nice route. The pay could then depend on the fun of the trip. And ambushes and such could happen on these trips as well, which could either add or detract from the enjoyment, thus pay. 
  - Mining could be made more elaborate too, but not sure how one would do that. I rarely mined in any game.
  - Ability to put out distress calls. Either via radio, or a special hyperspace satellite shot back into an inhabited system. Then it would be a question of consumables drain rate and waiting.
  - Communication would be a nice to have. Both with STC and other ships. Negotiation, taunting, threats, distress calls, gossip, trade information, e-mails, etc
    - **Light lag** could be a really nice thing to have.
  - STC procedures could be nice. Nothing to elaborate, but the requirement to aim a bit off from a station while on approach, and an indicated ingress or egress point one needs to fly to before flying into/out of the docks. Maybe some speed limits around the stations.
    - A larger (say 100km) sphere of influence for orbitals would be nice in my opinion. (With a distance of jump that far for NPC ships, because they tend to clutter the outbound side of the orbitals and ground ports too)
  - There could be opportunities to do things around cities and on planets: one pad buildings here and there (warehouses, WIP pickup points, etc), remote settlements, where you'd need to rough-land. These could be derived from currently generated buildings, cities and settlements
- **Trade** - another feature which is assumed as a given. In my opinion it would benefit from some elaboration and a more systemic approach. (I'm not well versed in this aspect, never really was that interesting to me)
  - Cost/benefit and upkeep should play a more important role. Even if only for the player to start up a relatively simple spreadsheet of costs and incomes. Trade is about spreadsheets after all :P
  - Provide abilities for the player to find good trade opportunities. Like calls for material for an industrial site under construction (which later could become a small port even). Or the ability to buy tips and hints on market conditions and possible upcoming events that have effect on a certain market (kinda like the news event module we have)
  - On a larger scale (and larger ships) it would be nice to have a more managerial/overview approach. Like one then would plan around loading schedules, and would need to balance and arrange cargo even (to allow for faster selling if one flies to multiple places). For very large ships, one could use and command shuttle craft to gather up or deliver the goods to the ports even.
  - Opportunities of trade in-flight. Like an NPC could hail the player and offer a deal, and then you'd dock with them to effect that deal.
  - Previous delivery mission givers could provide some discounts on certain stuff. Reputation in a system could also affect prices a bit, so it would be beneficial to build up local reputation.
- **UI-UX** - we are at a nice place with that mostly, but there's still a lot of room for improvement.
  - Ability to control as much functionality as possible from a joystick with a hat switch and buttons  without contorting the UI into weird yoga positions like E:D does.
  - HUD is a nice basis. There's room for added functionality
    - There could be proper comms (see above - non-combat gameplay)
    - HUD for external docking
  - Flight UX is quite nice with the new flight computer. There's room for a bit of polish, but it's really nice overall.
  - Station screens could benefit from some facelift and UX improvement
  - Maps even more so (see also flight planning points)
  - Interactive cockpits for more immersive gameplay. But optional, one should be able to play the game with only a HUD as well.
- **Ships**
  - Our ships are quite over the place in terms of size and capabilities. **It could be beneficial to figure and very roughly block out a balanced set of ships either by resizing and restating current ones or using very rough and simple blockouts.** 
    - I think the overhauled OPLI ships are a nice place to start from.
  - It would be nice to be able to differentiate ships more (see ship systems paragraph)
  - Larger ships should have real downsides too, because right now it's almost a no-brainer to buy a bigger ship. Each role or "job" should have ships optimized to it, and there should be a good selection of generalist or multi-role ships that can do these jobs nicely, but a bit less efficiently than a specialized ship. Larger ships could tend more toward an overview/management style interface and gameplay.
  - Manufacturers should have a palette of roles, but none of them should have an all-encompassing palette (or only a very few of them, like OPLI and Haber). Some manufacturers could specialize in one role, building very nice ships for that role, and likely more expensive at that.
  - Larger ships could either be **non-atmo capable** or **tail sitters**. There could also be a distinction between atmo capable, around 1g capable ships and space-only, low-g landing capable ships. Gliders and such aerodynamic ships could have a distinct advantage over thruster maneuvered ships in atmosphere.
    - Alternatively we could postulate that the atmo shields alleviate most of the drag problem, so there's less of a distinction. Depends on, how much space opera we want.
  - The ship market and maintenance facilities could be separated from the spaceports to an extent. The ports would have a limited level of maintenance service, and a bunch of adverts to repair and ship market facilities where one would need to fly to use those services. 
  - There could even be distinct passenger ports inside cities with very little amenities, and larger logistic centers at the edge of the city, where the trading and such happens. 
    - **Heh, the BBS could even be planet-level, and maybe even accessible via comms.** You'd speak to the person, who would then designate which port you'd need to do the pickup, or where to go to buy that ship you choose. **So players would need to navigate to places,** which would lessen the menu based gameplay a bit.
  - **External docking**! (sorry, I would really like to have this :) )
  - **The ability to own multiple ships - separate player from ship**
- **Ship design and visual language**
  - Ships should have a somewhat believable structure and looks, but not aiming for 100% realism. RCS thrusters, appropriately sized main thrusters, visible sensor and similar equipment and such. 
  - I am aiming for a bit more subtle, but unique visuals. See the reworked OPLI ships. The aim is to have distinct visuals, with not too much over-the-topness.
  - Will elaborate more in a proper visual bible. (Which I've ought to have done already)
  - There should be lots of sketches and concept art in that visual bible. See the point about very rough blockouts of ships. I'd say if we can put down a good list of balanced ships that way, we can then provide descriptions for them, which could also be an incentive for artists to contribute sketches.
- **Cities and orbitals**
  - The recent improvements of the city generator are rather nice, but our cities are still just buildings randomly scattered. There's no city structure, no roads, parks, etc. It would be nice to have more natural looking cities, especially if we want to put gameplay in and around the cities a well.
  - There could be huge domed cities (either built or shielded), where the player could fly in through some kind of gate. See Cowboy Bebop or G-Police
  - Cities could have structure in the sense of distinct industrial, agricultural and residental, and mixes use areas. 
  - There could be cities around the planets which don't have a dedicated spaceport. But there could be missions there to smaller landing pads. (Like heliports in current IRL cities). 
  - A question: how space-opera we want regarding spaceports? Right now they are quite on the opera side being in the center of cities. On one hand it is not too realistic, but on the other hand I think it is good that the player sees the cities. So I think I'd lean towards the opera side in this question, at least for small ships. Large ships then could have a dedicated spaceport at the outskirts, but small ships could be allowed to fly around cities. Kinda like how semi-trucks are forbidden from residental areas.
  - Orbitals would benefit from manual landing (Gliese is working on that if I'm correct, the prototype was very cool and a lot of flight-computer plumbing is already done)
  - There could be smaller orbitals where you'd dock externally. Outposts and such.
  - There could be really huge orbitals, proper O'neill's and such, with generated terrain and cityscape. Where you'd fly in through a gate, and land on a proper ground-level port or something similar. Just to give the players something to see. Maybe even those close to city missions could happen in some of them.
  - There could be really small outpost style cities/ground ports on low population systems. 
- **Graphics** - Our engine is a bit behind times, and would be nice to have a more modern rendering engine, both from a "nice to look at" and "easier to work with" aspects.
  - PBR metallic based workflow - would simplify asset creation, due to the amount of readily available assets, tools and documentation
  - Decal based detailing - another thing that would simplify asset creation, and a way to improve visual fidelity. Could also provide optimization benefits due to reused materials and textures
  - Tiled materials - would simplify texturing, especially for large surfaces.
    - With weathering and grunge masks to break up monotony and sterility 
  - Screen Space AO - nice to have, and removes burden of baking AO onto textures.
  - Screen Space Reflections - would improve visual fidelity a lot. A lot of materials depend on reflection, like car paints and such.
  - These could also provide an incentive for aspiring contributors, who could learn a modern workflow while making assets.
- **Facegen** - now that's a sore point. Still in my head though, if nothing happens, I'll tackle it eventually, even if in a 5 of each part limited manner at first.
- **Out-of-ship experience** - we talked a lot about providing an out of ship experience. Be it a text adventure like interface with some images or a full-blown isometric game inside the game. 
  - "Walking outside / have rovers to drive around" keeps requested by players from time to time as well.
  - The more I think about it, the less I'm convinced we would benefit much from these, but it would enlarge the already large plate I've outlined above, and would increase the workload. 
  - I think a nice comms functionality with e-mails and a chat style interface for mission and character interaction, and the accompanying address book to reach characters you know would provide the most bank for the least work. Admittedly it would need lots of plumbing and writing work still, but less graphics. Not to mention the work a full blown isometric part or actual FPS aspect would mean. 
  - So I'd say these are not planned currently. I think most of what's outlined above could be brought together with such functionality in the future where Pioneer matured towards where we would like it. So if the manpower is available in the future, then sure, we could go onto one of these directions, but I'd say for a "Pioneer 1." it is not planned.