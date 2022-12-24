# Pioneer Space Simulator
This repository is a design document proposal for the open source game Pioneer Space Simulator. The aim of the document is to define a vision for the game (albeit not too granular), to focus the development efforts for the team and to provide a good and welcoming starting point to aspiring contributors. It is relatively light on granular details to avoid turning contributing to Pioneer into a second job with deadlines and such nastiness.

### About Pioneer

[Pioneer Space Simulator](https://pioneerspacesim.net) is a open source space adventure game set in the Milkyway galaxy at the turn of the 33rd century. Originally Pioneer started out as an open source remake of Frontier: Elite II, initiated by Tom Morton sometime around 2010. Since then the team strives to widen the scope and are slowly maturing the game past its cradle, while honoring these traditions. 

### **[Things that inspire Pioneer](./pages/inspirations.md)**

### [Where we are at now?](./pages/current_state.md)

### [The team](./pages/team.md)

### [Development infrastructure](./pages/dev_infrastructure.md)

## Design document proposal

The main aim for Pioneer is to be a quite realistic space game with a nice amount of space opera. While realism is an important aspect, fun and interesting gameplay is as much as important, and we strive to hit a good balance in that regard. This document outlines the general direction we are striving to bring Pioneer towards, and the subpages elaborate on the topics more as we design them. 

### Important aspects:

- **[Emergent gameplay coming from the game systems working together](./pages/emergent_gameplay.md)** to provide unscripted and unique events. Procedural and semi-procedural generation is an important part of doing this right. 

- **Procedurally generated game world** as a basis for a smaller amount of interesting hand-crafted places.

- **Gameplay over simulation.** While Pioneer strives for a high level of realism, but it is a game first and foremost. Scientific aspects should enhance the gameplay, not detract from it. But on the other hand, the basis is still in reality, and it is important to find ways to build fun gameplay on this reality before going for the trope or arcade solution. Having human pilots for example would seem quite a bad choice from a scientific/practical sense, but we want to create a game for people, not flight computers, so human pilots are here to stay.

- **[Ship operation gameplay](./pages/ship_operations.md)** Things like power and heat management, handling of maintenance of equipment. Opportunities for those who like to tinker, optimize, but with close ties to the intended emergent nature of the game with situations created by breakdown of ship parts at the worst time possible because of neglect and circumstance.

  Ships should have character, so players can get attached to them as they upgrade and customize it and live through adventures flying it. Buying a ship should be an event long pondered, and a sad farewell to the trusty old craft. Or a sighing relief when one is finally able to step up from that creaking old dinghy that always gives out at the least convenient moments. 

  The possibility to own multiple ships would be nice, and could provide interesting gameplay decisions.

  The aim is to strike a good balance between detail and fun. We don't need to simulate every circuit breaker and screw as some (admittedly very intriguing) upcoming projects do, but on the other hand it would be nice to have enough detail to enable emergent gameplay.

  **Ships size** provides a good opportunity to create meaningful differences between ships:

  - **Small ships** are more simple to fly, operate and maintain. They are allowed to fly to almost anywhere including residental areas. Intended for players interested in the flying, maneuvering aspects of the game. A bit like a motorcycle or a private car or a small motorboat. (Kanara, Sinonatrix, Natrix, Mola Mola, Bluenose, Deneb)
  - **Medium ships** are a bit more complex to operate and maintain, but would provide more and more diverse opportunities at the cost of a bit harder piloting experience, and some restrictions to them. They strike a balance between providing a fun flying experience, but offering some of the managerial/operations parts of the game as well. Akin to trucks, semis and buses. (Mola Ramsayi, Storeria, Nerodia, Venturestar)
  - **Large ships** are really complex to operate, and to fly, and there are stricter restrictions to where they can fly legally (only to ports on the edges of cities, or even only to orbitals) and most of them are tail-sitters or space-only. They primarily provide operations/managerial types of gameplay like trading, expeditions and similar complex operations. Some of them could even have small sub-crafts for certain tasks and flexibility. Akin to commercial aircrafts, trains and commercial ships. 
  - **Huge ships** are the largest ships around, with severe restrictions to where they can go or not stemming both from the legalities to their capabilities. They can never land on planets, and would moor next to but the largest orbital stations. They always have small (or even medium sized) subcrafts, and lean heavily into a managerial/operations/ gameplay. Akin to bulk and contain freighter ships. (the wip Longnose) A ship like this could even act like a home base for the player, with an upkeep.

  **[Flying the ship and navigating between systems](./pages/flying_navigation.md)** should be a fun and interesting thing to do, and a skill to master.

  - **Full scale solar systems and the realistic direct transfer travel** in them is one of the unique and interesting points of the game. It would benefit from UI-UX improvements, like a proper travel planning interface and some more visual feedback in the flight UI, like showing the orbits of bodies.
  - **Orbital maneuvering gameplay** while mostly happens as a last resort or in corner cases, I think is still an important aspect of the game. It would benefit from some UI and UX improvements, like worldview orbit display when in orbit.
  - **Close Quarters maneuvering,** manual landing on ports and orbitals, manual external docking, navigating tight spots, scooping up cargo and similar things to do.
  - **Inter-system travel** already has some nice aspects providing navigation opportunities. There might be room to enhance and fine-tune it further, but the base is nice.

- **Problem solving gameplay**. Partially an effect of the above aspects. It is important that the game provides situations and problems the player can solve by using the systems at their disposal, and especially by flying their ship. Where they can make decisions, plan an action, execute it, and scramble to fix things when something inevitably go sideways. This includes situations where one needs to utilize their skills in flying and operating their ship, and situations they need to get out of because they neglected things that should have been done. 

  - **[Trading gameplay](./pages/trade.md)** is a main area of this and could offer lots of emergent gameplays, if it is elaborated upon. 

- **[Non-combat gameplay](./pages/non_combat.md)** It is important to provide rich gameplay opportunities via interesting missions, events, characters and places that enhance and spice up the systemic aspect of the game. Things to be discovered or figured out. (Also see the *problem solving gameplay* point above) Without the need need to shoot everything that's moving (and bomb everything that's not)

