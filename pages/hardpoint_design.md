## Weapon Hardpoints

- Weapon hardpoint sizes increment by 2.25x volume (1.3103 uniform scale)
- Weapon damage / power-draw scales by 1.6x per size increment
- Weapons are more power-efficient as the size class goes up
- Different weapon types in the same class can have different DPS, but need to be balanced by heat build-up and power draw
- Potentially sensor emissions? Firing "noisy" weapons make it easier for missiles to track...

## Missile Hardpoints

- Missiles are the primary means of combat beyond the 1-2km gun range. They can be mounted directly on appropriately-tagged hardpoints, or mounted in racks or pods.

- Missiles templates increment volume by 2.6x (1.375 uniform scale) 
- Missile size classes:
	- S0: 1.1m, 90mm diameter; unguided rockets / podded A2G missiles
	- S1: 1.9m, 180mm diameter; short-range guided missiles
	- S2: 2.6m, 250mm diameter; medium-range guided missiles
	- S3: 3.6m, 340mm diameter; long-range smart missiles
	- S4: 5.0m, 470mm diameter; "naval" missiles / torpedoes
	- S5: 6.8m, 640mm diameter; large anti-capital missiles

- Ordnance racks use power-of-two scaling (2/4/8) and start with 2 missiles of size N-1. They have a specific size template that must be clear to be used.

- Ordnance pods are specialty weapons and hardpoints must be designed to work with them. They have a specific tag and size template. They are mostly used to hold odd numbers of rockets or missiles for ground-attack work.

- A hardpoint can be set up to hold a single missile directly in addition to being able to hold an ordnance rack / pod. This requires the hardpoint area conform to the weapon template sizing for an equivalently-sized weapon as well as the ordnance rack template.

- A rack or pod that holds multiple missiles will present a simplified interface to the user, consolidating multiple missiles in the rack into a single entry for the shared type of the missile. Support for multiple types per rack is considered a stretch-goal.

- A missile hardpoint that is tagged as rack compatible may have any ordnance rack mounted onto it of the same size. E.g. a S3 hardpoint may mount a S3 missile, a 2xS2 rack, or a 4xS1 rack.
  - An ordnance hardpoint can contain an "internal" rack, which has special-case code handling for rendering and drag calculations. These racks can only be swapped for other internal racks that the hardpoint explicitly specifies as compatible.
