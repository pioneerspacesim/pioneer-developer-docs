---
title: Ship Roles
category: design-docs
---

# Ship sizes and roles

## Main ship characteristics

I mention some characteristics bellow that would be nice to have in my opinion:

- **Ease of flight** - maneuverability and acceleration in general. How much margin of error there is with the given ship. How fun it is to fly it.

- **Operational and maintenance complexity** - how hard it is to operate the ship: how much attention the pilot needs to pay to power and heat balancing, turning on and off equipment as needed? How easy it is to maintain parts and equipment? How easy it is to find crew and mechanics that can do a decent job of that? How widely compatible equipment and parts available? How easy it is to externally dock the ship? How conveniently the cargo hold and equipment spaces are laid out? (governing maintenance, repair and load times). Generally simpler craft are cheaper.

  Naturally a ship with more equipment will be more complex in this sense. There could be added complexities for large ships, like the need to have and upgrade several heat management and power bus parts as the number of equipment rises. (A bus could have a number of slots for example). This also means a game of decisions and balance.

- **Robustness** shows how long the ship (and equipment) can go without maintenance, and how fault tolerant they are. Generally the more robust a ship or equipment is, the more expensive.

- These directly tie into the ship operation gameplay, and would need an ECS system as a basis.

## Ship size

Ships size dictates how simple to fly and operate a ship. The larger it is, the more complex and leans more toward a managerial/operations gameplay

- **Small ships** are more simple to fly, operate and maintain. They are allowed to fly to almost anywhere including residental areas. Intended for players interested in the flying, maneuvering aspects of the game. A bit like a motorcycle or a private car or a small motorboat. (Kanara, Sinonatrix, Natrix, Mola Mola, Bluenose, Deneb)
- **Medium ships** are a bit more complex to operate and maintain, but would provide more and more diverse opportunities at the cost of a bit harder piloting experience, and some restrictions to them. They strike a balance between providing a fun flying experience, but offering some of the managerial/operations parts of the game as well. Akin to trucks, semis and buses. (Mola Ramsayi, Storeria, Nerodia, Venturestar)
- **Large ships** are really complex to operate, and to fly, and there are stricter restrictions to where they can fly legally (only to ports on the edges of cities, or even only to orbitals) and most of them are tail-sitters or space-only. They primarily provide operations/managerial types of gameplay like trading, expeditions and similar complex operations. Some of them could even have small sub-crafts for certain tasks and flexibility. Akin to commercial aircrafts, trains and commercial ships. 
- **Huge ships** are the largest ships around, with severe restrictions to where they can go or not stemming both from the legalities to their capabilities. They can never land on planets, and would moor next to but the largest orbital stations. They always have small (or even medium sized) subcrafts, and lean heavily into a managerial/operations/ gameplay. Akin to bulk and contain freighter ships. (the wip Longnose) A ship like this could even act like a home base for the player, with an upkeep.

## Ship roles

These are the intended useage areas by the manufacturer.  Defines hardpoint availability, default equipment sizes and performace, and thus price as well. To an extent ships can be converted between roles, but they will never be as efficient as a purpose-built ship.

- **Shuttles** are the cheapest, simplest ships around. Intended for short to medium range flights while being easy to maintain and operate, and generally robust. They come both in passenger and cargo configurations.

  - Volume ratios lean towards high cargo/passenger capacity, low equipment and fuel capacity
  - Acceleration and maneuverability is generally mediocre. Hulls are built for low acceleration too, so there's not much room fur engine upgrades. (0.5-1.5g)
  - Fuel efficiency is relatively low, meaning a cheaper, simpler engine.
  - DeltaV is low (1000 km/s-ish)
  - Some atmo/high-g capable, some are or not, regardless of size class. Non-atmo ones tend to be even cheaper.
  - The border between shuttles and long-range freighters/transport can be blurry at times.

- **Freighters** are meant for mid-to-long-haul cargo flights, with low to medium operation complexity and mediocre  robustness. They usually have a handful of passenger cabins built in, and some room the extend that. 

  - Volume ratios emphasize cargo capacity and fuel, with less room for equipment
  - Acceleration and maneuverability is generally mediocre. Hulls can handle better accelerations than a shuttle though, so there's room for upgrades. (1-2g)
  - Fuel efficiency ismediocre, meaning better flight times, but with the added increase in maintenance needs.
  - DeltaV is usually mediocre at about 1500-2000 km/s
  - Small to medium ones tend to be atmo-high-g capable, but above that's more varied. Larger ones are rarely high-g capable.

  There is a special kind of freighter, the bulk ship or tanker. These have better cargo capacities than a general freighter, but they can only haul specific cargos, mostly raw materials, gases, fluids and such. An important limitation is that each hold or tank can only store one kind of comodity.

- **Passenger transports** are designed to move people mid-to-long distances. They are similar to freighters in terms of maintenance need and operation complexity and robustness.

  - Volume ratios lean towards passenger cabin space, with some room for cargo. Fuel capacity is usually a bit above what a freighter would have, which means better deltaV.
  - Acceleration is usually at the lower end of mediocre, but maneuverability tends to be better. Hulls can handle some larger accelerations. (1-2g)
  - Fuel efficiency and deltaV capacity is at the top end of mediocre (around 2000 km/s)
  - There are some that are atmo/high-g capable, but some ar space-only. The field is somewhat varied. Larger ones can be atmo capable as well.

