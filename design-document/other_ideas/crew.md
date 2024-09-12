---
title: Crew ideas
category: design-docs/other-ideas
---
# Crew ideas

All ships require crew. Many ships only require a crew of one, and the player fills this role. Some ships, including larger ships, require (or will require) additional crew members.

### Number of crew
In Frontier, a ship required a specific number of crew. You couldn\'t take off with fewer than this number, and couldn\'t take on more than this number. This made it difficult to buy a ship that required significantly more crew than were readily available.

There should be a minimum number of crew specified for each ship (a \"skeleton crew\"), and a full complement. For a small fighter, both numbers will be one. For a heavy fighter, they might be one and two, respectively. For a very heavy freighter, it might be five and twelve.

### WIP / To be implemented

The following is not yet implemented in the game, and just discussion for possible direction of development

**Indenture**

Not all crew might be on a permanent contract. It would be wise for the player to make sure that at least the minimum number of crew necessary for flight are permanent. Temporary contracts could be yearly, five yearly, by the decade, etc. The player would have all the necessary information from the BBS interview. It might be possible to negotiate a renewal.

**Penalties for having a skeleton crew**

If the number of crew members is equal to or greater than the minimum, but less than the full complement, then there should be penalties on play. These penalties might depend on the ship, and might be specified in the ship\'s model by use of a bitmask (or a series of boolean options, if it\'s to be manageable by a human). They might include:

-   A longer hyperspace count-down.
-   Inability to use weapons, or arm missiles
-   Reduced thrust
-   No option to land on planetary surface spaceports using autopilot (the rationale being that this large ship requires the extra crew to make the ship capable of doing this) limiting the ship to orbital spaceports

**Having more crew than the complement**

The player should be able to retain a greater number of crew than the ship\'s full complement. There being no additional spaces in crew quarters, these additional crew would require provision of passenger cabins.

-   These additional crew still draw a wage
-   Temporary contracts are not \"paused\" - they have an absolute expiry date
-   The player would hire them in advance of purchasing a ship with larger crew requirements, or just before the termination of a temporary contract.

### Crew skills

Crew in Frontier had different wages, but all performed exactly as well as each other. In Pioneer, they should have additional skills, or qualifications, which can form a justification for the additional cost. The crew wouldn\'t develop over time; we\'re not talking The Sims here.

-   A crew member with a pilot qualification can fly the ship. This means that the player has the advantage of an autopilot even if one is not fitted. A key feature is that reaching and giving orders to crew must be as easy, and not hidden behind many menues. So if you have a navigator, pressing autopilot should work, but maybe the icon and text is just replaced, to not say \"autopilot\".
-   A crew member with a navigation qualification can do the maths of Hyperspace with greater precision, adding a small margin (perhaps five to ten percent) to the speed and range of the hyperdrive.
-   A crew member with an engineering qualification might be able to:
    -   Repair damaged upgrades,
    -   Get better thrust from the regular engines.
    -   Push engines to above 100%, useful when hunting down a ship
    -   Slowly repair engines after having been pushed too hard
-   A crew with a repair/engineering qualification might be able to repair the hull of the ship.
    -   This might be limited to repairing the ship whilst it is landed.
    -   This might require that the hold contain some suitable wares as repair materials.
    -   It might be a player-chosen alternative to the Hull Auto-Repair System.
    -   Maybe one system could be dismantled / sacrificed for repairing another.
-   A crew member with a weapons qualification might be able to make automatic use of a turret for defence of the ship.
-   Could there be any use for \"Science officer\", or \"Medic\"?

