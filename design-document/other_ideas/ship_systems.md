---
title: Ship Systems
category: design-docs/other-ideas
---
# Ship Systems
## Design goals

-   add more variety beyond \"ships have hit points and sometimes also shield points\"
-   do not complicate game controls any further
-   in general, find a nice balance between complexity and simplicity

## Overview

Systems refer to built-in core systems every ship has. They may not be added or removed, although they may be affected by modifiers from ship upgrades or crew bonuses.

Every system can be temporarily damaged, which may lead to the loss off the related functionality until the system has been repaired. A system cannot be permanently destroyed.

Repairing a system does not require input from the player and should be somewhat fast (generally measured in seconds rather than minutes), which allows for harsher and more varied status effects.

## Power

Todo: ask Brian for a simple design

A reactor produces power, which other systems draw to function.

A ship has a power budget. Power is sourced, and used. All power used must be expelled, or will become heat. Here's how that might happen:

A ship provides a given amount of power, measured in Watts. That power source is continually available, and of undetermined origin and nature (solar, nuclear, fairies, hand waves, etc). This power source can be supplemented by additional power sources. Any item of equipment could potentially be a power source.

All equipment requires a certain amount of continual power. If the combined power requirement of all equipment is not met, the most recently powered up items will not function.

All equipment produces waste heat, proportional to its power, and also measured in Watts. A power sink is required to remove this heat. Additional sinks are required to deal with additional powered equipment. Sinks can dispose of heat, or store it, as gameplay, balance and so forth require. Sinks can also dispose of heat introduced externally, through re-entry, solar proximity, combat, etc.

If there are not enough sinks, then hull and/or cabin temperature rises. If there are more than enough, then the temperature falls.

Equipment can be powered down into a standby mode, reducing power requirements and heat production.

Equipment can be powered off, zeroing power requirements and heat production.

Powering up from standby can be done in flight. Powering up from off can only be done whilst docked.

So, each item of equipment has a set of values:

- Power supply (powered on) (Watts)
- Power supply (standby) (Watts)
- Power requirement (powered on) (Watts)
- Power requirement (powered off) (Watts)
- Power dissipation (powered on) (Watts)
- Power dissipation (powered off) (Watts)
- Heat storage (Joules)
and the rest falls into place. Additionally, the ship has:
- Power supply (Watts)
- Power dissipation (Watts)
- Heat storage (Joules)

Exceed that heat storage, take damage. Effectively, that's your hull/cabin temp.

A docked ship should have as much power as it needs, as long as it is docked. It should also have as much dissipation as it needs.

A landed ship should perhaps have extra dissipation available, proportional to atmospheric pressure. 

### Charge

Instead of using power at a constant rate, a system may charge, and then store the energy. A fully charged system does not draw any power until it needs to be recharged. Relevant to: energy weapons, hyperdrive, shield.

Q: Should power be a known limiting factor when outfitting your ship?

## Heat

Heat can be produced by the reactor, firing weapons and environmental factors. Possibly enemy fire, too. Too much heat leads to death.

Heat is reduced at a constant rate by the cooling system. The effectiveness can be increased by installing additional heat sinks.

Heat is presented as one general heat meter, with the exception of rapid-fire weapons which have their own additional heat meters to limit their effectiveness.

Todo: ask Brian for a simple design

Q: Should heat be a known limiting factor when outfitting your ship?

Q: Should heat affect how \"stealthy\" the ship is? Like in Elite Dangerous, once can adjust how much heat is vented out (or continously produced) by making the ship invisible on scanners.

Q: (nozmajner) Should it be treated as effectiveness stat for each equiment? Like they pick up a certain amount of charge, and convert a given percent of it to heat. And there could be parts with different effectiveness available to fit. (This could even be procedurally generated?)

## Repairs

The number of systems that can be repaired at a time is 1 + number of crew members (Q: only skilled crewmembers?)

A system has an internal health value (0-100), however for the player this may be presented with three status levels: green, yellow and red. Green is okay, yellow is functional but in need of repairs, red is disabled and in need of repairs.

Q: Does a yellow status change the power/heat contribution?

