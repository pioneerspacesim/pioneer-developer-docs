## **Trade**

Another feature which is assumed as a given. In my opinion it would benefit from some elaboration and a more systemic approach. (I'm not well versed in this aspect, never really was that interesting to me)

- Cost/benefit and upkeep should play a more important role. Even if only for the player to start up a relatively simple spreadsheet of costs and incomes. Trade is about spreadsheets after all :P
- Provide abilities for the player to find good trade opportunities. Like calls for material for an industrial site under construction (which later could become a small port even). Or the ability to buy tips and hints on market conditions and possible upcoming events that have effect on a certain market (kinda like the news event module we have)
- On a larger scale (and larger ships) it would be nice to have a more managerial/overview approach. Like one then would plan around loading schedules, and would need to balance and arrange cargo even (to allow for faster selling if one flies to multiple places). For very large ships, one could use and command shuttle craft to gather up or deliver the goods to the ports even.
- Opportunities of trade in-flight. Like an NPC could hail the player and offer a deal, and then you'd dock with them to effect that deal.
- Previous delivery mission givers could provide some discounts on certain stuff. Reputation in a system could also affect prices a bit, so it would be beneficial to build up local reputation.



#### Strunclaw-s station economy outline:

- Split stock and demand
  - low stock = high buy price, high demand = high sell price
- economic factors: each “economy” is weighted according to the body parameters to determine the goods production of the parent body
- stations have only one economy type (they’re small), but inherit a portion of the goods production (and consumption) from their parent planet if inhabited
  - station economy type could be driven from the greatest economic deficit / surplus of the parent planet
- needs some “fixup” handling, e.g. inhabited airless moon has minimal water and agriculture production, demand scales with population, etc
- six(?) main economy types: agricultural, extraction, refining, industrial, high tech, tourism
- need to define procgen parameters which weight each good
- system gen needs to handle goods flow from neighboring planets in abstract way
- goods flow from other systems can be combination of distance from bubble and nearby faction voronoi cells
- TODO: faction diaspora spread by picking points and assigning systems via 3d voronoi