# the chsh game

The CHSH game, and the inequality that is central to it, demonstrates the 
**fundamental difference between classical and quantum mechanics**. More 
precisely it demonstrates that it is not possible that quantum mechanics is a 
classical theory with local hidden variables.

This article details the rules of the game, accompanied by some hefty flavour 
text. You can check these other articles for the [best classical 
strategy](./chsh-classical), the [quantum strategy](./chsh-quantum) and
the [conclusion](./chsh-conclusion) of this game.

## the premise

Imagine the following situation: you are a secret spy tasked with the 
assasination of a certain public figure. Together with your accomplice you will 
infiltrate a ceremony at which your target will be giving a toast – there, 
you'll have the chance to poison the target's glass of champagne. However, 
there is a catch. The target has three doppelgangers – therefore there is a 
total of four people who could give a toast at the ceremony, only one of which 
is your target.

## the target

Luckily, there are two pieces of information that can help you tell the target 
apart. First, the target and one of their doppelgangers is left-handed, while 
the other two are right-handed. Second, you know the exact dimensions of the 
target's suit – which accidentally match the dimensions of one of the 
right-handed doppelganger's suit, but don't match the others.

|                         |  left-handed | right-handed |
|------------------------:|:------------:|:------------:|
|      matching suit size | ✅ target 🎯 | doppelganger |
| suit size doesn't match | doppelganger | doppelganger |

Therefore, you have to have know both pieces of information in order to tell 
the target reliably. The two of you decide to infiltrate the ceremony, one 
disguised as a cloakroom attendant, the other as a waiter. The target is 
well-known for issuing a cheque beforehand, so the waiter can see which hand 
they use to sign it. Meanwhile, the cloakroom attendant can measure the 
dimensions of the clothes left there. Due to the nature of your disguises, you 
won't be able to communicate with each other during the operation – each of you 
will be on your own.

## the weapon

Since you won't be able to meet and collectively decide whether to poison the 
drink, one of you will have an ampoule with poison, and the other will have
an ampoule with the antidote. The antidote has the capacity to neutralize the
poison, but digested on its own it is just as deadly.

|                   | poison not used | poison used |
|------------------:|:---------------:|:-----------:|
| antidote not used |     🚰 safe     |   ☠️ lethal  |
|     antidote used |     ☠️ lethal    |   🚰 safe   |

Each of you will have a chance to pour the contents of your ampoule into the 
drink at different times. Since both the poison and the antidote are designed 
to be undetectable, neither of you will be able to tell whether the other one 
*did* or *did not* use their ampoule.

## mission statement
It is becoming increasingly clear that you're playing a game of chance. Not 
only that you can't tell if the target will be there, even during the mission 
you'll only have incomplete information that you cannot share with each other.
Therefore, you should formulate a strategy that maximizes the *probability*
of mission success.

Success of your mission is defined as either poisoning the target – if present 
– or not poisoning the doppelgangers if the target is not present. If you 
either poison a doppelganger, or fail to poison the present target, the mission 
is deemed a failure.

|                 | target present 🎯 | target not present 🤵 |
|----------------:|:-----------------:|:---------------------:|
|     poisoned ☠️  |     ✅ success    |      ❌ failure       |
| not poisoned 🚰 |     ❌ failure    |      ✅ success       |

What is the highest probability of success you can achieve with the perfect 
strategy? That will depend on whether you live in a universe where quantum
mechanics apply, or a completely classical universe.

See the derivation of [the best classical strategy](./chsh-classical), then 
check whether the [this quantum strategy](./chsh-quantum) beats it. Finally, 
you can read [the conclusion](./chsh-conclusion) of this little thought 
experiment.
