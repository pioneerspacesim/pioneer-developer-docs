---
title: Overview
category: outline
order: 1
---

# Pioneer Space Simulator

The primary purpose of this repository is a design document for the open source game Pioneer Space Simulator.

The aim of this document is to define a vision for the game (albeit not too granular), to focus the development efforts for the team and to provide a good and welcoming starting point to aspiring contributors. It is relatively light on granular details to avoid turning contributing to Pioneer into a second job with deadlines and such nastiness.

# Discussion

(please add code review comments to this section on the PR for specific parts). After discussion, I'll write out the sections properly.

### What kind of game Pioneer is? (big picture)

##### What kind of "dream" we want to fulfill? What kind of gameplay we want to provide? Do we even want all these?

- Space adventure is a given I think, but how could we be a bit more specific about it?

- Combat vs Civilian matters? (we lean more towards civilian matters currently, combat is bare-bones)
- Simulator / realism aspects vs fun? (currently it is somewhere halfway. Flight is newtonian, scale is 1:1, engines are unrealistically powerful and efficient)
- Operating a spaceship (on what level?) (currently it is simplified. There's equipment customizations and some stats to manage, like hull heat and pressure for reentry, and weapon overheating)

- Problem solving with the spaceship?
  - I have to mention external docking with collars here :P I think that's a very important feature to have for any future ship-ship interaction
- Interstellar and in-sys navigation?
- Local level navigation? (docking areas, more complex station layouts, waystations, mission specific POI)
- Meaningful choices, and tradeoffs (no point in min-maxing)
- Systemic game with multiple interlocking parts to provide emergent gameplay?
- What kind of jobs we want to provide to the player? What things we'd like them to be able to do?
- Create your own fun and stories? (like E:D Fuel Rats or Colonia initiative back then). How we could facilitate this and to what extent?
- How much the factions and their attitudes affect gameplay and progression? 
- Text adventure aspects? (How deep that would go? See Sunless Skies/Seas for example)

##### How our setting works?

I put down the main points a bit more confidently here, but these are still open to discussion.

- Where are we on the Hard SF  ----- Space Opera spectrum?
  - What we want to ignore, and what aspects we would lean into?
  - No artificial gravity (meaning tower layout and tailsitters, esp for larger ships)
  - No FTL radio, communications is facilitated by courier ships, drone network and an asynchronized internet carried by all ships
  - Are hyperjumps experienced by the crew, or it is time travel forwards? Both have interesting lore points.
- Loneliness (no spacefaring alien civilizations in the galaxy, only useless ruins in some places)
- Stagnant ascendancy in terms of scientific and engineering progress. All low hanging fruits are picked long ago, and progress is very incremental. More and more effort is needed for less and less return.
- How mundane space travel is? (flying above cities, cozy spaceports, travel times)
- I think it is very important, that we don't want to predict the future, but aim for an interesting and varied setting
- I think we would benefit from a more structured galaxy in terms of inhabited systems and factions. Systems with large populations could be a bit further apart, with typical routes between them, and a waystation network. 
- What kind of factions, superpowers and such we want?
  - Solar Federation - an imperialist, oddly democratic/illiberal superpower. More stable, but less liberal, a bit manipulative. Societal mobility can be streamlined: part rigid, part informal, with emphasis on the freedom of the individual to bring themselves up by the bootstraps, but also stay "normal" and don't rock the boat much.
  - Commonwealth of Independent Worlds (superpower) - a more federational, liberal union of nations. Less homogenic, more bureaucratic, idealistic but sometimes naïve. Societal mobility can be slow and unclear, but there are structures established. A lot depends on who one knows. Also a lot depends on the attitudes of a given member nation. 
  - Haber Corporation (minor power) - ultimate corporate state to the level of satire. An ambivalence of ineptitude and effectiveness, politeness and exploitation. Short term thinking and bad coordination, lots of infighting and office politics on all levels of society. Surveillance state. Societal mobility is strictly procedural, but easily gamed.
  - Tolan Kingdom (minor power) - a proud and snobbish, feudal society engineering project with the eyes on the very long-term. Feudal as in every means of production is owned by the king and rented out downwards. Societal mobility is procedural, but with clear paths both up and down. Reputation is very important.
  - I think we could benefit from another superpower further away from the core bubble, and also a sprinkle of minor powers across the galaxy

##### Presentation - visuals, style, audio

- I think the current OPLI ships show the direction well. Ambivalence between high-tech, and a more tangible, more familiar "retro" aesthetic. We don't want to predict the future, and try for low levels of visual clutter.
- PBR adjacent workflow would be nice  (even without a skybox based global illumination) 
- Smarter materials would be nice (tiling, separate UVs for AO, procedural wear and tear for example)
- Decal support for detailing would also be nice
- The UI and HUD is generally in a serviceable state, but could benefit from additional polish. 
  - Customizability would be good to have (HUD modes, etc)
  - In some parts, we do have a bit of clutter, on some other parts we lack information
- Regarding audio, I don't have much expertise, so please comment and detail anything you think is important.
  - I do think we would benefit from some "texturality" for our foley. So more actual recordings on top of synth sfx.
- Currently we have a mix of classical music and synth/electronic music, which might be a bit of an odd mix. But I don't have much expertise here either, and generally play with the music muted, so comments are definitely welcome here too.



##### What are our reasons and motivations to contribute?

I think this is also an important point, given that Pioneer is a volunteer effort. And we do want to be open and welcoming to new and returning contributors, but not always doing a good job at that.

- What makes us working on Pioneer interesting or fun? What challenges we want from it? What do we want to learn and practice?



---

Previous dev docs, I will reword and reorganize when we tied down what we wanted. Don't yet comment these parts please.

## About Pioneer

[**Pioneer**](https://pioneerspacesim.net) is an open-source space adventure game, set in the Milky Way galaxy shortly after the turn of the 33rd century.

Originally, Pioneer started out as an open source remake of Frontier: Elite II, initiated by Tom Morton sometime around 2010. Since then, the team has endeavored to widen the scope of Pioneer into a game in its own right and are slowly maturing it while honoring these traditions. 

> Pioneer: a game of lonely space adventure.

The tagline pretty much sums up the spirit of Pioneer. You are one person in a vast universe that does not care about you. The day-to-day happenings of the universe will continue regardless of your presence — or absence. A freeform game of space entrepreneurship where the fun comes from the player choosing or setting a goal, and then finding the most enjoyable way to reach it. Or even better, get enjoyably sidetracked by other interesting things. Pioneer is a game where the player has freedom to experiment.

Pioneer [**takes inspiration**](./inspirations.md) from many games, though its primary focus is to be an interstellar space adventure game with solar-system-scale simulation elements. The game makes an effort to simulate a living world around the player, but it is not one in which big-picture aspects can be affected. Even at the height of their progression, the player will never control the SolFed bureaucracy or own an entire system.

>  Pioneer: a game of lonely space adventure.

The other aspect of this is that we are actually the sole intelligent, sentient species in the Milky Way Galaxy. We are indeed the singular fluke. The answer to the Fermi Paradox, to the question of "But where is everybody?" is that there is nobody out there. We are truly, and deeply alone. Even though we've found and settled quite a lot of worlds with highly developed, diverse biospheres, we never found anybody. No species that ever developed into anything above the level of a primate, a dolphin or a cephalopod. Not even the simplest of ruins.

Human civilization reached a stage of stagnant ascendancy, where scientific progress slowed to glacial speeds as breakthroughs need more and more work for less and less appreciable gain for everyday people.  Exploration is more outwards in a geographical sense.

This is underlined by another important aspect of Pioneer's lore is that there is no ansible-style instantaneous FTL communication technology. The top speed of information is either C, or the same as the fastest vessel that can carry it through hyperspace. There is a well-developed asynchronous internet of sorts built on an automated hyperspace-drone network, complemented by all ship transponders also carrying large packets of data between systems.

### [Where are we at now?](./current_state.md)

### [Current team](./team.md)

### [Development infrastructure](./dev_infrastructure.md)

## Design document outline

The main aim for Pioneer is to be a somewhat realistic space game with a nice amount of space opera. While realism is an important aspect, fun and interesting gameplay is just as important, and we strive to hit a good balance in that regard. This document outlines the general direction we are striving to bring Pioneer towards, and the subpages elaborate on the topics more as we design them. 

This document is only a proposal, and every part of is it up for discussion!

### Important aspects:

- **Meaningful choices.** The game aims to provide meaningful choices to the player, be it about buying or outfitting their ship, navigating the missions and events, and the galaxy. There should be a rich choice of ways to progress and explore, and interesting things to do and problem-solve, without resorting to a handful of well-treaded optimal paths. 
  This applies to missions, equipment, ships, gameplay decisions, stations, systems, etc.
- **Well-polished core gameplay** to provide a stable underlying structure for the player to explore and navigate, and for emergent gameplay opportunities to hang from. 
- **Create your own fun**. Players are not herded towards a handful of hand-defined goals or metrics of success. There are many feasible career paths, and one is free to choose and switch between them, or mix and match. Or they can ignore them, and find other interesting things to do. 
- **[Emergent gameplay](./emergent_gameplay.md)** coming from game systems working together to provide unscripted and unique events. Procedural and semi-procedural generation is an important part of doing this right. 
- **Hand-crafted, varied game world supported and supplemented by procedural generation.** The game world should be built to be interesting from the get-go, even if it is via a relatively small amount of important locations providing the structure that is supplemented by the procedural generation system.
- **Gameplay over simulation.** While Pioneer strives for a high level of realism, it is a game first and foremost. Scientific and engineering aspects should enhance the gameplay, not detract from it. Realism should not be there only for its own sake. 
  But on the other hand, the basis is still in reality, and it is important to find ways to build fun gameplay on this reality before going for the trope or arcade solution. Having human pilots for example would seem quite a bad choice from a scientific/practical sense, but we want to create a game for people, not flight computers, so human pilots are here to stay.

## Gameplay direction

- **[Flying the ship and navigating between systems](./flying_navigation.md)** should be a fun and interesting thing to do, and a skill to master.

  - **Newtonian flight mechanics** is the foundational aspect of the game. Our ships are [torchships](https://projectrho.com/public_html/rocket/torchships.php), so are relatively easy to fly even on long distances, and we do have the UI for it. We also have two-body orbital mechanics, and some rudimentary UI for it.
  - **Full scale solar systems and the realistic direct transfer travel** in them is one of the unique and interesting points of Pioneer. It would benefit from UI-UX improvements, like a proper travel planning interface and some more visual feedback in the flight UI, like showing the orbits of bodies.
  - **Orbital maneuvering gameplay** while mostly happens as a last resort or in corner cases, I think is still an important aspect of the game. It would benefit from some UI and UX improvements, like worldview orbit display when in orbit.
  - **Close Quarters maneuvering,** manual landing on ports and orbitals, manual external docking, navigating tight spots, scooping up cargo and similar things to do. Navigating these local aspects also provides a well-needed slowing of pace, and variety and detail to the core point-and-shoot travel mechanics. And by that, a way to increase potential rewards, while keeping the progression rate nicely balanced. 
    This is one point where we can lean towards the opera notes, and ignore that fact that the power output of our ships are at WMD levels, and instead allow them much more freedom to navigate at and around places. One does not travel to check out airports after all. 
  - **Inter-system travel** already has some nice aspects providing navigation opportunities. There might be room to enhance and fine-tune it further, but the base is nice.

- **[Ship operation gameplay](./ship_operations.md)** Things like power and heat management, handling of maintenance of equipment. Opportunities for those who like to tinker, optimize, but with close ties to the intended emergent nature of the game with situations created by breakdown of ship parts at the worst time possible because of neglect and circumstance.

  Ships should have character, so players can get attached to them as they upgrade and customize it and live through adventures flying it. Buying a ship should be an event long pondered, and a sad farewell to the trusty old craft. Or a sighing relief when one is finally able to step up from that creaking old dinghy that always gives out at the least convenient moments. 

  The possibility to own multiple ships would be nice, and could provide interesting gameplay decisions.

  The aim is to strike a good balance between detail and fun. We don't need to simulate every circuit breaker and screw as some (admittedly very intriguing) upcoming projects do, but on the other hand it is important to provide an interesting level of complexity and meaningful choices.

  **[Ships are differentiated](./ship_differentiation.md)** both by their size and intended role. 

  - **Ships size** dictates how simple to fly and operate a ship. The larger it is, the more complex and leans more toward a managerial/operations gameplay

  - **Ship roles** are a way to differentiate between ships by the manufacturer. Essentially ship structure in terms of equipment and capacities.

- **Problem solving gameplay**. Partially an effect of the above aspects. It is important that the game provides situations and problems the player can solve by using the systems at their disposal, and especially by flying their ship. Where they can make decisions, plan an action, execute it, and scramble to fix things when something inevitably go sideways. This includes situations where one needs to utilize their skills in flying and operating their ship, and situations they need to get out of because they neglected things that should have been done. 

  - **[Trading gameplay](./economy.md)** is a main area of this and could offer lots of emergent gameplays, if it is elaborated upon. 

- **[Non-combat gameplay](./non_combat.md)** It is important to provide rich gameplay opportunities via interesting missions, events, characters and places that enhance and spice up the systemic aspect of the game. Things to be discovered or figured out. (Also see the *problem solving gameplay* point above) Without the need to shoot everything that's moving (and bomb everything that's not).

  - As a subset of this, **faction dependent bureocracy and regulations.** Including police and space-guard activities.

- **[Combat gameplay](./combat.md)** is another very important aspect for a lot of people. Especially close quarters combat, because that's where the thrill is. This is where the above mentioned *fun trumps science* approach comes in in a manner. Combat should feel fun, engaging and plausible within the games context. Even though one could even argue against the futility of having pilots and CQB at all owing to computers having much better reaction time and are more predictable to even forego CQB entirely for 1000+kms of engagement ranges. But we are not computers, but people, and people want experiences and stories involving people, not computers. And people like to shoot things that move and bomb things that are not. 
  Not to mention that combat is one area that provides for very direct and tangible connection to any game.

  In my opinion it is also important that combat shouldn't feel like a trivial thing. Shooting at ships in populated and well patrolled areas should have its consequences for example. But on the other hand system outskirts and especially less populated and/or frontier systems might have very lax security, and much more violent atmosphere. 

- **Ner-do-well gameplay**, where the player can operate outside the law. These can mean non-combat and combat missions that have legal risks involved, such as assassinations, spying, taxiing fugitives, getaway driving, extortion, kidnapping. Piracy, illegal salvage, smuggling are among the more open opportunities. It is important that these have their legal repercussions, so then the player has to work around those. Which also means that there will be less and less legal opportunities for them, so they have to resort to more and more sketchy activities.

  Of course the law and morality can vary a lot in different places, so a simple trade run count as smuggling somewhere else, and an illegal taxi mission could mean extracting some political refugees from a dictatorship or returning some ancient artifacts that were robbed from a system during a war. or smuggling in weapons and supplies for a freedom fighter movement. Not to mention that the player could even be tricked into doing something seemingly legal which then turns out to be illegal in that system. There are quite a few interesting gameplay and story opportunities here.

  This also means that a network of good underground infrastructure will be important. Places to sell illegal goods, hidden pirate and smuggler bases and ports operating in the gray zone. And providers who can alter ship ID and hack into law enforcement databases to clear criminal history. (But the victims could still remember and go after the player)

## Lore and the universe

The aim is to provide an interesting game world, with diverse places to visit, and an interesting place to inhabit. The lore shouldn't go too deep though, but leave enough to the imagination of the players. Another aim is to provide a good framework for TTRPG, without constraining the game master too much.
And we do not try to predict the future in any way. Nor societally, nor technologically. We strive to provide and interesting universe for the people of today. 

- **Superpowers.** There are three superpowers in civilized space. Two of them, SolFed and CIW re in an eternally frozen-over cold war in the core of the human bubble.
  The third one (Tolan could be elevated as a recluse kingdom?) is situated much further from them, essentially on "another continent". 
  Their sphere of influence spans about 300lys across, essentially a weeks worth of travel, encompassing thousands of systems, hundreds of them highly populated.
- **Minor powers.** There are 5 to 9 minor powers, like Haber or Tolan with about 10-25 inhabited systems to their name. 
- **Local polities** are the tertiary level, with 3-10 inhabited systems
- **Independent systems** are truly independent, one-system polities. Rarely developed, and very diverse.

An important aspect of these powers and polities is that they should provide distinct, varied backdrops in terms of regulations and customs. Types of missions available, illegal goods, typical security levels, different flight regulations, etc.

From a **scientific perspective** there are some other important aspects, that both inform gameplay, and fiction:

- As mentioned in the preface, there are no intelligent, sentient alien species anywhere in the galaxy. Nor there were any before. We are truly and utterly alone. (There-s a half-exception to that, the ambiguously sophontic easter-egg Voicedeep, somewhere north of dolphins, but still bellow humans. And they aren't really interested in us anyway)

- No artificial gravity or antigravity. Apart from while under acceleration, or having a spin section, spacers are in freefall.
- There is no ansible-style instantaneous FTL communication. The top speed of information is either C, or the same as the fastest vessel that can carry it through hyperspace. There is a well-developed asynchronous internet of sorts built on an automated hyperspace-drone network, complemented by all ship transponders also carrying large packets of data between systems.
- Scientific progress is glacial, and gives marginal improvements over long stretches of time. All low-hanging fruits are picked, and the ones above require tremendous amounts of effort to get to. (Note, we are not saying that this is how the future will go, but imagining a world where this is the case).
- FTL travel is only vaguely explained, to avoid opening any can of worms about time travel and such. The only function of the Hyperdrive is to allow travel, so the player can go to interesting places, so the less explained, the less of unintended consequences.

## Art direction

- [**Good UI and UX**](./ui_ux.md) are important for the player to be able to enjoy the all the above with as little friction as it is possible. On the other side, the UI and HUD are good places to create visual interest as well. The aim is to create an UI that provides what's needed, easy and fun to use, and looks cool still.

  - **Interactive cockpits** are a very good opportunity to provide a more immersive experience, and to add visual character. On the other hand it is important that the game is playable properly with only the HUD, mouse and keyboard shortcuts.

- **[Graphics](./graphics.md)** should strike a good balance between high visual quality and decent performance on a common family computer as much as humanely possible. Modern PBR based rendering, the decal workflow and screen space effects can also lighten the workload for asset creators.

- **The visual language** of the game aims for believable, but not strictly realistic visuals while providing a distinct and tactile look and feel for the game. Visuals are a bit more subtle than most popular science fiction. The reworked OPLI ships show this approach for example. 

  - **[Ships](./ship_design.md)** have certain sets of visible details with consistent shape language and proportions, that show or allude to the problems of spaceflight. Such as radiators, RCS thrusters, sensors and so on. Most ships also have visible cockpits or control rooms as a concession to gameplay considerations, even if having one would not be practical in real life. 

  - **[Planets](./planets.md)** surfaces are aiming to be procedurally generated and rich in detail up-close. Plausible geographic features and texturing and weather effects such as cloud cover or nice ground scatter objects for example would be very important. But there should be a balance to it, because this topic alone could be a huge project in itself and there's a point of diminishing returns from a gameplay standpoint.

  - [**Cities and orbitals**](./ports.md) are the most important points of interest, and would benefit from some more structured approach to their generation, both from the visual and gameplay standpoint. Cities with roads and districts, parks, maybe even separate passenger and cargo spaceports, ship repair providers and such points of interest the player could interact with.

    **Orbital stations** could also be procedurally or semi-procedurally generated for such roles and gameplay opportunities and could vary in size as well from small outposts to huge O'Neill's Cylinders and Stanford Toruses with a generated landscape.

  - [**Facegen**](./facegen.md) the everlasting sore-point of mine

- **Music** - I think the same kind of tactility would be really nice, as for the visuals. Currently our music is all over the place. **I'm urging somebody who's more knowledgeable in this topic, to elaborate and grow this section**

- **Sound effects, aural character** This is another aspect where a good amount of characteristic, tactile approach would elevate the game significantly. While I have some preferences in this aspect, **I'm also urging people who's more knowledgeable in this topic, to elaborate and grow this section**

## Reasons and motivations behind the project

This design document party exist to provide a backbone for contributors to navigate along with their work.
While the intent is not to tie down the design so much, that contribution becomes a second job, we want to avoid creating a "surprise soup" of half-baked ideas and features.

We see our work on Pioneer as being part of a team with defined goals and direction to produce a singular product. We strive to build a "semi-professional" environment where we can improve our technical and design skills, and our teamwork-fu. The ultimate dream is that Pioneer could be put on a resume in a way a GSoC project would be.

(( TODO )) For contributors who are interested in smaller, more granular projects, we will be having a list of bite sized, more compact features to work on. Which can also serve as good places one can dip their toes for a first contribution.

But for those who are interested in our vision, and being in our team, there are several aspects one can contribute to, such as, in no particular order:

- Graphical programming
- Creative writing
- Tech art
- Game AI programming
- Performance optimization
- Asset design
- 3D and 2D asset creation, modeling, texturing
- Gameplay and mission design and scripting
- Procedural generation
- UI design and scripting

Among others, this is a very important reason **we are not accepting generative AI contributions**. Our aim is not to push out a (questionable quality) final product as fast as possible, while practicing clueless middle-micro-management skills. But to actually learn, practice and hone our craft, while being in good company.

## Additional considerations

- [**Out-of-ship experience**](./out_of_ship.md) comes up from time to time in one form or other, be it a text adventure layer an isometric RPG or even a full blown FPS layer to the game. The text adventure level of this is the most feasible, and could be incorporated with a good messaging and BBS interface. The later two on the other hand would practically mean making another game and fully integrating it with the existing parts. Which would be an enormous amount of work for even a legion of developers both from coding and asset creation sides. Maybe in the future when Pioneer is mature enough to our liking and there's not much else to add and polish, then we might contemplate it, but **we are not planning on taking steps towards it in the foreseeable future.** 

  



