---
title: Commodity prices
category: design-docs/other-ideas
---
# Commodity Prices

This page tries to collect what we want, and where we want to go with
the next version of economy system in pioneer. An ideal case would be to
have a dynamical economy. Perhaps a smaller version of the [Star citizen
economy](https://robertsspaceindustries.com/comm-link/engineering/13128-The-Star-Citizen-Economy)
or similar.

Other sources of interest might be:

  - <https://github.com/larsiusprime/bazaarBot>
  - [Interstellar gamedev - Economic
    Simulation](https://gamedev.stackexchange.com/questions/53038/interstellar-economic-simulation)
  - <http://www.rocketpunk-observatory.com/startrade.htm>
  - <http://www.sjgames.com/gurps/traveller/fartrader/>
  - <https://fermatslibrary.com/s/the-theory-of-interstellar-trade>

## Agent based computational economy

At a first glance, there seems to be a lot of high level research on
ACE, perhaps this is something we could use?

  - <https://en.wikipedia.org/wiki/Agent-based_computational_economics>
  - <https://link.springer.com/chapter/10.1007%2F3-540-45548-5_24>

## What affects a market, and how?

This section aims at basically brainstorming all ideas for how markets
and their commodities should be affected for the future new market
system in pioneer. The prices will fluctuate in time with prices going
down if a good becomes abundant, and becoming expensive if in demand.
This will be modeled through a set of coupled ordinary differential
equations (if there isn't some cheaper way to do it?).

  - Every planet / station? produces and consumes goods, proportional to
    population, and other factors, like listed here below.
  - Production and consumption rates depend on what kind of
    planet/station, population size, what other goods are available,
    etc. E.g if there is a shortage of grain, then price of grapes and
    other food goes up.
  - Price is relative to the amount offered for sale
  - This price drives AI/NPC to trade, taking goods from where it is
    cheap (abundant) to where it is in need. -\> model through
    stochastic differential equations?
  - Goods are consumed when producing other stuff?
  - Is production seasonal? The trade between northern and southern
    hemisphere (if axis tilted), seems to not at all be worth it, and
    break space travel.
  - Government? Will communist government lead to flat prices, due to
    planned economy? Or will they fluctuate more due to not being in
    sync with true demand? what effect will the different systems have?
      - Democracy
      - Corporate
      - Dictatorship
      - Anarchy
  - Only trade with closest neighbors. Could be done like so: expand a
    sphere out from the system until with radius r\_min, and if found
    inhabited systems are below some value (10?) keep expanding sphere
    until r\_max. This generates a list of closest neighbors for all
    systems.
  - On the star map, one can see which systems a market is trading with?
    Why would this be useful? It would be all within some distance.
  - In the market (if player subscribes?) we show for the selected
    commodity its price over the past months? Zoom in/ out from 1 to 3
    months? Show system index average, "galaxy index" (based on nearby
    systems or all systems in the game?).
  - How will the dynamics from the market lead to ships with those
    actual items coming in? Somehow c++ engine must tell TradeShip.lua
    how many shipped units of each item is being sold / bought /
    shipped?
  - If I kill off trade ships carrying something, then I should be able
    to create a shortage of some goods. Mission: Drive up price of
    grain: attack all grain carrying ships?
  - Will a system like Mu Herculis, with very far between jump point and
    station, have much higher prices for everything, making the long
    transit worth while
  - Faction specific: Distance to faction home world? Trading over
    faction borders?
  - Tech level?

## General

Many goods are traded, ranging from simple H2O (water), all the way up
to farming equipment. In order to keep exchanges simple, a standard unit
is used for trading; the metric ton. There are a total of 31 commodities
used on the standard stock market, encompassing all major aspects of
life.

## Goods Descriptions

**Hydrogen**

*Average Price: 1 Credit*

Used as fuel for hyperdrives and propellant for starships, hydrogen is
an extremely important element. Fortunately it is also the most common
element in the universe, although storing it isn't trivial. It is
usually among the cheapest commodities on the stock market. Starports
are well supplied at any given time.

**Liquid oxygen**

*Average Price: 1.5 Credits*

Liquid oxygen has many purposes, most commonly in medical and industrial
applications and sometimes also used in waste treatment. It is very
affordable, as oxygen is easy to obtain from water.

**Water**

*Average Price: 1.2 Credits*

Essential for life as we know it, an often overlooked commodity, water
is needed wherever humanity roams. As such, the vast majority of
off-world colonies import water from comets or planets like Earth. Water
is used on a massive scale for hydrogen and oxygen production.

**Carbon ore**

*Average Price: 5 Credits*

Carbon is one of the most diverse elements we know of. Used in almost
everything from plastics to alloys and sometimes even power production,
carbon is an inexpensive, but important commodity. As such, almost all
industrial settlements import carbon ore.

**Metal ore**

*Average Price: 3 Credits*

Many colonies mine metal ores for export, to be refined and used in
industrial manufacturing. Used in everything from small toys to
spaceships, metal in all its forms is essential to modern civilization.

**Metal alloys**

*Average Price: 8 Credits*

After metal ore is extracted and refined, it is processed and ends up as
various alloys. An alloy is an amalgamation of metals, rather than a
single pure element, combined in exact proportions to gain specific
desirable traits. Therefore, most consumer metals are alloys.

**Precious metals**

*Average Price: 180 Credits*

Precious metals are, generally, less reactive, more difficult to mine,
and more scarce, resulting in a considerable economic value. This often
includes gold, silver, platinum, and rare earths. Certain elements such
as gold and silicon, or rare earths, are crucial for the construction of
computers and other electronics.

**Plastics**

*Average Price: 12 Credits*

Synthetical and semi-synthetical materials used in everything from
everyday items to spaceship construction. They are relatively easy to
use in manufacture, versatile and cheap to make, thus an important part
of our civilization.

**Fruits and vegetables**

*Average Price: 12 Credits*

While there are lots of synthetic alternatives, real fruits and
vegetables are still an important part of our cuisine and nutrition.
Grown on agricultural worlds or as part of the life support of habitats,
and exported to systems in which growing plants is not feasible.

**Animal meat**

*Average Price: 18 Credits*

A major point of controversy, meat is the flesh of animals. With
synthetic protein readily available, most people believe that animals
should not be killed. While meats are illegal in most core systems, live
animals and their meat is an important part of the lives of people on
more traditional worlds.

**Live animals**

*Average Price: 32 Credits*

Partly due to humanistic, economic and ecological reasons, animal
rearing and trade is strictly regulated, or even illegal in many core
systems. Going outward, livestock becomes a more important part of the
livelihood of the people, both as a source of nutrition and a beast of
burden. Exotic zoos and wildlife reserves contribute to the trade of
animals around the galaxy, usually under strict state regulations, to
combat illegal hunting grounds.

**Liquor**

*Average Price: 8 Credits*

Most outposts have a local brew that outsiders find hard to stomach.
Alcohol can be banned in some systems as it is deemed to cloud the mind.
Regardless of the law, a shot of scotch is almost always available on
the black market, for a price.

**Grain**

*Average Price: 10 Credits*

The backbone of many peoples' diets. It is used in farming, to feed
animals, and as a supplement to synthetic foods. Grain is also used in
many other foods, such as oatmeal and baked goods. Most star faring
cultures grow and consume at least some grains, that have been adopted
to the climate of their habitat.

**Slaves**

*Average Price: 232 Credits*

As machines have replaced slaves as the engine that powers civilization,
slavery is now almost universally seen as immoral, and transgression
against a ban draws the strictest punishment. However, despite the best
efforts of humanitarians, slavery is still prevalent, even in developed
worlds.

**Textiles**

*Average Price: 8.5 Credits*

Textiles are simple fabric, woven from either synthetic, plant or animal
derived yarn. Usually produced by robots in large factories, it is still
possible to find the occasional weaver who makes their own textiles.

**Fertilizer**

*Average Price: 4 Credits*

Fertilizers are crucial for growing crops at an industrial scale,
allowing mono-cultures, yielding higher dividends than possible using
plain dirt. This often comes with at an ecological cost, not evident at
the onset.

**Medicines**

*Average Price: 22 Credits*

Derived from natural sources, or synthesized artificially, medicines are
needed everywhere humans go. From curing the common cold to combat the
adverse effects of prolonged space travel, medicines are essential to
the prosperity of an interstellar humanity. Carefully watched by customs
agents, as it is not uncommon to disguise narcotics as medical drugs.

**Consumer goods**

*Average Price: 140 Credits*

The end products ready for the general consumer public, without need for
further processing. Everything from toothbrushes, kitchen appliances to
hover cars.

**Computers**

*Average Price: 80 Credits*

From over a thousand years ago, with the Abacus, PDP-11, and Motorola
68k chip, down to our modern HAL 9001 and Multivac line, computers
marked the dawn of the information age. Equally essential for entering
hyperspace as for sharing videos of cute quibbles over the UniNet.

**Rubbish**

*Average Price: -0.1 Credits*

The byproduct of civilization, consisting of industrial waste, household
garbage, and worn down equipment. Most waste is reprocessed, recycled or
sent to starports for transport off-world. Dumping garbage in inhabited
systems is almost always illegal. Starports usually charge a fee for
waste disposal, but will also pay you to take it away.

**Radioactive waste**

*Average Price: -3.5 Credits*

Created by nuclear reactors, and military hyperdrives, nuclear waste is
the hardest and most dangerous commodity to transport and dispose of.
For this reason, most starports will pay to get rid of excess stockpile.
Dumping nuclear waste is a severe offence.

**Narcotics**

*Average Price: 157 Credits*

Natural or synthetic substances that alter the state of mind and body.
Although the use of narcotics, both for recreational and medical
purposes, is as old as humanity itself, shipping and trading is commonly
outlawed.

**Nerve gas**

*Average Price: 265 Credits*

It is generally accepted to be a weapon of mass destruction, shunned
even by the military in most systems, and thus illegal in most systems.

**Military fuel**

*Average Price: 60 Credits*

Used as fuel in the more advanced military drives. These drives produce
nuclear waste during operation, which must be disposed of. Because of
this, some governments have banned the use of military drives and their
fuel. Due to its synthetic nature, military fuel is more expensive and
less common than hydrogen, and can not be found occurring naturally.

**Robots**

*Average Price: 63 Credits*

Robots are often imported into industrial and mining systems, due to
their ability to easily perform tasks that would be too difficult,
tedious, or unsafe for human workers. They can also serve as politicians
and lawyers.

**Hand weapons**

*Average Price: 124 Credits*

Providing insurance beyond the long arm of the law, hand weapons are
essential for space traders in far-out systems. However, many
governments see them as a threat to their own control over their
population and strictly control their trade and possession.

**Air processors**

*Average Price: 20 Credits*

Clean air is only taken for granted when already abundant. The technique
behind air purification is rumoured to come from alien artifacts found
on Mars. Many companies produce various types of air processors, capable
of turning even the most hostile atmospheres into a workable
environment, and governments do not tolerate monopoly on air production.

**Farm machinery**

*Average Price: 11 Credits*

Although rare, it is still possible to catch the occasional farmer with
an ox-driven plow. But in almost any place where there is agriculture,
machines are used in the cultivation of the land, be it the hydroponics
of an underground habitat or the endless fields of a garden world.

**Mining machinery**

*Average Price: 12 Credits*

The traditionally back breaking work of mining is alleviated by the use
of machines that help miners in locating and retrieving various ores,
and transporting them to the closest processing facilities.

**Battle weapons**

*Average Price: 220 Credits*

Heavy military-grade weapons, like armoured hover tanks, and
surface-to-space missiles. Trading in them is usually a governmental
monopoly. On the black market, however, these can often fetch a hefty
sum of money.

**Industrial machinery**

*Average Price: 13 Credits*

Needed for assembly lines, refineries, smelters, and production of
machinery that will in turn produce other goods. High competence is
needed to produce these advanced machines.

[Category:Ideas](Category:Ideas "wikilink")
