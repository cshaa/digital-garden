# HW #1: Properties of $\bm\gamma$ matrices

## Assignment

Using the following definitions:
$$
\begin{gather*}
\left\{ \bm\gamma_\mu \,, \bm\gamma_\nu \right\} = 2 \, g_{\mu\nu} \,,\\
\bm\gamma_5 = \mathrm i \bm\gamma_0 \bm\gamma_1 \bm\gamma_2 \bm\gamma_3 = \mathrm i \bm I,\\[5pt]
(\bm A \bm B)^\dagger = \bm B^\dagger \bm A^\dagger , \\
(a + \mathrm i b)^\dagger = a - \mathrm i b \,, \\
{\bm\gamma_\mu}^\dagger = \bm\gamma_\nu \, g^{\,\nu\mu} \,,
\end{gather*}
$$
where $g_{\mu\nu}$ is the Minkowski metric with signature $(1,3)$, derive the following relations:
$$
\begin{align*}
  \left\{ \bm\gamma_\mu \,, \bm\gamma_5 \right\} &= 0, \\
  {\bm\gamma_5}^2 &= 1, \\
  {\bm\gamma_5}^\dagger &= \bm\gamma_5, \\
  \\
  \operatorname{Tr} \left(
    \vec a \, \bm\gamma_\mu \, \vec b \, \bm\gamma_\nu
  \right) \;
  \operatorname{Tr} \left(
    \vec c \, \bm\gamma^\mu \, \vec d \, \bm\gamma^\nu
  \right)
  &= 32 \left( \vphantom{\frac{a}{b}}\! (\vec a \cdot \vec c)(\vec b \cdot \vec d ) + (\vec a \cdot \vec d)(\vec b \cdot \vec c)\right),
  \\
  \operatorname{Tr} \left(
    \vec a \, \bm\gamma_\mu \, \vec b \, \bm\gamma_\nu \, \bm\gamma_5
  \right) \;
  \operatorname{Tr} \left(
    \vec c \, \bm\gamma^\mu \, \vec d \, \bm\gamma^\nu \, \bm\gamma_5
  \right)
  &= 32 \left( \vphantom{\frac{a}{b}}\! (\vec a \cdot \vec c)(\vec b \cdot \vec d ) - (\vec a \cdot \vec d)(\vec b \cdot \vec c)\right),
  \\
  \operatorname{Tr} \left(
    \vec a \, \bm\gamma_\mu \, \vec b \, \bm\gamma_\nu
  \right) \;
  \operatorname{Tr} \left(
    \vec c \, \bm\gamma^\mu \, \vec d \, \bm\gamma^\nu \, \bm\gamma_5
  \right)
  &= 0,
  \\
\end{align*}
$$
where $\vec a = a^\mu \, \bm\gamma_\mu$ and $\vec a \cdot \vec b = \frac12 \, \{ \vec a \,, \vec b\} = a^\mu \, b^\nu g_{\mu\nu}$. We assume a four-dimensional representation of the Clifford algebra, therefore $\operatorname{Tr}(1) = 4$.

