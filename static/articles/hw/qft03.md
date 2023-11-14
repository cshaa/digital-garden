# HW #3: Charge Conjugation

## Assignment
Charge conjugation can be understood as the following transformation:
$$
  (\gamma^\mu)^{\mathrm T} = -C^{-1} \, \gamma^\mu \, C \,.
$$
In the standard representation $C = \mathrm i \, \gamma^2 \, \gamma^0$.

A) Find the explicit form of the matrix $C$ in the standard representation.

B) Show that in this representation $-C = C^{\mathrm T} = C^\dagger = C^{-1}$.

C) Using a generic unitary transformation $\gamma^\mu \mapsto S \, \gamma^\mu \, S^{-1}$ find how the matrix $C$ transforms into a different representation.

D) Using the obtained results, verify which of the relations in B) is true generally in any representation of gamma matrices.

## Solution
The standard representation of gamma matrices is:
$$
  \gamma^0 = \begin{pmatrix}1\\&\!\!1\\&&\hspace{-1em}-1\\&&&\hspace{-1em}-1\end{pmatrix}, \quad
  \gamma^1 = \begin{pmatrix}&&&\!\!1\\&&\!\!1\\&\hspace{-1em}-1\\-1\end{pmatrix}, \quad
  \gamma^2 = \begin{pmatrix}&&&\hspace{-1em}-\mathrm i\\&&\!\!\mathrm i\\&\!\!\mathrm i\\-\mathrm i\end{pmatrix}, \quad
  \gamma^3 = \begin{pmatrix}&&\!\!1\\&&&\hspace{-1em}-1\\-1\\&\!\!1\end{pmatrix}.
$$
Therefore, the standard representation of $C$ is:
$$
  C = \mathrm i \, \gamma^2 \, \gamma^0
  = \mathrm i \; \begin{pmatrix}&&&\hspace{-1em}-\mathrm i\\&&\!\!\mathrm i\\&\!\!\mathrm i\\-\mathrm i\end{pmatrix} \, \begin{pmatrix}1\\&\!\!1\\&&\hspace{-1em}-1\\&&&\hspace{-1em}-1\end{pmatrix}
  = \mathrm i \; \begin{pmatrix}&&&\!\!\mathrm i\\&&\hspace{-1em}-\mathrm i\\&\!\!\mathrm i\\-\mathrm i\end{pmatrix}
  = \begin{pmatrix}&&&\hspace{-1em}-1\\&&\!\!1\\&\hspace{-1em}-1\\1\end{pmatrix}.
$$
We can clearly see that
$$
  \underbrace{-\begin{pmatrix}&&&\hspace{-1em}-1\\&&\!\!1\\&\hspace{-1em}-1\\1\end{pmatrix}}_{-C}
  = \underbrace{\begin{pmatrix}&&&\hspace{-1em}-1\\&&\!\!1\\&\hspace{-1em}-1\\1\end{pmatrix}^{\!\mathrm T}}_{C^{\mathrm T}}
  = \underbrace{\begin{pmatrix}&&&\hspace{-1em}-1\\&&\!\!1\\&\hspace{-1em}-1\\1\end{pmatrix}^\dagger}_{C^\dagger}
  = \begin{pmatrix}&&&\!\!1\\&&\hspace{-1em}-1\\&\!\!1\\-1\end{pmatrix},
$$
$$
  C^2 = \begin{pmatrix}&&&\hspace{-1em}-1\\&&\!\!1\\&\hspace{-1em}-1\\1\end{pmatrix}\begin{pmatrix}&&&\hspace{-1em}-1\\&&\!\!1\\&\hspace{-1em}-1\\1\end{pmatrix} = \begin{pmatrix}-1\\&\hspace{-1em}-1\\&&\hspace{-1em}-1\\&&&\hspace{-1em}-1\end{pmatrix} = -1
  \quad\Longrightarrow\quad C^{-1} = -C \,.
$$
Therefore $-C = C^{\mathrm T} = C^\dagger = C^{-1}$ in the standard representation.

Considering a generic transformation $\gamma^\mu \mapsto S \, \gamma^\mu \, S^{-1}$, we see that:
$$
\begin{align*}
  (\gamma^\mu)^{\mathrm T} &= -C^{-1} \, \gamma^\mu \, C \\
  &\hspace{0.25em}↧ \\
  (S \, \gamma^\mu \, S^{-1})^{\mathrm T} &= -(C')^{-1} \, S \, \gamma^\mu \, S^{-1} \, C' \\[5pt]
  (S^{-1})^{\mathrm T} \, (\gamma^\mu)^{\mathrm T} \, S^{\mathrm T} &= -(C')^{-1} \, S \, \gamma^\mu \, S^{-1} \, C' \\[5pt]
  (\gamma^\mu)^{\mathrm T} &= -S^{\mathrm T} \, (C')^{-1} \, S \;\;\; \gamma^\mu \;\; S^{-1} \, C' \, (S^{-1})^{\mathrm T} \\
  &\hspace{0.1em}\Downarrow \\
  C' &= S \, C \, S^{\mathrm T}
\end{align*}
$$
Seeing that $C$ transforms as $S \, C \, S^{\mathrm T}$, we can investigate the transformations of $-C$, $C^{\mathrm T}$, $C^\dagger$, $C^{-1}$:
$$
\begin{align*}
  -C &\mapsto - S \, C \, S^{\mathrm T} = S \, (-C) \, S^{\mathrm T} = S \, C^{-1} \, S^{\mathrm T} \\
  C^{\mathrm T} &\mapsto (S \, C \, S^{\mathrm T})^{\mathrm T} = S \, (C^{\mathrm T}) \, S^{\mathrm T} = S \, C^{-1} \, S^{\mathrm T} \\
  C^\dagger &\mapsto (S \, C \, S^{\mathrm T})^\dagger = (S^\dagger)^{\mathrm T} \, C^\dagger \,  S^\dagger = (S^{-1})^{\mathrm T} \, C^{-1} \, S^{-1} \\
  C^{-1} &\mapsto (S \, C \, S^{\mathrm T})^{-1} = (S^{-1})^{\mathrm T} \, C^{-1} \, S^{-1}
\end{align*}
$$
We've shown that regardless of representation, $C^{\mathrm T} = C^{-1}$ and $C^\dagger = C^{-1}$.
