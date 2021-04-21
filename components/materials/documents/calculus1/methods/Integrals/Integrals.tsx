import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Integrals: React.FC = () => {
  const integration_by_parts =
    "\\int f(x)g(x)dx = f(x)\\int g(x)dx - \\int f'(x)[\\int g(x)dx]dx";
  const integration_by_parts_example_1 = "\\int 3x\\cos(x)dx";
  const integration_by_parts_example_2 =
    "\\int 3x\\cos(x)dx = 3x\\int \\cos(x)dx - \\int 3[\\int \\cos(x)dx]dx";
  const integration_by_parts_example_3 = "3x\\sin(x)-\\int 3\\sin(x)dx";
  const integration_by_parts_example_4 = "\\int \\sin(x)dx = -\\cos(x)";
  const integration_by_parts_solution =
    "\\int 3x\\cos(x)dx = 3x\\sin(x)+3\\cos(x) + C";
  const u_substitution = "\\int f(g(x))g'(x)dx";
  const u_substitution_example_1 = "\\int \\frac{x^5}{x^6+16}dx";
  const u_substitution_example_2 = "\\frac{du}{dx} = 6x^5";
  const u_substitution_example_3 = "dx = \\frac{du}{6x^5}";
  const u_substitution_example_4 =
    "\\int \\frac{x^5}{x^6+16}dx = \\int \\frac{x^5}{u} \\frac{1}{6x^5}du";
  const u_substitution_example_5 = "\\frac{1}{6} \\int \\frac{1}{u}du";
  const u_substitution_example_6 =
    "\\int \\frac{x^5}{x^6+16}dx = \\frac{1}{6} \\ln(u) + C";
  const u_substitution_solution =
    "\\int \\frac{x^5}{x^6+16}dx = \\frac{1}{6}\\ln(x^6+16) + C";

  return (
    <div className={styles.integrals}>
      <h1 className={styles.header}>Methods of Integration</h1>
      <h2 className={styles.subheader}>
        Here are outlined various methods of taking integrals. In general,
        integration is a much more difficult and complicated process than taking
        derivatives.
      </h2>
      <p className={styles.text}>
        Usually in any calculus 1 course integration is gone over lightly,
        without much complexity. In this document we'll list out a few methods
        that you might find in your course. Expect to see a lot more complexity
        in calculus 2.
      </p>
      <p className={styles.text}>
        Integration by Parts: This is perhaps the most well-known of the
        integration methods. It's notable for its relative complexity compared
        to other means of integrating, but sometimes you simply need to use it.
        The method states that <BlockMath>{integration_by_parts}</BlockMath>
      </p>
      <p className={styles.text}>
        So you can see from the formula that integration by parts is most useful
        when you've got an integral that is a multiple of two functions. We'll
        give the example of{" "}
        <InlineMath>{integration_by_parts_example_1}</InlineMath>.
      </p>
      <p className={styles.text}>
        In order to solve this integral, we can substitute in the integration by
        parts method. Doing so, we see that{" "}
        <BlockMath>{integration_by_parts_example_2}</BlockMath>
      </p>
      <p className={styles.text}>
        We remember that the integral of cosine is sine, so the right-hand side
        simplifies down to{" "}
        <BlockMath>{integration_by_parts_example_3}</BlockMath>
      </p>
      <p className={styles.text}>
        Finally, we know that{" "}
        <InlineMath>{integration_by_parts_example_4}</InlineMath>, and so simply{" "}
        <BlockMath>{integration_by_parts_solution}</BlockMath>
      </p>
      <p className={styles.text}>
        U-Substitution: This method, also known as variable-substitution, is a
        method used when we notice that one component of the integral is related
        to another component. We can perform this operation when we notice that
        our integral is in the form <BlockMath>{u_substitution}</BlockMath>
      </p>
      <p className={styles.text}>
        This is a process that really can't be properly understood until you go
        over some examples. Let's take the integral{" "}
        <InlineMath>{u_substitution_example_1}</InlineMath> to show you how it
        works in practice.
      </p>
      <p className={styles.text}>
        First, we need to determine the part we will be subtituting. We can see
        that the derivative of <InlineMath>x^6</InlineMath> is{" "}
        <InlineMath>6x^5</InlineMath>, which will lead to a cancellation in the
        numerator. So, setting <InlineMath>u=x^6+16</InlineMath> seems
        sufficient.
      </p>
      <p className={styles.text}>
        Now we wish to find x in terms of u, as this will allow us to substitute
        further and solve our integral. So, we solve{" "}
        <InlineMath>{u_substitution_example_2}</InlineMath>. Now, some
        interesting properties of integration allow us to treat the derivative
        quotient as a regular fraction, and so we can solve for{" "}
        <InlineMath>dx</InlineMath>. Doing so yields{" "}
        <InlineMath>{u_substitution_example_3}</InlineMath>.
      </p>
      <p className={styles.text}>
        We substitute into the integral and get that{" "}
        <BlockMath>{u_substitution_example_4}</BlockMath>
      </p>
      <p className={styles.text}>
        This right-hand side easily simplifies down to{" "}
        <InlineMath>{u_substitution_example_5}</InlineMath>, which is simple to
        solve. In fact, this just integrates down to{" "}
        <BlockMath>{u_substitution_example_6}</BlockMath>
      </p>
      <p className={styles.text}>
        All that remains is to re-substitute the value of u into this equation.
        Thus, we get as our final result{" "}
        <BlockMath>{u_substitution_solution}</BlockMath>
      </p>
      <div className={styles.bottom}></div>
    </div>
  );
};
