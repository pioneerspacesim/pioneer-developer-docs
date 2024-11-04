---
title: Passengers
category: design-docs
---

**NOTE** This document is a stub for now, containing a collection of ideas to formulate into a more coherent and implementable idea.

Created from a discussion in #5734 - https://github.com/pioneerspacesim/pioneer/pull/5734#discussion_r1827393063

# **Passengers**

Equip-V2 introduced multiple sizes of passenger cabins, each of which can contain 1 or more berths. Each berth is able to hold a single passenger.

## **Cabins**

For now, just "generic" cabins are available in a variety of sizes.

In future, different types of cabins might become available, for example, luxury or bulk cabins. For now, the generic cabin is assumed to be similar to a cruise-ship cabin; that is, contain basic amenities such as sleeping cots, perhaps a wash stand, etc, for a group of people. The larger ones are probably more akin to a hostel dormitory.

Luxury cabins would have less berths for the same size, bulk cabins more.

### **Selling occupied cabins**

Selling an occupied cabin should not be allowed; the player needs to complete the mission first, or find alternative means to encourage a (group of) passenger(s) from vacating a cabin.

## **Passenger Groups**

Missions can ask for passengers to be transported. Currently there is no concept of a "group" of passengers apart from needing sufficient passenger cabin space in your ship for the number of people in the group. Passengers are simply embarked into whichever cabins have free berths.

Each passenger should belong to a "group" (even if they are by themselves). The group might have additional constraints such as "willing to share" or "cannot be split". The following is a non-exhaustive list of such constraints:

- "willing to share" - if set, the group members can be placed into cabins containing other groups, or, if more passengers embark, are willing to share spare berths in their cabins. Possibly such sharing might reduce their price of travel.
- "cannot be split" - if set, all members of the group must be placed in the same cabin. This requires a ship with a large enough cabin-size.
- "minimum cabin level" - the minimum level of luxury this group will travel in.

## **Passenger Management**

### **Moving passengers between Cabins**
There should be a passenger management interface (TODO: mockups; @Szlrd?) which can be used to move passengers between cabins (possibly at a cost - nobody likes to be moved unless its an upgrade).

Should be able to move passengers or passenger groups from one cabin to another, possibly in order to free up space in a cabin for a new group to be able to board.

### **Getting rid of passengers**

The standard way is to complete a mission - dock at the target station, and the passenger(s) will disembark.

Alternatively, in a firefight, a cabin might get damaged, killing the passengers. Or passengers may decide it's too dangerous and eject ((some)cabins double as escape pods?) from the ship.

Not completing a passenger mission should have a significant reputation penalty. Perhaps scaled on whether it was solely due to the players' action or mitigating circumstances (ie, carrying a political fugitive raises the risk of combat with system police, so it's not entirely unexpected to end up in a fight - so if the fugitive is killed or taken back into custody, the reputation damage should be less than if another passenger was killed)

Additional ideas:
* Sell passengers as Slaves on the black market. Should have a high risk of being caught (other passengers or crew might report you) with huge fines and reputational damage.
* Eject passenger cabins (if they double as Escape Pods) while in-flight.
* Force passengers to get off the ship at a port other than the destination. If a passenger is forced off, probably the entire group which the passenger belongs to would also disembark.

