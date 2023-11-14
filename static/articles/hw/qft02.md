# HW #2: Pauli-Lubanski pseudovector

## Assignment
Consider a representation of the Poincare group
$$
  x^\mu \mapsto \Lambda^\mu_\nu x^\nu + a^\mu
$$
with generators of the proper Lorentz transformations $\bm I_{\alpha\beta}$ and generators of translations $\bm P_{\!\alpha}$. The transformation properties under a Lorentz transformation $\bm S(\Lambda)$ of a (co)vector operator $\bm V_{\!\!\mu}$, tensor operator $\bm T_{\!\mu\nu}$, pseudo(co)vector operator $\bm A_\mu$ and the pseudotensor $\bm \varepsilon_{\kappa\lambda\mu\nu}$ are:

$$
\begin{align*}
  \bm S(\Lambda) \, \bm V_{\!\!\mu} \, \bm S^{-1}(\Lambda) &= \Lambda_\mu^\nu \, \bm V_{\!\!\nu} \\
  \bm S(\Lambda) \, \bm{T}_{\!\mu\nu} \, \bm S^{-1}(\Lambda) &= \Lambda_\mu^\alpha \, \Lambda_\nu^\beta \, \bm{T}_{\!\alpha\beta} \\
  \bm S(\Lambda) \, \bm A_\mu \, \bm S^{-1}(\Lambda) &= \operatorname{det}(\Lambda) \, \Lambda_\mu^\nu \, \bm A_\nu \\
  \bm S(\Lambda) \, \bm \varepsilon_{\kappa\lambda\mu\nu} \, \bm S^{-1}(\Lambda) &= \operatorname{det}(\Lambda) \, \Lambda_\kappa^\alpha \, \Lambda_\lambda^\beta \, \Lambda_\mu^\gamma \, \Lambda_\nu^\delta \, \bm \varepsilon_{\alpha\beta\gamma\delta}
\end{align*}
$$
An infinitesimal transformation of this type can be expressed as
$$
  \bm S(\Lambda) = 1 - \frac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta}, \quad
  \Lambda_\mu^\nu = \delta_\mu^\nu + \mathrm{d} \, {\omega_\mu}^\nu
  \,,
$$
where $\mathrm{d}^2 = 0$.
The Pauli-Lubanski pseudovector is defined as
$$
  \bm W^\mu = - \frac12 \, \bm \varepsilon^{\mu\nu\alpha\beta} \, \bm P_{\!\nu} \, \bm I_{\alpha\beta} \,.
$$

### A) Vector operator commutation relation
Derive the commutation relation for a generic vector operator
$$
  \big[ \bm V_{\!\mu} \,, \bm I_{\alpha \beta} \big] = \mathrm i \, (\bm V_{\!\alpha} \, g_{\mu\beta} - \bm V_{\!\beta} \, g_{\mu\alpha})
$$
from the universal transformation formula using an infinitesimal transformation. Note that one needs to use the antisymmetric property $\omega^{\alpha\beta} = -\omega^{\beta\alpha}$ to derive the correct commutation relation, which has to be antisymmetric in the indices denoted above as $\alpha$ and $\beta$, because $\bm I_{\alpha\beta} = -\bm I_{\beta \alpha}$.

### B) Commutator of $\bm W^\mu$ and translation generator
From the result of A) derive
$$
  \big[ \bm P_{\!\alpha} \,, \bm W^\mu \big] = 0 \,,
$$
where the generator of translation is itself a vector operator and $[\bm P_{\!\alpha} \,, \bm P_{\!\beta}] = 0$.

### C) $\bm W^\mu$ is a pseudovector
Using the generic transformation formula, show that $\bm W^\mu$ is a pseudovector, and thus obeys the relation derived in A) under proper Lorentz transformations. The assignment states that $\Lambda_\mu^\alpha \, \Lambda^\nu_\alpha = \delta_\mu^\nu$ – however, that is not true as the composition of two Lorentz transformations is a *double* transformation, and not the identity.

### D) Some more commutators of $\bm W^\mu$
Utilizing the obtained results show
$$
\begin{align*}
  \big[ \bm W^2 \,, \bm I_{\alpha\beta} \big] &= 0 \,, \\
  \big[ \bm W_{\!\!\mu} \,, \bm W_{\!\!\nu} \big] &= \mathrm i \, \bm \varepsilon_{\mu\nu\alpha\beta} \, \bm P^\alpha \, \bm W^\beta \,.
\end{align*}
$$

## Solution