- **Couriers** main point is carrying messages, data and small amounts of cargo from one place to another as fast as possible. They are expensive for their sizes, and while easy to operate, while they tend to be needy in terms of maintenance due to the high-performance engines and reactors. This also means they are usually less robust.

  - Volume ratio emphasizes fuel capacity, with some room for cargo and passengers.
  - Acceleration and maneuverability is high. (3-4g)
  - Fuel efficiency is also high, deltaV tends to be above 3000 km/s
  - Most are atmo-high-g capable, and they are rarely bigger than medium size.
  - They emphasize evasion and avoidance in terms of combat, and for this reason they can excell at scout and spotting roles as well.

- **Combat ships**, as says on the tin, are built for the pew-pew. Emphasis is on weapons, defenses and maneuverability, while they are usually more complex to operate and needy in terms of maintenance, and their robustness can vary. This description is a gross generalization and mostly about a more versatile combat oriented craft available for the civilian buyers such as private militias and security firms. Combat ships and their intended roles are a whole world in itself with combat freighters, dropships, resupply craft fighters and assault ships, bombers, interceptors, patrol cruisers, pirate raiders, and so on. 

  - Volume ratios lean towards equipment space, mainly weapons and shield hardpoints and ammo storage. 
  - Acceleration and maneuverability is very good, with room for further upgrades in terms of hull tolerances.
  - Fuel efficiency is usually mediocre at most, around 1500-2500 km/s, but can be extended with drop tanks
  - Most are atmo and high-g capable.
  - They are generally available in every size class, but small and medium are the most common.
  - Their defense capabilities and armor are good.

- **Scouts and Exporers** are designed for long independent trips. While their operatin might be complex, they are robust, easy to maintain and repair even in the field. They usually have high levels fo redundancy since they are flying far from civilizations, so there's less margin for error and hope for a rescue.

  In the smaller side of the spectrum the term scout applies more: Since they are intended to be brought along by larger exploration crafts, they don't emphasize range and endurance as much as their larger sisters, but the other aspects are generally true. They are generally versatile multi-role crafts. They tend to be designed to support a specific large explorer craft, which means their maintenance and repair can be easily done in the workshops of those ships.

  These ships can be quite nice for the player because of their robustness and versatility.

  - Volume ration tends to be well balanced, and easily configurable, but with some emphasis on equipment space due to redundancy.
  - Acceleration and maneuverability tend to be good, and tolerances are wide.
  - Fuel efficiency is generally high, but the engines are usually configurable between efficiency and thrust to an extent.
  - They are generally atmo and high-g capable, with ample tolerances.
  - They are usually small to medium sized, but there are some on the lower and of large as well.
  - They are expensive as hell.

  The large explorer crafts usually have a wide range of facilities for maintenance and even spare part manufacturing, and even ISRU to some extent. They have the capacity to berth at least one or two, possibly even more smaller crafts, usually scouts and some utility vessels.

  - Volume ratio usually heavily emphasizes fuel capacity, with a good balance of cargo, equipment  and personell space. 
  - Acceleration and maneuverability can be high for their sizes, with the associated high tolerances.
  - Fuel efficiency is relatively good, but engine reliability is more important, so fuel amount is a large factor of the high deltaV capacity. (5-10000 km/s) 
  - They are generally high-g and atmo capable, but would only land when really needed, and relegate planet-side tasks to scouts. But on the other hand most of them could easily act as a planetary research outpost.
  - They are *expensive*, like colony GPD level expensive. On the other hand they can be quite self-reliant, so upkeep isn't that horroristic as one might assume (apart from the salaries that is. 

- Ther are **multi-role ships** available as well. They are intended for general use, and can be upgraded to act like any or some of these roles. They can perform in these roles decently, but they'd always lag behind specialized ships. On the other hand, they are easy to reconfigure as needed. Which means vaired operational compexity, robustness and ease of flight.

  Some manufacturers even build specialized and general versions of a ship based on the same hull and base parts. There could be a shuttle type Sinonatrix for example, that has quite less fuel and a weaker, simpler engine.

- **Other roles** there could also be some other roles I did not think of. So if there's any suggestion, don't hesitate to add them to the design doc.

- **Narrowly specialist ships** are designed for one or more very specifik task, such as maintenance flitters, fuel scoopers, hyperspace tugs, mining and salvage craft, ambulance for example. Their stats and specifics are optimized for that task only, there's very little room for equipment, and they have a very narrow use-case because of that. 

  I think they could still be available to the player, even if there's no real gameplay associated with them. They could be a "nice" last resort when the player lost their ship, and need something fast, but the only available one is a cargo scooper. That shady-looking mechanic could jury-rig a hyperdrive and some longer-term life support and cabin onto it, to allow for some leeway. My reasoning is that then the player would need to work around severe and several limitations, and will be quite happy when they finally scrape together enough money to ditch that sad excuse of a ship. The hard start could give the player one such narrow use-case dhingy even.

  These could also increase beliveability as well, since the player may see tham flying around, or docked to a station, or even on the used ship market. 