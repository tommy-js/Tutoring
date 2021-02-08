import React from "react";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { BlockMath, InlineMath } from "react-katex";
import { Identity } from "../../../../../Identity/Identity";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Exponential: React.FC = () => {
  const header = "\\frac{d}{dx}e^x=e^x";
  const note = "e=\\lim_{n \\to 0} (l+n)^{\\frac{1}{n}}";
  const step1 = "\\lim_{h \\to 0}\\frac{f(x+h)-f(x)}{h}";
  const step1_2 = "\\lim_{h \\to 0}\\frac{e^{x+h}-e^x}{h}";
  const step2 = "e^x \\lim_{h \\to 0}\\frac{e^h-1}{h}";
  const step3_1 = "n=e^h-1 \\implies n+1=e^h \\implies \\ln(n+1) = h";
  const step3 = "e^x \\lim_{h \\to 0} \\frac{n}{\\ln(n+1)}";
  const step4_1 = "\\frac{1}{n}";
  const step4 = "e^x \\lim_{h \\to 0} \\frac{1}{\\frac{1}{n} \\ln(n+1)}";
  const step5_1 = "a\\ln(b)=\\ln(b)^a";
  const step5 = "e^x \\lim_{h \\to 0}\\frac{1}{\\ln(1+n)^{\\frac{1}{n}}}";
  const step6 = "e^x\\frac{1}{\\ln(\\lim_{n \\to 0}(1+n)^{\\frac{1}{n}})}";
  const step7 = "e^x\\frac{1}{\\ln(e)}";
  const step7_2 = "\\ln(e)=1";
  const step7_3 = "e^x";

  return (
    <div className={styles.exponential}>
      <h1 className={styles.header}>
        Proof of the derivative of <InlineMath>e^x</InlineMath>
      </h1>
      <h2 className={styles.subheader}>
        Here we will prove that <InlineMath>{header}</InlineMath> by use of the
        definition of the derivative. Note that this is just one way of giving
        this proof, and that there are many methods of doing so.
      </h2>
      <p className={styles.text}>
        Note: This proof will use the fact that <InlineMath>{note}</InlineMath>.
      </p>
      <p className={styles.text}>
        Step 1. We begin with the standard derivative definition,{" "}
        <BlockMath>{step1}</BlockMath>
        We substitute into our function, <InlineMath>e^x</InlineMath> so that we
        obtain <BlockMath>{step1_2}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 2. Notice that there is an <InlineMath>e^x</InlineMath> term in
        both components within the numerator of this limit. This allows us to
        factor it out, greatly simplifying our expression. In fact, because{" "}
        <InlineMath>e^x</InlineMath> does not have an h term in it, it is
        unaffected by the limit function. As a result, we can factor it out of
        the entire limit. This leaves us with <BlockMath>{step2}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 3. We can perform a change of variables on the limit function,
        given the fact that <InlineMath>{step3_1}</InlineMath>. So, we can
        rewrite our expression as <BlockMath>{step3}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 4. We multiply the top and bottom of the limit by{" "}
        <InlineMath>{step4_1}</InlineMath>. This cancels out the n within the
        numerator and gives us <BlockMath>{step4}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 5. Now, there is a useful logarithm property which states that{" "}
        <InlineMath>{step5_1}</InlineMath>. We will use this to our advantage to
        rewrite our expression as <BlockMath>{step5}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 6. We're almost done. Because the only terms of n are now in the
        denominator, we can rewrite the expression again as{" "}
        <BlockMath>{step6}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 7. This is where our note comes in. We see that because{" "}
        <InlineMath>{note}</InlineMath>, we can simply drop the limit and
        rewrite our expression as <BlockMath>{step7}</BlockMath>
        However, since <InlineMath>{step7_2}</InlineMath> this simplifies down
        to <InlineMath>{step7_3}</InlineMath>, which is what we were seeking.
        Thus, the proof is finished.
      </p>
      <div className={styles.bottom}></div>
    </div>
  );
};
