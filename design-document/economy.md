---
title: Economy and Trade
category: design-docs
---

# **Economy and Trade**

Another feature which is assumed as a given. In my opinion it would benefit from some elaboration and a more systemic approach. (I'm not well versed in this aspect, never really was that interesting to me)

- Cost/benefit and upkeep should play a more important role. Even if only for the player to start up a relatively simple spreadsheet of costs and incomes. Trade is about spreadsheets after all :P
- Provide abilities for the player to find good trade opportunities. Like calls for material for an industrial site under construction (which later could become a small port even). Or the ability to buy tips and hints on market conditions and possible upcoming events that have effect on a certain market (kinda like the news event module we have)
- On a larger scale (and larger ships) it would be nice to have a more managerial/overview approach. Like one then would plan around loading schedules, and would need to balance and arrange cargo even (to allow for faster selling if one flies to multiple places). For very large ships, one could use and command shuttle craft to gather up or deliver the goods to the ports even.
- Opportunities of trade in-flight. Like an NPC could hail the player and offer a deal, and then you'd dock with them to effect that deal.
- Previous delivery mission givers could provide some discounts on certain stuff. Reputation in a system could also affect prices a bit, so it would be beneficial to build up local reputation.

- Many goods are traded, ranging from simple H2O (water), all the way up to farming equipment. In order to keep exchanges simple, a standard unit is used for trading; the metric ton. There are a total of 31 commodities<badge type="warning">Is this still accurate?</badge> used on the standard stock market, encompassing all major aspects of life.


## What affects a market, and how?

This section aims at basically brainstorming all ideas for how markets and their commodities should be affected for the future new market system in pioneer. The prices will fluctuate in time with prices going down if a good becomes abundant, and becoming expensive if in demand. This will be modeled through a set of coupled ordinary differential equations (if there isn't some cheaper way to do it?).

* Every planet / station? produces and consumes goods, proportional to population, and other factors, like listed here below. 

* Production and consumption rates depend on what kind of planet/station, population size, what other goods are available, etc. E.g if there is a shortage of grain, then price of grapes and other food goes up. 

* Price is relative to the amount offered for sale 

* This price drives AI/NPC to trade, taking goods from where it is cheap (abundant) to where it is in need. -> model through stochastic differential equations? 

* Goods are consumed when producing other stuff? 

* Is production seasonal? The trade between northern and southern hemisphere (if axis tilted), seems to not at all be worth it, and break space travel. 

* Government? Will communist government lead to flat prices, due to planned economy? Or will they fluctuate more due to not being in sync with true demand? what effect will the different systems have? 

  * **Democracy** 
  * **Corporate** 
  * **Dictatorship** 
  * **Anarchy**   

* Only trade with closest neighbors. Could be done like so: expand a sphere out from the system until with radius r_min, and if found inhabited systems are below some value (10?) keep expanding sphere until r_max. This generates a list of closest neighbors for all systems. 

* On the star map, one can see which systems a market is trading with? Why would this be useful? It would be all within some distance. 

* In the market (if player subscribes?) we show for the selected commodity its price over the past months? Zoom in/ out from 1 to 3 months? Show system index average, "galaxy index" (based on nearby systems or all systems in the game?). 

* How will the dynamics from the market lead to ships with those actual items coming in? Somehow c++ engine must tell TradeShip.lua how many shipped units of each item is being sold / bought / shipped? 

* If I kill off trade ships carrying something, then I should be able to create a shortage of some goods. Mission: Drive up price of grain: attack all grain carrying ships? 

* Will a system like Mu Herculis, with very far between jump point and station, have much higher prices for everything, making the long transit worth while 

* Faction specific: Distance to faction home world? Trading over faction borders? 

* Tech level?

## Useful Links

This page tries to collect what we want, and where we want to go with the next version of economy system in pioneer. An ideal case would be to have a dynamical economy. Perhaps a smaller version of the [Star Citizen Economy](https://robertsspaceindustries.com/comm-link/engineering/13128-The-Star-Citizen-Economy) or similar.

Other sources of interest might be:
* https://github.com/larsiusprime/bazaarBot
* [Interstellar gamedev - Economic Simulation](https://gamedev.stackexchange.com/questions/53038/interstellar-economic-simulation)
* http://www.rocketpunk-observatory.com/startrade.htm
* http://www.sjgames.com/gurps/traveller/fartrader/
* https://fermatslibrary.com/s/the-theory-of-interstellar-trade

### Agent based computational economy
At a first glance, there seems to be a lot of high level research on ACE, perhaps this is something we could use?

* https://en.wikipedia.org/wiki/Agent-based_computational_economics
* https://link.springer.com/chapter/10.1007%2F3-540-45548-5_24


## Sturnclaw's station economy outline:

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