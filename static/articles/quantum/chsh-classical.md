# the chsh game: classical strategy
This article details the best possible strategy for [the chsh 
game](./chsh-game), assuming the universe is fundamentally classical in nature. 
This includes the so called _“local theories with hidden variables”_, in which 
there is no quantum superposition, but instead everything is pre-determined, 
even if some of those pre-determined variables are epistemologically 
unavailable to the observer, hence _“hidden”_.

## recap of the game
There are two spies, one has a poison $A_1$, the other has an antidote 
$A_2$, which, ingested on its own, is also lethal. They are tasked with 
eliminating a target during an event. However, it is not certain the target 
will be there, there are three doppelgangers that can attend the event instead 
of the target – therefore there are four possibilities in total. That means two 
bits of information $I_1$ and $I_2$, because $4 = 2^2$. Each of the spies 
gathers exactly one of those bits, and because they cannot communicate with 
each other during the operation, each has to decide whether to use the poison, 
or the antidote respetively, only based on this one bit.

Summed up as a logical statement, the spies succeed if: _$A_1$ xor $A_2$ holds 
if and only if $I_1$ and $I_2$ holds._
$$
A_1 \oplus A_2 = I_1 \wedge I_2
$$

<div class="cols">
<div>

| $A_1 \oplus A_2$ | $A_1$ | $\neg A_1$ |
|:----------------:|:-----:|:----------:|
|       $A_2$      |  $0$  |     $1$    |
|    $\neg A_2$    |  $1$  |     $0$    |

</div>
<div>

| $I_1 \wedge I_2$ | $I_1$ | $\neg I_1$ |
|:----------------:|:-----:|:----------:|
|       $I_2$      |  $1$  |     $0$    |
|    $\neg I_2$    |  $0$  |     $0$    |

</div>
</div>

The same, expressed pictographically:

<div class="cols">
<div>

|      | ☠️✅ | ☠️❌ |
|:----:|:---:|:---:|
| 🧪✅ | 🙎  | 🪦  |
| 🧪❌ | 🪦  | 🙎  |

</div>
<div>

|      | ✋✅ | ✋❌ |
|:----:|:----:|:----:|
| 🤵✅ |  🪦  |  🙎  |
| 🤵❌ |  🙎  |  🙎  |

</div>
</div>
<br />

## best deterministic strategy
First, let us suppose that neither agent uses random chance in their decision-making.
Instead, they agree on clear rules of the form _„if I see this, I do this, if you see
that, you do that“_. In mathy terms, it means that $A_1$ is a function of $I_1$ and
$A_2$ is a function of $I_2$ – action of each agent only depends on the information
they gather themself.

To agree on a strategy, each agent must answer two yes-no questions: whether they would
perform their action if their observation indicates a doppelganger, and whether they would
perform the action if their observation is consistent with the target being present. This
limits the total number of possible strategies to sixteen (four bits, $2^4 = 16$). However,
since the probability of a success of a given strategy wouldn't change if we swapped the two
agents' answers, so it turns out we only need to go over 10 of them.

We will use the notation $S_{abcd}$, where $a,b,c,d$ are either $0$ or $1$ to denote a strategy
where
$$
\begin{align*}
  &A_1(I_1) = a, \\
  &A_1(\neg I_1) = b, \\
  &A_2(I_2) = c, \\
  &A_2(\neg I_2) = d.
\end{align*}
$$
For example the strategy $S_{1001}$ would mean: if the first agent sees a left-handed person,
they poison the drink, if they see a right-handed person, they don't; if the second agent sees
the correct-sized suit, they don't add the antidote, if they see a wrong-sized suit, they add it.
This strategy would be successful 75 % of the time:

|     $S_{1001}$                         | left-handed, <br/> poison used | right-handed, <br/> poison not used |
|:--------------------------------------:|:------------------------------:|:-----------------------------------:|
| correct suit, <br/> antidote not added |  ✅ <br/> target poisoned      |  ✅ <br/> doppelganger lived        |
| wrong suit, <br/> antidote added       |  ✅ <br/> doppelganger lived   |  ❌ <br/> doppelganger poisoned     |

Let's evaluate all ten strategies then:

|            | 🎯✋🤵 | 🤚🤵 | ✋🧑‍💼 | 🤚🧑‍💼 |  $P$   |
|:----------:|:------:|:----:|:----:|:----:|:------:|
| $S_{0000}$ | 🙎❌   | 🙎✅ | 🙎✅ | 🙎✅ | $75\%$ |
| $S_{1000}$ | 🪦✅   | 🙎✅ | 🪦❌ | 🙎✅ | $75\%$ |
| $S_{0100}$ | 🙎❌   | 🪦❌ | 🙎✅ | 🪦❌ | $25\%$ |
| $S_{1100}$ | 🪦✅   | 🪦❌ | 🪦❌ | 🪦❌ | $25\%$ |
| $S_{1010}$ | 🙎❌   | 🪦❌ | 🪦❌ | 🙎✅ | $25\%$ |
| $S_{0110}$ | 🪦✅   | 🙎✅ | 🙎✅ | 🪦❌ | $75\%$ |
| $S_{0101}$ | 🪦❌   | 🙎❌ | 🙎❌ | 🪦✅ | $25\%$ |
| $S_{1011}$ | 🙎❌   | 🪦❌ | 🙎✅ | 🪦❌ | $25\%$ |
| $S_{0111}$ | 🪦✅   | 🙎✅ | 🪦❌ | 🙎✅ | $75\%$ |
| $S_{1111}$ | 🙎❌   | 🙎✅ | 🙎✅ | 🙎✅ | $75\%$ |

(Legend: 🎯 = target, ✋ = left-handed, 🤚 = right-handed, 🤵 = suit of the correct size, 🧑‍💼 = suit
of the wrong size, 🙎 = lived, 🪦 = killed, ✅ = success, ❌ = failure, $P$ = probability of success.)

As you can see, no strategy has a higher probability of success than $75\%$, one of those strategies
is $S_{0000}$ – the strategy of _doing nothing_. Therefore, if this is the best you can do, you should
probably abort the mission.

## best non-deterministic strategy
Let's see if adding randomness to the decision-making process could increase your chances. For example,
each agent could flip a coin, throw a dice, or decide according to whether the receptionist had red or
black hair. It doesn't matter that event would be _truly random_ – what matters is that the event wouldn't
be in any way correlated to the left-handedness or suit size of the suspected target, therefore we can
treat it as an independent random variable.

Let's imagine a few examples. The agents might flip a coin before the event to jointly decide between strategies $S_{0110}$ and $S_{1011}$. Then, the total probability of either success is given by the weighted sum of the success probabilities of the two strategies:
$$
  P = 50 \% \; P(S_{0110}) + 50 \% \; P(S_{1011})
  = \frac{1}{2} \, 75 \% + \frac{1}{2} \, 25 \%
  = 50 \%
$$
