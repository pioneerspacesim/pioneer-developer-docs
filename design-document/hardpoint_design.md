---
title: Hardpoint System
category: design-docs
---

# Hardpoint-based Equipment System

A major aspect of the gameplay vision for Pioneer is to move away from the mass-limited equipment system, replacing it with a volume-based capacity metric that provides more flexibility when deciding how to outfit your ship. Another aspect is to provide the player with visible feedback about the state of their ship, including rendering visible weapons in the correct locations on the hull.

When considering the physical volume and placement of equipment, it becomes apparent that some equipment is purely internal, with the assumption that it can be mounted anywhere; other equipment (like ­hyperdrives and shield generators) generally must be mounted in specific areas[^1] and have a 'slot limit' on how many can be installed; and some equipment (weapons, sensors, and scoops) need to be mounted on the exterior of the craft to function.

To manage this distinction, we plan to use a **hardpoint-based model** for external equipment.

Hardpoints are defined by the ship designer and associated with a physical point on the craft's exterior, with an associated type[^2] that controls what items can be mounted in that hardpoint. To simplify authoring of content and ensure item compatibility between ships without clipping, hardpoints are grouped into specific size classes which define spatial constraints on both the ship model and the equipment item model.

All equipment consumes some amount of internal capacity (for mounting, power couplings, ammunition storage / fuel processing, etc.) but items that mount in hardpoints consume drastically less due to most of their volume being outside the craft, or being stored in a dedicated space inside the hull.

In the future, we plan to add some additional properties to hardpoints controlling things like power draw, data bandwidth (for targeting or sensors), and heat dissipation. These properties will provide more levers for tweaking ship balance and allow each ship type to fit a specific gameplay role.

Slot-based internal equipment uses a slightly more relaxed model; slot groups are defined by a size and count, but the details of which individual slot contains the item are abstracted away internally by the equipment system. Internally-mounted equipment items allocate their volume from a common internal capacity pool, and an empty slot consumes no volume.

Finally, certain equipment items may be "slot-less"; they could be mounted anywhere in the ship provided there is enough equipment capacity to hold them. Cargo bays are the primary example; it may be possible to convert a ship's equipment space directly into cargo space by installing the requisite number of cargo bays.[^3]

[^1]: Specific primary equipment items that participate in physicalized damage must be represented by colliders authored in the ship model. These colliders are associated with a specific slot identifier (e.g. hyperdrive-1 or shield-3).

[^2]: Hardpoints may allow more than one type of item to be mounted, though no more than a single item can be mounted at a time. Additionally, hardpoints designated this way must meet the size and clearance constraints of all item types it supports.

[^3]: This is still under discussion; another proposed solution is to have a "ship refitting" process that converts equipment capacity into cargo space, or to define ships with a fixed number of cargo bays that have additional equipment mounted in them.

## Weapon Hardpoints

Weapons here refer to fixed or gimballed mounts for gun-style weapons (e.g. lasers, ballistics, etc.); missiles are handled separately, and turrets are handled via a separate hardpoint type.

Weapons are best used for combat within 1-5km, depending on projectile velocity and target aspect ratio.[^4]

- Weapon hardpoint sizes increment by 2.25x volume (1.3103 uniform scale)
- Weapon damage / power-draw scales by 1.6x per size increment
- Weapons are slightly more power-efficient as the size class goes up (e.g. 1x S3 weapon draws ~2.4x the power of an S1 instead of 2.56x)
- Different weapon types in the same class can have different DPS, but need to be balanced by heat build-up and power draw
- Potentially sensor emissions? Firing "noisy" weapons make it easier for missiles to track...

[^4]: Target aspect ratio is a categorization of target's velocity relative to the attacker; targets that are approaching are said to be "hot", targets moving perpendicular to the attacker's velocity are "beaming", and targets flying away from the attacker are "cold".

## Missile Hardpoints

Missiles are the primary means of combat beyond the 1-2km gun range. They can be mounted directly on appropriately-tagged hardpoints, or mounted in racks or pods.

A hardpoint can specify that it is able to mount a missile, an ordnance rack, an ordnance pod, or any combination of the above. Ordnance racks and pods occupy the primary hardpoint, and provide a 'slot group' that can mount missiles of a specific size. Support for mixing different types of missiles in the same rack is an optional feature and most likely will not be targeted initially.

- Missiles templates increment volume by 2.6x (1.375 uniform scale) 
- Missile size classes:
	- S0: 1.1m, 90mm diameter; unguided rockets / podded A2G missiles
	- S1: 1.9m, 180mm diameter; short-range guided missiles
	- S2: 2.6m, 250mm diameter; medium-range guided missiles
	- S3: 3.6m, 340mm diameter; long-range smart missiles
	- S4: 5.0m, 470mm diameter; "naval" missiles / torpedoes
	- S5: 6.8m, 640mm diameter; large anti-capital missiles

- Ordnance racks use power-of-two scaling (2/4/8) and start with 2 missiles of size N-1. They have a specific size template that should be used if a hardpoint is tagged as capable of holding a rack.

- Ordnance pods are specialty weapons and hardpoints must be designed to work with them. They have a specific tag and size template. They are mostly used to hold odd numbers of rockets or missiles for ground-attack work.

- A hardpoint can be set up to hold a single missile directly in addition to being able to hold an ordnance rack / pod. This requires the hardpoint area conform to the weapon template sizing for an equivalently-sized weapon as well as the ordnance rack template.

- A hardpoint can be designated as an "internal rack mount", allowing only the explicitly specified racks to be mounted on it. An internal rack mount has special-case code handling for rendering and other calculations (e.g. atmospheric drag.)

- A rack or pod that holds multiple missiles will present a simplified interface to the user, consolidating multiple missiles in the rack into a single entry for the shared type of the missile.

- A missile hardpoint that is tagged as rack compatible may have any ordnance rack mounted onto it of the same size. E.g. a S3 hardpoint may mount a S3 missile, a 2xS2 rack, or a 4xS1 rack.