We begin by investigating the infinitesimal transformations of vectors:
$$
\begin{align*}
  \bm S(\Lambda) \, \bm V_{\!\!\mu} \, \bm S^{-1}(\Lambda) &= \Lambda_\mu^\nu \, \bm V_{\!\!\nu} \\
  \Big( 1 - \tfrac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta} \Big) \, \bm V_{\!\!\mu} \, \Big( 1 + \tfrac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta} \Big) &= \big( \delta_\mu^\nu + \mathrm{d} \, {\omega_\mu}^\nu \big) \, \bm V_{\!\!\nu} \\
  \Big( \bm V_{\!\!\mu} - \tfrac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta} \, \bm V_{\!\!\mu} \Big) \, \Big( 1 + \tfrac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta} \Big) &= \bm V_{\!\!\mu} + \mathrm{d} \, {\omega_\mu}^\nu \, \bm V_{\!\!\nu} \\
  \bcancel{\bm V_{\!\!\mu}} + \bm V_{\!\!\mu} \, \tfrac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta} - \tfrac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta} \, \bm V_{\!\!\mu} + \underbrace{\mathrm d^2 \, (...)}_0 &= \bcancel{ \bm V_{\!\!\mu} } + \mathrm{d} \, {\omega_\mu}^\nu \, \bm V_{\!\!\nu} \\
  \bm V_{\!\!\mu} \, \tfrac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta} - \tfrac{\mathrm i}{2} \, \mathrm{d} \, \omega^{\alpha\beta} \, \bm I_{\alpha\beta} \, \bm V_{\!\!\mu} &= \mathrm{d} \, {\omega_\mu}^\nu \, \bm V_{\!\!\nu} \\
  \mathrm{d} \, \omega^{\alpha\beta} \, \tfrac{\mathrm i}{2} \, \big( \bm V_{\!\!\mu} \, \bm I_{\alpha\beta} - \bm I_{\alpha\beta} \, \bm V_{\!\!\mu} \big) &= \mathrm{d} \, \omega^{\,\beta\alpha} \, g_{\beta\mu} \, \bm V_{\!\!\alpha} \\
  \mathrm{d} \, \omega^{\alpha\beta} \, \big( \bm V_{\!\!\mu} \, \bm I_{\alpha\beta} - \bm I_{\alpha\beta} \, \bm V_{\!\!\mu} \big) &= \mathrm{d} \, \omega^{\,\alpha\beta} \; 2 \, \mathrm{i} \, g_{\beta\mu} \, \bm V_{\!\!\alpha} \\
  \cancel{\mathrm{d} \, \omega^{\alpha\beta}} \, \big( \bm V_{\!\!\mu} \, \bm I_{\alpha\beta} - \bm I_{\alpha\beta} \, \bm V_{\!\!\mu} \big) &= \cancel{\mathrm{d} \, \omega^{\,\alpha\beta}} \; \mathrm{i} \, \big( g_{\beta\mu} \, \bm V_{\!\!\alpha} - g_{\alpha\mu} \, \bm V_{\!\!\beta} \big) \\
  \big[ \bm V_{\!\!\mu} \,, \bm I_{\alpha\beta} \big]  &= \mathrm{i} \, \big(\bm V_{\!\!\alpha} \, g_{\mu\beta} - \bm V_{\!\!\beta} \, g_{\mu\alpha}\big) \\
\end{align*}
$$
It looks like we have – almost by accident – proven our first commutation relation. Let us use this result to investigate the commutator of the Pauli-Lubanski pseudovector and a generator of translations:
$$
\begin{align*}
  \big[ \bm P_{\!\sigma} \,, \bm W^\mu \big]
  &= \big[ \bm P_{\!\sigma} \,,\; - \tfrac12 \, \bm \varepsilon^{\mu\nu\alpha\beta} \, \bm P_{\!\nu} \, \bm I_{\alpha\beta} \big]
  = - \tfrac12 \, \bm \varepsilon^{\mu\nu\alpha\beta} \, \big[ \bm P_{\!\alpha} \,, \bm P_{\!\nu} \, \bm I_{\alpha\beta} \big] \\
  &= - \tfrac12 \, \bm \varepsilon^{\mu\nu\alpha\beta} \, \Big( \underbrace{\big[ \bm P_{\!\sigma} \,, \bm P_{\!\nu} \big]}_0 \, \bm I_{\alpha\beta} + \bm P_{\!\nu} \,  \big[ \bm P_{\!\sigma} \,, \bm I_{\alpha\beta} \big] \Big) \\
  &= - \tfrac12 \, \bm \varepsilon^{\mu\nu\alpha\beta} \, \bm P_{\!\nu} \,  \big[ \bm P_{\!\sigma} \,, \bm I_{\alpha\beta} \big]
  = - \tfrac12 \, \bm \varepsilon^{\mu\nu\alpha\beta} \, \bm P_{\!\nu} \, \mathrm{i} \, \big(\bm P_{\!\alpha} \, g_{\sigma\beta} - \bm P_{\!\beta} \, g_{\sigma\alpha}\big)
  \\
  &= - \mathrm{i} \, \underbrace{\vphantom{\tfrac{}{}} \bm \varepsilon^{\mu\nu\alpha\beta}}_{\text{antisym.}} \, \underbrace{\vphantom{\tfrac{}{}}\bm P_{\!\nu} \, \bm P_{\!\alpha}}_{\text{sym.}} \; g_{\sigma\beta}
  = 0 \,.
