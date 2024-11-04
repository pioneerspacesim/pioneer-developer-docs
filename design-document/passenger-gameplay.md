---
title: Passengers
category: design-docs
---

**NOTE** This document is a stub for now, containing a collection of ideas to formulate into a more coherent and implementable idea.

Created from a discussion in #5734 - https://github.com/pioneerspacesim/pioneer/pull/5734#discussion_r1827393063

# **Passengers**

Equip-V2 introduced multiple sizes of passenger cabins, each of which can contain 1 or more berths. Each berth is able to hold a single passenger.

# **Cabins**

For now, just "generic" cabins are available in a variety of sizes.

In future, different types of cabins might become available, for example, luxury or bulk cabins. For now, the generic cabin is assumed to be similar to a cruise-ship cabin; that is, contain basic amenities such as sleeping cots, perhaps a wash stand, etc, for a group of people. The larger ones are probably more akin to a hostel dormitory.

Luxury cabins would have less berths for the same size, bulk cabins more.

## **Passenger Groups**

Missions can ask for passengers to be transported. Currently there is no concept of a "group" of passengers apart from needing sufficient passenger cabin space in your ship for the number of people in the group. Passengers are simply embarked into whichever cabins have free berths.

Each passenger should belong to a "group" (even if they are by themselves). The group might have additional constraints such as "willing to share" or "cannot be split". The following is a non-exhaustive list of such constraints:

- "willing to share" - if set, the group members can be placed into cabins containing other groups, or, if more passengers embark, are willing to share spare berths in their cabins. Possibly such sharing might reduce their price of travel.
- "cannot be split" - if set, all members of the group must be placed in the same cabin. This requires a ship with a large enough cabin-size.
- "minimum cabin level" - the minimum level of luxury this group will travel in.