- **[Combat gameplay](./pages/combat.md)** is another very important aspect for a lot of people. Especially close quarters combat, because that's where the thrill is. This is where the above mentioned *fun trumps science* approach comes in in a manner. Hand combat should feel fun, engaging and plausible within the games context, even though one could even argue against the futility of having pilots and CQB at all owing to computers having much better reaction time and are more predictable to even forego CQB entirely for 1000+kms of engagement ranges. But we are not computers, but people, and people want experiences and stories involving people, not computers. And people like to shoot things that move and bomb things that are not. 

  In my opinion it is also important that combat shouldn't feel like a trivial thing. Shooting at ships in populated and well patrolled areas should have its consequences for example. But on the other hand system outskirts and especially less populated and/or frontier systems might have very lax security, and much more violent atmosphere. >>> subpage>>> *Which is a good opportunity do lean into the fact that there is no FTL communication in the universe apart from Courier ships and drones, which effectively makes all systems quite isolated from each other in a city-state manner. So there's no Galactic Police, and even neighboring systems can have very distinct security levels,* 

- [**Good UI and UX**](./pages/ui_ux.md) for the player to be able to enjoy the all the above with as little friction as it is possible. On the other side, the UI and HUD are good places to create visual interest as well. The aim is to create an UI that provides what's needed, easy and fun to use, and looks cool still. 

  - **Interactive cockpits** are a very good opportunity to provide a more immersive experience, and to add visual character. On the other hand it is important that the game is playable properly with only the HUD, mouse and keyboard shortcuts.

- **[Graphics](./pages/graphics.md)** should strike a good balance between high visual quality and decent performance on a common family computer as much as humanely possible. Modern PBR based rendering, the decal workflow and screen space effects can also lighten the workload for asset creators.

- **The visual language** of the game aims for a believable, but not strictly realistic visuals while providing a distinct and characteristic look and feel for the game. Visuals are a bit more subtle than most popular science fiction. The reworked OPLI ships show this approach for example. 

  - **[Ships](./pages/ship_design.md)** have certain sets of visible details with consistent shape language and proportions, that show or allude to the problems of spaceflight. Such as radiators, RCS thrusters, sensors and so on. Most ships also have visible cockpits, even if having one would not be practical in real life. 

  - **[Planets](./pages/planets.md)** surfaces are aiming to be procedurally generated and rich in detail up-close. Plausible geographic features and texturing and weather effects such as cloud cover or nice ground scatter objects for example would be very important. But there should be a balance to it, because this topic alone could be a huge project in itself and there's a point of diminishing returns from a gameplay standpoint.

  - [**Cities and orbitals**](./pages/ports.md) are the most important points of interest, and would benefit from some more structured approach to their generation, both from the visual and gameplay standpoint. Cities with roads and districts, parks, maybe even separate passenger and cargo spaceports, ship repair providers and such points of interest the player could interact with.

    **Orbital stations** could also be procedurally or semi-procedurally generated for such roles and gameplay opportunities and could vary in size as well from small outposts to huge O'Neill's Cylinders and Stanford Toruses with a generated landscape.

  - [**Facegen**](./pages/facegen.md) the everlasting sore-point of mine

- [**Out-of-ship experience**](./pages/out_of_ship.md) comes up from time to time in one form or other, be it a text adventure layer an isometric RPG or even a full blown FPS layer to the game. The text adventure level of this is the most feasible, and could be incorporated with a good messaging and BBS interface. The later two on the other hand would practically mean making another game and fully integrating it with the existing parts. Which would be an enormous amount of work for even a legion of developers both from coding and asset creation sides. Maybe in the future when Pioneer is mature enough to our liking and there's not much else to add and polish, then we might contemplate it, but **we are not planning on taking steps towards it in the foreseeable future.** 

  