\end{align*}
$$
We have used the commutator rule $[A, BC] = [A, B]C + B[A, C]$. Now we'll investigate the transformation properties of $\bm W_{\!\!\mu}$.
$$
\begin{align*}
  \bm S(\Lambda) \, \bm W_{\!\!\mu} \, \bm S^{-1}(\Lambda)
  &= \bm S(\Lambda) \, g_{\sigma\mu} \, \bm W^\sigma \bm S^{-1}(\Lambda) \\
  &= \bm S(\Lambda) \, g_{\sigma\mu} \, \big( \!- \tfrac12 \, \bm \varepsilon^{\sigma\nu\alpha\beta} \, \bm P_{\!\nu} \, \bm I_{\alpha\beta} \big)\, \bm S^{-1}(\Lambda) \\
  &= - \tfrac12 \, g_{\sigma\mu} \, \bm S(\Lambda) \big( \bm \varepsilon^{\sigma\nu\alpha\beta} \, \bm P_{\!\nu} \, \bm I_{\alpha\beta} \big)\, \bm S^{-1}(\Lambda) \\
  &= - \tfrac12 \, g_{\sigma\mu} \; \bm S(\Lambda) \, \bm \varepsilon^{\sigma\nu\alpha\beta} \, \bm S^{-1}(\Lambda) \;\; \bm S(\Lambda)  \, \bm P_{\!\nu} \, \bm S^{-1}(\Lambda) \;\; \bm S(\Lambda) \, \bm I_{\alpha\beta} \, \bm S^{-1}(\Lambda) \\
  &= - \tfrac12 \, g^{\iota\nu} g^{\kappa\alpha} g^{\lambda\beta} \, \bm S(\Lambda) \, \bm \varepsilon_{\mu\iota\kappa\lambda} \, \bm S^{-1}(\Lambda) \;\; \bm S(\Lambda)  \, \bm P_{\!\nu} \, \bm S^{-1}(\Lambda) \;\; \bm S(\Lambda) \, \bm I_{\alpha\beta} \, \bm S^{-1}(\Lambda) \\
  &= - \tfrac12 \, g^{\iota\nu} g^{\kappa\alpha} g^{\lambda\beta} \;\; \operatorname{det}(\Lambda) \, \Lambda_\mu^\rho \, \Lambda_\iota^\tau \, \Lambda_\kappa^\gamma \, \Lambda_\lambda^\delta \, \bm \varepsilon_{\rho\tau\gamma\delta} \;\; \Lambda_\nu^\sigma \, \bm P_{\!\sigma} \;\; \Lambda_\alpha^\chi \, \Lambda_\beta^\eta \, \bm{I}_{\!\chi\eta} \\
  &= - \tfrac12 \operatorname{det}(\Lambda) \, \Lambda_\mu^\rho \;\; \Lambda_\iota^\tau \, g^{\iota\nu} \Lambda_\nu^\sigma \;\; \Lambda_\kappa^\gamma\, g^{\kappa\alpha} \Lambda_\alpha^\chi \;\; \Lambda_\lambda^\delta \, g^{\lambda\beta} \Lambda_\beta^\eta \;\; \varepsilon_{\rho\tau\gamma\delta} \, \bm P_{\!\sigma} \, \bm{I}_{\!\chi\eta} \\
  &= - \tfrac12 \operatorname{det}(\Lambda) \, \Lambda_\mu^\rho \;\, g^{\tau\sigma} g^{\gamma\chi} g^{\delta\eta} \, \varepsilon_{\rho\tau\gamma\delta} \, \bm P_{\!\sigma} \, \bm{I}_{\!\chi\eta} \\
  &= \operatorname{det}(\Lambda) \, \Lambda_\mu^\rho \; g_{\sigma\mu} \, \big( \!- \tfrac12 \, \bm \varepsilon^{\sigma\nu\alpha\beta} \, \bm P_{\!\nu} \, \bm I_{\alpha\beta} \big) \\
  &= \operatorname{det}(\Lambda) \, \Lambda_\mu^\rho \; g_{\sigma\mu} \, \bm W^\sigma \\
  &= \operatorname{det}(\Lambda) \, \Lambda_\mu^\rho \;\, \bm W_{\!\!\mu}
