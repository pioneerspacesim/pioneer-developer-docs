---
title: Hyperdrive Redesign
category: design-docs
---

# Hyperdrive Redesign

## Problem Statement

Currently (2024-09) the math behind Pioneer's hyperdrives is quite simple. Fuel used by a hyperdrive is linear with distance travelled up to the arbitrary maximum range of the jumpdrive, and the time taken in hyperspace is scaled by the square of the jump distance.

Because the jumpdrive uses fuel in integer quantities, jumps consuming more than a single ton of fuel are extremely inefficient in both game-time and fuel cost. Similarly, there is also no benefit to player time in taking a single long jump, as the time spent repeatedly clicking the jump button is replaced with an exponential increase in time spent staring at the hyperspace interstitial screen.

While many short jumps chained together should remain the fastest option in terms of in-game time elapsed, it should not be the only viable option for the player. Making a single long jump should have its own benefit to offset the fact that it is slower than many short jumps.

To rectify this issue, a new design is proposed for calculating hyperdrive range, duration, and fuel use.

## Proposed Implementation

Each hyperdrive equipment item is defined in terms of three main parameters which determine the concrete values for range and duration - the hyperdrive size class $H_{cls}$, the time scalar $S_t$, and the fuel use scalar $S_f$. The latter two parameters are intended to be tunable to differentiate different drives in the same size class.

The basic principle for hyperdrive fuel use in the Pioneer universe is that used fuel $f$ scales sub-linearly with distance travelled $d$ in a single jump:

$$
f = d^{0.9}
$$

Because hyperspace does not map to any Euclidean dimensions nor have any kind of formal definition, I don't have to provide any in-universe rationalization for *why* fuel use is non-linear. However, from an out-of-universe perspective, this provides an incentive for ships intending to cover great distances to make longer jumps rather than chaining together many 3-5ly "hops".

The efficiency factor $E$ of the hyperdrive is responsible for determining the range of the drive according to the mass of the ship. The efficiency factor was chosen to give good values for maximum range over hyperdrive class 1-5 with a fuel tank size of 1-32t.

$$
E = \frac { S_f } { (M_{hull} + M_{fuel})^{\frac 2 3} } \times \frac { 1 + H_{cls} } { H_{cls} }
$$

The maximum range of a hyperdrive is controlled by how much fuel can be used in one jump, modified by the efficiency factor $E$. Re-arranging the first equation to find distance yields the equation for the maximum range in light-years with a given amount of fuel:

$$
R_m = (fE)^{\frac{1} {0.9}}
$$

Re-arranging that *again* gives us the fuel use for a given jump distance within the maximum range:

$$
f = \frac {d^{0.9}} E
$$

The equation for jump duration $t$ per light-year travelled $d$ used by the current hyperdrive implementation reduces to:

$$
t_{old} = 0.36 \frac { d^2 M^{1.5} } {625 H^3_{cls}}
$$

Under the new model, time taken in a jump remains exponentially scaled with the distance, but scales less aggressively overall:

$$
t = 0.36 \frac { d^{1.6} M^{1.2} } { 425 H_{cls} ^{3} S_t }
$$

Of note is that the choice of exponents here results in an almost-invariant duration for a maximum-range jump as ship lading increases - particularly the mass exponent is tuned for the inverse exponent used to compute $E$.

The intention is to provide a meaningful gameplay tradeoff between optimizing a ship for fast long-distance jumps or carrying large amounts of cargo, while not unduly punishing higher-mass ships equipped with proportionately larger drives.

The results of these equations can be visualized and compared against existing values with this [Desmos graph](https://www.desmos.com/calculator/29lusfbzkg).

## Hyperdrive Tuning

Both the fuel use scalar and time scalar set on equipment items can be tuned by developers to give individual drives a specific place in the overall balance of the game.

The fuel use scalar $S_f$ is a unitless quantity that controls the maximum range for a ship. To match existing hyperspace drive ranges, its value typically ranges from 65-70. Changing the value yields an increase or decrease in the drive's maximum range per unit of fuel used.

The time scalar $S_t$ is a unitless quantity that controls how quickly the drive travels. By default, the value is 1.0. The scalar has proportional effect relative to the distance of the jump; increasing the time scalar decreases the overall duration of a jump.

The intention here is to provide the ability for different in-universe manufacturers to create drives tailored for specific uses. When paired with adjusting the maximum size of the hyperspace drive's internal fuel tank, quite a bit of variation can be achived.

Perhaps an industrial drive might have more fuel in the tank, but slightly worse fuel efficiency and travel speed. Or maybe a racing drive is significantly more efficient but has a much smaller tank, gaining a few percentage points of travel time in addition to the increase in maximum range?

Whatever the tradeoff, the drive has to be constrained to a certain maximum volume to remain compatible with existing ships on the market, and thus sacrifices must be made.
