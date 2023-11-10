# HW #2: Pauli-Lubanski pseudovector

## Assignment
Consider a representation of the Poincare group
$$
  x^\mu \mapsto \Lambda^\mu_\nu x^\nu + a^\mu
$$
with generators of the (proper) Lorentz transformations $I_{\alpha\beta}$ and generators of translations $P_\alpha$. The transformation properties under a Lorentz transformation $S(\Lambda)$ of a vector operator $V_\mu$, tensor operator $T_{\mu\nu}$ and pseudovector $A_\mu$ are
$$
\begin{align*}
  S(\Lambda) \, V_\mu \, S^{-1}(\Lambda) &= \Lambda_\mu^\nu \, V_\nu \\
  S(\Lambda) \, T_{\mu\nu} \, S^{-1}(\Lambda) &= \Lambda_\mu^\alpha \, \Lambda_\nu^\beta \, T_{\alpha\beta} \\
  S(\Lambda) \, A_\mu \, S^{-1}(\Lambda) &= \operatorname{det}(\Lambda) \, \Lambda_\mu^\nu \, A_\nu
\end{align*}
$$
An infinitesimal transformation of this type can be expressed as:
$$
  S(\Lambda) = 1 - \frac{\mathrm i}{2} \, \Delta\omega^{\alpha\beta} \, I_{\alpha\beta}, \quad
  \Lambda_\mu^\nu = \delta_\mu^\nu + \Delta{\omega_\mu}^\nu
  \,.
$$
The Pauli-Lubanski pseudovector is defined as
$$
  W^\mu = - \frac12 \, \varepsilon^{\mu\nu\alpha\beta} \, P_\nu \, I_{\alpha\beta} \,.
$$

### A) Vector operator commutation relation
Derive the commutation relation for a generic vector operator
$$
  \big[ V_\mu \,, I_{\alpha \beta} \big] = \mathrm i \, (V_\alpha \, g_{\mu\beta} - V_\beta \, g_{\mu\alpha})
$$
from the universal transformation formula using an infinitesimal transformation. Note that one needs to use the antisymmetric property $\omega^{\alpha\beta} = -\omega^{\beta\alpha}$ to derive the correct commutation relation, which has to be antisymmetric in the indices denoted above as $\alpha$ and $\beta$, because $I_{\alpha\beta} = -I_{\beta \alpha}$.

### B) Pauli-Lubanski commutation relation
From the result of A) derive
$$
  \big[ P_\alpha \,, W^\mu \big] = 0 \,,
$$
where the generator of translation is itself a vector operator and $[P_\alpha \,, P_\beta] = 0$.

## Solution


