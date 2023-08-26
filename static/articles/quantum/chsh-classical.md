# the chsh game: classical strategy
This article details the best possible strategy for [the chsh 
game](./chsh-game), assuming the universe is fundamentally classical in nature. 
This includes the so called _“local theories with hidden variables”_, in which 
there is no quantum superposition, but instead everything is pre-determined, 
even if some of those pre-determined variables are epistemologically 
unavailable to the observer, hence _“hidden”_.

## recap of the game
There are two spies, one has a poison ($A_1$), the other has an antidote 
($A_2$), which, ingested on its own, is also lethal. They are tasked with 
eliminating a target during an event. However, it is not certain the target 
will be there, there are three doppelgangers that can attend the event instead 
of the target – therefore there are four possibilities in total (that means two 
bits of information $I_1$ and $I_2$, because $4 = 2^2$). Each of the spies 
gathers exactly one of those bits, and because they cannot communicate with 
each other during the operation, each has to decide whether to use the poison, 
or the antidote respetively, only based on this one bit.

Summed up as a logical statement, the spies succeed if: _$A_1$ xor $A_2$ holds 
if and only if $I_1$ and $I_2$ holds._
$$
A_1 \oplus A_2 = I_1 \wedge I_2
$$
