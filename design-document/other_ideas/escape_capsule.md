---
title: Escape Capsule
category: design-docs/other-ideas
---
# Escape capsule
Escape capsules should deploy automatically, or on demand by the player. Depending on the possibility of multiple ship ownership, the abandoned ship might still be retained as player property, and if there is an autopilot or pilot (see [crew](./crew.md)) on board the player could ask it to land.

Some thoughts about escape capsules:

-   If the player ejects, the enemy ships should not in general continue to attack the player, unless they are being attacked as part of a contract killing directed at the player (not a passenger).
-   There should be a small risk that the attacker shows no remorse, and attacks or scoops up the player as slaves (game over).
-   A call for help could result in being scooped up for rescue by a friendly ship (GalCop or otherwise). Player is scooped, then sees the view from the rescue ship as it autopilots to a base. The player cannot interact with or control the rescue ship.

## Escape capsule options

There should be more than one brand of escape capsule available. Here is an outline of some possible options:

-   Basic escape capsule. No autopilot fitted, low thrust.
-   Advanced escape capsule. Autopilot included, high thrust.
-   Explorer class escape capsule. Fitted with a hyperdrive (perhaps class 0 or range-limited somehow) and the amount of fuel required to use it (probably one tonne).
-   Built-in escape capsule. Whatever type it is, you can\'t fit another or remove this one. It\'s an integral component of the ship.

## Insurance policy

**This could be coded in Lua.**

In Elite and Frontier, escape capsules came with an insurance policy. It might be better if these were bought and maintained separately.

Without an insurance policy, the player is left flying an escape capsule around. The player still has access to his money. Depending on the cost of the insurance, the following terms might be applied:-

-   Time. An insurance policy might be valid:
    -   Perpetually
    -   Until compensation is claimed (ie, the pilot ejects and lands)
    -   Until a specified date (one, five or ten years from purchase)
-   Schedule. An insurance policy might replace the escape capsule when the player lands, with the following:
    -   A ship of the type that the player was flying at the time of ejection
    -   A ship of the type that the player was flying when the player bought the policy
    -   A specified ship, regardless of whether the player has ever owned or flown that ship
    -   Optionally, compensation for the value of contents in the hold
    -   Optionally, provision of temporary skeleton crew (see [crew](./crew.md) indenture).

## Escape capsules that don\'t contain the player

A player should be able to scoop up an escape capsule. On scooping, the player should choose whether to keep the occupant captive (becomes 1t slaves, as in Frontier) or to rescue the occupant. A rescued pilot can be delivered to any spaceport, and on landing will thank the player. There is a non-zero chance of compensation or faction reputation change. An additional option is that the rescued party might join the crew, if there is space on board.

### Multiple escape pods

Large ships may have the capacity for numerous escape pods (perhaps of varying types). As the ship gets damaged, crew may elect to eject in pods. Pods of varying types may accept various numbers of crew (including the player) and may take a certain amount of time to launch - this allows fleeing crew to \'double up\'; a pod that is preparing to launch will fill up before crew get into empty pods. It is entirely possible that pods are not left for the player.

### Passengers

Passenger cabins could (or should?) double up as escape capsules. Perhaps onlt the more expensive ones; this might affect a passenger\'s willingness to travel with the player\'s ship, and would certainly affect the player\'s reputation in the event of catastrophe.

## Persistent ships / hulks / wrecks

Ejecting does not destroy the parent ship. Some ships may be towed and reclaimed or redocked with and possibly flown. A ship might contonie to operate after the player ejects, if it has a competent crew.