Q: should repairs start as soon as the internal health is reduced, or should it wait until yellow threshold is reduced? With latter, the initial damage is practically an increasing change of being damaged.

## Core systems

Reactor: all systems draw power from this. Presumably well protected by hull. Ships are understood to have an auxiliary power source (batteries etc). for emergency power (which is not simulated in any way).

Sensors: provides targeting information. Damaged sensors may lead to:

-   loss of radar/scanner
-   loss of labels etc. targeting info
-   complete loss of visuals (pretty harsh)

Thrusters: propulsion. Damage may lead to complete loss of input, which is probably the most distrupting damage effect there is (and thus should be quick to repair).

Cooling system: if damaged, risk of overheating is severe.

Hyperdrive: damage will lead to incapacity to jump.

Weapons: fire control system. Cannot fire anything without this.

### Other systems

These parts may be logically systemized but that is more of a code organizational thing.

-   Fuel tank
-   Landing gear
-   Cargo bay

## UI

The game HUD is not to be overloaded with information, but status for damaged systems can be shown (overall prefer hiding and showing information as needed).

A detailed full-screen info view is available. (\"Systems\" or \"Engineering\", note: avoid confusion with existing \"System Info\" view\...)

Q: From the engineering screen, should it be allowed to toggle a system on/off, with the appropriate heat/power effect? If so, it must not be required to enjoy the game.

Q: Similarly, from the engineering screen, should it be allowed to reprioritize repairs? Same requirement as above.

## Locational damage {#locational_damage}

This is to be kept to a minimum, since defining system locations on every ship is not going to happen.

Option 1: Damage distributed randomly on hit (\"random\" can include per system probabilities).

Option 2: Damage distributed based on the direction or overall area of the ship (shot in the butt would be always more likely to damage propulsion, or something like that). Front/Rear directional damage might be simple enough to work, it would reward positioning yourself behind an opponent (presumably challenging since they are trying to face and shoot you). \"Space backstab\".

Note (by nozmajner):It\'s not that hard to put in some simple, properly named collision geometry for part damage. Like: 
![image](https://user-images.githubusercontent.com/4182678/210225076-93818996-163a-41e8-89e9-cc653386ffcb.png)
But even more simpler. Say an hour per ship or so I think, but that\'s a conservative guess.

## Shields

Todo: move this to a more general combat design page, or make this page concern those mechanics too.

A ship can have at maximum one shield.

Q: are shields the reason energy weapon damage is greatly reduced with distance?

Q: can a shield mechanic be implemented completely without \"hit points\" (e.g. does it always have to be just additional health bar that needs to be chipped away first)?

A shot either goes through or not OR damage is reduced OR damage is spread across hull and systems

Q: (nozmajner) How about that the shield absorbs a percentage of damage and/or disperses it to larger area? The percentage could be depending on the angle of the hit vs the shield surface: the shallower the weaker, more dispersed. But since the shield is larger then the ship itself, a shot that would barely miss the hull could still hit the shield and do some damage, so it\'s a bit of a tradeoff of bigger target/less damage. This could be also a justification for the more form following shield meshes we have. A spherical one could provide a much larger target.

Q: (nozmajner) How about that the shield isn\'t a second health bar, but it would give out a lot of heat when hit, to the point of overloading the heatsink of the ship with all of the consequences of it. The player might be able to set a threshold of heat capacity when the shield would be shut down to avoid heat damage. The shield generator could have a health bar for itself, depleting with each hit if the heat is too high already, and when that bar depletes, then bye-bye shield generator, enjoy your charred piece of dead weight and an expensive job of removing it before fitting a new one (no easy jettisoning). Increased heat load could also decrease it\'s effectiveness, so it would let trough more and more damage.

### Basic shield types

Combat shield: good against energy weapons.

Environmental shield: good against all environmental effects (replaces atmospheric shield)

Mining shield: good against all collisions, perhaps missiles as well.

Q: (nozmajner) Are they combinable? Or they interfere with each other?

## Ideas to be explored

Idea from Brian: incapacitated crew. How does this work?