\end{align*}
$$
We have used the fact that $\Lambda$ is an orthogonal transformation, ie. $\Lambda^\alpha_\mu \, g^{\mu\nu} \Lambda^\beta_\nu = g^{\alpha\beta}$. Finally, let's have a look at the remaining commutation relations.
$$
\begin{align*}
  \big[ \bm W^2 \,, \bm I_{\alpha\beta} \big]
  &= g^{\mu\nu} \, \big[ \bm W_{\!\!\mu} \, \bm W_{\!\!\nu} \,, \bm I_{\alpha\beta} \big] \\
  &= g^{\mu\nu} \, \bm W_{\!\!\mu} \big[ \bm W_{\!\!\nu} \,, \bm I_{\alpha\beta} \big] + g^{\mu\nu} \, \big[ \bm W_{\!\!\mu} \,, \bm I_{\alpha\beta} \big] \bm W_{\!\!\nu} \\
  &= \mathrm{i} \, g^{\mu\nu} \, \bm W_\mu \, \big(\bm W_{\!\!\alpha} \, g_{\nu\beta} - \bm W_{\!\!\beta} \, g_{\nu\alpha}\big) + \mathrm{i} \, g^{\mu\nu} \, \big(\bm W_{\!\!\alpha} \, g_{\mu\beta} - \bm W_{\!\!\beta} \, g_{\mu\alpha}\big) \, \bm W_\nu \\
  &= \mathrm{i} \, \big(\bm W_{\!\!\alpha} \, \bm W_{\!\!\beta} - \bm W_{\!\!\beta} \, \bm W_{\!\!\alpha} \big) + \mathrm{i} \, \big(\bm W_{\!\!\beta} \, \bm W_{\!\!\alpha} - \bm W_{\!\!\beta} \, \bm W_{\!\!\beta} \big) = 0
\end{align*}
$$
$$
\begin{align*}
  \big[ \bm W_{\!\!\mu} \,, \bm W_{\!\!\nu} \big]
  &= \big[ \bm W_{\!\!\mu} \,, - \tfrac12 \, {\varepsilon_\nu}^{\kappa\alpha\beta} \, \bm P_{\!\kappa} \, \bm I_{\alpha\beta} \big] \\
  &= - \tfrac12 \, {\varepsilon_\nu}^{\kappa\alpha\beta} \, \Big(\! \underbrace{\big[\bm W_{\!\!\mu} \,, \bm P_{\!\kappa} \big]}_{0}\, \bm I_{\alpha\beta} + \bm P_{\!\kappa} \,  \big[\bm W_{\!\!\mu} \,, \bm I_{\alpha\beta} \big] \!\Big) \\
  &= - \tfrac12 \, {\varepsilon_\nu}^{\kappa\alpha\beta} \, \bm P_{\!\kappa} \, \mathrm i \, (\bm W_{\!\alpha} \, g_{\mu\beta} - \bm W_{\!\beta} \, g_{\mu\alpha}) \\
  &= - \, \mathrm i \, \bm P_{\!\kappa} \, \tfrac12 (\bm W_{\!\alpha} \, {{\varepsilon_\nu}^{\kappa\alpha}}_\mu - \bm W_{\!\beta} \, {{{\varepsilon_\nu}^\kappa}_\mu}^\beta) \\
  &= - \, \mathrm i \, \bm P_{\!\kappa} \, \tfrac12 (-\bm W_{\!\alpha} \, {{{\varepsilon_\nu}^\kappa}_\mu}^\alpha - \bm W_{\!\beta} \, {{{\varepsilon_\nu}^\kappa}_\mu}^\beta) \\
  &= \mathrm i \, \bm P_{\!\kappa} \, \tfrac12 (\bm W_{\!\alpha} \, {{\varepsilon_\nu}^{\kappa\alpha}}_\mu - \bm W_{\!\beta} \, {{{\varepsilon_\nu}^\kappa}_\mu}^\beta) \\
  &= \mathrm i \, \bm P_{\!\alpha} \, \bm W_{\!\beta} \, {{{\varepsilon_\nu}^\alpha}_\mu}^\beta \\
  &= \mathrm i \, \bm P_{\!\alpha} \, \bm W_{\!\beta} \, {\varepsilon_{\mu\nu}}^{\alpha\beta} \\
  &= \mathrm i \, \varepsilon_{\mu\nu\alpha\beta} \, \bm P^\alpha \, \bm W^\beta
\end{align*}
$$
