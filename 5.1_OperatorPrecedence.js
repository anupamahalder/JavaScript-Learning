// Operator precedence 
// Left to Right => (L->R)
// Right to Left => (R->L)

/** (Follow precedence top to bottom from highest to lowest precedence)
 * (Each group of operators have same precedence)
 * ============================================================
    Operator    Meaning                     Associativity 
   ============================================================
   ()           Function call               (L->R)
   []           Array Element Ref           (L->R)
   ------------------------------------------------------------
   !            Logical Negation            (R->L)
   ++           Increment                   (R->L)
   --           Decrement                   (R->L)
   ------------------------------------------------------------
   *            Multiply                    (L->R)
   /            Divide                      (L->R)
   %            Remainder                   (L->R)
   ------------------------------------------------------------
   +            Addition                    (L->R)
   -            Subtraction                 (L->R)
   ------------------------------------------------------------
   <            Less than                   (L->R)
   <=           Less than or equal          (L->R)
   >            Greater than                (L->R)
   >=           Greater than or equal       (L->R)
   ------------------------------------------------------------
   ==           Equal to                    (L->R)
   !=           Not equal                   (L->R)
   ------------------------------------------------------------
   &&           Logical and                 (L->R)
   ||           Logical or                  (L->R)
   ------------------------------------------------------------
   =            Assignment                  (R->L)
   +=           Addition Assignment         (R->L)
   -=           Subtract Assignment         (R->L)
   *=           Multiplication Assignment   (R->L)
   /=           Division Assignment         (R->L)
   %=           Modulus Assignment          (R->L)
   ------------------------------------------------------------
 */