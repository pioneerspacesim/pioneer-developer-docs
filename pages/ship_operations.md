## Ship systems and operations

**Ship systems** - an important part of emergent gameplay is a granular enough ship systems simulation. This could include equipment damage, wear and tear, quality, efficiency, heat and energy management. A lot of people enjoy this operational aspect of a space game, and we could lean into it with equipments generated RPG style from a pool of points, possibly even procedurally. Another important aspect is ship differentiation by roles and intentions (and the possible misuse of ships due to what's being available) *Certainly a large project with tentacles in about every aspect and other porject*

Sturnclaw already started working/thinking on an Entity Component System, which will be key infrastructure for this.

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

**Ships**

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