## Solution
By applying $\mu = \nu$ to the equation $\left\{ \bm\gamma_\mu \,, \bm\gamma_\nu \right\} = 2
\, g_{\mu\nu}$ we can derive:
$$
\begin{align*}
  2 g_{\mu\mu} =& \left\{ \bm\gamma_\mu \,, \bm\gamma_\mu \right\} = \bm\gamma_\mu \bm\gamma_\mu + \bm\gamma_\mu \bm\gamma_\mu = 2 {\bm\gamma_\mu}^2 \Longrightarrow {\bm\gamma_\mu}^2 = g_{\mu\mu}
  \\[5pt]
  \Longrightarrow & \; \underline{\vphantom{\big(}{\bm\gamma_0}^2 = 1, \;\; {\bm\gamma_1}^2 = -1, \;\; {\bm\gamma_2}^2 = -1, \;\; {\bm\gamma_3}^2 = -1} \, .
\end{align*}
$$
On the other hand, if we choose $\mu \neq \nu$, we get:
$$
\begin{align*}
  2 \underbrace{g_{\mu\nu}}_{0} &= \left\{ \bm\gamma_\mu \,, \bm\gamma_\nu \right\} = \bm\gamma_\mu \bm\gamma_\nu + \bm\gamma_\nu \bm\gamma_\mu
  \\
  &\Longrightarrow \underline{\vphantom{\big(}\bm\gamma_\mu \bm\gamma_\nu = - \bm\gamma_\nu \bm\gamma_\mu \;\;\text{for}\;\; \mu \neq \nu} \,.
\end{align*}
$$
Or, restated equivalently, that $\bm\gamma_\mu \bm\gamma_\nu = (-1)^{\delta^\mu_\nu} \bm\gamma_\nu \bm\gamma_\mu$.

Applying these findings to the $\bm\gamma_5$ equations, we see that:
$$
\begin{align*}
  \left\{ \bm\gamma_\mu \,, \bm\gamma_5 \right\} &=
  \bm\gamma_\mu \, \mathrm i \bm\gamma_0 \bm\gamma_1 \bm\gamma_2 \bm\gamma_3 + \mathrm i {\undergroup{\bm\gamma_0 \,}} {\undergroup{\bm\gamma_1 \,}} {\undergroup{\bm\gamma_2 \,}} {\undergroup{\bm\gamma_3 \;}} \bm\gamma_\mu
  \\
  &= \bigg( 1 + \underbrace{\prod_\nu(-1)^{\delta^\nu_\mu}}_{(-1)^3 \, = \, -1} \bigg) \; \bm\gamma_\mu \; \bm\gamma_5
  = (1 - 1)  \; \bm\gamma_\mu \; \bm\gamma_5 = 0
  \\
  \phantom{.}
\end{align*}
$$

$$
\begin{align*}
  {\bm\gamma_5}^2 &= \mathrm i \bm\gamma_0 \underset{-1}{\undergroup{\bm\gamma_1}} \underset{-1}{\undergroup{\bm\gamma_2}} \underset{-1}{\undergroup{\bm\gamma_3 \; \mathrm i}} \bm\gamma_0 \bm\gamma_1 \bm\gamma_2 \bm\gamma_3
  \\[12pt]
  &= -\mathrm i^2 {\bm\gamma_0}^2 \; \bm\gamma_1 \underset{-1}{\undergroup{\bm\gamma_2}} \underset{-1}{\undergroup{\bm\gamma_3 \;}} \bm\gamma_1 \bm\gamma_2 \bm\gamma_3
  \\[12pt]
  &= -\mathrm i^2 {\bm\gamma_0}^2 \, {\bm\gamma_1}^2 \; \bm\gamma_2 \underset{-1}{\undergroup{\bm\gamma_3 \;}} \bm\gamma_2 \bm\gamma_3
  \\[12pt]
  &= \mathrm i^2 {\bm\gamma_0}^2 \, {\bm\gamma_1}^2 \, {\bm\gamma_2}^2 \, {\bm\gamma_3}^2
  = (-1)(1)(-1)^3 = 1
  \\
  \phantom{.}
\end{align*}
$$

$$
\begin{align*}
  {\bm\gamma_5}^\dagger
  &= (\mathrm i \bm\gamma_0 \bm\gamma_1 \bm\gamma_2 \bm\gamma_3)^\dagger
  = \mathrm i^\dagger \bm\gamma_3^\dagger \bm\gamma_2^\dagger \bm\gamma_1^\dagger \bm\gamma_0^\dagger
  = (-\mathrm i)(-\bm\gamma_3)(-\bm\gamma_2)(-\bm\gamma_1)(\bm\gamma_0)
  \\[5pt]
  &= \mathrm i \underset{-1}{\undergroup{\bm\gamma_3}} \underset{-1}{\undergroup{\bm\gamma_2}} \underset{-1}{\undergroup{\bm\gamma_1}} \bm\gamma_0
  = -\mathrm i \bm\gamma_0 \underset{-1}{\undergroup{\bm\gamma_3}} \underset{-1}{\undergroup{\bm\gamma_2}} \bm\gamma_1
  = -\mathrm i \bm\gamma_0 \bm\gamma_1 \underset{-1}{\undergroup{\bm\gamma_3}} \bm\gamma_2
  = \mathrm i \bm\gamma_0 \bm\gamma_1 \bm\gamma_2 \bm\gamma_3
  = \bm\gamma_5
\end{align*}
$$

Having proven the first three relations, let us now investigate the traces of gammas:
$$
\operatorname{Tr}(\bm\gamma_\mu)
= \operatorname{Tr}(\bm\gamma_\mu \, 1)
= \operatorname{Tr}(\bm\gamma_\mu \, {\bm\gamma_5}^2)
\overset{\text{cycl.}\vphantom{\big|}}{=} \operatorname{Tr}(\bm\gamma_5 \underset{-1}{\undergroup{\; \bm\gamma_\mu}} \; \bm\gamma_5)
= \operatorname{Tr}(-\bm\gamma_\mu \, {\bm\gamma_5}^2)
= -\operatorname{Tr}(\bm\gamma_\mu)
= 0 \,.
$$
$$
\begin{align*}
  \operatorname{Tr}(\bm\gamma_\mu \, \bm\gamma_\nu)
  &= \operatorname{Tr}\Big( \tfrac{1}{2}( \bm\gamma_\mu \, \bm\gamma_\nu + \bm\gamma_\mu \, \bm\gamma_\nu ) \Big)
  = \frac{1}{2} \Big( \operatorname{Tr}(\bm\gamma_\mu \, \bm\gamma_\nu) + \operatorname{Tr}(\underset{\text{cycl.}}{\undergroup{\bm\gamma_\mu \, \bm\gamma_\nu}}) \Big)
  \\
  &= \frac{1}{2} \operatorname{Tr}\big( \bm\gamma_\mu \, \bm\gamma_\nu + \bm\gamma_\nu \, \bm\gamma_\mu \big)
  = \frac{1}{2} \operatorname{Tr}\Big( \! \left\{ \bm\gamma_\mu \,, \bm\gamma_\nu \right\} \! \Big)
  = \frac{1}{2} \operatorname{Tr}\big( \, 2 \, g_{\mu\nu} \big)
  \\[10pt]
  &= \frac{1}{2} \;\; \underbrace{\operatorname{Tr}(1)}_4 \;\; 2 \, g_{\mu\nu}
  = 4 \, g_{\mu\nu} \,.
\end{align*}
$$
$$
\begin{align*}
  \operatorname{Tr}(\bm\gamma_\mu \, \bm\gamma_\nu \, \bm\gamma_5)
  &= \operatorname{Tr}\Big( \tfrac{1}{2}( \bm\gamma_\mu \, \bm\gamma_\nu + \bm\gamma_\mu \, \bm\gamma_\nu ) \, \bm\gamma_5 \Big)
  = \frac{1}{2} \Big( \operatorname{Tr}(\bm\gamma_\mu \, \bm\gamma_\nu \, \bm\gamma_5) + \operatorname{Tr}(\underset{\text{cycl.}}{\undergroup{\bm\gamma_\mu \, \bm\gamma_\nu \overset{-1}{\overgroup{\, \bm\gamma_5}}}}) \Big)
  \\
  &= \frac{1}{2} \operatorname{Tr}\big( (\bm\gamma_\mu \, \bm\gamma_\nu - \bm\gamma_\nu \, \bm\gamma_\mu) \, \bm\gamma_5 \big)
  = \frac{1}{2} \operatorname{Tr}\Big( \! \left\{ \bm\gamma_\mu \,, \bm\gamma_\nu \right\} \! \Big)
  = \frac{1}{2} \operatorname{Tr}\big( \, 2 \, g_{\mu\nu} \big)
  \\[10pt]
  &= \frac{1}{2} \;\; \underbrace{\operatorname{Tr}(1)}_4 \;\; 2 \, g_{\mu\nu}
  = 4 \, g_{\mu\nu} \,.
\end{align*}
$$
$$
\begin{align*}
  \operatorname{Tr}&(\bm\gamma_\kappa \, \bm\gamma_\lambda \, \bm\gamma_\mu \, \bm\gamma_\nu)
  = \operatorname{Tr}\big( (\bm\gamma_\kappa \, \bm\gamma_\lambda + \bm\gamma_\lambda \, \bm\gamma_\kappa - \bm\gamma_\lambda \, \bm\gamma_\kappa) \, \bm\gamma_\mu \, \bm\gamma_\nu\big)
  = \operatorname{Tr}\big( (2g_{\kappa\lambda} - \bm\gamma_\lambda \, \bm\gamma_\kappa) \, \bm\gamma_\mu \, \bm\gamma_\nu\big)
  \\[5pt]
  &= \operatorname{Tr}( 2g_{\kappa\lambda} \, \bm\gamma_\mu \, \bm\gamma_\nu) - \operatorname{Tr}( \bm\gamma_\lambda \, \bm\gamma_\kappa \, \bm\gamma_\mu \, \bm\gamma_\nu)
  = 2g_{\kappa\lambda} \, \operatorname{Tr}( \bm\gamma_\mu \, \bm\gamma_\nu) - \operatorname{Tr}( \bm\gamma_\lambda \, \bm\gamma_\kappa \, \bm\gamma_\mu \, \bm\gamma_\nu)
  \\[5pt]
  &= 2g_{\kappa\lambda} \, 4g_{\mu\nu} - \operatorname{Tr}( \bm\gamma_\lambda \, \bm\gamma_\kappa \, \bm\gamma_\mu \, \bm\gamma_\nu)
  = 8 \, g_{\kappa\lambda} \, g_{\mu\nu} - \operatorname{Tr}( \bm\gamma_\lambda \, \bm\gamma_\kappa \, \bm\gamma_\mu \, \bm\gamma_\nu)
  \\[5pt]
  &= 8 \, g_{\kappa\lambda} \, g_{\mu\nu} - \operatorname{Tr}\big( \bm\gamma_\lambda \, (2g_{\kappa\mu} - \bm\gamma_\mu \, \bm\gamma_\kappa) \, \bm\gamma_\nu\big)
  = 8 \, g_{\kappa\lambda} \, g_{\mu\nu} - 8 \, g_{\kappa\mu} \, g_{\lambda\nu} + \operatorname{Tr}(\bm\gamma_\lambda \, \bm\gamma_\mu \, \bm\gamma_\kappa \, \bm\gamma_\nu)
  \\[5pt]
  &= 8 \, g_{\kappa\lambda} \, g_{\mu\nu} - 8 \, g_{\kappa\mu} \, g_{\lambda\nu} + \operatorname{Tr}\big( \bm\gamma_\lambda \, \bm\gamma_\mu \, (2g_{\kappa\nu} - \bm\gamma_\nu \, \bm\gamma_\kappa) \big)
  \\[5pt]
  &= 8 \, g_{\kappa\lambda} \, g_{\mu\nu} - 8 \, g_{\kappa\mu} \, g_{\lambda\nu} + 8 \, g_{\kappa\nu} \, g_{\lambda\mu} - \operatorname{Tr}( \underset{\text{cycl.}}{\undergroup{ \bm\gamma_\lambda \, \bm\gamma_\mu \, \bm\gamma_\nu \, \bm\gamma_\kappa }} )
  \\[-3pt]
  &= 8 \, g_{\kappa\lambda} \, g_{\mu\nu} - 8 \, g_{\kappa\mu} \, g_{\lambda\nu} + 8 \, g_{\kappa\nu} \, g_{\lambda\mu} - \operatorname{Tr}(\bm\gamma_\kappa \, \bm\gamma_\lambda \, \bm\gamma_\mu \, \bm\gamma_\nu)
  \\[5pt]
  &\Longrightarrow 2 \, \operatorname{Tr}(\bm\gamma_\kappa \, \bm\gamma_\lambda \, \bm\gamma_\mu \, \bm\gamma_\nu) = 8 \, \big( g_{\kappa\lambda} \, g_{\mu\nu} - g_{\kappa\mu} \, g_{\lambda\nu} + g_{\kappa\nu} \, g_{\lambda\mu}\big)
  \\[5pt]
  &\Longrightarrow \operatorname{Tr}(\bm\gamma_\kappa \, \bm\gamma_\lambda \, \bm\gamma_\mu \, \bm\gamma_\nu) = 4 \, \big( g_{\kappa\lambda} \, g_{\mu\nu} - g_{\kappa\mu} \, g_{\lambda\nu} + g_{\kappa\nu} \, g_{\lambda\mu}\big)
\end{align*}
$$
To find the traces of expressions containing $\bm\gamma_5$, we will have to thoughtfully deliberate, as there are two general cases. First, consider a trace of a $\bm\gamma_5$ and an odd number of other gammas, we can anti-commute $\bm\gamma_5$ through them to see the trace has to be zero: $\operatorname{Tr}(\bm\gamma_\mu ... \bm\gamma_\nu\bm\gamma_5) = -\operatorname{Tr}(\bm\gamma_5\bm\gamma_\mu ... \bm\gamma_\nu) = 0$. Now consider a trace of $\bm\gamma_5$ and an _even_ number other gammas. If the number of gammas is less than four, it is still possible to find one that is different, and anti-commutes with the rest: $\operatorname{Tr}(\bm\gamma_\mu\bm\gamma_\nu\bm\gamma_5) = \operatorname{Tr}(\frac{{\bm\gamma_\alpha}^2}{g_{\alpha\alpha}}\bm\gamma_\mu\bm\gamma_\nu\bm\gamma_5) = \operatorname{Tr}(\frac{{\bm\gamma_\alpha}}{g_{\alpha\alpha}} \bm\gamma_\alpha\undergroup{\bm\gamma_\mu}\undergroup{\bm\gamma_\nu}\undergroup{\bm\gamma_5}) = -\operatorname{Tr}(\frac{{\bm\gamma_\alpha}}{g_{\alpha\alpha}}\bm\gamma_\mu\bm\gamma_\nu\bm\gamma_5\bm\gamma_\alpha) = -\operatorname{Tr}(\bm\gamma_\mu\bm\gamma_\nu\bm\gamma_5) = 0$. However, if there are four other gammas, there is no element that would anti-commute with all of them – therefore $\operatorname{Tr}(\bm\gamma_\kappa\bm\gamma_\lambda\bm\gamma_\mu\bm\gamma_\nu\bm\gamma_5)$ is a tensor that is totally antisymmetric (swapping any two neighbouring indices amounts to anti-commuting two neightbouring gammas). As a totally antisymmetric tensor with four indices, it has to be proportional to $\varepsilon_{\kappa\lambda\mu\nu}$. To get the proportionality factor, we can evaluate:
$$
  \operatorname{Tr}(\bm\gamma_0\bm\gamma_1\bm\gamma_2\bm\gamma_3\bm\gamma_5)
  = \operatorname{Tr}(-\mathrm i^2 \bm\gamma_0\bm\gamma_1\bm\gamma_2\bm\gamma_3\bm\gamma_5)
  = \operatorname{Tr}(-\mathrm i\bm\gamma_5\bm\gamma_5)
  = -\mathrm i \, \operatorname{Tr}({\bm\gamma_5}^2)
  = -\mathrm i \, \operatorname{Tr}(1)
  = -4\mathrm i \,.
$$
Therefore, we can sum up the identities we found as follows:
$$
\begin{gather*}
  \operatorname{Tr}(\bm\gamma_5)
  = \operatorname{Tr}(\bm\gamma_\lambda\bm\gamma_5)
  = \operatorname{Tr}(\bm\gamma_\lambda\bm\gamma_\kappa\bm\gamma_5)
  = \operatorname{Tr}(\bm\gamma_\lambda\bm\gamma_\kappa\bm\gamma_\mu\bm\gamma_5)
  = 0
  \\[5pt]
  \operatorname{Tr}(\bm\gamma_\lambda\bm\gamma_\kappa\bm\gamma_\mu\bm\gamma_\nu\bm\gamma_5) = -4 \, \mathrm i \, \varepsilon_{\lambda\kappa\mu\nu}
\end{gather*}
$$
Now we can apply these findings to the trace equation we want to prove:
$$
\begin{align*}
  \operatorname{Tr}& \left(
    \vec a \, \bm\gamma_\mu \, \vec b \, \bm\gamma_\nu
  \right) \;
  \operatorname{Tr} \left(
    \vec c \, \bm\gamma^\mu \, \vec d \, \bm\gamma^\nu
  \right)
  =
  \operatorname{Tr} \left(
    a^\kappa \bm\gamma_\kappa \, \bm\gamma_\mu \, b^\lambda \bm\gamma_\lambda \, \bm\gamma_\nu
  \right) \;
  \operatorname{Tr} \left(
    c^{\,\zeta\,} \bm\gamma_\zeta \, \bm\gamma^\mu \, d^{\,\eta\,} \bm\gamma_\eta \, \bm\gamma^\nu
  \right)
  \\
  &=
  a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \;
  \operatorname{Tr} \left(
    \bm\gamma_\kappa \, \bm\gamma_\mu \, \bm\gamma_\lambda \, \bm\gamma_\nu
  \right) \;
  \operatorname{Tr} \left(
    \bm\gamma_\zeta \, \bm\gamma^\mu \, \bm\gamma_\eta \, \bm\gamma^\nu
  \right)
  \\
  &=
  a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \,
  g^{\,\mu\rho} \, g^{\nu\sigma} \;
  \operatorname{Tr} \left(
    \bm\gamma_\kappa \, \bm\gamma_\mu \, \bm\gamma_\lambda \, \bm\gamma_\nu
  \right) \;
  \operatorname{Tr} \left(
    \bm\gamma_\zeta \, \bm\gamma_\rho \, \bm\gamma_\eta \, \bm\gamma_\sigma
  \right)
  \\
  &=
  a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \,
  g^{\,\mu\rho} \, g^{\nu\sigma} \;
  4 \, \big( g_{\kappa\mu} \, g_{\lambda\nu} - g_{\kappa\lambda} \, g_{\mu\nu} + g_{\kappa\nu} \, g_{\mu\lambda} \big) \; 4 \,
  \big( g_{\zeta\rho} \, g_{\eta\sigma} - g_{\zeta\eta} \, g_{\rho\sigma} + g_{\zeta\sigma} \, g_{\rho\eta} \big)
  \\
  &=
  16 \;
  a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \;
  \big( g_{\kappa\mu} \, g_{\lambda\nu} - g_{\kappa\lambda} \, g_{\mu\nu} + g_{\kappa\nu} \, g_{\mu\lambda} \big) \,
  \big( \delta^\mu_\zeta \, \delta^\nu_\eta - g_{\zeta\eta} \, g^{\mu\nu} + \delta^\nu_\zeta \, \delta^\mu_\eta \big)
  \\
  &=
  16 \;
  \big( a_\mu \, b_\nu - (\vec a \cdot \vec b) \, g_{\mu\nu} + a_\nu \, b_\mu \big) \,
  \big( c^{\,\mu} d^\nu - (\vec c \cdot \vec d) \, g^{\mu\nu} + c^\nu d^{\,\mu} \big)
  \\[-10pt]
  &=
  16 \;
  \big(
    (\vec a \cdot \vec c)(\vec b \cdot \vec d) - (\vec a \cdot \vec b)(\vec c \cdot \vec d) + (\vec a \cdot \vec d)(\vec b \cdot \vec c) - (\vec a \cdot \vec b)(\vec c \cdot \vec d) + (\vec a \cdot \vec b)(\vec c \cdot \vec d) \, \overbrace{g_{\mu\nu} \, g^{\mu\nu}}^{\delta^\nu_\nu = 4}
  \\&\hspace{3.2em}
    - (\vec a \cdot \vec b)(\vec c \cdot \vec d) + (\vec a \cdot \vec d)(\vec b \cdot \vec c) - (\vec a \cdot \vec b)(\vec c \cdot \vec d) + (\vec a \cdot \vec c)(\vec b \cdot \vec d)
  \big)
  \\
  &= 16 \big( 2(\vec a \cdot \vec c)(\vec b \cdot \vec d) + 2(\vec a \cdot \vec d)(\vec b \cdot \vec c) \big)
  = 32 \big( (\vec a \cdot \vec c)(\vec b \cdot \vec d) + (\vec a \cdot \vec d)(\vec b \cdot \vec c) \big)
\end{align*}
$$
$$
\begin{align*}
  \operatorname{Tr}& \left(
    \vec a \, \bm\gamma_\mu \, \vec b \, \bm\gamma_\nu \bm\gamma_5
  \right) \;
  \operatorname{Tr} \left(
    \vec c \, \bm\gamma^\mu \, \vec d \, \bm\gamma^\nu \bm\gamma_5
  \right)
  \\[5pt]
  &= a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, g^{\,\mu\rho} \, g^{\nu\sigma}
  \operatorname{Tr} \left(
    \bm\gamma_\kappa \, \bm\gamma_\mu \, \bm\gamma_\lambda \, \bm\gamma_\nu \bm\gamma_5
  \right) \;
  \operatorname{Tr} \left(
    \bm\gamma_\zeta \, \bm\gamma_\rho \, \bm\gamma_\eta \, \bm\gamma_\sigma \bm\gamma_5
  \right)
  \\
  &= a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, g^{\,\mu\rho} \, g^{\nu\sigma}
  \;
  \big(-4 \, \mathrm i \, \varepsilon_{\kappa\mu\lambda\nu}\big)
  \big(-4 \, \mathrm i \, \varepsilon_{\zeta\rho\eta\sigma}\big)
  \\
  &= -16 \; a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, g^{\,\mu\rho} \, g^{\nu\sigma} \, \varepsilon_{\kappa\mu\lambda\nu} \; \varepsilon_{\zeta\rho\eta\sigma}
  \\
  &= -16 \; a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, g_{\zeta\xi} \, g_{\eta\chi} \, \varepsilon_{\kappa\mu\lambda\nu} \; \varepsilon^{\xi\mu\chi\nu}
  \\
  &= -16 \; a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, g_{\zeta\xi} \, g_{\eta\chi} \, \varepsilon_{\kappa\lambda\mu\nu} \; \varepsilon^{\xi\chi\mu\nu}
  \\
  &= -16 \; a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, g_{\zeta\xi} \, g_{\eta\chi} \, (-2) \,\big( \delta^\xi_\kappa \delta^\chi_\lambda - \delta^\xi_\lambda \delta^\chi_\kappa \big)
  \\
  &= 32 \; a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, \big( g_{\zeta\kappa} \, g_{\eta\lambda} - g_{\zeta\lambda} \, g_{\eta\kappa} \big)
  \\
  &= 32 \big( (\vec a \cdot \vec c)(\vec b \cdot \vec d) - (\vec a \cdot \vec d)(\vec b \cdot \vec c) \big)
\end{align*}
$$
$$
\begin{align*}
  \operatorname{Tr}& \left(
    \vec a \, \bm\gamma_\mu \, \vec b \, \bm\gamma_\nu
  \right) \;
  \operatorname{Tr} \left(
    \vec c \, \bm\gamma^\mu \, \vec d \, \bm\gamma^\nu \bm\gamma_5
  \right)
  \\[5pt]
  &= a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, g^{\,\mu\rho} \, g^{\nu\sigma}
  \operatorname{Tr} \left(
    \bm\gamma_\kappa \, \bm\gamma_\mu \, \bm\gamma_\lambda \, \bm\gamma_\nu
  \right) \;
  \operatorname{Tr} \left(
    \bm\gamma_\zeta \, \bm\gamma_\rho \, \bm\gamma_\eta \, \bm\gamma_\sigma \bm\gamma_5
  \right)
  \\
  &= a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \, g^{\,\mu\rho} \, g^{\nu\sigma} \;
  4 \, \big( g_{\kappa\mu} \, g_{\lambda\nu} - g_{\kappa\lambda} \, g_{\mu\nu} + g_{\kappa\nu} \, g_{\mu\lambda} \big) \; \big(-4 \, \mathrm i \, \varepsilon_{\zeta\rho\eta\sigma}\big)
  \\
  &= -16 \, \mathrm i \; a^\kappa \, b^\lambda \, c^{\,\zeta} \, d^{\,\eta} \underbrace{\big( \delta^\rho_\kappa \, \delta^\sigma_\lambda - g_{\kappa\lambda} \, g^{\rho\sigma} + \delta^\sigma_\kappa \, \delta^\rho_\lambda \big)}_{\text{symmetric in } \rho\sigma} \; \underbrace{\varepsilon_{\zeta\rho\eta\sigma}}_{\text{antisym.}}
  = \; 0
\end{align*}
$$
Hence, we have derived all the relations we ought to.
